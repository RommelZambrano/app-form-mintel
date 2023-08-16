import { useState } from "react";
import styled from "styled-components";
import { getOperator } from "../data/form";
import { useForm } from "react-hook-form"; // Importa react-hook-form

const FormPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const FormInput = styled.input`
  margin: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  font-size: 16px;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 5px 10px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #005fa3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const NextButton = styled(Button)`
  background-color: #00cc66;
  &:hover {
    background-color: #00b359;
  }
`;

const ResultadoOperador = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export function FormPageA() {
  const [operador, setOperador] = useState(null);
  const [error, setError] = useState(null);
  const [busquedaRealizada, setBusquedaRealizada] = useState(false);

  // Inicializar useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setError(null); // Limpiar el mensaje de error

    try {
      const operadorEncontrado = await getOperator(data.ruc);
      if (operadorEncontrado) {
        setOperador(operadorEncontrado);
        setBusquedaRealizada(true);
      } else {
        setError("No se encontró el operador");
        setOperador(null);
        setBusquedaRealizada(false);
      }
    } catch (error) {
      console.error("Error al buscar operador:", error);
      setError("Error al buscar operador");
      setOperador(null);
      setBusquedaRealizada(false);
    }
  };

  return (
    <FormPageContainer>
      <Title>Búsqueda de Operador por RUC</Title>
      {!busquedaRealizada && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            placeholder="Buscar por RUC"
            name="ruc"
            {...register("ruc", { required: true, maxLength: 15 })}
          />
          {errors.ruc && <ErrorMessage>Este campo es requerido</ErrorMessage>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Button type="submit">Buscar</Button>
        </Form>
      )}
      {operador && (        
        <ResultadoOperador>
          <p>RUC: {operador.ruc}</p>
          <p>Razón Social: {operador.razon_social}</p>
          <p>Correo Electrónico: {operador.email}</p>
          <p>Representante Legal: {operador.representante_legal}</p>
          <p>Teléfono Celular: {operador.telefono_celular}</p>
          <p>Teléfono Fijo: {operador.telefono_fijo}</p>
          <NextButton>Siguiente</NextButton>
        </ResultadoOperador>
      )}
    </FormPageContainer>
  );
}

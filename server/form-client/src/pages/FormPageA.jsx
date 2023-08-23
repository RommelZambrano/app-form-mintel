import { useState } from "react";
import styled from "styled-components";
import { getOperator } from "../data/form";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "react-hot-toast";
import { SeleccionarPeriodo } from "./FormPeriodYear";

export function FormPageA() {
  const [operator, setOperator] = useState(null);
  const [searchOperator, setSearchOperator] = useState(false);
  const [findPeriod, setFindPeriod] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (data.ruc.length !== 13) {
      toast.error("El RUC debe contener 13 dígitos");
      return;
    }
    try {
      const foundoperator = await getOperator(data.ruc);
      if (foundoperator.ruc) {
        setOperator(foundoperator);
        setSearchOperator(true);
      } else {
        toast.error("RUC no encontrado en la base de datos");
        setOperator(foundoperator);
        setSearchOperator(true);
      }
    } catch (error) {
      toast.error("Error al buscar operator");
      setOperator(null);
      setSearchOperator(false);
    }
  };

  return (
    <FormPageContainer>
      <Toaster position="top-right" reverseOrder={false} />

      {!searchOperator && (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Title>Búsqueda de operator por RUC</Title>
          <FormInput
            type="text"
            placeholder="Buscar por RUC"
            name="ruc"
            {...register("ruc", { required: true, maxLength: 13 })}
          />
          {errors.ruc && (
            <ErrorMessage>
              {errors.ruc.type === "required" && "El RUC es requerido"}
              {errors.ruc.type === "maxLength" &&
                "El RUC debe contener 13 dígitos"}
            </ErrorMessage>
          )}
          <Button type="submit">Buscar</Button>
        </Form>
      )}
      {operator && !findPeriod && (
        <ResultOperator>
          <Title>Información del operator</Title>
          <p>id_postal_operator: {operator.id_postal_operator}</p>
          <p>RUC: {operator.ruc}</p>
          <p>Razón Social: {operator.razon_social}</p>
          <p>Correo Electrónico: {operator.email}</p>
          <p>Representante Legal: {operator.representante_legal}</p>
          <p>Teléfono Celular: {operator.telefono_celular}</p>
          <p>Teléfono Fijo: {operator.telefono_fijo}</p>
          <NextButton onClick={() => setFindPeriod(true)}>
            Siguiente
          </NextButton>
        </ResultOperator>
      )}
      {findPeriod && (
        <SeleccionarPeriodo
          operator={operator}
          onSeleccionar={(semester, year) => {
            // Aquí puedes manejar los datos seleccionados (período y año)
            console.log("Período seleccionado:", semester);
            console.log("Año seleccionado:", year);
            setOperator(null);
            setSearchOperator(false);
            setFindPeriod(false);
          }}
        />
      )}
    </FormPageContainer>
  );
}
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

const ResultOperator = styled.div`
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

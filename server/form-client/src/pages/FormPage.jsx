import styled from "styled-components";
import { useForm } from "react-hook-form";
import { postForm } from "../data/form";

export function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await postForm(data);
    console.log(res);
  });

  return (
    <FormPageContainer>
      <Form onSubmit={onSubmit}>
        <FormInput
          type="text"
          placeholder="RUC"
          {...register("ruc", { required: true, maxLength: 11 })}
        />
        {errors.ruc && <ErrorMessage>Este campo es requerido</ErrorMessage>}
        <FormInput
          type="text"
          placeholder="Razon Social"
          {...register("razon_social", { required: true, maxLength: 100 })}
        />
        {errors.razon_social && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
        <FormInput
          type="email"
          placeholder="Correo"
          {...register("email", { required: true, maxLength: 100 })}
        />
        {errors.email && <ErrorMessage>Este campo es requerido</ErrorMessage>}
        <FormInput
          type="text"
          placeholder="Telefono"
          {...register("telefono", { required: true, maxLength: 15 })}
        />
        {errors.telefono && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
        <FormInput
          type="text"
          placeholder="Representante Legal"
          {...register("representante_legal", {
            required: true,
            maxLength: 100,
          })}
        />
        {errors.representante_legal && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
        <Button>Enviar</Button>
      </Form>
    </FormPageContainer>
  );
}

const FormPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  height: 100vh;
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
  margin-bottom: 10px;
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

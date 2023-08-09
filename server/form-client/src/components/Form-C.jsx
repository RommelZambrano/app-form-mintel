import styled from "styled-components";
import { useForm } from "react-hook-form";

function FormC() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <FormComponentContainer>
      <FormGroup>
        <Label>Número de piezas</Label>
        <FormInput
          type="number"
          {...register("numero_piezas", { required: true })}
        />
        {errors.numero_piezas && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label>
          Envío postal de Documentos No distribuibles y en estado Rezagados
        </Label>
        <FormInput
          type="text"
          {...register("envio_documentos", { required: true })}
        />
        {errors.envio_documentos && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
      </FormGroup>

      <FormGroup>
        <Label>
          Envío postal de Paquetería No Distribuible y en estado Rezagados
        </Label>
        <FormInput
          type="text"
          {...register("envio_paqueteria", { required: true })}
        />
        {errors.envio_paqueteria && (
          <ErrorMessage>Este campo es requerido</ErrorMessage>
        )}
      </FormGroup>

      <TotalGroup>
        <Label>Total</Label>
        <TotalValue>0</TotalValue>
      </TotalGroup>
    </FormComponentContainer>
  );
}

export default FormC;

const FormComponentContainer = styled.div`
  margin-top: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-top: 5px;
  font-size: 14px;
`;

const TotalGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const TotalValue = styled.span`
  font-weight: bold;
`;

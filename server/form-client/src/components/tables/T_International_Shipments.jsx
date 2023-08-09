import styled from "styled-components";
import { useForm } from "react-hook-form";

export function InternationalShipments() {
  const {
    register,
    formState: { errors },
  } = useForm();


  return (
    <FormPageContainer>
      <Form>  
        <Label>Envios Internacionales</Label>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>MES 1</th>
              <th>MES 2</th>
              <th>MES 3</th>
              <th>MES 4</th>
              <th>MES 5</th>
              <th>MES 6</th>
            </tr>
          </thead>
          <tbody>
            <TableRow>
              <td>Piezas procesadas en Documentos, Entrada</td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes1", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes1 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes2", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes2 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes3", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes3 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                    type="text"
                  {...register("enl_documentos_mes4", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes4 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes5", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes5 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes6", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes6 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
            </TableRow>
            <TableRow>
              <td>Piezas procesadas en Documentos, Salida</td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes1", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes1 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes2", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes2 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes3", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes3 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes4", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes4 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes5", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes5 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes6", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes6 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
            </TableRow>
            <TableRow>
              <td>Piezas procesadas en Paquetería, Entrada</td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes1", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes1 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes2", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes2 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes3", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes3 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes4", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes4 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes5", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes5 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_documentos_mes6", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_documentos_mes6 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
            </TableRow>
            <TableRow>
              <td>Piezas procesadas en Paquetería, Salida</td>
              <td>
                <FormInput
                  type="text"
                  {...register("enl_paqueteria_mes1", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_paqueteria_mes1 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>

              <td>
                <FormInput
                  type="text"
                  {...register("enl_paqueteria_mes1", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_paqueteria_mes1 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>

              <td>
                <FormInput
                  type="text"
                  {...register("enl_paqueteria_mes1", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_paqueteria_mes1 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>

              <td>
                <FormInput
                  type="text"
                  {...register("enl_paqueteria_mes1", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_paqueteria_mes1 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>

              <td>
                <FormInput
                  type="text"
                  {...register("enl_paqueteria_mes1", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_paqueteria_mes1 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>

              <td>
                <FormInput
                  type="text"
                  {...register("enl_paqueteria_mes1", {
                    required: true,
                    maxLength: 50,
                  })}
                />
                {errors.enl_paqueteria_mes1 && (
                  <ErrorMessage>Este campo es requerido</ErrorMessage>
                )}
              </td>
            </TableRow>
          </tbody>
        </Table>
        <Button>Enviar</Button>
      </Form>
    </FormPageContainer>
  );
}

const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const FormPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 80%;
  max-width: 1000px; /* Valor para controlar el ancho del formulario */
  margin: 20px auto; /* Centrar el formulario horizontalmente */
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;

  td {
    padding: 10px;
    text-align: center;
    border-right: 1px solid #ccc;

    &:last-child {
      border-right: none;
    }
  }
`;

const FormInput = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f2f2f2;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }
`;

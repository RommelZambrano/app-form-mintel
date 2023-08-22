import styled from "styled-components";
import { useForm } from "react-hook-form";
import {
  postOperator,
  postPeriod,
  postDocsNationals,
} from "../../data/form";

export function NationalShipments() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      // Descomponer los datos del formulario en los diferentes conjuntos de datos que quieres enviar
      const operatorData = {
        ruc: data.ruc,
        razon_social: data.razon_social,
        email: data.email,
        representante_legal: data.representante_legal,
        telefono_celular: data.telefono_celular,
        telefono_fijo: data.telefono_fijo,
      };
      const periodData = {
        year: data.year,
        semester: data.semester,
      };
      const docsLocalShipment = [];
      for (let i = 1; i <= 6; i++) {
        docsLocalShipment.push({
          mes: data[`mes${i}`],
          numero_de_documentos: data[`numero_de_documentos_mes${i}`],
          numero_de_paquetes: data[`numero_de_paquetes_mes${i}`],
          // Asegúrate de que estos nombres de campo coincidan con los nombres que has registrado con react-hook-form
        });
      }

      // Hacer una solicitud POST para cada conjunto de datos
      const operatorResponse = await postOperator(operatorData);
      const periodResponse = await postPeriod(periodData);
      const enviosResponses = await Promise.all(
        docsLocalShipment.map((docsLocalShipment) =>
        postDocsNationals(docsLocalShipment)
        )
      );

      // Mostrar las respuestas del servidor (opcional)
      console.log(operatorResponse.data);
      console.log(periodResponse.data);
      enviosResponses.forEach((response) => console.log(response.data));
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const rows = ["Envío de documentos", "Envío de paquetería"]; // Agrega más elementos según sea necesario
  const months = ["mes 1", "mes 2", "mes 3", "mes 4", "mes 5", "mes 6"]; // Agrega más elementos según sea necesario

  return (
    <FormPageContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Envios Nacionales</Label>
        <Table>
          <thead>
            <tr>
              <th></th>
              {months.map((month, index) => (
                <th key={index}>{month.toUpperCase()}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                <td>{row}</td>
                {months.map((month, monthIndex) => (
                  <td key={monthIndex}>
                    <FormInput
                      type="text"
                      {...register(
                        `numero_de_documentos_mes${monthIndex + 1}`,
                        {
                          required: true,
                          maxLength: 50,
                        }
                      )}
                    />
                    <FormInput
                      type="text"
                      {...register(`numero_de_paquetes_mes${monthIndex + 1}`, {
                        required: true,
                        maxLength: 50,
                      })}
                    />
                    {errors[`numero_de_documentos_mes${monthIndex + 1}`] && (
                      <ErrorMessage>Este campo es requerido</ErrorMessage>
                    )}
                    {errors[`numero_de_paquetes_mes${monthIndex + 1}`] && (
                      <ErrorMessage>Este campo es requerido</ErrorMessage>
                    )}
                  </td>
                ))}
              </TableRow>
            ))}
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

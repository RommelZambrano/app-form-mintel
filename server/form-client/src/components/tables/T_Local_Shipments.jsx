import styled from "styled-components";
import { useForm } from "react-hook-form";
import propTypes from "prop-types";

export function LocalShipments({selectedPeriod}) {

  LocalShipments.propTypes = {
    selectedPeriod: propTypes.string.isRequired,
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const formData = {
        enl_docs_month1: data.docs[0][0],
        enl_docs_month2: data.docs[0][1],
        enl_docs_month3: data.docs[0][2],
        enl_docs_month4: data.docs[0][3],
        enl_docs_month5: data.docs[0][4],
        enl_docs_month6: data.docs[0][5], 
        enl_packages_month1: data.docs[1][0],
        enl_packages_month2: data.docs[1][1],
        enl_packages_month3: data.docs[1][2],
        enl_packages_month4: data.docs[1][3],
        enl_packages_month5: data.docs[1][4],
        enl_packages_month6: data.docs[1][5],
      }
      console.log("formData", formData);
    } catch (error) {
      console.error("Error al crear el formulario", error);
    }
  };

  const rows = ["Envío de documentos", "Envío de paquetería"];
  const months_1_period = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
  ];
  const months_2_period = [
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const months =
    selectedPeriod === "1er Semestre" ? months_1_period : months_2_period;

  return (
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Envíos Locales</Label>
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
                    <input
                      type="text"
                      {...register(`docs[${rowIndex}][${monthIndex}]`, {
                        required: "Este campo es requerido",
                        pattern: {
                          value: /^[0-9]+$/,
                          message: "Este campo debe ser numérico",
                        },
                      })}
                    />
                    {errors.docs &&
                      errors.docs[rowIndex] &&
                      errors.docs[rowIndex][monthIndex] && (
                        <ErrorMessage>
                          {errors.docs[rowIndex][monthIndex].message}
                        </ErrorMessage>
                      )}
                  </td>
                ))}
              </TableRow>
            ))}
          </tbody>
        </Table>
        <Button type="submit">Guardar</Button>
      </Form>
  );
}

// Estilo para etiquetas
const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;


// Estilo para el formulario principal
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
`;

// Estilo para tablas
const Table = styled.table`
  width: 100%;
  max-width: 10px; /* Cambia el valor para ajustar el ancho máximo deseado */
  border-collapse: collapse;
  margin: 1rem auto; /* Centrar la tabla horizontalmente */
  border-radius: 5px;
  overflow: hidden;
`;

// Estilo para filas de tabla
const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;

  td {
    padding: 1rem;
    text-align: center;
    border-right: 1px solid #ccc;

    &:last-child {
      border-right: none;
    }
  }
`;

// Estilo para mensajes de error
const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 1rem;
`;

// Estilo para botones
const Button = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
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

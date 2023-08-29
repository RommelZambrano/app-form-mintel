import styled from "styled-components";
import { useForm } from "react-hook-form";
import { postYear, postPeriod, postDocsNationals } from "../../data/form";

import PropTypes from "prop-types";

export function NationalShipments({ selectedYear, selectedPeriod, operator }) {
  NationalShipments.propTypes = {
    selectedYear: PropTypes.string.isRequired,
    selectedPeriod: PropTypes.string.isRequired,
    operator: PropTypes.object.isRequired,
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Primero, registra el año
      const yearData = {
        year: selectedYear,
      };
      console.log("yearData", yearData);
      const responseYear = await postYear(yearData);
      const yearId = responseYear.id_year;

      // Luego, registra el período utilizando el ID del año
      const periodData = {
        id_operator: operator.id_postal_operator,
        id_year: yearId,
        period: selectedPeriod,
      };
      const responsePeriod = await postPeriod(periodData);
      const periodId = responsePeriod.id_period;

      // Finalmente, registra los documentos utilizando el ID del período
      const docsData = {
        id_operator: operator.id_postal_operator,
        id_period: periodId,
        number_docs: data.docs[0][0],
        number_packages: data.docs[1][0], 
      };
      const responseDocs = await postDocsNationals(docsData);
      console.log("responseDocs", responseDocs);
    } catch (error) {
      console.error("Error al crear el formulario", error);
    }
  };

  const rows = ["Envío de documentos", "Envío de paquetería"]; 
  const months_1_period = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"]; 
  const months_2_period = ["Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]; 
  const months = selectedPeriod === "1er Semestre" ? months_1_period : months_2_period;
  
  
   return (
    <FormPageContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>Envíos Nacionales</Label>
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

/**const FormInput = styled.input`
  width: 100%;
  height: 30px;
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`; /** */

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

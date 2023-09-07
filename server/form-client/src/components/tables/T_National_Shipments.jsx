import styled from "styled-components";
import { useForm } from "react-hook-form";
import { NationalBilling } from "../tables/T_National_Billing";
import { LocalShipments } from "../tables/T_Local_Shipments";
import { LocalBilling } from "../tables/T_Local_Billing";

import PropTypes from "prop-types";

export function NationalShipments({ selectedPeriod }) {
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
      const docsData = {
        enn_docs_month1: data.docs[0][0],
        enn_docs_month2: data.docs[0][1],
        enn_docs_month3: data.docs[0][2],
        enn_docs_month4: data.docs[0][3],
        enn_docs_month5: data.docs[0][4],
        enn_docs_month6: data.docs[0][5],
        enn_packages_month1: data.docs[1][0],
        enn_packages_month2: data.docs[1][1],
        enn_packages_month3: data.docs[1][2],
        enn_packages_month4: data.docs[1][3],
        enn_packages_month5: data.docs[1][4],
        enn_packages_month6: data.docs[1][5],
      };
      console.log("docsData", docsData);
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
        <Button type="submit">Siguiente</Button>
      </Form>
      <NationalBilling selectedPeriod={selectedPeriod} />
      <LocalShipments selectedPeriod={selectedPeriod} />
      <LocalBilling selectedPeriod={selectedPeriod} />
    </FormPageContainer>
  );
}

const Label = styled.label`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const FormPageContainer = styled.div`
  background-color: #f2f2f2;
  box-sizing: border-box;
  width: 100%;
  margin: 0 auto;
  padding: 2rem;
`;

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
  box-sizing: border-box;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 1rem auto;
`;

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

const ErrorMessage = styled.span`
  color: red;
  margin-bottom: 1rem;
`;

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
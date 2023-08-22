import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { postPeriod } from "./../data/form";
import PropTypes from 'prop-types';
import { useState } from "react";

const SeleccionarPeriodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  margin-top: 10px;
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
`;

const RadioButton = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export function SeleccionarPeriodo({ operador }) {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSemester, setSelectedSemester] = useState("");
  const navigate = useNavigate();


  SeleccionarPeriodo.propTypes = {
    operador: PropTypes.object.isRequired,
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

    const handleSubmit = async () => {
      if (selectedYear && selectedSemester && operador) {
        const periodData = {
          operador: operador.id_postal_operator,
          year: selectedYear,
          semester: selectedSemester,
        };
        try {
          const response = await postPeriod(periodData);
          console.log("response", response);
          // Resto de la lógica después de registrar el período
        } catch (error) {
          console.error("Error al crear período:", error);
        }
      }
    };

  const years = Array.from({length: 6}, (_, i) => 2020 + i);
  const semesters = ["1er Semestre", "2do Semestre"];

  return (
    <SeleccionarPeriodoContainer>
      <Label>Seleccionar Año:</Label>
      {years.map((year, index) => (
        <RadioButton key={index}>
          <input type="radio" value={year} checked={selectedYear === year.toString()} onChange={handleYearChange} />
          {year}
        </RadioButton>
      ))}
      <Label>Seleccionar Período:</Label>
      {semesters.map((semester, index) => (
        <RadioButton key={index}>
          <input type="radio" value={semester} checked={selectedSemester === semester} onChange={handleSemesterChange} />
          {semester}
        </RadioButton>
      ))}
      <Button onClick={handleSubmit}>Registrar</Button>
    </SeleccionarPeriodoContainer>
  );
}

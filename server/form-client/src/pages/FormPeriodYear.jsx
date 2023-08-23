import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { postPeriod, postYear } from "./../data/form";
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

export function SeleccionarPeriodo({ operator }) {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const navigate = useNavigate();


  SeleccionarPeriodo.propTypes = {
    operador: PropTypes.object.isRequired,
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handlePeriodChange = (event) => { // Agrega esta función
    setSelectedPeriod(event.target.value);
  };

  const handleSubmit = async () => {
    if (selectedYear && selectedPeriod && operator) {
      try {
        // Primero, registra el año
        const yearData = {
          year: selectedYear,
        };
        const responseYear = await postYear(yearData);
        const yearId = responseYear.id_year;
  
        // Luego, registra el período utilizando el ID del año
        const periodData = {
          id_operator: operator.id_postal_operator,
          id_year: yearId,
          period: selectedPeriod,
        };
        const responsePeriod = await postPeriod(periodData);
        console.log("responsePeriod", responsePeriod);
        
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
          <input type="radio" value={semester} checked={selectedPeriod === semester} onChange={handlePeriodChange} />
          {semester}
        </RadioButton>
      ))}
      <Button onClick={handleSubmit}>Registrar</Button>
    </SeleccionarPeriodoContainer>
  );
}

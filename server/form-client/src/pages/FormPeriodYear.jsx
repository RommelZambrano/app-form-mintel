import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { NationalShipments } from "../components/tables/T_National_Shipments";

export function SeleccionarPeriodo({ operator }) {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [showNationalShipments, setShowNationalShipments] = useState(false);
  const [showPeridoYear, setShowPeridoYear] = useState(false);

  SeleccionarPeriodo.propTypes = {
    operator: PropTypes.string.isRequired,
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };
  const handlePeriodChange = (event) => {
    // Agrega esta función
    setSelectedPeriod(event.target.value);
  };

  const handleSubmit = async () => {
    if (selectedYear && selectedPeriod && operator) {
      const data = {
        selectedYear,
        selectedPeriod,
      };
      console.log(data);
      setShowNationalShipments(true);
      setShowPeridoYear(true);
    }
  };

  const years = Array.from({ length: 6 }, (_, i) => 2020 + i);
  const semesters = ["1er Semestre", "2do Semestre"];

  return (
    <SelectedPeriodContainer>
      {!showPeridoYear && (
        <>
          <Label>Seleccionar Año:</Label>
          {years.map((year, index) => (
            <RadioButton key={index}>
              <input
                type="radio"
                value={year}
                checked={selectedYear === year.toString()}
                onChange={handleYearChange}
              />
              {year}
            </RadioButton>
          ))}

          <Label>Seleccionar Período:</Label>
          {semesters.map((semester, index) => (
            <RadioButton key={index}>
              <input
                type="radio"
                value={semester}
                checked={selectedPeriod === semester}
                onChange={handlePeriodChange}
              />
              {semester}
            </RadioButton>
          ))}

          <Button onClick={handleSubmit}>Siguiente</Button>
        </>
      )}

      {showNationalShipments && (
        <NationalShipments
          operator={operator}
          selectedYear={selectedYear}
          selectedPeriod={selectedPeriod}
        />
      )}
    </SelectedPeriodContainer>
  );
}

const SelectedPeriodContainer = styled.div`
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

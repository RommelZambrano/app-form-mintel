
import { postYear, postPeriod} from "../services/formService";

export const onSubmit = async ({operator, selectedPeriod, selectedYear}) => {
    
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
      console.log("periodId", periodId);
    
    }
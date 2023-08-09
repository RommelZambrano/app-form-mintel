import { InternationalBilling } from "./tables/T_International_Billing";
import { InternationalShipments } from "./tables/T_International_Shipments";
import { LocalBilling } from "./tables/T_Local_Billing";
import { LocalShipments } from "./tables/T_Local_Shipments";
import { NationalBilling } from "./tables/T_National_Billing";
import { NationalShipments } from "./tables/T_National_Shipments";


function FormB() {
  return (
    <div>
      <InternationalBilling />
      <InternationalShipments />
      <LocalBilling />
      <LocalShipments />
      <NationalBilling />
      <NationalShipments />
    </div>
  );
}

export default FormB;

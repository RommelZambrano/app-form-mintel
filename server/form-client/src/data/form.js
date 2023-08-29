import axios from "axios";

const formApi = axios.create({
  baseURL: "http://localhost:8000/form/api/v1/",
});

const formApi2 = axios.create({
  baseURL: "http://localhost:8000/form/api/v2/operator/",
});



export const getOperator = async (ruc) => {
  try {
    const response = await formApi2.get(`?ruc=${ruc}`);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error al buscar operador:", error);
    throw error;
  }
};
export const postYear = async (data) => {
  try {
    const response = await formApi.post("/year/", data);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error al crear año:", error);
    throw error;
  }
}

export const postPeriod = async (data) => {
  try {
    const response = await formApi.post("/period/", data);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error al crear período:", error);
    throw error;
  }
};

export const postDocsNationals = async (data) => {
  try {
    const response = await formApi.post("/national-shipment/", data);
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error al crear documento nacional:", error);
    throw error;
  }
}

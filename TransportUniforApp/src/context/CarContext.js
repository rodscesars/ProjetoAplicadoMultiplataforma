import createDataContext from "./createDataContext";
import api from "../api/tracker";

const carsReducer = (state, action) => {
  switch (action.type) {
    case "fetch_cars":
      return action.payload;
    default:
      return state;
  }
};

const fetchCars = (dispatch) => async () => {
  const response = await api.get("/cars");
  dispatch({ type: "fetch_cars", payload: response.data });
};

const createCar = (dispatch) => async ( number ) => {
  await api.post("/cars", { number });
};

export const { Provider, Context } = createDataContext(
  carsReducer,
  { fetchCars, createCar },
  []
);
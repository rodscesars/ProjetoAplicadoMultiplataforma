import React, { useContext, useState } from "react";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as CarContext } from "../context/CarContext";

const CarForm = () => {
    const [number, setNumber] = useState("")

  const { createCar, fetchCars } = useContext(CarContext);

  const saveCar = async () => {
    await createCar(number);
    setNumber("")
    await fetchCars()
  };

  return (
    <>
    <Spacer>
      <Text h3>Create a new Car</Text>
    </Spacer>
    <Input
            value={number}
            onChangeText={setNumber}
            placeholder="Enter car number"
          />
    <Spacer>
    <Button disabled={!number} title="Save" onPress={saveCar} />
    </Spacer>
  </>
  )
};

export default CarForm;
import React, { useContext } from "react";
import { Text, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const RouteForm = ({car, onConnect, onDisconnect, onEndRoute}) => {
  const {
    state: { recording, locations },
    startRecording,
    stopRecording,
    reset
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
      <Text>Car: {car && car.number}</Text>
      </Spacer>
      <Spacer>
        {recording  ? (
          <Button disabled={!car} title="Stop Recording" onPress={stopRecording} />
        ) : (
          <Button disabled={!car || locations.length > 0} title="Start Recording" onPress={() => {
            startRecording()
            onConnect(car)
          }} />
        )}
      </Spacer>
      <Spacer>
        {!recording && locations.length > 0 ? (
          <Button title="Finalizar Rota" onPress={()=> {
            onEndRoute(car)
            reset()
            onDisconnect()
            }} />
        ) : null}
      </Spacer>
    </>
  );
};

export default RouteForm;

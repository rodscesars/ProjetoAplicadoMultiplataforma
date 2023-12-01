import "../_mockLocation";
import React, {useContext, useCallback } from "react";
import { StatusBar, SafeAreaView } from "react-native";
import { Text } from "react-native-elements";
import { withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import Map from "../components/Map";
import RouteForm from "../components/RouteForm";
import useWebSocket from "../hooks/useWebSocket";
import useLocation from "../hooks/useLocation";

const MapRouteScreen = ({ isFocused, navigation }) => {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationContext);

  const car = navigation.getParam("car");

  const { connect, sendLocation, disconnect, endRoute } = useWebSocket()

  const callback = useCallback(
    (location) => {
      if (recording && car) {
        sendLocation(location, car)
      }
      addLocation(location, recording)},
    [recording]
  );

  const [err] = useLocation((isFocused || recording) && car, callback);

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView forceInset={{ top: "always" }}>
        <Map/>
        {err ? <Text>Please enable location services</Text> : null}
        <RouteForm car={car} onConnect={connect} onDisconnect={disconnect} onEndRoute={endRoute}  />
      </SafeAreaView>
    </>
  );
};

export default withNavigationFocus(MapRouteScreen);


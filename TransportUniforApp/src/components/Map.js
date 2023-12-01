import React, { useContext } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  initialLocation = {
    longitude: -38.53125944598686,
    latitude: -3.7426759219148558,
  };  

  return (<>   
      <MapView
      style={styles.map}
      initialRegion={{
        ...initialLocation, 
        latitudeDelta: 0.01, 
        longitudeDelta: 0.01, 
      }}
      /*       initialRegion={{
        ...currentLocation.coords, //coordenadas da localização atual(é lá que estão a latitude e longitude)
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }} */ //para no caso do mapa atualizar de acordo com a localização do usuário
    >
      <Circle
        center={currentLocation.coords}
        radius={30}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
    </>    
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;

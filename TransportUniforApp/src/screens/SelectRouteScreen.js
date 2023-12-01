import "../_mockLocation";
import React, { useState, useEffect, useContext } from "react";
import { StatusBar, SafeAreaView, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { Button, Divider, Text } from 'react-native-elements';
import { withNavigationFocus } from "react-navigation";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as CarContext } from "../context/CarContext";
import Spacer from "../components/Spacer";

const SelectRouteScreen = ({navigation}) => {
  const [selectedCar, setSelectedCar] = useState(undefined)
  const { state, fetchCars } = useContext(CarContext);
  const {
    state: { recording },
  } = useContext(LocationContext);


  useEffect(() => {
      fetchCars()
  }, []);

  if (state.length <= 0) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  const Card = ({item}) => {
    const isSelected = selectedCar && selectedCar._id === item._id;

    return (
    <TouchableOpacity 
      key={item => String(item._id)} 
      onPress={()=> setSelectedCar(item)} 
      disabled={recording}
      style={[styles.card, isSelected && styles.selectedCard]}
      >
      <Text>{item.number}</Text>
    </TouchableOpacity>)
  }

  return (
    <>
      <StatusBar barStyle="default" />  
      <SafeAreaView forceInset={{ top: "always" }}>
        <FlatList 
          data={state}
          keyExtractor={(item, index) => String(item._id)}
          ItemSeparatorComponent={<Divider />}
          renderItem={Card}
        />
        <Spacer>
        <Button
          title="Start Route"
          disabled={!selectedCar}
          onPress={() => {
            navigation.navigate("MapRoute", { car: selectedCar });
          }} />
        </Spacer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: 'white',
  },
  selectedCard: {
    backgroundColor: 'lightblue',
  }
});

export default withNavigationFocus(SelectRouteScreen);


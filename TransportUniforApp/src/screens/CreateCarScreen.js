import React from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import CarForm from "../components/CarForm";
import { AntDesign } from "@expo/vector-icons";


const CreateCarScreen = () => {
  return (
          <View style={styles.container}>
      <CarForm/>
    </View>
  );
};

CreateCarScreen.navigationOptions = {
  title: "Create",
  tabBarIcon: <AntDesign name="plus" size={22} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default CreateCarScreen;

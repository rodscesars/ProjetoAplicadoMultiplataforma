import React, { useContext } from "react";
import { StyleSheet, Text, SafeAreaView  } from "react-native";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
/* import { FontAwesome } from "@expo/vector-icons"; */
import { AntDesign } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <AntDesign name="logout" size={22} color="black" />,
};

const styles = StyleSheet.create({});

export default AccountScreen;
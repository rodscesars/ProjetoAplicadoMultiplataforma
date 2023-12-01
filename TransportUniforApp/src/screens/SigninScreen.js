import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import NavLink from "../components/NavLink";
import AuthForm from "../components/AuthForm";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText={"Sign In to your account"}
        errorMessage={state.errorMessage}
        onSubmit={signin}
        submitButtonText={"Sign In"}
      />
      <NavLink
        text={"Don't have an account? Sign Up instead!"}
        routeName={"Signup"}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;

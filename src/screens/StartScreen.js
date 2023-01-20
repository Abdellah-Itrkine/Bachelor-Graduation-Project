import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Login </Header>
      <Paragraph>Hello dear student.</Paragraph>
      <Paragraph>
        "Education is the passport to the future, for tomorrow belongs to those
        who prepare for it today"
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate("LoginScreen")}
      >
        Login
      </Button>
    </Background>
  );
}

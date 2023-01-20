import React from "react";
import Background from "../components/Background";
import Logo from "../components/Logo";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native";

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>List des exams</Header>
      <Paragraph>
        Cliquer sur "Scanner QR Code" pour valider votre présence.
      </Paragraph>
      <Button
        onPress={() => {
          navigation.navigate("QrScanner");
        }}
      >
        <Text>Scanner QR code</Text>
      </Button>

      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: "StartScreen" }],
          })
        }
      >
        Logout
      </Button>
    </Background>
  );
}

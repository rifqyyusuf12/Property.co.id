import React from "react";
import { Input, KeyboardAvoidingView, Text, Button, VStack, Heading, Center } from "native-base";
import { Platform } from "react-native";

const Forget = () => {
  return <KeyboardAvoidingView h={{
    base: "100px",
    lg: "auto"
  }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <Center>
        <VStack flex="1" justifyContent="flex-end" w="100%" maxW="400" mt="20">
          <Heading mb="3" fontSize="xl">Forgot Password</Heading>
          <Text color="muted.400" fontSize="xl">
            Not to worry! Enter email address associated with your account and
            we’ll send a link to reset your password.
          </Text>
          <Input placeholder="Email Address" mt="10" mb="4" size="xl"/>
          <Button mb="4" >Proceed</Button>
        </VStack>
      </Center>
    </KeyboardAvoidingView>;
};

    export default Forget
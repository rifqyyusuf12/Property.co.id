import React from "react";
import { ScrollView, VStack, Center, useTheme, Heading, } from "native-base";
import Card from './../common/appCard';

const Scroll = () => {
  const {
    colors
  } = useTheme();
  return <Center mt="5">
      <ScrollView maxW="300" h="80" _contentContainerStyle={{
      px: "20px",
      mb: "4",
      minW: "72"
    }}>
        <Center my="2">
          <Heading fontSize="l"></Heading>
        </Center>
        <VStack flex="1">
            <Card />
        </VStack>
        <Center my="2">
          <Heading fontSize="l"></Heading>
        </Center>
        <VStack flex="1">
          <Card/>
        </VStack>
        <Center my="2">
          <Heading fontSize="l"> </Heading>
        </Center>
        <VStack flex="1">
            <Card />
        </VStack>
      </ScrollView>
    </Center>;
};

export default Scroll ;
    
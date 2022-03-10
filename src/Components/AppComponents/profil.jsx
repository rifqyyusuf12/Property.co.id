import React from "react";
import background from "../assets/backroundprofile.jpg";
import foto from "../assets/foto.jpeg";
import { Skeleton, VStack, HStack, Center, Box, Image } from "native-base";
import Logout from "../AppBars/buttonLogout";

const Profil = () => {

  return (
    <Center w="100%">
      <VStack
        w="100%"
        maxW="800"
        borderWidth="1"
        space={6}
        rounded="md"
        alignItems="center"
        _dark={{
          borderColor: "coolGray.500",
        }}
        _light={{
          borderColor: "coolGray.200",
        }}
      >
        <Box

          style={{ backgroundImage: `url(${background})` }}
          h="47vh"
          w="100%"
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          opacity="0.9"
        />

        <Image
          borderWidth={1}
          style={{ backgroundImage: `url(${foto})` }}
          borderColor="coolGray.200"
          endColor="warmGray.50"
          size="110"
          rounded="full"
          mt="-100"
        />
        <HStack space="3">
          <Skeleton size="8" rounded="full" />
          <Skeleton size="8" rounded="full" />
          <Skeleton size="8" rounded="full" />
          <Skeleton size="8" rounded="full" />
        </HStack>
        <Skeleton.Text lines={3} alignItems="center" px="12" />
        <Logout />
      </VStack>
    </Center>
  );
};

export default Profil;

import React, { Component } from "react";

import CardHome from "../common/appCardHome";
import { VStack, Box } from 'native-base';

class Property extends Component {
  state = {};
  render() {
    return (
      <VStack  space={3} alignItems="center">
          <Box  h="200" w="800" mt="6" bg="dark.300" rounded="md" shadow={3} alignItems="left" justifyItems="">
            <CardHome />
          </Box>
          <Box  h="200" w="800" bg="dark.300" rounded="md" shadow={3}>
            <CardHome/>
          </Box>
          <Box  h="200" w="800" bg="dark.300" rounded="md" shadow={3}>
            <CardHome/>
          </Box>
          <Box  h="200" w="800" bg="dark.300" rounded="md" shadow={3}>
            <CardHome/>
          </Box>
      </VStack>
    );
  }
}

export default Property;

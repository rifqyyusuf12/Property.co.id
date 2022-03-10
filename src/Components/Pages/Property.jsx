import React, { Component } from "react";

import CardHome from "../common/appCardHome";
import { VStack, Box } from 'native-base';
import Search from './../common/appSearch';

class Property extends Component {
  state = {};
  render() {
    return (
      <VStack  space={3} alignItems="center">
          <Search />
          <Box  w="800" bg="yellow.300" rounded="md" shadow={3} alignItems="left" justifyItems="">
            <CardHome />
          </Box>
          <Box  w="800" bg="yellow.300" rounded="md" shadow={3}>
            <CardHome/>
          </Box>
          <Box  w="800" bg="yellow.300" rounded="md" shadow={3}>
            <CardHome/>
          </Box>
          <Box  w="800" bg="yellow.300" rounded="md" shadow={3}>
            <CardHome/>
          </Box>
      </VStack>
    );
  }
}

export default Property;

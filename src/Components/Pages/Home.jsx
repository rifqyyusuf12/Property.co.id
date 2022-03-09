import React, { Component } from 'react';
import { VStack, Center, Flex, Box, HStack } from 'native-base';

import BackroundImage from './../common/backroundImage';
import About from './bodyHome';
import ContentHome from './contentHome';


class Home extends Component {
  state = {  } 
  render() { 
    return (
      <VStack space={3} alignItems="center" >
          <Box  h="900" w="800" bg="yellow.400" rounded="md" shadow={3} my={1} >
            <BackroundImage />
            <About/>
          </Box>
          <Box  h="800" w="800" bg="yellow.400" rounded="md" shadow={3} my={1} alignItems="center" >
            <ContentHome />
          </Box>
          

      </VStack>



      // <VStack alignItems="center">
      //   <Box  w="800" h="600" bg="white.300" rounded="md" shadow={3}>
      //     <Flex>
      //       <Center w="100%" h="200px" bg="#"> 
      //            <video src=""></video>   
      //       </Center>
      //     </Flex>
      //     <Flex>
      //       <Center> <h1>sadas</h1></Center>
      //     </Flex>
      //   </Box>
      // </VStack>
    );
  }
}
 
export default Home;
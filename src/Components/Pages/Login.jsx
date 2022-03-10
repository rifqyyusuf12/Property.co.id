import React, { Component } from 'react'
import LoginForm from './welcome/LoginForm';
import { Center, HStack, Box } from 'native-base';
import Logo from '../common/appLogo';

class Login extends Component {
  state = {  } 
  render() { 
    return (
      <Center>
      <HStack space="0" >
        <Center w="400" bgColor="yellow.300">
          <Box w="300">
            <Logo />  
          </Box> 
        </Center>
        <Box w="400">
          <LoginForm/>  
        </Box>


      </HStack>
    
      </Center>
    );
  }
}
 
export default Login;




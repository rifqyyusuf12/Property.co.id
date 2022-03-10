import React, { Component } from 'react';
import { VStack, Center } from 'native-base';
import Profil from './../AppComponents/profil';

class Account extends Component {
    state = {  } 
    render() { 
        return (
            <Center >
                <VStack backgroundColor="yellow.300" shadow="3" w="800" h="700">
                    <Profil />
                </VStack>
            </Center>
        );
    }
}

 
export default Account;
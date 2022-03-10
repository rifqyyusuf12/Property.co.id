import React, { Component } from 'react';
import { VStack, Center } from 'native-base';
import AppTransaction from './../common/appTransaction';

class Transaction extends Component {
    state = {  } 
    render() { 
        return (
        <Center>
            <VStack w="800" h="1800" bgColor="yellow.300" my="3" shadow="3">
                <AppTransaction/>
            </VStack>
        </Center>
        );
    }
}
 
export default Transaction;
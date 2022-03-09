import React, { Component } from 'react'
import { HStack, Center, Text } from 'native-base';
import CardProperty from './../common/appProperty';
import Scroll from './../AppComponents/scrollView';

class ContentHome extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <HStack space={5} my="12">
                <Center>
                <box>
                    <CardProperty />
                </box>
                </Center>
                <Center>
                    <CardProperty />
                </Center>
                <Center>
                    <CardProperty />
            </Center>
          </HStack>
          <Text fontSize="3xl" color="black">Property Tersedia :</Text>
            <HStack >
                <Center>
                <box>
                    <Scroll />
                </box>
            </Center>
          </HStack>
          </>
        );
    }
}
 
export default ContentHome
;
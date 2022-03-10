import React, { Component } from 'react';
import { HStack,  Flex, Box } from 'native-base';
import { Text } from 'native-base';

class About extends Component {

    render() { 
        return (
            <>
            <HStack>
                <Flex>
                    <Box m='10' >
                    <img
                        src={require("../assets/body.jpg")}
                        className="image2"
                        alt="Logo"
                        width={400}
                    />
                    </Box>
                </Flex>
                <Flex space={20}>
                    <Box w="300" h="10" my="8" >
                        <Text fontSize="xl" fontWeight="200" >Tentang Kami</Text>
                    </Box>
                    <Box w="300" >
                        <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque ullam cupiditate nulla, minus repellat obcaecati ipsum saepe optio numquam quidem reiciendis cum magnam, dicta iure, laboriosam laborum voluptas nisi laudantium?</Text>
                    </Box>
                </Flex>
            </HStack>
            </>
        );
    }
}
 
export default About;
import React, { Component } from 'react';
import { Pressable, Text, Box, HStack, Spacer, Flex, Image } from "native-base";

class CardHome extends Component {
    state = {  } 
    render() { 
        return (
<Box alignItems="center">
      <Pressable>
        {({
        isHovered,
        isFocused,
        isPressed
      }) => {
        return <Box maxW="96" borderWidth="1" borderColor="coolGray.300" shadow="3" bg={isPressed ? "coolGray.200" : isHovered ? "coolGray.200" : "coolGray.100"} p="5" my="5" rounded="8" style={{
          transform: [{
            scale: isPressed ? 0.96 : 1
          }]
        }}>
              <HStack alignItems="center">

                <Spacer/>
                <Image w={["90%", "90%", "40"]} h="150" source={{
                    uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                  }} alt="image" />
                <Spacer />
              </HStack>
                <Text fontSize={12} color="coolGray.800">
                  1 month ago
                </Text>
              <Text color="coolGray.800" mt="3" fontWeight="medium" fontSize="xl">
                Marketing License
              </Text>
              <Text mt="2" fontSize="sm" color="coolGray.700">
                Unlock powerfull time-saving tools for creating email delivery
                and collecting marketing data
              </Text>
              <Flex>
                {isFocused ? <Text mt="5" fontSize={12} fontWeight="medium" textDecorationLine="underline" color="darkBlue.600" alignSelf="flex-start">
                    Read More
                  </Text> : <Text mt="5" fontSize={12} fontWeight="medium" color="darkBlue.600">
                    Read More
                  </Text>}
              </Flex>
            </Box>;
      }}
      </Pressable>
    </Box>
        );
    }
}
 
export default CardHome;



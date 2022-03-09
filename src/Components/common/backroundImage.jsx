import background  from '../assets/home.jpeg';
import React, { Component } from 'react';
import {  Box, Text, Center } from 'native-base';
import Btn from './appButton';




class BackroundImage extends Component {
    state = {  } 
    render() { 
        return (
            <Center align="left" position="relative" >
                <Box 
                style={{ backgroundImage: `url(${background})`}} 
                h='50vh'
                w='100%'
                backgroundRepeat='no-repeat'
                backgroundSize='cover'
                opacity='0.9'
                
                >
                <Box mt='12' ml='12' >
                <Text bold fontSize="xl" fontWeight='30'  >SELAMAT DATANG DI</Text>
                <Text bold fontSize="4xl" fontFamily='Times new Roman' >Property.co.id </Text>
                <Text bold fontSize="l" fontFamily='Times new Roman' >Lorem ipsum dolor sit amet. </Text>
                <Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium veniam reiciendis omnis quas sunt voluptates quia lorem100</Text>
                </Box>
               
                <Box >
                   <Btn />
                </Box>
            </Box>

            </Center>
            
        );
    }
}
 
export default BackroundImage;
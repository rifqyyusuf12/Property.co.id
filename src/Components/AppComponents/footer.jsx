import React from "react";
import {  Box, Text,  Icon, HStack, Center, Pressable } from "native-base";
import { BsSearch } from 'react-icons/bs';
import { BiHomeCircle } from 'react-icons/bi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineAccountCircle } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Footer() {
  const [selected, setSelected] = React.useState(1);
  return <>
      <Box flex={1} bg="white" safeAreaTop width="100%" maxW="800px" alignSelf="center" position="fixed" bottom="1" zIndex="100">
        <Center flex={1}></Center>
        <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
          <Pressable cursor="pointer" opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                <NavLink className="nav-link" to="/home">
            <Center>
              <Icon mb="1" as={<BiHomeCircle />} color="white" size="1xl" />
              <Text bold color="white" fontSize="15" textDecoration="none">
                          Home
              </Text>
            </Center>
                </NavLink>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
              <NavLink className="nav-link" to="/property">
            <Center>
              <Icon mb="1" as={<BsSearch />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                          Property
              </Text>
            </Center>
                </NavLink>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
              <NavLink className="nav-link" to="/transaction">
            <Center>
              <Icon mb="1" as={<AiOutlineShoppingCart />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                          Transaction
              </Text>
            </Center>
                </NavLink>
          </Pressable>
          <Pressable cursor="pointer" opacity={selected === 3 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(3)}>
              <NavLink className="nav-link" to="/Account" >
            <Center>
              <Icon mb="1" as={<MdOutlineAccountCircle />} color="white" size="sm" />
              <Text color="white" fontSize="12">
                          Account
              </Text>
            </Center>
                </NavLink>
          </Pressable>
        </HStack>
      </Box>
      
    </>;
}

    export default Footer;
    
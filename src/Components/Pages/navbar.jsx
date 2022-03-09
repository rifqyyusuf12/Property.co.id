import {
  Button,
  Center,
  VStack,
  Box,
  Menu,
  Pressable,
  HamburgerIcon,
  Flex,
  Spacer,
  Input,
  Icon,
} from "native-base";
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from 'react-icons/bs';
import Logo from './../common/appLogo';

class NavBar extends Component {
  render() {
    return (
      <>
        <VStack alignItems="center" >
          {/* header */}
          <Center w="800" h="20" bg="white.300" rounded="md" shadow={3} space={2.5}>
            <Flex direction="row" justifyContent="space-between" >
              <Center>
                <Link to="/" className="navbar-logo" >
                  <Logo />
                </Link>
              </Center>
              <Spacer />
              <Center>
                <VStack w="100%" space={5}>
                  <Input
                    placeholder="Search"
                    variant="filled"
                    width="100%"
                    borderRadius="10"
                    py="1"
                    px="2"
                    borderWidth="0"
                    InputLeftElement={
                      <Icon
                        ml="2"
                        size="4"
                        color="gray.400"
                        as={<BsSearch />}
                      />
                    }
                  />
                </VStack>
              </Center>
              <Spacer />
              <Center>
                <Box h="80%" w="90%" alignItems="flex-start">
                  <Menu
                    w="190"
                    trigger={(triggerProps) => {
                      return (
                        <Pressable
                          accessibilityLabel="More options menu"
                          {...triggerProps}
                        >
                          <HamburgerIcon />
                        </Pressable>
                      );
                    }}
                  >
                    <Menu.Item>
                      <Button small primary>
                        <NavLink className="nav-link" to="/home">
                          Home
                        </NavLink>
                      </Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button small primary>
                        <NavLink className="nav-link" to="/property">
                          Property
                        </NavLink>
                      </Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button small primary>
                        <NavLink className="nav-link" to="/chat">
                          Chat
                        </NavLink>
                      </Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button small primary>
                        <NavLink className="nav-link" to="/transaction">
                          Transaction
                        </NavLink>
                      </Button>
                    </Menu.Item>
                    <Menu.Item>
                      <Button small primary>
                        <NavLink className="nav-link" to="/account">
                          Account
                        </NavLink>
                      </Button>
                    </Menu.Item>
                  </Menu>
                </Box>
              </Center>
            </Flex>
          </Center>
        </VStack>
      </>

      //             <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //   <div className="container-fluid">
      //     <Link className="navbar-brand" to="/">Proprety.co.id</Link>
      //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      //       <span className="navbar-toggler-icon"></span>
      //     </button>
      //     <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      //       <div className="navbar-nav col-md-12">
      //         <NavLink className="nav-link" to="/home">Home</NavLink>
      //         <NavLink className="nav-link" to="/property">Property</NavLink>
      //         <NavLink className="nav-link" to="/chat">Chat</NavLink>
      //         <NavLink className="nav-link" to="/transaction">Transaction</NavLink>
      //         <NavLink className="nav-link" to="/account">Account</NavLink>
      //         </div>
      //     </div>
      //   </div>
      // </nav>
    );
  }
}

export default NavBar;

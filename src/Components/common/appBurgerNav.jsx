import React, { Component } from 'react';
import {
    Button,
    Center,
    Box,
    Menu,
    Pressable,
    HamburgerIcon,

  } from "native-base";
  import { NavLink } from "react-router-dom";

class BurberBar extends Component {
    state = {  } 
    render() { 
        return (
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
        );
    }
}
 
export default BurberBar;
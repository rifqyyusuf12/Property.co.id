import {
  Center,
  VStack,
  Box,
  Flex,

} from "native-base";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from './../common/appLogo';

class NavBar extends Component {
  render() {
    return (
      <>
        <VStack alignItems="center" position="sticky" top="1" zIndex="100" backgroundColor="white" >
          {/* header */}
          <Center w="800" h="20" bg="white.300" rounded="md" shadow={3} space={2.5}  >
            <Flex direction="row" justifyContent="space-between" >
              <Center>
                <Link to="/" className="navbar-logo" >
                  <Box w={200}>

                  <Logo  />
                  </Box>
                </Link>
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

import React, { Component } from "react";
import { Box, Button } from "native-base";

class Btn extends Component {
  state = {};
  render() {
    return (
      <>
        <Box
          alignItems="center"
          mb="2.5"
          mt="1.5"
          direction={{
            base: "column",
            md: "row",
          }}
          mx={{
            base: "auto",
            md: "0",
          }}
        >
          <Button onPress={() => console.log("hello world")}>
            Pelajari Lebih
          </Button>
        </Box>
        ;
      </>
    );
  }
}

export default Btn;

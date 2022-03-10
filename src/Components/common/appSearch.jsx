import React, { Component } from 'react'
import { Center, VStack, Input, Icon } from 'native-base';
import { BsSearch } from 'react-icons/bs';

class Search extends Component {
    state = {  } 
    render() { 
        return (
            <Center>
            <VStack w="100%" space={5}>
              <Input
                placeholder="Search"
                variant="filled"
                width="100%"
                borderRadius="10"
                my="10"
                py="3"
                px="100"
                borderWidth="0"
                fontSize="xl"
                InputLeftElement={
                  <Icon
                    ml="2"
                    size="12"
                    color="gray.400"
                    as={<BsSearch />}
                  />
                }
              />
            </VStack>
          </Center>
        );
    }
}
 
export default Search;
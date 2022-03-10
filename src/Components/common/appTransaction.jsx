import React from "react";
import {
  Box,
  FlatList,
  Heading,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
  Center
} from "native-base";

const AppTransaction = () => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      property: "AstonCiloto",
      timeStamp: "12:47 PM",
      price: "5 Lot @ Rp.2,000,000/Lot",
      total: "Rp. 10,000,000",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      property: "AstonCiloto #2",
      timeStamp: "11:11 PM",
      price: "5 Lot @ Rp.2,000,000/Lot",
      total: "Rp. 10,000,000",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      property: "AstonCiloto #3",
      timeStamp: "6:22 PM",
      price: "5 Lot @ Rp.2,000,000/Lot",
      total: "Rp. 10,000,000",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      property: "AstonCiloto #4",
      timeStamp: "8:56 PM",
      price: "5 Lot @ Rp.2,000,000/Lot",
      total: "Rp. 10,000,000",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      property: "AstonCiloto #5",
      timeStamp: "12:47 PM",
      price: "5 Lot @ Rp.2,000,000/Lot",
      total: "Rp. 10,000,000",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];
  return (
    <Box>
      <Heading fontSize="3xl" py="4" pb="3">
          <Center>
                Transaction
          </Center>
      </Heading>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="2"
          >
            <HStack space={20} justifyContent="space-between">
              <Avatar
                size="80px"
                source={{
                  uri: item.avatarUrl,
                }}
              />
              <VStack>
                <Text
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="coolGray.800"
                  bold
                  fontSize="xl"
                >
                  {item.property}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                >
                  {item.price}
                </Text>
                <Text
                  color="coolGray.600"
                  _dark={{
                    color: "warmGray.200",
                  }}
                  bold
                >
                  {item.total}
                </Text>
              </VStack>
              <Spacer />
              <Text
                fontSize="l"
                _dark={{
                  color: "warmGray.50",
                }}
                color="coolGray.800"
                alignSelf="flex-start"
              >
                {item.timeStamp}
              </Text>
            </HStack>
          </Box>
        )}
        keyExtractor={(item) => item.id}
      />
    </Box>
  );
};

export default AppTransaction;

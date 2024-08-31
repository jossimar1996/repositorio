import React, { useEffect, useState } from "react";
import { getallStores } from "../service/api";
import { Link } from 'react-router-dom';
import {
  Stack,
  VStack,
  Box,
  CardBody,
  Image,
  Text,
  Heading,
  Divider,
  Card,
  AbsoluteCenter
} from "@chakra-ui/react";

const Tiendas = () => {

  const url = "https://basedatos.vercel.app/stores";
  
  const [store, setStore] = useState([]);


  useEffect(() => {
    getStores();
  }, []);

  const getStores = async () => {
    const response = await getallStores(url);
    console.log(response);
    setStore(response.data);
  };

  // Divide los elementos en grupos de 4
  const groupedItems = [];
  for (let i = 0; i < store.length; i += 4) {
    groupedItems.push(store.slice(i, i + 4));
  }

  return (
    <VStack bg="#F9E9F8">
      <Box
        position="relative"
        padding="10"
        bg="#F9E9F8"
        w="100%"
        mt={100}
        p={2}
        color="#BA1FB5"
      >
        <Divider border="solid 3px" />
        <AbsoluteCenter bg="#F9E9F8" px="400">
          <Heading as="h1" fontSize="40px" align="center">
            TIENDAS
          </Heading>
        </AbsoluteCenter>
      </Box>
      <Box color="#BA1FB5">
        <Text fontSize="20px" align="center">
          TODAS LAS TIENDAS
        </Text>
      </Box>
      <Box bg="#F9E9F8" w="100%" color="white" mt={10} padding="100px">
        <VStack height="600px" gap="40px">
          {groupedItems.map((row, rowIndex) => (
            <Stack key={rowIndex} direction={["column", "row"]} spacing="24px">
              {row.map((item, columnIndex) => (
                <Box key={columnIndex} w="250px" h="250px" bg="yellow.200" >
                  <Card maxW="sm" align="center" >
                    <CardBody align="center" >
                      <Image
                        src={item.logo}
                        alt="MR. PAPA"
                        borderRadius="lg"
                        w="100%"
                        height="200px"
                      />
                      <Stack mt="1">
                        <Heading size="md">
                          <Link to={`/tiendadetalles/${item.id}`}>{item.name}</Link>

                        </Heading>
                      </Stack>
                    </CardBody>
                  </Card>
                </Box>
              ))}
            </Stack>
          ))}
        </VStack>
      </Box>
    </VStack>
  );
};

export default Tiendas;

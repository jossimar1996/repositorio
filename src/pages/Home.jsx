import React, { useEffect, useState } from "react";
import { getallStores, getallEvents } from "../service/api";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  StackDivider,
  SimpleGrid,
  Stack,
  CardBody,
  Heading,
  Divider,
  ButtonGroup,
  Button,
  CardFooter,
  Card,
  AbsoluteCenter,
  List,
} from "@chakra-ui/react";
import "./Home.css";
import Carousel from "../components/Carousel";

const Home = () => {
  const urlStores = "https://basedatos.vercel.app/stores";
  const urlEvents = "https://basedatos.vercel.app/events";
  const [store, setStore] = useState([]);
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getStores();
    getEvents();
  }, []);

  const getStores = async () => {
    const response = await getallStores(urlStores);
    console.log(response);
    setStore(response.data);
  };

  const getEvents = async () => {
    const response = await getallEvents(urlEvents);
    console.log(response);
    setEvent(response.data);
  };

  // Divide los elementos en grupos de 2
  const groupedItemsEvents = [];
  for (let i = 0; i < event.length; i += 2) {
    groupedItemsEvents.push(event.slice(i, i + 2));
  }

  // Divide los elementos en grupos de 4
  const groupedItems = [];
  for (let i = 0; i < store.length; i += 4) {
    groupedItems.push(store.slice(i, i + 4));
  }
  return (
    <>
      <VStack>
        <HStack width="100%">
          <Carousel />
        </HStack>

        <VStack width="100%">
          <Box>
            <Text fontWeight="bold" fontSize="38px">
              AHORA MISMO EN LA PLAZA SANTANDER
            </Text>
          </Box>
          <Box bg="#FFFFFF" w="100%" color="white" mt={10} paddingBottom={20}>
            <VStack>
              {groupedItemsEvents.slice(0, 1).map((rowEvents, rowIndex) => (
                <Stack
                  key={rowIndex}
                  direction={["column", "row"]}
                  spacing="24px"
                >
                  {rowEvents.map((item, columnIndex) => (
                    <Box key={columnIndex} w="380px" h="520px" bg="yellow.200">
                      <Card maxW="sm" align="center">
                        <CardBody align="center">
                          <Image
                            src={item.photo}
                            alt="Eventos"
                            borderRadius="lg"
                            w="450px"
                            h="450px"
                          />
                          <Stack mt="1">
                            <Heading size="md">
                              <Link>{item.title}</Link>
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

        <VStack bg="#F9E9F8">
          <Box
            position="relative"
            padding="10"
            bg="#F9E9F8"
            w="1500px"
            mt={100}
            p={5}
            color="#BA1FB5"
          >
            <Divider border="solid 3px" />
            <AbsoluteCenter bg="#F9E9F8" px="400">
              <Heading as="h1" fontSize="40px" align="center">
                {" "}
                NUESTRAS TIENDAS
              </Heading>
              <Text
                width="100%"
                fontSize="20px"
                align="center"
                whiteSpace="nowrap"
                overflow="hidden"
              >
                HAY PARA TODOS LOS GUSTOS
              </Text>
            </AbsoluteCenter>
          </Box>
          <Box bg="#F9E9F8" w="100%" color="white" p={20}>
            <VStack >
              {groupedItems.slice(0, 1).map((row, rowIndex) => (
                <Stack
                  key={rowIndex}
                  direction={["column", "row"]}
                  spacing="24px"
                >
                  {row.slice(0, 4).map((item, columnIndex) => (
                    <Box key={columnIndex} w="250px" h="250px" bg="yellow.200">
                      <Card maxW="sm" align="center">
                        <CardBody align="center">
                          <Image
                            src={item.logo}
                            alt="MR. PAPA"
                            borderRadius="lg"
                            w="100%"
                          />
                          <Stack mt="1">
                            <Heading size="md">
                              <Link to={`/tiendadetalles/${item.id}`}>
                                {item.name}
                              </Link>
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
      </VStack>
    </>
  );
};

export default Home;

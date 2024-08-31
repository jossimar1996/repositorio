import React, { useEffect, useState } from "react";
import { getallEvents } from "../service/api";
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

const Eventos = () => {

  const url = "https://basedatos.vercel.app/events";

  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await getallEvents(url);
    console.log(response);
    setEvent(response.data);
  };

  // Divide los elementos en grupos de 4
  const groupedItems = [];
  for (let i = 0; i < event.length; i += 2) {
    groupedItems.push(event.slice(i, i + 2));
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
            EVENTOS
          </Heading>
        </AbsoluteCenter>
      </Box>
      <Box color="#BA1FB5">
        <Text fontSize="20px" align="center">
          NO TE LO PUEDES PERDER
        </Text>
      </Box>
      <Box bg="#F9E9F8" w="100%" color="white" mt={10} paddingBottom={20}>
        <VStack>
          {groupedItems.map((row, rowIndex) => (
            <Stack key={rowIndex} direction={["column", "row"]} spacing="24px">
              {row.map((item, columnIndex) => (
                <Box key={columnIndex} w="350px" h="350px" bg="yellow.200">
                  <Card maxW="sm" align="center">
                    <CardBody align="center">
                      <Image
                        src={item.photo}
                        alt="MR. PAPA"
                        borderRadius="lg"
                        w="100%"
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
  );
};

export default Eventos;

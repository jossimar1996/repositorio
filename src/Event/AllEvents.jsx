import React, { useEffect, useState, useContext } from "react";
import { deleteEvents, getallEvents } from "../service/api";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import {
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Button,
  Container,
  Text,
  HStack,
  VStack,
  Box,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const AllEvents = () => {
  const url = "http://localhost:3006/events";

  const { user, logout, isAuth } = useContext(AuthContext);

  const [event, setEvent] = useState([]);
  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await getallEvents(url);
    console.log(response);
    setEvent(response.data);
  };

  const deleteData = async (id) => {
    await deleteEvents(url, id);
    getEvents();
  };

  if (!isAuth()) {
    return <Navigate to="/login" />;
  }

  return (
    <VStack spacing={4} align="stretch" p={5}>
      <FormControl as="fieldset">
        <HStack justifyContent="space-between" p={2}>
          <FormLabel as="legend">Usuario: {user.name}</FormLabel>
          <FormLabel as="legend">
            <Link colorScheme="teal" onClick={logout}>
              Cerrar Sesión
            </Link>
          </FormLabel>
        </HStack>
        <Button variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF'>
          <Link to={"/addevents"} >Agregar Eventos</Link>
        </Button>
      </FormControl>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>TÍTULO</Th>
                <Th>IMAGEN</Th>
                <Th>FECHA</Th>
                <Th>HORA</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {event.map((data, index) => (
                <Tr key={index}>
                  <Td>{data.id}</Td>
                  <Td>{data.title}</Td>
                  <Td>{data.photo}</Td>
                  <Td>{data.fecha}</Td>
                  <Td>{data.hora}</Td>
                  <Td>
                    <Button variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF'>
                      <Link to={`/editevents/${data.id}`}>Editar</Link>
                    </Button>
                  </Td>
                  <Td>
                    <Button variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF'
                      onClick={() => deleteData(data.id)}
                      style={{ margin: "0px 20px" }}
                    >
                      Eliminar
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </VStack>
  );
};

export default AllEvents;

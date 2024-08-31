import React, { useState, useContext } from "react";
import { addEvents } from "../service/api";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import {
  Box,
  Container,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  VStack,
} from "@chakra-ui/react";

const initialValue = {
  title: "",
  photo: "",
  fecha: "",
  hora: "",
};

const AddStores = () => {
  const url = "http://localhost:3006/events";
  const { user, logout, isAuth } = useContext(AuthContext);

  const [event, setEvent] = useState(initialValue);
  
  const { title, photo, fecha, hora } = event;

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
    console.log(event);
  };

  const addEventDetails = async () => {
    await addEvents(url, event);
    navigate("/allevents");
  };

  if (!isAuth()) {
    return <Navigate to="/login" />;
  }


  return (
    <VStack spacing={4} p={5}>
      <Box my={5}>
      <HStack justifyContent="center" p={5}>
        <FormLabel as="legend">Guardar Tienda</FormLabel>
      </HStack>
        <FormControl>
          <Box width="400px">
          <FormLabel>TÍTULO</FormLabel>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>IMAGEN</FormLabel>
            <Input
              type="text"
              name="photo"
              value={photo}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>FECHA</FormLabel>
            <Input
              type="text"
              name="fecha"
              value={fecha}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>HORA</FormLabel>
            <Input
              type="text"
              name="hora"
              value={hora}
              onChange={(e) => onValueChange(e)}
            />
          </Box>

          <HStack p={2} spacing={2}>
            <Button onClick={() => addEventDetails()} variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF'>Guardar</Button>
            <Button onClick={() => navigate("/allevents")}  variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF'>Cancel</Button>
          </HStack>
        </FormControl>
      </Box>
    </VStack>
  );
};

export default AddStores;

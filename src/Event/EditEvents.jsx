import React, { useEffect, useState, useContext } from "react";

import { editEvents, getallEvents } from "../service/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  Image,
  VStack,
  HStack,
} from "@chakra-ui/react";

const initialValue = {
  title: "",
  photo: "",
  fecha: "",
  hora: "",
};

const EditEvents = () => {
  const url = "http://localhost:3006/events";

  const { user, logout, isAuth } = useContext(AuthContext);

  const [event, setEvent] = useState(initialValue);

  const { title, photo, fecha, hora } = event;

  const { id } = useParams();

  useEffect(() => {
    loadEventData();
  }, []);

  const loadEventData = async () => {
    const response = await getallEvents(url, id);
    setEvent(response.data);
  };

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
    console.log(event);
  };

  const editEventDetails = async () => {
    await editEvents(url, id, event);
    navigate("/allevents");
  };

  if (!isAuth()) {
    return <Navigate to="/login" />;
  }

  return (
    <VStack spacing={4} p={5}>
      <Box my={5}>
        <HStack justifyContent="center" p={5}>
          <FormLabel as="legend">Actualizar Eventos</FormLabel>
        </HStack>
        <FormControl>
          <Box>
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
            <Button
              onClick={() => editEventDetails()}
              variant="solid"
              backgroundColor="#BA1FB5"
              color="#FFFFFF"
            >
              Actualizar
            </Button>
            <Button
              onClick={() => navigate("/allevents")}
              variant="solid"
              backgroundColor="#BA1FB5"
              color="#FFFFFF"
            >
              Cancel
            </Button>
          </HStack>
        </FormControl>
      </Box>
    </VStack>
  );
};

export default EditEvents;

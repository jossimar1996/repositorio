import React, { useEffect, useState, useContext } from "react";

import { editStores, getallStores } from "../service/api";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  HStack
} from "@chakra-ui/react";

const initialValue = {
  Stand: "",
  name: "",
  logo: "",
  phone: "",
  days_open: "",
  schedule: "",
  level: "",
  title: "",
  description: "",
  photo_menu_1: "",
  photo_menu_2: "",
  photo_menu_3: "",
  photo_primary:"",
};

const EditStores = () => {

  const url = "http://localhost:3006/stores";

  const { user, logout, isAuth } = useContext(AuthContext);

  const [store, setStore] = useState(initialValue);
  const {
    Stand,
    name,
    logo,
    phone,
    days_open,
    schedule,
    level,
    title,
    description,
    photo_menu_1,
    photo_menu_2,
    photo_menu_3,
    photo_primary
    
  } = store;

  const { id } = useParams();

  useEffect(() => {
    loadStoreData();
  }, []);

  const loadStoreData = async () => {
    const response = await getallStores(url, id);
    setStore(response.data);
  };

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setStore({ ...store, [e.target.name]: e.target.value });
    console.log(store);
  };


  const editStoreDetails = async () => {
    await editStores(url, id, store);
    navigate("/allstores");
  };

  if (!isAuth()) {
    return <Navigate to="/login" />;
  }
  
  return (
    <VStack spacing={4} p={5}>
      <Box my={5}>
        <HStack justifyContent="center" p={5}>
        <FormLabel as="legend">Actulizar Tienda</FormLabel>
      </HStack>
        <FormControl>
          <Box>
            <FormLabel>STAND</FormLabel>
            <Input
              type="text"
              name="Stand"
              value={Stand}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>NOMBRE</FormLabel>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>LOGO</FormLabel>
            <Input
              type="text"
              name="logo"
              value={logo}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>TELÉFONO</FormLabel>
            <Input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>DÍAS ABIERTO</FormLabel>
            <Input
              type="text"
              name="days_open"
              value={days_open}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>HORARIO</FormLabel>
            <Input
              type="text"
              name="schedule"
              value={schedule}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>NIVEL DE PISO</FormLabel>
            <Input
              type="text"
              name="level"
              value={level}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>TÍTULO</FormLabel>
            <Input
              type="text"
              name="title"
              value={title}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>DESCRIPCIÓN</FormLabel>
            <Input
              type="text"
              name="description"
              value={description}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>FOTO 1</FormLabel>
            <Input
              type="text"
              name="photo_menu_1"
              value={photo_menu_1}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>FOTO 2</FormLabel>
            <Input
              type="text"
              name="photo_menu_2"
              value={photo_menu_2}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>FOTO 3</FormLabel>
            <Input
              type="text"
              name="photo_menu_3"
              value={photo_menu_3}
              onChange={(e) => onValueChange(e)}
            />
            <FormLabel>FOTO PRINCIPAL</FormLabel>
            <Input
              type="text"
              name="photo_primary"
              value={photo_primary}
              onChange={(e) => onValueChange(e)}
            />
          </Box>

          <HStack p={2} spacing={2}>
            <Button onClick={() => editStoreDetails()} variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF'>Actualizar</Button>
            <Button onClick={() => navigate("/allstores")} variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF'>Cancel</Button>
          </HStack>
        </FormControl>
      </Box>
    </VStack>
  );
};

export default EditStores;





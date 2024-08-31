import React, { useEffect, useState, useContext } from "react";
import { deleteStores, getallStores } from "../service/api";
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

const Mantenimiento = () => {
  const { user, logout, isAuth } = useContext(AuthContext);
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
        <VStack>
        <Button variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF'>
          <Link to={"/allstores"} >Administrar Tiendas</Link>
        </Button>
        <Button variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF'>
          <Link to={"/allevents"} >Administrar Eventos</Link>
        </Button>
        </VStack>
      </FormControl>
    </VStack>
  );
};

export default Mantenimiento;

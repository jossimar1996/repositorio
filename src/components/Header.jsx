import { Box, Flex, HStack, Image, VStack} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider
} from '@chakra-ui/react'
const Header = () => {
  return (
    <HStack
      bgColor={{ base: "#F5F5F5", md: "#F5F5F5", lg: "#F5F5F5" }}
      height="100px"
      width="100%"
      justifyContent="space-between"
    >
      {/* logo de la plaza */}
      <Image
        height="180px"
        width="250"
        src="../src/img/logo.png"
        alt="logo de la plaza"
        p={10}
      />
      <VStack p={10}>
        <HStack gap="50px" fontSize="20px" textTransform="uppercase" textAlign="center">
          <Link to="/">Home</Link>
          <Link to="/tiendas">Tiendas</Link>
          <Link to="/eventos">Eventos</Link>
          <Link to="/Comollegar">Ubícanos</Link>
          <Link to="/contactos">Contactos</Link>
          <Link to="/login">Login</Link>
        </HStack>
      </VStack>


      <Box>
      <Menu>

</Menu>
      </Box>
    </HStack>

    
  );
};
export default Header;

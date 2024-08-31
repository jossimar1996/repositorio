import {
  Box,
  Flex,
  HStack,
  Image,
  VStack,
  Text,
  Heading,
  Button,
  Link
} from "@chakra-ui/react";
import {  } from "react-router-dom";

const Footer = () => {
  return (
    <HStack height="308px" justifyContent="center" gap="10rem"
    bg="linear-gradient(0deg, rgba(235,235,235,1) 45%, rgba(215,207,207,1) 81%)">
      <VStack
        height="250px"
        width="359px"
      >
        <HStack>
          <Text fontSize="32px" fontWeight="bold">
            CONTACTO
          </Text>
          <Link href="https://web.whatsapp.com/" isExternal >
          <Image src="../src/img/wsp.png" alt="whasap"></Image>
          </Link>
        </HStack>
        <VStack>
          <Text> Dirección: Jr. Manuel Villavicencio 472</Text>
          <Text> Chimbote,Peru</Text>
          <Text>Correo: info@plazasantander.com.pe</Text>
          <Button
            height="60px"
            width="320px"
            colorScheme="black"
            variant="outline"
          >
            COMO LLEGAR
          </Button>
        </VStack>
      </VStack>
      <VStack
        height="250px"
        width="359px"
        bg="linear-gradient(0deg, rgba(235,235,235,1) 45%, rgba(215,207,207,1) 81%)"
      >
        <Text fontSize="32px" fontWeight="bold" marginTop="5px">
          HORARIO
        </Text>
        <Text marginTop="7px">Lunes a Domingo</Text>
        <Text>10:00 am - 10:00 pm</Text>
      </VStack>

      <VStack
        height="250px"
        width="400px"
        justifyContent="space-between"
        bg="linear-gradient(0deg, rgba(235,235,235,1) 45%, rgba(215,207,207,1) 81%)"
      >
        <Text fontSize="32px" fontWeight="bold" marginTop="5px">
          SIGUENOS
        </Text>
        <HStack>
        <Link href="https://www.facebook.com/" isExternal>
          <Image src="../src/img/f-removebg-preview 1.png" ></Image>
          </Link>
          <Link href="https://www.instagram.com/" isExternal>
          <Image src="../src/img/i-removebg-preview 1.png" ></Image>
          </Link>

        </HStack>
        <HStack></HStack>
      </VStack>
    </HStack>
  );
};

export default Footer;

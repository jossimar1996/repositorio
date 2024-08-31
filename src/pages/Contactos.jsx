import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  HStack,
  VStack,
  FormLabel,
  Input,
  Textarea,
  Button,
  AbsoluteCenter,
  Divider,
  Box,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdSchedule } from "react-icons/md";


const Contactos = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_plazasantander", "template_tj28rr4", form.current, {
        publicKey: "YmSn-wUJzwvBLpSxy",
      })
      .then(
        () => {
          alert("Mensaje enviado");
          /*console.log('SUCCESS!');*/
          const inputUser_name = document.getElementById("user_name");
          inputUser_name.value = "";
          const inputUser_email = document.getElementById("user_email");
          inputUser_email.value = "";
          const inputMessage = document.getElementById("message");
          inputMessage.value = "";
        },
        (error) => {
          console.log("Mensaje no enviado...", error.text);
        }
      );
  };

  return (
    <VStack >
      <VStack width="100%">
        <Box
          position="relative"
          padding="10"
          bg="#FFFFFF"
          w="100%"
          mt={50}
          p={2}
          color="#BA1FB5"
        >
          <Divider border="solid 3px" />
          <AbsoluteCenter bg="#FFFFFF" px="400">
            <Heading as="h1" fontSize="40px" align="center">
              CONTACTO
            </Heading>
          </AbsoluteCenter>
        </Box>
      </VStack>

      <Stack
        height="500px"
        align="center"
        direction={["column", "row"]}
        spacing="24px"
        justifyContent="center"
        p={10}
      >
        <Box >
          <form ref={form} onSubmit={sendEmail}>
            <VStack spacing={4} p={1}>
              <HStack>
                <FormLabel width="50%">Nombre</FormLabel>
                <Input
                  id="user_name"
                  type="text"
                  name="user_name"
                  width="300px"
                />
              </HStack>
              <HStack>
                <FormLabel width="50%">Email</FormLabel>
                <Input
                  id="user_email"
                  type="text"
                  name="user_email"
                  width="300px"
                />
              </HStack>
              <HStack>
                <FormLabel width="50%">Mensaje</FormLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Escriba aquí su mensaje"
                  width="300px"
                />
              </HStack>
              <Button
                type="submit"
                variant="solid"
                backgroundColor="#BA1FB5"
                color="#FFFFFF"
              >
                Enviar
              </Button>
            </VStack>
          </form>
        </Box>
        <Box>
          <VStack>
            <Text fontSize="20px" as="b">
              Plaza Santander
            </Text>
            <HStack>
              <FaPhone />
              <Text>945 555 567</Text>
            </HStack>
            <HStack>
              <MdEmail />
              <Text>info@plazasantander.com.pe</Text>
            </HStack>
            <HStack>
              <FaRegCalendarDays />
              <Text>Lunes a Sábado</Text>
            </HStack>
            <HStack>
              <MdSchedule />
              <Text>09:00 am a 06:00 pm</Text>
            </HStack>
          </VStack>
        </Box>
      </Stack>
    </VStack>
  );
};
export default Contactos;

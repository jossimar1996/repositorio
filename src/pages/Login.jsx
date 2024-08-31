import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import {Flex,Heading,Input,Button,InputGroup,Stack,chakra,Box,Avatar,FormControl,} from "@chakra-ui/react";


const Login = () => {
  const { login, isAuth } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login(data.get("user"), data.get("pass"));
  };

  if (isAuth()) {
    return <Navigate to="/allstores" />;
  }

  return (
    <Flex flexDirection="column" width="100wh" height="80vh" backgroundColor="#FFFFFF" justifyContent="center" alignItems="center">
      <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
      <Avatar bg="#BA1FB5" />
      <Heading color="#BA1FB5">Bienvenido</Heading>
      <Box minW={{ base: "90%", md: "468px" }}>
      <form onSubmit={handleSubmit}>
          <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900" boxShadow="md">
            <FormControl>
              <InputGroup>
                <Input type="text" placeholder="usuario" name = "user"/>
              </InputGroup>
            </FormControl>
            <FormControl>
              <InputGroup>
                <Input type="text" placeholder="Password" name="pass"
                />
              </InputGroup>
            </FormControl>
            <Button borderRadius={0} type="submit" variant="solid" backgroundColor = "#BA1FB5"  color='#FFFFFF' width="full">
              Ingresar
            </Button>
          </Stack>
        </form>
      </Box>
    </Stack>
  </Flex>
  );
};

export default Login;

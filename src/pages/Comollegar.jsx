import {
  Box,
  Stack,
  Image,
  VStack,
  Heading,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";

import { MapContainer,TileLayer,Marker,Popup } from "react-leaflet";
import "./Comollegar.css";
import "leaflet/dist/leaflet.css";


const Comollegar = () => {
  return (
    <VStack>
      <VStack width="100%">
        <Box
          position="relative"
          bg="#FFFFFF"
          w="100%"
          mt={65}
          color="#BA1FB5"
        >
          <Divider border="solid 3px" />
          <AbsoluteCenter bg="#FFFFFF" px="400" >
            <Heading as="h1" fontSize="40px" align="center"  w="50vh">
              COMO LLEGAR
            </Heading>
          </AbsoluteCenter>
        </Box>
        <Stack p={10} direction={['column', 'row']}  >
          <Box>
            <MapContainer
              center={{ lat: "-9.074173", lng: "-78.5930316" }}
              zoom={50}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[-9.07381, -78.59269]} color ="#FFFFFF">
                <Popup>
                  Plaza Santander <br /> Jr. Manuel Villavicencio 476.
                </Popup>
              </Marker>
            </MapContainer>
          </Box>
          <Box>
          <Image  src="../src/img/comollegar.png" height={590}></Image>
          </Box>
        </Stack>
      </VStack>
    </VStack>
  );
};
export default Comollegar;

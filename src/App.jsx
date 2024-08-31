import { ChakraProvider } from '@chakra-ui/react'
import AppRouter from './router/AppRouter'
import { AuthProvider } from "./context";

const App = () => {
    return (
        <ChakraProvider disableEnvironment disableGlobalStyle>
             <AuthProvider>
                <AppRouter />
             </AuthProvider>
        </ChakraProvider>
    )
}

export default App

import './App.css';
import { ChakraProvider } from "@chakra-ui/react"
import PageComponent from './components/PageComponent/PageComponent';

function App() {
  return (
    <ChakraProvider>
     <PageComponent/>
    </ChakraProvider>
  );
}

export default App;

import  { useState } from 'react';
import { Button, Flex, Box } from '@chakra-ui/react';
import RandomCatsList from '../RandomCatsList/RandomCatsList'; 

const PageComponent = () => {
    const [showCats, setShowCats] = useState(false);

    const handleClick = () => {
        setShowCats(!showCats); 
    };

    return (
        <Flex direction="column" align="center" justify="center" minHeight="100vh">
            <Box my={showCats ? 4 : 0}>
                <Button colorScheme="blue" onClick={handleClick}>
                    {showCats ? 'Dejar de Mostrar Gatos' : 'Mostrar Gatos Aleatorios'}
                </Button>
            </Box>
            {showCats && <RandomCatsList />}
        </Flex>
    );
};

export default PageComponent;

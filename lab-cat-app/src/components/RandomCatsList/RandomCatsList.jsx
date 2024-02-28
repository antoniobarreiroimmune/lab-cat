import { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';

const RandomCatsList = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const fetchCats = async () => {
            try {
                const response = await axios.get('https://api.thecatapi.com/v1/images/search', {
                    headers: {
                        'x-api-key': 'live_ePDwpZveufAPJqY4vhBsSeyD4PLlZncpncURStv6xEkBlMkda2I8IHaNUkjwbRfZ'  
                    },
                    params: {
                        limit: 10,
                        has_breeds: 1
                    }
                });
                const catsData = response.data;
                setCats(catsData);
            } catch (error) {
                console.error('Error fetching cats:', error);
            }
        };

        fetchCats();
    }, []);

    return (
        <>
            {cats.map(cat => (
                <Card key={cat.id} maxW='sm' mb='5'>
                    <CardBody>
                        <Image
                            src={cat.url}
                            alt={cat.breeds[0].name}
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                            <Heading size='md'>{cat.breeds[0].name}</Heading>
                            <Text><strong>Origin:</strong> {cat.breeds[0].origin}</Text>
                            <Text><strong>Description:</strong> {cat.breeds[0].description}</Text>
                            <Text><strong>Temperament:</strong> {cat.breeds[0].temperament}</Text>
                        </Stack>
                    </CardBody>
                </Card>
            ))}
        </>
    );
};

export default RandomCatsList;

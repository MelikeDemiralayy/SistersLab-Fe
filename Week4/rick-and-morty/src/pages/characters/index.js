import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // arama kutusundaki metni takip etmek için tuttuğumuz değişken

  const getCharacters = async () => {
    const characters = await fetchCharacters();
    setCharacters(characters);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query); 
  };

  const filteredCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchQuery)
  );

  return (
    <Stack spacing={2}>
      <TextField
        label="Search for a character"
        value={searchQuery}
        onChange={handleSearch}
        sx={{ width: 300 }}
        size="small"
      />
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {filteredCharacters.map((character) => (
          <Card key={character.id} sx={{ width: '150px' }}>
            <CardMedia
              component="img"
              alt="character"
              height="140"
              image={character.image}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {character.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {character.gender} {character.status}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon color="error" />
              </IconButton>
              <Button size="small" variant="text">
                Details
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

export default Characters;


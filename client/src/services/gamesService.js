import axios from 'axios';

export const createGame = (game) => {
    return axios.post('/api/games/create', game);
}

import axios from 'axios';

const instance = axios.create({
    //URL da API (cloud function)
    baseURL: 'https://us-central1-challenge-b7007.cloudfunctions.net/api' 

    //ou substituir URL da emulação - localhost - para teste
    // "http://localhost:5001/challenge-b7007/us-central1/api"
});

export default instance;
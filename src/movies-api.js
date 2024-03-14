import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

export default async function fetchMoviesData(endpoint, query = {}) {
    const response = await axios.get(endpoint, {
        headers: {
            // Замість api_read_access_token вставте свій токен
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MWY5OGQzODg0NzUyOWJkMWNiMjZkYjk2NWU3YjllMyIsInN1YiI6IjY1ZjFjOWVkZDY0YWMyMDE2NDVlNWQzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hFWvAmLfFjuwxQe_LkSp4TSX0p_laHpMh0N1TJQ_x74'
        },
        params: {
            query,
        },
    });

    return response.data;
        
}

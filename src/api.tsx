import axios from 'axios'

const API_KEY = "183daca270264bad86fc5b72972fb82a";
const BASE_URL = "https://newsapi.org/v2/everything?apiKey="

export const getNews = async (query) => {
    try {
        const url = BASE_URL + API_KEY + '&q=' + query;
        console.log('url: ', url);
        
        const response = await axios.get(url)
        const data = response.data
        console.log('data.articles.length: ', data.articles.length);
          
        return data.articles
    } catch (error) {
        console.error(JSON.parse(JSON.stringify(error)))
    }
}
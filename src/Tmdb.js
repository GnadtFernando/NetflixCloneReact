const API_KEY = '4fa0e291d23a4fd2505db2486921aaa6';
const API_BASE = 'https://api.themoviedb.org/3';

const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}`)
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return [
            {
                slug: 'originals',
                title: 'Series Originais',
                items: await basicFetch(`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados para Você',
                items: await basicFetch(`/trending/all/week?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch(`/movie/top_rated?&language=pt-BR&api_key=${API_KEY}`)
            },
            {
            slug: 'action',
                title: 'Filmes de Ação',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=28`)
            },
            {
            slug: 'comedy',
                title: 'Filmes de Comédia',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=35`)
            },
            {
            slug: 'horror',
                title: 'Filmes de Terror',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=27`)
            },
            {
            slug: 'romance',
                title: 'Filmes de Romance',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=10749`)
            },
            {
            slug: 'decumentary',
                title: 'Documentários',
                items: await basicFetch(`/discover/movie?language=pt-BR&api_key=${API_KEY}&with_genres=99`)
            },  
        ];
    },
    getMovieInfo: async (movieId, type) => {
        let info = {}; 
        
        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?api_key=${API_KEY}&language=pt-BR`)
                break;
                default:
                    info = null;
                break;
            }
        }
        return info;
    }
}
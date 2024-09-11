import {useState,useEffect} from 'react';


import './App.css';
import SearchIcon from './Search.svg';
import MovieCard from './MovieCard';

//4ee1951ce51d3ed646f466361e5732c7
const API_url = 'https://api.themoviedb.org/3/discover/movie?api_key=c96af8ac7b920193bd3002cd5d6716f1&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';



// const API_url = 'http://www.omdbapi.com/?apikey=b8829258&t=A&page=2';



const App = () => {
    const  [movies, setmovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searcMovies = async(title) => {
        const response = await fetch(`${API_url}$s=${title}`);
        const data = await response.json();

        setmovies(data.results);
    }

    useEffect(() =>{
        searcMovies('Superman');

    }, []);

    return(
       <div className='app'>
            <h1> Netflix Movies </h1>

            <div className='search'>
                <input 
                placeholder='Search for your Movies'
                value={searchTerm}
                onChange={(e) => (setSearchTerm(e.target.value))} 
                />
                <img src = {SearchIcon} alt='search' onClick={() => searcMovies(searchTerm)}/>

            </div>

            {movies?.length > 0
                ?(
                    <div className='container'>
                        {movies.map( (movie) => (
                            <MovieCard movie = {movie} />
                        ))}
                        </div>
                    ) : (
                        <div className='Empty'>
                            <h2> No Movies Found</h2>

                        </div>
                    )}

       </div>
    
    );
}

export default App;
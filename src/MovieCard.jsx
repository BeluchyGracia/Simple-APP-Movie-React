// import React from 'react';

// const MovieCard = ({ movie }) =>{
//     return(
//         <div className='movie'>
//             <div>
//                 <p>{movie.release_date}</p>
//             </div>
//             <div>
//                 <img src={movie.poster_path !== 'N/A' ? movie.poster_path : 'https://via.placeholder.com/400'} alt={movie.title} />
//             </div>
//             <div>
//                 <span>{movie.popularity}</span>
//                 <h3>{movie.title}</h3>
//             </div>

//         </div>
//     );
// }

// export default MovieCard; 


import React from 'react';

const MovieCard = ({ movie }) => {
    // URL de base pour les affiches de films sur TMDB
    const posterUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
        : 'https://via.placeholder.com/400'; // Image par défaut si aucun poster n'est disponible

    return (
        <div className='movie'>
            <div>
                <p>{movie.release_date}</p>
            </div>
            <div>
                <img 
                    src={posterUrl} 
                    alt={movie.title} 
                />
            </div>
            <div>
                <span>{movie.popularity}</span>
                <h3>{movie.title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;




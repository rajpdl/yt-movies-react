var getMoviesByCategoryId = async (id) => {
    try{
        var result  = await fetch(`https://yt-movies.herokuapp.com/movie/${id}`);
        var movies  = await result.json();
        return movies;
    }catch(e) {
        return console.log('Some error occurred');
    }      
};

module.exports = { getMoviesByCategoryId };
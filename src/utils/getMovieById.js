var getMovieById = async (id) => {
    try{
        var result = await fetch(`https://yt-movies.herokuapp.com/movieById/${id}`);
        var movie = await result.json();
        return movie;
    }catch(e) {
        
    }
};

module.exports = { getMovieById };
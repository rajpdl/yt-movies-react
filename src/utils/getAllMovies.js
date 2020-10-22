var getAllMovies = async () => {
    try{
    var result = await fetch('https://yt-movies.herokuapp.com/movies');
    var movies = await result.json();
    if(result.status === 200) {
        return movies;
    }else{
        return false;
    }     
    }catch(e) {
        return console.log('some error occurred');
    }
};

module.exports = { getAllMovies };
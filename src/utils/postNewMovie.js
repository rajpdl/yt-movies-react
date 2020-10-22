var postNewMovie = async (movie) => {
    console.log(movie);
    try{
        var result = await fetch('https://yt-movies.herokuapp.com/movie', {
        method: "POST",
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(movie)        
        });
        var movie = result.json();
        return movie;
    }catch(e) {
        
    }
};

module.exports = { postNewMovie };
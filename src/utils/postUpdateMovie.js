var postUpdateMovie = async(movie) => {
    try{
        var result = await fetch(`https://yt-movies.herokuapp.com/${movie.id}`, {
            method: 'POST',
            headers: {
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

module.exports = { postUpdateMovie };
var deleteMovieById = async (id) => {
    try{
        var result = await fetch(`https://yt-movies.herokuapp.com/${id}`,{
            method: 'delete'
        });
        
        if(result.status === 200) {
            return true;
        }
        return false;
    }catch(e) {

    }
};

module.exports = { deleteMovieById };
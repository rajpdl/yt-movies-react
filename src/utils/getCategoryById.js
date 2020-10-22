var getCategoryById = async (id) => {
    try{
        var result  = await fetch(`https://yt-movies.herokuapp.com/category/${id}`);
        var category = await result.json();
        if(result.status === 200) {
            return category;
        }
        return false;
    }catch(e) {
        
    }  
};

module.exports = { getCategoryById };
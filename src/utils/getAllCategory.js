
var getAllCategory = async () => {
    try{
    var result = await fetch("https://yt-movies.herokuapp.com/categories")
    var categories = await result.json();
    return categories;
    }catch(e) {
        return console.log('Some error occurred');
    }
   
};

module.exports = { getAllCategory };
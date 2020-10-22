var postNewCategory = async (category) => {
    var result  = await fetch("https://yt-movies.herokuapp.com/category", {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(category)
    });
    var newCategory = await result.json();
    console.log(result.status);
    return newCategory;
};

module.exports = { postNewCategory };
var postUpdateCategory = async (category) => {

    try{
        var result = await fetch(`https://yt-movies.herokuapp.com/${category.id}`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            },
                            body: JSON.stringify(category)
                        });
        var category = await result.json();
        return category;
    }catch(e) {

    }
    
};

module.exports = { postUpdateCategory };
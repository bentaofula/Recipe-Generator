document.querySelector("form").addEventListener("submit", GetRecipe)

function GetRecipe(){
    const SearchValue = document.querySelector("#search").value;
    try{
        fetch(`https://api.edamam.com/search?q=${SearchValue}&app_id=54746f42&app_key=ee2be6bd51262229750b0f60e65f89a0&to=20`, {
           method: "POST",
           header: {
            "Access-Control-Allow-Origin": true
           }
        })
        .then(Response = Response.json()
        )
        .then(data =>{
            console.log(data)
            const food = data.hits;
            DesignOutput(food, SearchValue)
        })
        .catch(error => console.log(error.message))
       }catch{}   
        document.querySelector("#search").value =""
    }
    function DesignOutput(food, SearchValue) {
        const container = document.querySelector(".container");
        container.innerHTML = "";
        for(let i=0; i<food.length; i++);
        console.log(food[1].recipe.label);

        const Recipe = document.createElement("div");
        Recipe.setAttribute("class", "recipe");

        const Thumbnail = document.createElement("img");
        Thumbnail.src = food[1].recipe.image;

        const Details = document.createElement("div")
        Details.setAttribute("class", "recipe-details");

        const Name = document.createElement("h2");
        Name.innerHTML = food[1].recipe.label;

        const recipes = document.createElement("p")
        recipes.innerHTML = food[i].recipe.ingredientLines.join("<br/>")

        const Source = document.createElement("h3");
        Source.innerHTML = `Source : ${food[i].recipe.Source}`

        const Visit = document.createElement("a");
        Visit.href = food[i].recipe.url;
        Visit.innerHTML = "Visit Source";

        Details.append(Name)
        Details.append(recipes)
        Details.append(Source)
        Details.append(Visit)

        Recipe.append(Thumbnail)
        Recipe.append(Details)

        container.append(Recipes)
    }

    if(food.length<1) {
        document.querySelector("h2.search").innerHTML = `No search resultsfor "${SearchValue}"`
    }
    else{
        document.querySelector("h2.search").innerHTML = `Showing ${food.length} search results for "${SearchValue}"`
    }

 

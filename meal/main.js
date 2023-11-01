// function for api call
//its a random meal api

const meal = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  ).then((res) => res.json());
  //    call the element by id
  const container = document.getElementById("container");

  const data = response.meals[0];

  if (data) {
    // add response to show the data on browser
    container.innerHTML = `<h1 class="header"> Meal Name : ${data.strMeal}</h1><h1 class="header"> Meal Category : ${data.strCategory}</h1><h1 class="header"> Meal Area : ${data.strArea}</h1><p class="header"><span>Description:</span> ${data.strInstructions}</p><h1 class="header"> Image: </h1><img src='${data.strMealThumb}'/>`;
  }
};

// call the function

meal();


// coninter.innerHTML = "<h1 class='text-center	>MEAL NAME : " + data.strMeal + "</h1>";
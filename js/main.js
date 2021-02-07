myfunction = function (id) {
    // console.log(id.slice(7));
    let idNo = id.slice(7);
    let getContainer = document.getElementById("single-item");
    let markUp = `
        <img src="image/4.png" class="img-fluid rounded img-1" alt="">
        <br>
        <br>
        <h3 class="h4 text-light">Recipe name</h3>
        <div>
        </div>
        <hr class="col-5 mx-auto bg-light">
        <div class="text-left text-white">
            <p>Area: </p>
            <p>Category: </p>
            <h5 class="text-white h5">Ingredients:</h5>
            <ul id="allItems" class="ml-4 text-light">
                <li>
                    <p><i class="far fa-hand-point-right"></i> this no 1</p>
                </li>
            </ul>
            <p>Instruction: </p>
            <small class="font-italic">Tags: </small>
        </div>
        <br>
        <br>
        <a href="" class="text-danger text-center bg-white p-2 rounded">Watch the Process</a>
    `;
}
var arrayOfAllMeals = [];
const api = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
var searchButton = document.getElementById("search");
searchButton.addEventListener("click", () => {
    // If search button is clicked, I need to get the value from input bar first
    var inputValue = document.getElementById("search-bar").value;
    // console.log(inputValue);
    // Now if the value is empty, i should alert to search for something
    if (inputValue.length == 0) {
        alert("Please write something first in the box!!");
    }
    else {
        fetch(api + inputValue)
            .then(res => res.json())
            .then(data => {
                //  console.log(data.meals);
                let allResult = document.getElementById("all-items");
                allResult.innerHTML = "";
                let i = 0;
                const arrayOfMeals = data.meals;
                arrayOfAllMeals = data.meals;
                arrayOfMeals.forEach(meal => {
                    // console.log(meal.strArea);
                    let mealName = meal.strMeal;
                    let imageLink = meal.strMealThumb;
                    let markup = `
                    <div class="searched-item">
                        <img src="${imageLink}" class="img-fluid img-2" alt="">
                        <h6 class="h6 mt-2 text-center font-weight-bolder">${mealName}</h6>
                        <div class="col-6 px-0 mx-auto">
                            <button onclick="myfunction(this.id)" id="btn-no-${i}" class="btn-sm btn btn-outline-secondary">Details</button>
                        </div>
                    </div>
                    `;
                    i++;
                    allResult.innerHTML += markup;
                });
            })
            .catch((error) => {
                alert("Sorry The Recipe not found! :(")
            })
    }
    document.getElementById("search-bar").value = "";
});

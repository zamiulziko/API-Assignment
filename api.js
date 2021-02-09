fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(res => res.json())
.then(data => displayMeal(data));


const displayMeal = meal =>{
    const menu = document.getElementById('meal');
    for (let i = 0; i < meal.length; i++) {
        const food = meal[i];
        const menuDiv = document.createElement('div');

        // const name = document.createElement('h3');
        // name.innerText = meal.name;
        // menuDiv.appendChild(name);


        menu.appendChild(menuDiv);
 
    }
}
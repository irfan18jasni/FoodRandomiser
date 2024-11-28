const foodArray = ["Sushi","KFC","Chocolate","Pasta"]
const foodImageArray = [
    "https://th.bing.com/th/id/OIP.3HCXzbaAbsotNy8SJSHXQQAAAA?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.1K10z3UJ48R5WD7WTcXr3AHaHa?rs=1&pid=ImgDetMain",
    "https://th.bing.com/th/id/OIP.KSnkpEWz9h7RhvFTvHVlTAHaHa?rs=1&pid=ImgDetMain",
    "https://cdn-icons-png.flaticon.com/512/4727/4727368.png"
    ]
const drinkArray = ["Fanta","Sprite","Coke","Pepsi"]

function randomiseFood(){
    // PSEUDOCODE
    // 1. Randomise the food choice
    // const result = foodArray[1] // Sushi
    // This is how array works [0,1,2,3]
    
    // Randomiser is the number from 0 to 3
    const randomNumber = Math.floor(Math.random()*4)
    // It'll pop up randomNumber and the random number itself
    console.log('randomNumber',randomNumber)
    const result = foodArray[randomNumber] //Pasta
    const imgresult = foodImageArray[randomNumber]

    // 2. Link to the HTML
    const foodChoice = document.getElementById('food-choice')
    const foodImage = document.getElementById('food-image')

    // 3. Then you set it to the value
    foodChoice.innerText = result
    foodImage.src = imgresult

// console.log('function clicked')
}

function randomiseDrink(){
    // PSEUDOCODE
    // 1. Randomise the drink choice
    // Randomiser is the number from 0 to 3
    const randomNumber = Math.floor(Math.random()*4)
    // It'll pop up randomNumber and the random number itself
    console.log('randomNumber',randomNumber)
    const result = drinkArray[randomNumber]

    // 2. Link to the HTML
    const drinkChoice = document.getElementById('drink-choice')

    // 3. Then you set it to the value
    drinkChoice.innerText = result

}
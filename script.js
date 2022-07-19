let addButton = document.querySelector('.add-btn');
let inputData = document.querySelector('.inputData');
let counter = document.querySelector('.counter');
let incrementButton = document.querySelector('.increment-btn');
let decrementButton = document.querySelector('.decrement-btn'); 
let resetButton = document.querySelector('.reset-btn');
let colorButton = document.querySelector('.add-color');
let resetColorButton = document.querySelector('.reset-color');
let imgButton = document.querySelector('.add-img');
let resetImageButton = document.querySelector('.reset-img');
console.log(inputData.value)


addButton.addEventListener('click', function addNumber() {
    if (inputData.value === '') {
        alert("Add a number");
    }
    else {
        counter.innerHTML = inputData.value;
    }
    inputData.value = [];
})

incrementButton.addEventListener('click', function increment() {
    let addedValue = Number(counter.innerHTML);
    if (counter.innerHTML !== "0") {
        addedValue++;
        counter.innerHTML = addedValue;
    } else {
        alert("Add a number");
    }
})

decrementButton.addEventListener('click', function decrement() {
    let addedValue = Number(counter.innerHTML);
    if (counter.innerHTML !== "0") {
        addedValue--;
        counter.innerHTML = addedValue;
    } else {
        alert("Add a number");
    }
})


resetButton.addEventListener('click', function clearValue() {
    counter.innerHTML = 0;
});


colorButton.addEventListener('click', addColor);

function addColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;

}

resetColorButton.addEventListener('click', function resetColor() {
    document.body.style.backgroundColor = "rgb(20, 19, 19)";
    console.log("clicked");
});


const images = ["url('./Images/pexels-fauxels-3184159-modified (1).jpg')", "url('./Images/pexels-home-decor-interiors-1827054-modified.jpg')", "url('./Images/pexels-mikael-blomkvist-6476584-modified.jpg')", "url('./Images/pexels-tranmautritam-225502-modified.jpg')", "url('./Images/pexels-tranmautritam-326506-modified.jpg')", "url('./Images/pexels-vlada-karpovich-4050318-modified.jpg')"];

let count = 0
imgButton.addEventListener('click', function addImage() {
   count++;
   if (count < images.length) {
    let countImage = images[count];
    document.body.style.backgroundImage = countImage;
   } else {
    count = 0;
    countImage = images[count];
    document.body.style.backgroundImage = countImage;
   }
});

resetImageButton.addEventListener('click', function resetImage() {
    document.body.style.backgroundImage = [];
    count = -1;
});


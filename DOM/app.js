//Step 1
const alertBtn = document.createElement('button');
alertBtn.textContent = "Friendly message!"
alertBtn.addEventListener('click', function (){
    alert("Sending virtual hug...");
})
document.body.append(alertBtn);

//Step 2
const formBtn = document.getElementById('formSubmit');
formBtn.addEventListener('click', function(e){
    e.preventDefault();
    const formInput = document.getElementById('formInput');
    if (formInput.value != "") {
        alert(formInput.value);
    }
    
})

//Step 3
const hoverDiv = document.getElementById('hoverDiv');
hoverDiv.addEventListener('mouseenter', function() {
    hoverDiv.style.backgroundColor = "red";
})
hoverDiv.addEventListener('mouseleave', function() {
    hoverDiv.style.backgroundColor = "blue";
})

//Step 4
const para = document.createElement('p');
para.append("Colors weave into a spire of flame...");
document.body.append(para);
para.addEventListener('click', function() {
    //para.style.color = "red";
    para.style.color = "#"+Math.floor(Math.random()*16777215).toString(16);
})

//Step 5
const spanBtn = document.createElement('button');
spanBtn.textContent = "Add a span!";
const spanDiv = document.createElement('div');
document.body.append(spanBtn);
document.body.append(spanDiv);
spanBtn.addEventListener('click', function() {
    const spanName = document.createElement('span');
    spanName.append('Cameron');
    spanDiv.append(spanName);
})

//Step 6
let friendCounter = 0;
const friendBtn = document.getElementById('friendBtn');
const friendUl = document.getElementById('friendUl');
let friendArr = ["Josh", "Harry", "Jonny", "Cody", "Michael", "Sam", "Kimberleigh", "Chris", "Broc", "Shelby"];
friendBtn.addEventListener("click", function() {
    let newLi = document.createElement('li');
    newLi.textContent = friendArr[friendCounter];
    friendUl.append(newLi);
    friendCounter++;
    if (friendCounter === 10) {
        friendCounter = 0;
    }
})

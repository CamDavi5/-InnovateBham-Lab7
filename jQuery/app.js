//Step 1
const $alertBtn = $('<button>Friendly message!</button>')
$($alertBtn).click(function() {
    alert("Sending virtual hug...");
})
$('body').append($alertBtn);

//Step 2
const $formBtn = $('#formSubmit');
$($formBtn).click(function(e) {
    e.preventDefault();
    const $formInput = $('#formInput');
    if ($formInput.val() != "") {
        alert($formInput.val());
    }
    
})

//Step 3
const $hoverDiv = $('#hoverDiv');
$($hoverDiv).mouseenter(function() {
    $hoverDiv.css("background-color", "red");
})
$($hoverDiv).mouseleave(function() {
    $hoverDiv.css("background-color", "blue");
})

//Step 4
const $para = $('<p>Colors weave into a spire of flame...</p>');
$('body').append($para);
$($para).click(function() {
    //$para.css("color", "red");
    $para.css("color", "#"+Math.floor(Math.random()*16777215).toString(16));
})

//Step 5
const $spanBtn = $('<button>Add a span!</button>');
const $spanDiv = $('<div></div>');
$('body').append($spanBtn);
$('body').append($spanDiv);
$spanBtn.click(function() {
    const $spanName = $('<span>Cameron</span>');
    $spanDiv.append($spanName);
})

//Step 6
let friendCounter = 0;
const $friendBtn = $('#friendBtn');
const $friendUl = $('#friendUl');
let friendArr = ["Josh", "Harry", "Jonny", "Cody", "Michael", "Sam", "Kimberleigh", "Chris", "Broc", "Shelby"];
$($friendBtn).click(function() {
    let $newLi = $('<li></li>');
    $newLi.append(friendArr[friendCounter]);
    $friendUl.append($newLi);
    friendCounter++;
    if (friendCounter === 10) {
        friendCounter = 0;
    }
})

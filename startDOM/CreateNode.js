// Traversing The DOM //

var itemList = document.querySelector('#items');
//parentNode//
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode);


//parentElement//
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement);

//childNode//
console.log(itemList.childNodes);//return nodeList and linebreak are counted

//children//
console.log(itemList.children);//return HTMLCollection  and linebreak are not included
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow'; 

//firstChild//
console.log(itemList.firstChild);
//firstElementChild//
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello 4';


//lastChild//
console.log(itemList.lastChild);
//lastElementChild//
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='Hello 4';


//nextSibling//
console.log(itemList.nextSibling);
//nextElementSibling//
console.log(itemList.nextElementSibling);

//previousSibling//
console.log(itemList.previousSibling);
//previousElementSibling//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color ='green';

// Create a div //
//var newDiv = document.createElement('div');
// Add class //
//newDiv.className ='hello';
//console.log(newDiv);
// Add id //
//newDiv.id ='hello';
//console.log(newDiv);
// Add attribute//
//newDiv.setAttribute =('title' , 'Hello Div');
//Create text Node//
//var newDivText = document.createTextNode('HEllo Word');
// Add text to div
//newDiv.appendChild(newDivText);

//var container = document.querySelector('header .container');
//var h1 = document.querySelector('header h1');
//console.log(newDiv);
//newDiv.style.fonsize='30px';
//container.insertBefore(newDiv , h1);


//1Q)Now go head and add HEllo word before Item Lister
// Create a div //
var newDiv = document.createElement('div');
// Add class //
newDiv.className ='hello';
//console.log(newDiv);
// Add id //
newDiv.id ='hello';
//console.log(newDiv);
// Add attribute//
newDiv.setAttribute =('title' , 'Hello Div');
//Create text Node//
var newDivText = document.createTextNode('HEllo Word');
// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fonsize='30px';
container.insertBefore(newDiv , h1);

//2Q) Now go head and add HEllo word before Item 1

// Create a div
var newDiv = document.createElement('div');
// Add class
//newDiv.className = 'hello';
// Add id
//newDiv.id = 'hello';
// Add attribute
//newDiv.setAttribute('title', 'Hello Div');
// Create text Node
var newDivText = document.createTextNode('HEllo word');
// Add text to div
newDiv.appendChild(newDivText);

var itemsList = document.getElementById('items');
var item1 = document.querySelector('#items li:first-child'); // Select the first item

// Insert the newDiv before item1
itemsList.insertBefore(newDiv, item1);

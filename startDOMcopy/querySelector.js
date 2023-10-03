//querySelector//
//var header = document.querySelector('#main-header');
//header.style.borderBottom='solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Hello World'; // Although there are two input ,it will only select the first input by default
//var submit = document.querySelector('input[type="submit"]');
//submit.value="SEND";

//var item=document.querySelector('.list-group-item');
//item.style.color="red";

//var lastItem=document.querySelector('.list-group-item:last-child');
//lastItem.style.color="blue";
//var SecondItem =document.querySelector('.list-group-item:nth-child(2)');
//SecondItem.style.color="pink";

//querySelectorAll//
//var titles=document.querySelectorAll('.title');
//titles[0].textContent='Hello';
//titles[0].style.fontWeight="Bold";
//titles[0].style.color='green';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');

//for(var i=0 ; i<odd.length ;i++)
//{
    //odd[i].style.backgroundColor='#f4f4f4';
    //even[i].style.backgroundColor='#ccc';
    
//}




//Make the 2nd item have green background color
//Make the 3rd item invisible
var SecondItem =document.querySelector('.list-group-item:nth-child(2)');
SecondItem.style.backgroundColor="green";

// Select the 3rd list item (Item 3) by its index (0-based) within the list
//var thirdItem = document.querySelector('#items li:nth-child(3)');
//or
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');

// Set its display style to "none" to make it invisible
thirdItem.style.display = 'none';



//Using QuerySelectorALL change the font color to green for 2nd item in the item list
//Choose all the odd elements and make their background green using QuerySelectorALL﻿

//querySelectorAll//

// Change font color to green for the 2nd item in the item list
var secondItem = document.querySelectorAll('#items li')[1]; // Index 1 for the 2nd item
secondItem.style.color = 'lightgreen';

 //Select all odd items and make their background green
var oddItems = document.querySelectorAll('#items li:nth-child(odd)');
for (var i = 0; i < oddItems.length; i++) {
    oddItems[i].style.backgroundColor = 'lightgreen';
}


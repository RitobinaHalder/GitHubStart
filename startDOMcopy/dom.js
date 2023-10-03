//EXAMIN THE DOCUMENT OBJECT //
//console.dir(document);
//console.log(document.URL);
//console.log(document.title);
//document.title.123;
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.all);
//document.all[10].textContent="Hello";
//console.log(document.forms);
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//getElementById//
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById("header-title");
//var header = document.getElementById("main-header");
//console.log(headerTitle);
//headerTitle.textContent='Hello';
//headerTitle.innerText="GoodBye";
//Both innerText ans textContent can be used interchangebly . Difference is that innertext pays attention to style
//headerTitle.innerHTML='<h3>Hello</h3>';
//header.style.borderBottom='solid 3px #000';
//getElementsByClassName//
//var items=document.getElementsByClassName("list-group-item");
//console.log(items);
//console.log(items[1]);
//items[1].textContent="Hello 2";
//items[1].style.fontWeight="Bold";
//items[1].style.backgroundColor="#f4f4f4";
//items.styles.backgroundColor="red"//This will not work because it is HTML collections
//for(var i=0 ; i<items.length;i++)
//{
//  items[i].style.backgroundColor="#f4f4f4";
//}

//getElementsByTagName//
//var li=document.getElementsByTagName("li");
//console.log(li);
//console.log(li[1]);
//li[1].textContent="Hello 2";
//li[1].style.fontWeight="Bold";
//li[1].style.backgroundColor="#f4f4f4";
//items.styles.backgroundColor="red"//This will not work because it is HTML collections
//for(var i=0 ; i<li.length;i++)
//{
  //  li[i].style.backgroundColor="#f4f4f4";
//}

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
var titles=document.querySelectorAll('.title');
//titles[0].textContent='Hello';
titles[0].style.fontWeight="Bold";
titles[0].style.color='green';

//var odd=document.querySelectorAll('li:nth-child(odd)');
//var even=document.querySelectorAll('li:nth-child(even)');

//for(var i=0 ; i<odd.length ;i++)
//{
    //odd[i].style.backgroundColor='#f4f4f4';
    //even[i].style.backgroundColor='#ccc';
    


//}


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


//Write the code as per the youtuber does
//Make the 3 rd element in the list have green background color
//Make all the elements in the list have bold color font
var items=document.getElementsByClassName("list-group-item");
items[2].style.backgroundColor="#32c888";
//items.styles.backgroundColor="red"//This will not work because it is HTML collections
for(var i=0 ; i<items.length;i++)
{
  items[i].style.fontWeight="Bold";
}

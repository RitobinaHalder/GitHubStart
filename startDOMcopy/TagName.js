//getElementsByTagName//
var li=document.getElementsByTagName("li");
//console.log(li);
//console.log(li[1]);
//li[1].textContent="Hello 2";
//li[1].style.fontWeight="Bold";
//li[1].style.backgroundColor="#f4f4f4";
//items.styles.backgroundColor="red"//This will not work because it is HTML collections
for(var i=0 ; i<li.length;i++)
{
    li[i].style.backgroundColor="#f4f4f4";
}
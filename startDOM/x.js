var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input values
  var newItemName = document.getElementById('item').value;
  var newItemDescription = document.getElementById('description').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';

  // Create a div to hold the item content (name and description)
  var itemContent = document.createElement('div');

  // Create and append the item name
  var itemName = document.createElement('h5');
  itemName.appendChild(document.createTextNode(newItemName));
  itemContent.appendChild(itemName);

  // Create and append the item description
  var itemDescription = document.createElement('p');
  itemDescription.appendChild(document.createTextNode(newItemDescription));
  itemContent.appendChild(itemDescription);

  // Append the item content to the li element
  li.appendChild(itemContent);

  // Create edit button element
  var editBtn = document.createElement('button');
  // Add classes to edit button
  editBtn.className = 'btn btn-primary btn-sm float-right edit';
  // Append text node
  editBtn.appendChild(document.createTextNode('Edit'));

  // Create delete button element
  var deleteBtn = document.createElement('button');
  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append buttons to li
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);

  // Clear input fields after adding
  document.getElementById('item').value = '';
  document.getElementById('description').value = '';
}

// Filter Items
function filterItems(e){
  // Convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemContent = item.querySelector('div'); // Get the item content div
    var itemName = itemContent.querySelector('h5').textContent.toLowerCase(); // Get item name
    var itemDescription = itemContent.querySelector('p').textContent.toLowerCase(); // Get item description

    if(itemName.indexOf(text) !== -1 || itemDescription.indexOf(text) !== -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
} 









<!--<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <title>Item Lister</title>
</head>
<body>
  
  <header id="main-header" class="bg-success text-white p-4 mb-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <h1 id="header-title">Item Lister</h1>
        </div>
        <div class="col-md-6 align-self-center">
            <input type="text" class="form-control" id="filter" placeholder="Search Items...">
        </div>
      </div>
    </div>
  </header>
  <!--<div class="container">
   <div id="main" class="card card-body">
    <h2 class="title">Add Items</h2>
    <form id="addForm" class="form-inline mb-3">
      <input type="text" class="form-control mr-2" id="item">
      <input type="submit" class="btn btn-dark" value="Submit">
    </form>
->
    <div id="main" class="card card-body">
        <h2 class="title">Add Items</h2>
        <form id="addForm" class="form-inline mb-3">
          <input type="text" class="form-control mr-2" id="item" placeholder="Item Name">
          <input type="text" class="form-control mr-2" id="description" placeholder="Item Description">
          <input type="submit" class="btn btn-dark" value="Submit">
        </form>
        
        
    


    <h2 class="title">Items</h2>
    <ul id="items" class="list-group">
      <li class="list-group-item">Item 1 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 2 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 3 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
      <li class="list-group-item">Item 4 <button class="btn btn-danger btn-sm float-right delete">X</button></li>
    </ul>
   </div>
  </div>
  </div>
<script src="deleteAndEdit.js"></script>


</body>
</html>
-->


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
  <title>Item Lister</title>
</head>
<body>
  
  <header id="main-header" class="bg-success text-white p-4 mb-3">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
            <h1 id="header-title">Item Lister</h1>
        </div>
        <div class="col-md-6 align-self-center">
            <input type="text" class="form-control" id="filter" placeholder="Search Items...">
        </div>
      </div>
    </div>
  </header>
  <div class="container">
   <div id="main" class="card card-body">
    <h2 class="title">Add Items</h2>
    <form id="addForm" class="form-inline mb-3">
      <input type="text" class="form-control mr-2" id="item" placeholder="Item Name">
      <input type="text" class="form-control mr-2" id="description" placeholder="Item Description">
      <input type="submit" class="btn btn-dark" value="Submit">
    </form>
    <h2 class="title">Items</h2>
    <ul id="items" class="list-group">
    </ul>
   </div>
  </div>
  <script src="filter.js""></script>
</body>
</html>
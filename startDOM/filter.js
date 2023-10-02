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
var elList, newEl, newText;
elList = document.getElementById('list')

var addItem = document.getElementById('add-item');



function newItem(e) {
    // e.preventDefault(); 
    newEl = document.createElement('li'); 
    newText = document.getElementById('listItem').value;
    newEl.textContent = newText; 
    elList.appendChild(newEl);
    
}

addItem.addEventListener('click', newItem, false);

$('#listItem').keydown(function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
       newItem();
    }
});
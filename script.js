var button = document.getElementById('enter')
var input = document.getElementById('item')
var list = document.getElementById('list')

//event listener
button.addEventListener('click', () => {
    //gets text value of text inside input
    var text = document.querySelector('#item').value
    //create new list element (<li>...</li>)
    var newItem = document.createElement('li')
    newItem.textContent = text
    //adds the text of the newItem to the list
    list.appendChild(newItem);
    //error handling
    try{
        console.log(input)
        input.value =''
        console.log('cleared')
    } catch {
        console.log('did not clear')
    }
    //creates remove button for each item
    var removeButton = document.createElement('button')
    removeButton.textContent = 'Remove'
    removeButton.style.marginLeft = '5px'
    removeButton.style.marginBottom = '5px'
    removeButton.addEventListener('click', () => {
    newItem.remove()
})
    newItem.appendChild(removeButton)
})



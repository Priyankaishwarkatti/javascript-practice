let text = '' 
const items = ['shirt', 'pants', 'bag', 'face wash', 'milk']

items.forEach(shoppingList)    
document.querySelector('.list').innerHTML = text

function shoppingList(item, index) {
  text += index + 1 + ": " + item + "<br>"; 
}
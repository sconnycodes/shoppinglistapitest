const itemObj = document.querySelectorAll(".shoppingListItem")
console.log(itemObj[0].children[0].innerText)
console.log(itemObj[0].children[1].innerText)

const shoppingList = document.querySelector('#shopping')

shoppingList.addEventListener('click', _ => {
  // Send PUT Request here
  // First identify if edit or delete button clicked:
    let target = event.target.innerText
    console.log(event)
    if (target == "Edit"){
        console.log("hi")
    } else if (target == "Delete"){
        console.log("hello")
    }
//   let itemEdit = prompt("Enter item")
//   let categoryEdit = prompt("Enter category")
//   fetch("/shoppinglist", {
//     method: "put",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({
//         item: itemEdit,
//         category: categoryEdit
//     })
//   })
})

const deleteItem = document.querySelector('.deleteItem')

deleteItem.addEventListener('click', _ => {
  // Send DELETE Request here
  // Get text from clicked item for "item" and "category"
 
//   fetch("/shoppinglist", {
//     method: "delete",
//     headers: {"Content-Type": "application/json"},
//     body: JSON.stringify({
//         name: ""
//     })
//   })
})
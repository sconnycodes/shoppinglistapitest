const shoppingList = document.querySelector('#shopping')

const buttons = document.querySelectorAll("button")
console.log(buttons)
// existing item data for sending to db to identify document to be edited:
let itemTextPrev 
let itemCategoryPrev
let itemEditLocation

buttons.forEach(button => {
    button.addEventListener("click", e => {
        // First identify if edit or delete button clicked:
          let target = e.target.innerText
          
          if (target == "Edit"){
              let itemText = e.path[1].children[0].innerText
              let itemCat = e.path[1].children[1].innerText
              itemEditLocation = e
              editItemShow(itemText, itemCat)
          } else if (target == "Delete"){
              let itemText = e.path[1].children[0].innerText
              let itemCat = e.path[1].children[1].innerText
              let domListItem = e.path[1]
              deleteItem(itemText,itemCat,domListItem)
          } 
      })
})



// editItem function & form
function editItemShow(itemText, itemCat){
    document.querySelector(".editForm").classList.toggle("hidden")
    document.querySelector(".editItemPlaceholder").value = itemText
    document.querySelector(".editCategoryPlaceholder").value = itemCat
    itemTextPrev = itemText
    itemCategoryPrev = itemCat
};


document.querySelector(".editForm").addEventListener("click", e =>{
    let target = e.target.innerText
    if (target == "Confirm Edit"){
        let itemText = e.path[1].children[0].value
        let itemCat = e.path[1].children[1].value
        editItem(itemText, itemCat)
    } else if (target == "Cancel"){
        editItemShow()
    } 

})

async function editItem(itemText, itemCat){
    let res = await fetch("/shoppinglistedit", {
        method: "PUT",
        body: JSON.stringify({item: itemTextPrev, category: itemCategoryPrev,
        editItem: itemText,
        editCat: itemCat,
        }),
        headers:{"Content-type": "application/json"}
    })
    let data = await res.json()
    if (res.status === 201){
        // console.log("yay!")
        // console.log(itemEditLocation)
        itemEditLocation.path[1].children[0].innerText = itemText
        itemEditLocation.path[1].children[1].innerText = itemCat
        editItemShow()
      }
}


async function deleteItem(itemText,itemCat, domListItem){
    const res = await fetch("/shoppinglistdelete", {
        method: "DELETE",
        body: JSON.stringify({item: itemText, category: itemCat}),
        headers:{"Content-type": "application/json"}
    })
    const data = await res.json()
            if (res.status === 201){
              domListItem.remove()
              
            }
}




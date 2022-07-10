const shoppingList = document.querySelector('#shopping')

shoppingList.addEventListener('click', e => {
  // First identify if edit or delete button clicked:
    let target = e.target.innerText
    
    if (target == "Edit"){
        let itemText = e.path[1].children[0].innerText
        let itemCat = e.path[1].children[1].innerText
        editItemShow(itemText, itemCat)
    } else if (target == "Delete"){
        let itemText = e.path[1].children[0].innerText
        let itemCat = e.path[1].children[1].innerText
        let domListItem = e.path[1]
        console.log("hello")
        deleteItem(itemText,itemCat,domListItem)
    } 
})

// existing item data for sending to db to identify document to be edited:
let itemTextPrev 
let itemCategoryPrev
// editItem function & form
function editItemShow(itemText, itemCat){
    document.querySelector(".editForm").classList.toggle("hidden")
    document.querySelector(".editItemPlaceholder").value = itemText
    document.querySelector(".editCategoryPlaceholder").value = itemCat
    itemTextPrev = itemText
    itemCategoryPrev = itemCat
};

async function editItem(){
    
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




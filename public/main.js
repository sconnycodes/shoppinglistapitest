const shoppingList = document.querySelector('#shopping')

shoppingList.addEventListener('click', e => {
  // First identify if edit or delete button clicked:
    let target = e.target.innerText
    
    if (target == "Edit"){
        let itemText = e.path[1].children[0].innerText
        let itemCat = e.path[1].children[1].innerText
        editItem(itemText, itemCat)
    } else if (target == "Delete"){
        console.log("hello")
    } 
})

// existing item data for sending to db to identify document to be edited:
let itemTextPrev 
let itemCategoryPrev
// editItem function & form
function editItem(itemText, itemCat){
    document.querySelector(".editForm").classList.toggle("hidden")
    document.querySelector(".editItemPlaceholder").value = itemText
    document.querySelector(".editCategoryPlaceholder").value = itemCat
    itemTextPrev = itemText
    itemCategoryPrev = itemCat
};


document.querySelector(".editForm").addEventListener("click", e => {
    let edittarget = e.target.innerText
    if(edittarget == "Cancel"){
        document.querySelector(".editForm").classList.add("hidden")
    } else if (edittarget == "Confirm Edit"){
        let editrequest = {
            itemTextPrev: itemTextPrev
        }
        fetch("/shoppinglistedit")
    }
});
function openPopup(id) {
    let popup = document.getElementById(id);
    popup.classList.add("opened");
}

function closePopup(id) {
    let popup = document.getElementById(id);
    popup.classList.remove("opened");
}

function updateStock(id){
    var sel = document.getElementById("selectedAction");
    
    if (sel.value == "remove") {
        
    } else if (sel.value == "insert") {

    }
    
    console.log(sel.value);
}



console.log("Welcome to notes app. This is notes.js.");
showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addText = document.getElementById("addText");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        var notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }


    notesObj.push(addText.value);

    localStorage.setItem("notes", JSON.stringify(notesObj));

    addText.value = "";

    

    showNotes();

});

function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) {
       var notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";

    notesObj.forEach(function (element, index) {
        html += `<div class="card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Note ${index + 1}</h5>
          <p class="card-text">${element}</p>
          <button id=${index} onclick="del(this.id)" class="btn btn-primary">Delete Note</a>
        </div>
      </div>`;
    });

    let notesElm=document.getElementById("notes");

    if(notesObj.length != 0){
        notesElm.innerHTML=html;
    }

    else{
        notesElm.innerHTML=`Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

function del(index){
    

    let notes = localStorage.getItem("notes");

    if (notes == null) {
       var notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
    
}

search=document.getElementById("searchText");

search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    

    let card= document.getElementsByClassName("card");

    Array.from(card).forEach(function(element){
        let cardText = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if(cardText.includes(inputVal)){
            element.style.display="block";
        }

        else{
            element.style.display="none";
        }
    });
});
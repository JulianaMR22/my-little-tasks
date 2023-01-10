let input_name = document.getElementById("input_name");
let area_description = document.getElementById("area_description");
let button_add = document.getElementById("button_add");
let content_notes = document.getElementById("content_notes");

button_add.addEventListener("click",function(){
    content_notes.innerHTML += `<div class="note" id="note">
            <p class="title_note">${input_name.value}</p>
            <p class="sub_note">
              <span class="detail">Put your mouse over for details...</span>
              <span class="complete_description"
                >${area_description.value}
              </span>
            </p>

            <div class="button">
              <button class="note_button" onclick="document.getElementById('note').remove()">Delete</button>
            </div>
          </div>`;
    input_name.value = "";
    area_description.value = "";
});
document.querySelector("#add-time").addEventListener("click", cloneField);

function cloneField() {
    
    // selecionar os campos que serão copiados
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true);

    // limpar os campos
    const fields = newFieldContainer.querySelectorAll("input");
    fields.forEach(function(field) {
        field.value = "";
    })


    fields[0].value = "";
    fields[1].value = "";
    
    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
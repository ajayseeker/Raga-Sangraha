const inp = document.getElementsByClassName("form-control")[0];
var ragasElems = [...document.getElementById("raga-description").children];

inp.addEventListener("input", searchText);

function searchText(event){
    let search = event.target.value.toLowerCase();
    let ragaDesc = document.getElementById("raga-description");
    ragaDesc.innerHTML = "";
    console.log("Log:- ", ragasElems.length, ragaDesc);
    for(let i = 0 ; i < ragasElems.length ; i++){
        const raga = ragasElems[i];
        const ragaNameElem = raga.querySelector("h3");
        let ragaName = String(ragaNameElem.innerHTML).toLowerCase();
        console.log(ragaName, search);
        if(ragaName.includes(search) === true){
            ragaDesc.appendChild(raga);
        }
    }
}
const inp = document.getElementsByClassName("form-control")[0];

inp.addEventListener("input", searchText);
const ragasElems = [...document.getElementById("raga-description").children];

// const links = document.getElementsByClassName("icon-link");
// console.log(links);
// for(let i = 0 ; i < links.length ; i++){
//     links[i].addEventListener("click", ragaExplored);
// }


function searchText(event){
    let search = event.target.value.toLowerCase();
    let ragaDesc = document.getElementById("raga-description");

    ragaDesc.innerHTML = "";
    for(let i = 0 ; i < ragasElems.length ; i++){
        
        const raga = ragasElems[i];
        const ragaNameElem = raga.querySelector("h3");
        let ragaName = String(ragaNameElem.innerHTML).toLowerCase();
        console.log(ragaName);
        console.log(search);
        if(ragaName.includes(search) === true){
            ragaDesc.appendChild(raga);
        }
    }
}

// function ragaExplored(event){
    
//     console.log("ragaExplored Hit!");
//    console.log(event.srcElement);
//     var ragaName = String(event.srcElement.innerHTML);
//     console.log(ragaName);
//     window.location.href="./raga.html?raga-name="+ragaName;

//     // var elem = event.target.children[0];
//     // const ragaNameElem = elem.querySelector("h3");
//     // let ragaName = String(ragaNameElem.innerHTML).toLowerCase();
//     // console.log(ragaName);
// }

const filePath = "resources/Raga-Information.json";

// adding event handler to search text box
const inp = document.getElementsByClassName("form-control")[0];
inp.addEventListener("input", searchText);

//Saving the raw raga-card template, to be used later
const ragaInfo = getRagaInfo();
var ragaCard =  document.getElementsByClassName("raga-card")[0];

//emptying the raw raga-card element present
var ragaCardParentDiv = document.getElementById("raga-description");
ragaCardParentDiv.removeChild(ragaCard);

//Reads the json file $"filePath" and return its content as a promise
async function getRagaInfo() { 
    const prom =  await fetch(filePath); 
    const info = await prom.json();
    console.log(info);
    return info;
}

//event handler which redirects to the selected raga page 
function ragaExplored(event)
{
    let buttonElem = event.srcElement;
    let ragaName = buttonElem.getAttribute("raga");
    // var ragaName = String(event.srcElement.innerHTML);
    window.location.href="./raga.html?raga-name="+ragaName;
}

//event handler to filter ragas by the text entered in Search Box
async function searchText(event){
    const ragasElems = [...document.getElementsByClassName("raga-card")];

    for(var elem of ragasElems){
        ragaCardParentDiv.removeChild(elem);
    }

    let search = event.target.value.toLowerCase();
    const info = await ragaInfo;

    for(const [key, value] of Object.entries(info)){
        if(key.toLowerCase().includes(search) !== true) continue;
        
        var card = ragaCard.cloneNode(true);
        var ragaName = card.getElementsByClassName("name")[0];
        ragaName.innerText = key;

        var descriptionElem = card.getElementsByClassName("description")[0];
        descriptionElem.innerText = info[key]["_description_"];
        
        let link = card.getElementsByClassName("btn-info")[0];
        link.addEventListener("click", ragaExplored);
        link.setAttribute("raga", key);

        ragaCardParentDiv.appendChild(card);
    }
}

(async () =>{
    const info = await ragaInfo;
    for(const [key, value] of Object.entries(info)){
        var card = ragaCard.cloneNode(true);
        
        //setting the raga name in card
        var ragaName = card.getElementsByClassName("name")[0];
        ragaName.innerText = key;

        //Setting the raga description in the card
        var descriptionElem = card.getElementsByClassName("description")[0];
        descriptionElem.innerText = info[key]["_description_"];

        //subscribing to the click event of button
        let link = card.getElementsByClassName("btn-info")[0];
        link.addEventListener("click", ragaExplored);

        //Adding additional attribute of raga to the button.
        //This shall be used in the click event handler to determine which raga is clicked.
        let button = card.getElementsByClassName("btn-info")[0];
        button.setAttribute("raga", key);
        
        //adding the card to the page
        ragaCardParentDiv.appendChild(card);
    }
} )();



    // "bhairav":{
    //     "_raga_name_": "भैरव",
    //     "_thaat_":"भैरव",
    //     "_jaati_":" संपूर्ण-संपूर्ण ",
    //     "_vadi_samvadi_":"ध - रे",
    //     "_samaya_":"दिन का प्रथम प्रहर",
    //     "_aaroh_":"सा <komal>रे</komal>  <komal>ग</komal> म प <komal>ध</komal> <komal>नी</komal> <tar>सा</tar>",
    //     "_avaroh_" :"<tar>सा</tar> <komal>नी</komal>  <komal>ध</komal> प म <komal>ग</komal> <komal> रे </komal> सा",
    //     "_pakad_":"म प <komal>ग</komal> म <komal>रे</komal> सा, <komal>ग</komal> म <komal>ध</komal> प, <komal>ध</komal> <komal>नी</komal> <komal>रे</komal> सा",
    //     "_nyas_":"सा, <komal>रे</komal>, प, <komal>ध</komal>",
    //     "_vishesh_":"<komal>रे</komal>  और <komal>ध</komal> पर आंदोलन।",
    //     "_swar_malika_":"./resources/Bhairavi_SwarMalika.jpeg",
    //     "_bandish_":"./resources/Bhairavi_Bandish.jpeg",
    //     "_description_":"मालकौंस राग भारतीय शास्त्रीय संगीत का एक महत्वपूर्ण और प्रसिद्ध राग है, जो विशेषकर हिन्दुस्तानी संगीत परंपरा में सुना जाता है।" 
    // },
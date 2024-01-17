const filePath = "resources/Raga-Information.json";
async function getRagaInfo() { 
    const prom =  await fetch(filePath); 
    const info = await prom.json();
    console.log(info);
    return info;
}

const ragaInfo = getRagaInfo();
var ragaCard =  document.getElementsByClassName("raga-card")[0];

var ragaCardParentDiv = document.getElementById("raga-description");
console.log(ragaCardParentDiv);
ragaCardParentDiv.removeChild(ragaCard);


function ragaExplored(event)
{
      console.log("ragaExplored Hit!");
      console.log(event.srcElement);
      var ragaName = String(event.srcElement.innerHTML);
      console.log(ragaName);
      window.location.href="./raga.html?raga-name="+ragaName;
}

(async () =>{
    const info = await ragaInfo;
    console.log(info);
    for(const [key, value] of Object.entries(info)){
        // console.log(key);
        var card = ragaCard.cloneNode(true);
        // console.log(card);
        var ragaName = card.getElementsByClassName("name")[0];
        ragaName.innerText = key;

        var descriptionElem = card.getElementsByClassName("description")[0];
        descriptionElem.innerText = info[key]["_description_"];

        let link = card.getElementsByClassName("icon-link")[0];
        link.addEventListener("click", ragaExplored);

        console.log(key);
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
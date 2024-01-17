const filePath = "resources/Raga-Information.json";
async function getRagaInfo() { 
    const prom =  await fetch(filePath); 
    const info = await prom.json();
    return info;
}
function getUrlVars()
{
      var vars = [], hash;
      var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
   
      for(var i = 0; i < hashes.length; i++)
      {
          hash = hashes[i].split('=');
          hash[1] = unescape(hash[1]);
          vars.push(hash[0]);
          vars[hash[0]] = hash[1];
      }
      console.log(vars);
      return vars;
  }

var ragaName = String(getUrlVars()["raga-name"]);
const ragaInfo = getRagaInfo();

(async () =>{
    const info = await ragaInfo;
    console.log("in raga.js, ragaName  = " + ragaName);
    console.log(info);
    for(const [key, value] of Object.entries(info[ragaName])){
        document.body.innerHTML = document.body.innerHTML.replace(key, value);
    }
} )();

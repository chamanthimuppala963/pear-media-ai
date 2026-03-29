const API_KEY = "KRISHNA_API_KEY";
async function enhanceText(){

let text = document.getElementById("prompt").value;

let response = await fetch(
"https://api.openai.com/v1/chat/completions",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer " + API_KEY
},
body:JSON.stringify({
model:"gpt-4o-mini",
messages:[
{role:"user",
content:`Improve this image prompt: ${text}`}
]
})
});

let data = await response.json();

document.getElementById("enhanced").innerText =
data.choices[0].message.content;
}
async function generateImage(){

let prompt =
document.getElementById("enhanced").innerText;

let response = await fetch(
"https://api.openai.com/v1/images/generations",
{
method:"POST",
headers:{
"Content-Type":"application/json",
"Authorization":"Bearer " + API_KEY
},
body:JSON.stringify({
model:"gpt-image-1",
prompt:prompt,
size:"1024x1024"
})
});

let data = await response.json();

document.getElementById("images").innerHTML =
`<img src="${data.data[0].url}" />`;
}
function analyzeImage(){
document.getElementById("analysis").innerText =
"Image contains objects and modern visual style.";
}pear-media-ai

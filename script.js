
// Clear

let clear = document.getElementById("clear")
clear.onclick = function(){
    para.textContent = ""
    history.textContent= ""
}

let para = document.querySelector('p')
let container = document.querySelector("#container")

let div = container.getElementsByTagName('div')
let history = document.getElementById("history")
let equal = document.querySelector("#equal")


equal.addEventListener('click',function(){
    if(history.innerText == ""){
        f = new Function(`para.textContent`, `return para.textContent`)
        history.innerText = f(para.textContent)
        para.textContent = ""
    }
   else if(history.innerText != ""){
       history.innerText =  eval(history.innerText + para.textContent)
       para.textContent = ""
      
  
   }
})

for(let i = 0; i < div.length-1; i++)
{
  
    div[i].addEventListener('click', function(){
        if(para.innerText == "")
    {
    para.innerText = div[i].innerText
    }
        else if(para.innerText != "")
    {
            para.innerText = para.innerText + div[i].innerText
    }
   
    })};

let apple = "10 + 10"
for(let i = 0; i < apple.length; i++){
 cheese = parseInt(apple[i])}

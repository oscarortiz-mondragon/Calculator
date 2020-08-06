
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


equal.addEventListener('click',function(p,his){
    if(history.innerText == ""){
        let p = para.textContent
        history.innerText =  new Function(`return ` + p)()
        para.textContent = ""
      
    }
   else if(history.innerText != ""){
       let p = para.textContent
       let his = history.innerText
       history.innerText =  new Function(`return `+ p + his)()
       
    para.textContent = ""
    
  
   }
})

  
for(let i = 0; i < div.length-1; i++)
{
  
    div[i].addEventListener('click', function(){
        if(para.innerText == "")
    {
    para.innerText = history.textContent+ div[i].innerText
    history.innerText = ""
    }
        else if(para.innerText != "")
    {
            para.innerText = para.innerText + div[i].innerText
            
    }
   
    })};

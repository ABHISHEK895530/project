let allbtn = document.querySelectorAll('.btn');
let h1 = document.querySelector('h1');
document.getElementById('reset-btn').addEventListener('click',()=>{
    location.reload()
    
})

const winp =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]



let turno = "O";
allbtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        
        btn.innerHTML = turno
        btn.disabled = true
        
        turno = turno == "O"? "X":"O";
        
        checkwinner();
        
    })
    
})

const afterwin= function(){
    for (const btn of allbtn) {
        btn.disabled = true;
        
    }
}

const checkwinner= function(){
    
    for(let pattern of winp) {
        let value1 = allbtn[pattern[0]].innerHTML
        let value2 = allbtn[pattern[1]].innerHTML
        let value3 = allbtn[pattern[2]].innerHTML
        
        if (value1 != "" && value2 != "" && value3 != "") {
            if (value1 === value2 && value2 == value3) {
                console.log("win");
                h1.classList.remove('h1-hide')
                h1.innerHTML = `congratulation winner is ${value1}`
                h1.style.textAlign = "center"
                h1.style.color = "blue"
                afterwin();
                
            }
            
            
        }
    }
}
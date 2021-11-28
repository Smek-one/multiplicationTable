let root =document.getElementById('root');

root.style.display="none";
let btn = document.getElementById('btn');


let getValue = () =>{

    if(number <=10){
           let number = document.getElementById('number').value;     
        }
    

    let title = document.createElement('h2');
    root.style.display="block";
    title.innerText = "Table de " + number.value;
    root.prepend(title);
  
    for (i = 1; i <= 10; i++) {
        let displayTable = document.createElement('li');
        
        displayTable.innerHTML = (number.value + " x " +i+ " = "+number.value*i);
        root.append(displayTable);
        }
    }
    let hideBtn = () =>{
        btn.style.display='none';
    }
    let clear =document.getElementById('clear');
    clear.style.display='none';
    let displayBtn = () =>{
        clear.style.display="inline";
    }



btn.addEventListener('click',getValue);
btn.addEventListener('click',hideBtn);
btn.addEventListener('click', displayBtn)

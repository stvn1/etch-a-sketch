const container = document.querySelector('.grid');
let size =70;

function makeSquares(size){
    for( var i=1; i <= size*size; i++){
    let createDiv = document.createElement('div');
    createDiv.setAttribute('class','gridItem');
    //createDiv.textContent=i;
    createDiv.addEventListener('mouseover', () => {
        createDiv.setAttribute('class','selected');
    })
    container.appendChild(createDiv);
    }
}
makeSquares(size);

function clear(size){
    for (i=0; i<=size*size;i++){
        let selected = document.querySelector('.selected');

        if(selected !=null){
            selected.setAttribute('class','gridItem');

            
        }
    }


}


let buttonClear= document.querySelector('#button-clear');

buttonClear.addEventListener('click', ()=>{
   clear(size);
});

let buttonResize= document.querySelector('#button-resize');

buttonResize.addEventListener('click', ()=>{
   let choice = prompt('What size you would you like ' + 
    'the sketch to be, please choose a number between 70 and 100');
    clearBox('grid');

    makeSquares(choice);
    
   
 


});

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}






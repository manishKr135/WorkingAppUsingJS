var options = document.getElementsByName('mode');
var editSection = document.getElementById('edit');
var addSection = document.getElementById('add');

var cards = document.getElementsByName('cardSelected');
var card1 = document.querySelector('.card1');
var card2 = document.querySelector('.card2');
var card3 = document.querySelector('.card3');

var task = document.getElementById('work');
var cardTitle = document.getElementById('cardTitle');

var ul1 = document.createElement('ul');
var ul2 = document.createElement('ul');
var ul3 = document.createElement('ul');

function selectCard(card) {
    // code goes here to select a card  
    
    let optionValue;
    for(let option of options){
        if(option.checked){
          optionValue = option.value
        }
    }
    if(optionValue === 'delete'){
        deleteMode();
        let btns = document.querySelectorAll(`.${card} ul li button`);
        for (btn of btns){
            btn.style.display = 'inline-block';
        }

    }

    if(optionValue==='edit'){     
        cardTitle.value = document.querySelector(`.${card} h2`).innerText;
    }

   if(card === card1.className){
       card1.id = 'selected'
       card2.id = ''
       card3.id = ''
       
   }
   if(card === card2.className){
       card2.id = 'selected'
       card1.id = ''
       card3.id = ''
       
   }
   if(card === card3.className){
       card3.id = 'selected'
       card2.id = ''
       card1.id = ''
       
   }
}

function addWork() {
    // code goes here for add work mode
    if(task.value===""){
        return;
      }
    let cardValue;
   
    for(let card of cards){
        if(card.checked){
            cardValue = card.value
        }
      }

        if(cardValue === 'card1Selected'){
           if(card1.contains(ul1)){
                let listItem = document.createElement('li');
                listItem.appendChild(document.createTextNode(task.value));
                document.querySelector('.card1 ul').appendChild(listItem);

                var deleteButton = document.createElement("button");
                deleteButton.setAttribute("id", `deleteBtn${document.querySelectorAll('.card1 ul li').length}`);
                deleteButton.setAttribute("class", 'delBtn');
                deleteButton.appendChild(document.createTextNode(" X "));
                ul1>listItem.appendChild(deleteButton).addEventListener("click", deleteWork);
           }
           else{
               card1.appendChild(ul1);
               let listItem = document.createElement('li');
               listItem.appendChild(document.createTextNode(task.value));
               document.querySelector('.card1 ul').appendChild(listItem);

               var deleteButton = document.createElement("button");
               deleteButton.setAttribute("id", `deleteBtn${document.querySelectorAll('.card1 ul li').length}`);
               deleteButton.setAttribute("class", 'delBtn');
               deleteButton.appendChild(document.createTextNode(" X "));
               ul1>listItem.appendChild(deleteButton).addEventListener("click", deleteWork);
           }
        }
        if(cardValue === 'card2Selected'){
            if(card2.contains(ul2)){
                let listItem = document.createElement('li');
                listItem.appendChild(document.createTextNode(task.value));
                document.querySelector('.card2 ul').appendChild(listItem);

                var deleteButton = document.createElement("button");
                deleteButton.setAttribute("id", `deleteBtn${document.querySelectorAll('.card2 ul li').length}`);
                deleteButton.setAttribute("class", 'delBtn');
                deleteButton.appendChild(document.createTextNode(" X "));
                ul1>listItem.appendChild(deleteButton).addEventListener("click", deleteWork);
           }
           else{
               card2.appendChild(ul2);
               let listItem = document.createElement('li');
               listItem.appendChild(document.createTextNode(task.value));
               document.querySelector('.card2 ul').appendChild(listItem);

               var deleteButton = document.createElement("button");
               deleteButton.setAttribute("id", `deleteBtn${document.querySelectorAll('.card2 ul li').length}`);
               deleteButton.setAttribute("class", 'delBtn');
               deleteButton.appendChild(document.createTextNode(" X "));
               ul1>listItem.appendChild(deleteButton).addEventListener("click", deleteWork);
           }
           
        }
        if(cardValue === 'card3Selected'){
            if(card3.contains(ul3)){
                let listItem = document.createElement('li');
                listItem.appendChild(document.createTextNode(task.value));
                document.querySelector('.card3 ul').appendChild(listItem);

                var deleteButton = document.createElement("button");
                deleteButton.setAttribute("id", `deleteBtn${document.querySelectorAll('.card3 ul li').length}`);
                deleteButton.setAttribute("class", 'delBtn');
                deleteButton.appendChild(document.createTextNode(" X "));
                ul1>listItem.appendChild(deleteButton).addEventListener("click", deleteWork);
           }
           else{
               card3.appendChild(ul3);
               let listItem = document.createElement('li');
               listItem.appendChild(document.createTextNode(task.value));
               document.querySelector('.card3 ul').appendChild(listItem);

               var deleteButton = document.createElement("button");
               deleteButton.setAttribute("id", `deleteBtn${document.querySelectorAll('.card3 ul li').length}`);
               deleteButton.setAttribute("class", 'delBtn');
               deleteButton.appendChild(document.createTextNode(" X "));
               ul1>listItem.appendChild(deleteButton).addEventListener("click", deleteWork);
           }
           
        }
        
        task.value = "";
}

function deleteWork() {
    // code goes here to delete a work in a card
    this.parentNode.remove();
}

function update() {
    let cardValue;
    
    for(let card of cards){
        if(card.checked){
            cardValue = card.value
        }
      }
      let cardName = document.querySelector(`#${cardValue}`).parentNode.className;
    
        document.querySelector(`.${cardName} h2`).innerText = cardTitle.value
       
        addSection.style.display = 'block';
        editSection.style.display = 'none';
        cardTitle.value = "";
}

function clearWorkList() {
    let card1Ul =  document.querySelector('.card1 ul')
    let card1U2 =  document.querySelector('.card2 ul')
    let card1U3 =  document.querySelector('.card3 ul')
    card1Ul?card1Ul.remove(): "";
    card1U2?card1U2.remove(): "";
    card1U3?card1U3.remove(): "";

  
}

function changeMode() {
  // code goes here switch between add work, update card title and delete work
  //let options = document.querySelectorAll('[name="mode"]')
  let optionValue;
  for(let option of options){
      if(option.checked){
        optionValue = option.value
      }
  }
  
  let cardValue;
    
  for(let card of cards){
      if(card.checked){
          cardValue = card.value
      }
    }
    let cardName = document.querySelector(`#${cardValue}`).parentNode.className;
    let btns = document.querySelectorAll(`.${cardName} ul li button`);
    

    if(optionValue === 'edit'){
        editSection.style.display = 'block';
        addSection.style.display = 'none';
        cardTitle.value = document.querySelector(`.${cardName} h2`).innerText;
        deleteMode();
    }
    if(optionValue === 'add'){
        addSection.style.display = 'block';
        editSection.style.display = 'none';
        deleteMode();
        
    }
    if(optionValue === 'delete'){
        addSection.style.display = 'none';
        editSection.style.display = 'none';
        
        for(btn of btns){
            btn.style.display = 'inline-block';
        }
    }
}

function deleteMode() {
  // code goes here for delete Mode
  let allDltBtns = document.querySelectorAll('.delBtn');
  for(btn of allDltBtns){
    btn.style.display = 'none';
}
}


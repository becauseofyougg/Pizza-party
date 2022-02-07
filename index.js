document.getElementById('load-btn').addEventListener('click', () => {
  
  document.getElementById('app').append('waiting...');
  document.getElementById("load-btn").className = "loading";
  
  function showItems() {    
    document.getElementById("load-btn").classList.remove("loading");
    document.getElementById("app").innerHTML = null;
    let pizza = document.getElementById("pizza");
    pizza.innerHTML = null;    
      
    fetch('https://gp-js-test.herokuapp.com/pizza')    
    .then((response) => response.json())    
    .then(response => {
     let items = Array.from(response.party)
     let visitors = items.map(visitor => {
       return {name: visitor.name, eatsPizza:visitor.eatsPizza}
     })
     .filter(visitor => visitor.eatsPizza === true)
     
     let guests = document.getElementById("guests");
     let allPeople = items.map(element => element.name)  
     guests.innerHTML = null
     
     guests.append(`Party participants(${allPeople.length}): ${allPeople}`)

     let attendingPeople = visitors.map(element => element.name)
     let participants = document.getElementById("participants");
     participants.innerHTML = null;
     participants.append(`Pizza eaters(${attendingPeople.length}): ${attendingPeople}`)

     let cheese =  document.createElement('div');
     cheese.className = "cheese";

     let pep1 =  document.createElement('div');
     let pep2 =  document.createElement('div');
     let pep3 =  document.createElement('div');
     let pep4 =  document.createElement('div');
     let pep5 =  document.createElement('div');
     let pep6 =  document.createElement('div');

     pep1.classList = "pep1 pepperoni";
     pep2.classList = "pep2 pepperoni";
     pep3.classList = "pep3 pepperoni";
     pep4.classList = "pep4 pepperoni";
     pep5.classList = "pep5 pepperoni";
     pep6.classList = "pep6 pepperoni";

    for(let key in attendingPeople){ 

      pizza.className = "sliceWrapper";
      let li = document.createElement('li');
      
      li.className = "triangle";
      
      li.style.transform = `rotate(calc(((360deg / ${attendingPeople.length}) * ${key})))`
      let secondDiv = document.createElement('div');
      
      secondDiv.style.transform = `rotate(calc(90deg + (360deg / ${attendingPeople.length}))`      
      pizza.append(li)
      pizza.append(cheese)
      cheese.append(pep1)
      pizza.append(pep2)
      pizza.append(pep3)
      pizza.append(pep4)
      pizza.append(pep5)
      pizza.append(pep6)
      li.append(secondDiv)  
    }
  })
  }
  setTimeout(() => showItems(), 3000);  
})


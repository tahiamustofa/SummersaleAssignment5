function spoonFor(){
    const spoon = document.getElementById('spoon');
     const spoonName = spoon.innerText;
     const spoonsId = document.getElementById('spoonsId');
     const spoonPrice = parseFloat(spoonsId.innerText);
     
     addName(spoonName,spoonPrice); 
}

function accessories() {
    const accessories = document.getElementById('accessories');
    const accessoriesName = accessories.innerText;
    
    const accessoriesId = document.getElementById('accessoriesId');
    const accessoriesPrice = parseFloat(accessoriesId.innerText);
    addName(accessoriesName,accessoriesPrice); 
}
function cooker(){
    const cooker= document.getElementById('cooker');
    const cookerName = cooker.innerText;
    const cookerId= document.getElementById('cookerId');
    const cookerPrice = parseFloat(cookerId.innerText);
    addName(cookerName,cookerPrice); 
    }

    function sportsBackCap() {
        const sportsBackCap = document.getElementById('sportsBackCap');
        const sportsBackCapName = sportsBackCap.innerText;
        const sportsBackCapId = document.getElementById('sportsBackCapId');
        const sportsBackCapPrice = parseFloat(sportsBackCapId.innerText);
        addName(sportsBackCapName,sportsBackCapPrice); 
    }

    function jersey() {
      const jersey = document.getElementById('jersey');
      const jerseyName = jersey.innerText;
      const jerseyId = document.getElementById('jerseyId');
      const jerseyPrice = parseFloat(jerseyId.innerText);
      addName(jerseyName,jerseyPrice); 
    }
    function sportsCates() {
       const sportsCates= document.getElementById('sportsCates');
       const  sportsCatesName =sportsCates.innerText;
       const sportsId= document.getElementById('sportsId');
       const  sportsPrice = parseFloat(sportsId.innerText);
       addName(sportsCatesName, sportsPrice); 
    }
    
      let totalPrice = 0;
      let discountAmont = 0;

    function addName(name,price) {
        const makeProduct = document.getElementById('makeProduct');
        const count = makeProduct.childElementCount;  
        const p = document.createElement('p');
        p.innerHTML = `${count+1}. ${name}`;
         
        makeProduct.appendChild(p);

        totalPrice = totalPrice + price; 
        UpdateDisplay()
        
    }

    function UpdateDisplay(){
     const currentTotal = document.getElementById('currentTotal');
     currentTotal.innerText = `${totalPrice.toFixed(2)}`;
     const discount= document.getElementById('discount');
     discount.innerText = discountAmont.toFixed(2);
     const finalTotal= document.getElementById('finalTotal');
     finalTotal.innerText = (totalPrice - discountAmont).toFixed(2);


     const makePurchase= document.getElementById('makePurchase');
  if (totalPrice>0) {
    // makePurchase.classList.remove('bg-red-400');
    makePurchase.classList.add('bg-green-400');
    
  } else {
  //  makePurchase.classList.remove('bg-green-400');
    makePurchase.classList.add('bg-red-400');
  }

  const applyBtn= document.getElementById('applyBtn');

     if (totalPrice >= 200) {
      // applyBtn.classList.remove('bg-red-500');
      applyBtn.classList.add('bg-green-500');
    } else {
      // applyBtn.classList.remove('bg-green-500');
      applyBtn.classList.add('bg-red-500');
    }
   
    }

    

  
    
    
    function applyClick() {
      const cuponCode = document.getElementById('searchText');
      const cupon= cuponCode.value; 
      const applyBtn= document.getElementById('applyBtn');

      if (cupon === 'SELL200' && totalPrice >= 200) {
         discountAmont=totalPrice*0.20;
        
      } else {
        discountAmont=0;
       
        
      }
      UpdateDisplay();

    }

    

  

function toggleModal(){
  document.getElementById('modal').classList.toggle('hidden')
  
}

UpdateDisplay();
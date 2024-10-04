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
    addName(cookerName); 
    }

    function sportsBackCap() {
        const sportsBackCap = document.getElementById('sportsBackCap');
        const sportsBackCapName = sportsBackCap.innerText;
        addName(sportsBackCapName); 
    }

    function jersey() {
      const jersey = document.getElementById('jersey');
      const jerseyName = jersey.innerText;
      addName(jerseyName); 
    }
    function sportsCates() {
       const sportsCates= document.getElementById('sportsCates');
       const  sportsCatesName =sportsCates.innerText;
       addName(sportsCatesName); 
    }

    let totalPrice = 0;
    let discountAmount = 0;
    function addName(productName,price) {
        const makeProduct = document.getElementById('makeProduct');
        const count = makeProduct.childElementCount;
        const p = document.createElement('p');
        p.innerHTML = `${count+1}.  ${productName}`;
        makeProduct.appendChild(p);

        totalPrice += price;
        UpdateDisplay();
        
    }

    function UpdateDisplay() {
        const currentTotal = document.getElementById('currentTotal');
        currentTotal.innerHTML = `${totalPrice.toFixed(2)}`; 
        const discountDisplay= document.getElementById('discount');
        discountDisplay.innerHTML = discountAmount.toFixed(2);
         console.log(discountDisplay);
        const finalTotal= document.getElementById('finalTotal');
        finalTotal.innerHTML = (totalPrice - discountAmount).toFixed(2);
        
        
    }
    
    function applyClick(){
        const cuponText = document.getElementById('searchText');
    const cupon= cuponText.value;
    
    const applyBtn = document.getElementById('applyBtn');
        if (cupon === 'SELL200' && totalPrice>=200) {
            discountAmount = totalPrice*0.20;
            alert('you got the discount!');
            applyBtn.classList.add('bg-green-600');
        } else {
            discountAmount = 0;
            applyBtn.classList.add('cursor-not-allowed');
            applyBtn.classList.add('bg-red-600');
        }

        UpdateDisplay();
    }

   

    const makePurchase = document.getElementById('makePurchase');
   
    function toggleModal() { 
       
        if (totalPrice>0) {
            makePurchase.classList.add('bg-green-600'); 
            document.getElementById('modal').classList.toggle('hidden')
        } else {
            makePurchase.classList.add('bg-red-600'); 
           
        }
    }


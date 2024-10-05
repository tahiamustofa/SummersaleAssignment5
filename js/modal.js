
// kabir modal

// <button onclick="handlePurchase()" id="makePurchase" class="btn bg-[#e527b2] text-white w-full">
// Make Purchase
// </button>


// <div id="purchaseModal" class="fixed inset-0 hidden bg-black bg-opacity-50  justify-center items-center">
// <div class="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
// <span class="text-red-500 text-xl font-bold cursor-pointer" onclick="closeModal()">&times;</span>
// <p class="mt-4">Your purchase is being processed.</p>
// <button>Go Home</button>
// </div>



// </div>

// script
// const makePurchase = document.getElementById("makePurchase");
// const modal = document.getElementById("purchaseModal");

function handlePurchase() {
  if (totalPrice <= 0) {
    makePurchase.classList.add("bg-red-600");
    makePurchase.setAttribute("disabled", "true"); // Disable button if no price
  } else {
    makePurchase.classList.add("bg-green-600");
    makePurchase.removeAttribute("disabled"); // Enable button if price exists
    openModal(); // Open the modal if purchase is valid
  }
}

function openModal() {
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
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


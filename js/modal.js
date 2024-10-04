
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
const makePurchase = document.getElementById("makePurchase");
const modal = document.getElementById("purchaseModal");

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

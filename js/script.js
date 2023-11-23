document.addEventListener('DOMContentLoaded', function () {
    // Adding my Student ID and Name dynamically
    var studentInfo = document.getElementById('studentInfo');
    studentInfo.innerText = 'Student ID: 200477161 | Name: Dev Sunil Dalvi';
  
    // Function for displaying user inputs
    function displayUserInputs(size, toppings, phone, address, deliveryOption, paymentOption, cardDetails) {
      var sizeOutput = document.getElementById('sizeOutput');
      sizeOutput.textContent = 'Size: ' + size;
  
      var toppingsOutput = document.getElementById('toppingsOutput');
      toppingsOutput.textContent = 'Toppings: ' + toppings;
  
      var phoneOutput = document.getElementById('phoneOutput');
      phoneOutput.textContent = 'Phone Number: ' + phone;
  
      var addressOutput = document.getElementById('addressOutput');
      addressOutput.textContent = 'Delivery Address: ' + address;
  
      var deliveryOutput = document.getElementById('deliveryOutput');
      deliveryOutput.textContent = 'Delivery Option: ' + deliveryOption;
  
      var paymentOutput = document.getElementById('paymentOutput');
      paymentOutput.textContent = 'Payment Option: ' + paymentOption;
  
      // Displaying card details when the payment option "Card" is selected
      if (paymentOption === 'card') {
        var cardDetailsOutput = document.getElementById('cardDetailsOutput');
        cardDetailsOutput.innerHTML = `<p>Card Details:</p><p>${cardDetails}</p>`;
      }
    }
  
    // Function for capturing form values and creating Pizza object
    function captureAndDisplayPizza() {
      var pizzaSize = document.getElementById('pizzaSize').value;
      var pizzaToppings = document.getElementById('pizzaToppings').value;
      var phoneNumber = document.getElementById('phoneNumber').value;
      var deliveryAddress = document.getElementById('deliveryAddress').value;
      var deliveryOption = document.getElementById('deliveryOption').value;
      var paymentOption = document.getElementById('paymentOption').value;
      var cardNumber = document.getElementById('cardNumber').value;
      var expirationDate = document.getElementById('expirationDate').value;
      var cvv = document.getElementById('cvv').value;
  
      // Displaying the user inputs
      displayUserInputs(pizzaSize, pizzaToppings, phoneNumber, deliveryAddress, deliveryOption, paymentOption, cardNumber);
  
      // Creating a Pizza object
      var pizza = new Pizza(pizzaSize, pizzaToppings, phoneNumber, deliveryAddress, deliveryOption, paymentOption, cardNumber);
  
      // Displaying the description of the customer's pizza
      var pizzaOutput = document.getElementById('pizzaOutput');
      pizzaOutput.innerHTML = '<h2>Your Pizza Order:</h2>' + '<p>' + pizza.getDescription() + '</p>';
    }
  
    // Pizza class definition
    class Pizza {
      constructor(size, toppings, phoneNumber, deliveryAddress, deliveryOption, paymentOption, cardNumber) {
        this.size = size;
        this.toppings = toppings;
        this.phoneNumber = phoneNumber;
        this.deliveryAddress = deliveryAddress;
        this.deliveryOption = deliveryOption;
        this.paymentOption = paymentOption;
        this.cardNumber = cardNumber;
      }
  
      getDescription() {
        return `Size: ${this.size}, Toppings: ${this.toppings}, Phone Number: ${this.phoneNumber}, 
                Delivery Address: ${this.deliveryAddress}, Delivery Option: ${this.deliveryOption}, 
                Payment Option: ${this.paymentOption}, Card Number: ${this.cardNumber}`;
      }
    }
  
    // Event listener for changes in the delivery option dropdown
    var deliveryOptionDropdown = document.getElementById('deliveryOption');
    deliveryOptionDropdown.addEventListener('change', function () {
      // Show/hide the delivery address container based on the selected option
      var deliveryAddressContainer = document.getElementById('deliveryAddressContainer');
      deliveryAddressContainer.style.display = this.value === 'delivery' ? 'block' : 'none';
    });
  
    // Event listener for changes in the payment option dropdown
    var paymentOptionDropdown = document.getElementById('paymentOption');
    paymentOptionDropdown.addEventListener('change', function () {
      // Show/hide the card details container based on the selected option
      var cardDetailsContainer = document.getElementById('cardDetailsContainer');
      cardDetailsContainer.style.display = this.value === 'card' ? 'block' : 'none';
    });
  
    // Event listener for the order button
    var orderBtn = document.getElementById('orderBtn');
    orderBtn.addEventListener('click', function () {
      captureAndDisplayPizza();
    });
  });
  
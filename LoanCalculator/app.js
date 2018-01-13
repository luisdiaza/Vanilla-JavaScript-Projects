//Define Global User Interface Variables
const form = document.querySelector(".loan-form");

loadEventListeners();

//Loads Event Listeners

function loadEventListeners() {
	//Listens for submit
	form.addEventListener('submit', function(e) {
		//Hide results
		document.querySelector(".results").style.display = "none";
		//show loader
		document.querySelector(".loading").style.display = "block";

		setTimeout(calculateResults, 2000);

		e.preventDefault();
	});
}

//Calculates results
function calculateResults () {
	console.log("Calculating...");
	//Defining UI variable
	const amount = document.querySelector(".amount");
	const interest = document.querySelector(".interest");
	const years = document.querySelector(".years");
	const monthlyPayment = document.querySelector(".monthly-payment");
	const totalPayment = document.querySelector(".total-payment");
	const totalInterest = document.querySelector(".total-interest");

	const principal = parseFloat(amount.value);
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;

	//Computing monthly payment
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * x * calculatedInterest) / (x - 1);

	if (isFinite(monthly)) {
		//insert the following variable to DOM using .value method
		monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

		//Show Results
		document.querySelector(".results").style.display = "block";

		//Hide Loading Image
		document.querySelector(".loading").style.display = "none";
	}
	else {
		showError("Please Check Your Numbers");
	}
}

//Show Error
function showError(error) {
	//Hide Results
	document.querySelector(".results").style.display = "none";

	//Hide Loading Image
	document.querySelector(".loading").style.display = "none";

	// Create a div
	const errorDiv = document.createElement("div");

	// Get Elements
	const card = document.querySelector(".card");
	const heading = document.querySelector(".heading");

	//Add class
	errorDiv.className = "alert alert-danger";//creates an alert using Bootstrap

	// Create text node and append to div
	errorDiv.appendChild(document.createTextNode(error));

	// Insert error above heading
	card.insertBefore(errorDiv, heading);

	//Clear error after 3 seconds
	setTimeout(clearError, 3000);
}

//Clear error
function clearError() {
	document.querySelector(".alert").remove();
}

const inputs = document.querySelectorAll("input");
const btn = document.querySelector(".card_data_submit");
const frontPin = document.querySelector(".data_pin");
const frontName = document.querySelector(".info_owner");
const frontDate = document.querySelector(".info_expiration");
const backCvc = document.querySelector(".back_cvc");


btn.addEventListener("click", checkForm);

function checkForm() {
    for(const input of inputs) {
        if(!input.validity.valid) {
            input.setAttribute("class", "alert");
            input.parentElement.querySelector("p").style.display = "block";
        }
    }
}

for(const input of inputs) {
    input.addEventListener("input", checkInput);
}

function checkInput() {
    if(this.validity.valid) {
        this.setAttribute("class", "valid");
        this.parentElement.querySelector("p").style.display = "none";
    }
}

inputs[0].addEventListener("input", updateName);

function updateName() {
    frontName.textContent = this.value;
    if(this.value === "") {
        frontName.textContent = "Jane Appleseed";
    }
}

inputs[1].addEventListener("input", updatePin);

function updatePin() {
    if(this.value.length === 4 ||
        this.value.length === 9 ||
        this.value.length === 14) {
            this.value += " ";
    }
    const pinParts = frontPin.textContent.split("");
    const pinIn = this.value.split("");
    for(let i = 0; i < pinIn.length; i++) {
        pinParts[i] = pinIn[i];
    }
    frontPin.textContent = pinParts.join("");
    if(this.value === "") {
        frontPin.textContent = "0000 0000 0000 0000";
    }
}

inputs[2].addEventListener("input", updateMonth);

function updateMonth() {
    
}
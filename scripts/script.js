const inputs = document.querySelectorAll("input");
const sendBtn = document.querySelector(".card_data_submit");
const form = document.querySelector(".form_card_data");
const success = document.querySelector(".success");
const contBtn = document.querySelector(".success_continue");
const frontPin = document.querySelector(".data_pin");
const frontName = document.querySelector(".info_owner");
const frontDate = document.querySelector(".info_expiration");
const backCvc = document.querySelector(".back_cvc");


sendBtn.addEventListener("click", checkForm);

function checkForm(e) {
    e.preventDefault();
    for(const input of inputs) {
        if(!input.validity.valid) {
            input.setAttribute("class", "alert");
            input.parentElement.querySelector("p").style.display = "block";
        }
    }
    if(form.checkValidity()) {
        success.style.display = "flex";
        form.style.display = "none";
    }
}

contBtn.addEventListener("click", restoreForm);

function restoreForm() {
    success.style.display = "none";
    form.style.display = "grid";
    form.reset();
    clearCards();
}

function clearCards() {
    frontPin.textContent = "0000 0000 0000 0000";
    frontName.textContent = "Jane Appleseed";
    frontDate.textContent = "00/00";
    backCvc.textContent = "000";
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
    let month = frontDate.textContent.split("/");
    month[0] = this.value;
    if(this.value === "") {
        month[0] = "00";
    }
    frontDate.textContent = month.join("/");
}

inputs[3].addEventListener("input", updateYear);

function updateYear() {
    let year = frontDate.textContent.split("/");
    year[1] = this.value;
    if(this.value === "") {
        year[1] = "00";
    }
    frontDate.textContent = year.join("/");
}

inputs[4].addEventListener("input", updateCvc);

function updateCvc() {
    backCvc.textContent = this.value;
    if(this.value === "") {
        backCvc.textContent = "000";
    }
}
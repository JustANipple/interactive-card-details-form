const nameRegex = new RegExp(/^[a-zA-Z\s]+$/);
const numberRegex = new RegExp(/^\d{16}$/);
const monthRegex = new RegExp(/^(0?[1-9]|1[0-2])$/);
const yearRegex = new RegExp(/^(19|20)?\d{2}$/);
const cvcRegex = new RegExp(/^\d{3,4}$/);
const regexArr = [nameRegex, numberRegex, monthRegex, yearRegex, cvcRegex];
const inputsArr = document.querySelectorAll("input");
const form = document.querySelector(".form_card_data");
const success = document.querySelector(".success");

const sendForm = document.querySelector(".card_data_submit");

sendForm.addEventListener("click", checkForm);

function checkForm() {
let rights = 0;

    for(let i = 0; i < regexArr.length; i++) {
        if(!regexArr[i].test(inputsArr[i].value)) {
            inputsArr[i].style.borderColor = "red";
            inputsArr[i].parentNode.querySelector("p").style.display = "block";
        } else {
            inputsArr[i].style.borderColor = "purple";
            inputsArr[i].parentNode.querySelector("p").style.display = "none";
            rights++;
        }
    }

    if(rights === 5) {
    }
}
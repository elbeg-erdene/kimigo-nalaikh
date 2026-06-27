// ==========================================
// ELBEG CARGO
// script.js
// Version 1.0
// ==========================================

// ---------- LOGIN ----------

const loginScreen = document.getElementById("loginScreen");
const profileScreen = document.getElementById("profileScreen");

const phoneInput = document.getElementById("phoneInput");

const checkButton = document.getElementById("checkButton");
const checkText = document.getElementById("checkText");


// ---------- PROFILE ----------

const profilePhone = document.getElementById("profilePhone");

const barcodeList = document.getElementById("barcodeList");

const totalCount = document.getElementById("totalCount");

const notificationBox = document.getElementById("notificationBox");


// ---------- BUTTON ----------

const freeAddressBtn = document.getElementById("freeAddressBtn");

const paidAddressBtn = document.getElementById("paidAddressBtn");

const deliveryBtn = document.getElementById("deliveryBtn");

const homeBtn = document.getElementById("homeBtn");

const logoutBtn = document.getElementById("logoutBtn");


// ---------- LINK ----------

freeAddressBtn.onclick = function(){

window.open(
"https://sites.google.com/d/1xQ98P1Pd-6zvHKQIdrq4S2EVNrG1vXor/p/19FjaRc_ahB8tzS5pIPVakZaLaAjcZ27t/edit",
"_blank");

};

paidAddressBtn.onclick = function(){

window.open(
"https://sites.google.com/d/1xQ98P1Pd-6zvHKQIdrq4S2EVNrG1vXor/p/1UhMU7yRAEPHYrL4155q9W5grST9f3dHS/edit",
"_blank");

};

deliveryBtn.onclick = function(){

window.open(
"https://sites.google.com/d/1xQ98P1Pd-6zvHKQIdrq4S2EVNrG1vXor/p/1wuvOYcACub9BU8LAuGiQk0zogjLWRyiY/edit",
"_blank");

};

homeBtn.onclick = function(){

window.open(
"https://www.elbegcargo.com",
"_blank");

};
// ==========================================
// PHONE VALIDATION
// ==========================================

// Зөвхөн тоо бичүүлэх
phoneInput.addEventListener("input", function () {

this.value = this.value.replace(/\D/g, "");

if (this.value.length > 8) {

this.value = this.value.slice(0, 8);

}

});

// Enter дарахад шалгах
phoneInput.addEventListener("keydown", function (e) {

if (e.key === "Enter") {

checkButton.click();

}

});


// ==========================================
// CHECK BUTTON
// ==========================================

checkButton.onclick = function () {

const phone = phoneInput.value.trim();

if (phone.length !== 8) {

alert("8 оронтой утасны дугаар оруулна уу.");

phoneInput.focus();

return;

}

checkButton.classList.add("loading");

checkText.innerText = "Шалгаж байна...";

setTimeout(function () {

profilePhone.innerText = phone;

loginScreen.style.display = "none";

profileScreen.style.display = "block";

checkButton.classList.remove("loading");

checkText.innerText = "Ачаа шалгах";

}, 1200);

};


// ==========================================
// LOGOUT
// ==========================================

logoutBtn.onclick = function () {

profileScreen.style.display = "none";

loginScreen.style.display = "block";

phoneInput.value = "";

phoneInput.focus();

};

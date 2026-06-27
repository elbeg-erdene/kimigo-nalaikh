// ==========================================
// ELBEG CARGO
// script.js
// Version 1.0
// ==========================================

// ---------- LOGIN ----------

const API_URL="https://script.google.com/macros/s/AKfycbzImXyfN1iTswbS8NMhBHpk5ZBVubbLN4aH0SETWiEpTOVPKJxFAOqKzekmmBGbnNG1MQ/exec"
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
"https://www.kimigonalaikh.com/home/%D0%BA%D0%B0%D1%80%D0%B3%D0%BE%D0%B3%D0%BE%D0%BE-%D1%85%D1%8D%D1%80%D1%85%D1%8D%D0%BD-%D2%AF%D0%BD%D1%8D%D0%B3%D2%AF%D0%B9-%D0%B0%D0%B2%D0%B0%D1%85-%D0%B2%D1%8D",
"_blank");

};

paidAddressBtn.onclick = function(){

window.open(
"https://www.kimigonalaikh.com/mn-%D1%82%D1%8D%D0%BC%D0%B4%D1%8D%D0%B3%D0%B3%D2%AF%D0%B9-%D0%B0%D1%87%D0%B0%D0%B0-%D1%85%D2%AF%D0%BB%D1%8D%D1%8D%D0%B6-%D0%B0%D0%B2%D0%B0%D1%85-%D1%85%D0%B0%D1%8F%D0%B3-%D1%85%D0%BE%D0%BB%D0%B1%D0%BE%D1%85",
"_blank");

};

deliveryBtn.onclick = function(){

window.open(
"https://www.kimigonalaikh.com/home/%D1%85%D2%AF%D1%80%D0%B3%D1%8D%D0%BB%D1%82-%D0%B1%D2%AF%D1%80%D1%82%D0%B3%D2%AF%D2%AF%D0%BB%D1%8D%D1%85",
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

checkText.innerText = "түр хүлээнэ үү...";

fetch(API_URL + "?action=search&phone=" + phone)
.then(response => response.json())

.then(data => {

console.log(data);
console.log(data[0]);

barcodeList.innerHTML = "";

data.forEach(item => {

barcodeList.innerHTML += `<div class="barcode-item">  ${item.barcode} </div>`;

});

totalCount.innerText = data.length;



checkButton.classList.remove("loading");
checkText.innerText = "нэвтрэх";

profilePhone.innerText = phone;

loginScreen.style.display = "none";
profileScreen.style.display = "block";


});



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

// ==========================================
// LOGO ANIMATION
// ==========================================

const logoContainer = document.querySelector(".logo-container");

setInterval(() => {

logoContainer.classList.add("logo-hide");

setTimeout(() => {

const first = logoContainer.children[0];
const second = logoContainer.children[1];

logoContainer.insertBefore(second, first);

logoContainer.classList.remove("logo-hide");

},1500);

},6000);
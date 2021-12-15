"use strict";
let btn = document.getElementById("gen");
let qrcode = document.getElementById("qr");
let input = document.getElementById("input");
let done = document.getElementById("done");
let undone = document.getElementById("undone");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", generate);
function generate() {
    let data = input.value;
    console.log(data);
    var url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}`;
    qrcode.src = url;
    console.log(qrcode.src);
    if (qrcode.src == null) {
        unpop();
    }
    else {
        popup();
    }
}
function popup() {
    setTimeout(() => {
        done === null || done === void 0 ? void 0 : done.classList.remove("visually-hidden");
    }, 2000);
    setTimeout(() => {
        done === null || done === void 0 ? void 0 : done.classList.add("visually-hidden");
    }, 4900);
}
function unpop() {
    setTimeout(() => {
        undone === null || undone === void 0 ? void 0 : undone.classList.remove("visually-hidden");
    }, 5000);
}

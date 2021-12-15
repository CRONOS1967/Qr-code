"use strict";
let btn = document.getElementById('gen');
let qrcode = document.getElementById('qr');
let input = document.getElementById('input');
btn === null || btn === void 0 ? void 0 : btn.addEventListener('click', generate);
function generate() {
    let data = input.value;
    console.log(data);
    var url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}`;
    qrcode.src = url;
}

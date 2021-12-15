let btn = document.getElementById('gen');
let qrcode:any = document.getElementById('qr');
let input:any = document.getElementById('input')

btn?.addEventListener('click',generate)

function generate(){
    let  data = input.value;
    console.log(data)
    var url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}`
    qrcode.src= url;
}
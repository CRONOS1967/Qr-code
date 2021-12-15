let btn = document.getElementById("gen");
let qrcode: any = document.getElementById("qr");
let input: any = document.getElementById("input");
let done = document.getElementById("done");
let undone = document.getElementById("undone");
btn?.addEventListener("click", generate);

function generate() {
  let data = input.value;
  console.log(data);
  var url = `https://api.qrserver.com/v1/create-qr-code/?data=${data}`;
  qrcode.src = url;
  console.log(qrcode.src);
  
  if (qrcode.src == null) {
      unpop();
} else {
      popup();
  }
}

function popup() {
  setTimeout(() => {
    done?.classList.remove("visually-hidden");
  }, 2000);

  setTimeout(() => {
    done?.classList.add("visually-hidden");
  }, 4900);
}
function unpop() {
  setTimeout(() => {
    undone?.classList.remove("visually-hidden");
  }, 5000);
}

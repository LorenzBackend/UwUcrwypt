const btnEncrypt = document.getElementById('btnEncrypt');
const btnDecrypt = document.getElementById('btnDecrypt');
const btnCopy = document.getElementById('btnCopy');
const result = document.getElementById('result');
const myInput = document.getElementById('myinput');

btnEncrypt.addEventListener('click', ()=> {
   let text = myInput.value;
  result.textContent = encryptString(text);
})

btnDecrypt.addEventListener('click', ()=> {
    let encryptedText = decryptString(myInput.value)
    result.textContent = encryptedText;
})

btnCopy.addEventListener('click', ()=> {
    let copyText = document.getElementById('result');
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Copied!');
})

function encryptString(text) {
  let utftext = encodeURI(text);
  
  let num = 0;
  for(let i = 0; i < utftext.length; i++) {
    num = num * 256 + utftext.charCodeAt(i);
  }

  let uwuBase = ["U", "w", "u"];
  let uwu = "";

  while(num > 0) {
    uwu = uwuBase[num % 3] + uwu;
    num = Math.floor(num / 3);
  }

  return uwu;
}

function decryptString(text) {
  let uwuBase = ["U", "w", "u"];
  let num = 0;
  for (let i = 0; i < text.length; i++) {
    num = num * 3 + uwuBase.indexOf(text[i]);
  }

  let utf8 = "";
  while (num > 0) {
    utf8 = String.fromCharCode(num % 256) + utf8;
    num = Math.floor(num / 256);
  }

  let str = decodeURI(utf8);

  return str;
}
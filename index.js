let sira = 1;

let metin1 = "Javascript";
let metin2 = "XML";
let metin3 = "Java";
let metin4 = "PHP";
let metin5 = "Pyhton";
let metin6 = "MySql";

function arttir() {
  if (sira == 1) {
    document.title = metin1;
    sira++;
  } else if (sira == 2) {
    document.title = metin2;
    sira++;
  } else if (sira == 3) {
    document.title = metin3;
    sira++;
  } else if (sira == 4) {
    document.title = metin4;
    sira++;
  } else if (sira == 5) {
    document.title = metin5;
    sira++;
  } else if (sira == 6) {
    document.title = metin6;
    sira++;
  }
  window.setTimeout("arttir()", 1000);
}

arttir();

const datatLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = datatLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù!:;,&é\"'(-è_çà)";
const rangeValue = document.getElementById("password-lenght");
const passwordOutPut = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...datatLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  passwordOutPut.value = password;

  passwordOutPut.select();
  document.execCommand("copy");

  generatButton.textContent = "copié !";

  setTimeout(() => {
    generatButton.textContent = "Générer mot de passe";
  }, 2000);
}

generatButton.addEventListener("click", generatePassword);

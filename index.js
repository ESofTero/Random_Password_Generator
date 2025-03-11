const allCharacters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const onlyLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const withNumbers =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const withSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const onBtnNum = document.getElementById("on-btn-num");
const offBtnNum = document.getElementById("off-btn-num");
const onBtnSym = document.getElementById("on-btn-sym");
const offBtnSym = document.getElementById("off-btn-sym");
const inputLength = document.getElementById("input-el");
const generateBtn = document.getElementById("generate-btn");
const passwordElOne = document.getElementById("password-el-one");
const passwordElTwo = document.getElementById("password-el-two"); 
const tooltipOne = document.getElementById("tooltip-el-one"); 
const tooltipTwo = document.getElementById("tooltip-el-two");

let ifNum = false;
let ifSym = false;
let passwordOne = "";
let passwordTwo = "";
let alreadyGenerated = false;

onBtnNum.addEventListener("click", function(){
    ifNum = true;
    onBtnNum.classList.add("active");
    offBtnNum.classList.remove("active");
})

offBtnNum.addEventListener("click", function(){
    ifNum = false;
    offBtnNum.classList.add("active");
    onBtnNum.classList.remove("active");
});

onBtnSym.addEventListener("click", function(){
    ifSym = true;
    onBtnSym.classList.add("active");
    offBtnSym.classList.remove("active");
});

offBtnSym.addEventListener("click", function(){
    ifSym = false;
    offBtnSym.classList.add("active");
    onBtnSym.classList.remove("active");
});

tooltipOne.addEventListener("mouseout", function(){
  tooltipOne.innerHTML = "Copy to Clipboard";
});

tooltipTwo.addEventListener("mouseout", function(){
  tooltipTwo.innerHTML = "Copy to Clipboard";
});

tooltipOne.addEventListener("click", function(){
  navigator.clipboard.writeText(passwordOne);
  tooltipOne.innerHTML = "Copied!";
});

tooltipTwo.addEventListener("click", function(){
  navigator.clipboard.writeText(passwordTwo);
  tooltipTwo.innerHTML = "Copied!";
});

generateBtn.addEventListener("click", function(){
  if(alreadyGenerated){
      passwordElOne.textContent = "";
      passwordElTwo.textContent = "";
      renderPassword();
  } else {
      alreadyGenerated = true;
      renderPassword();
  }  
})

function checkWhatType(){
    if(ifNum && ifSym){
        return allCharacters;
    } else if (ifNum && !ifSym){
        return withNumbers;
    } else if (!ifNum && ifSym){
        return withSymbols;
    } else {
        return onlyLetters;
    }
}

function renderPassword(){
    let arr = checkWhatType();
    passwordOne = "";
    passwordTwo = "";
    if(inputLength.value === ""){
        alert("Please enter a number");
        return;
    } else if (inputLength.value < 4){
        alert("Password length must be at least 4 characters");
        return;
    } else if (inputLength.value > 15){
        alert("Password length must be at most 15 characters");
        return;
    } else {
        for (let i = 0; i < inputLength.value; i++){
            passwordOne += arr[Math.floor(Math.random() * arr.length)];
            passwordTwo += arr[Math.floor(Math.random() * arr.length)];
        }
        passwordElOne.textContent = `${passwordOne}`;
        passwordElTwo.textContent = `${passwordTwo}`;

    }
}



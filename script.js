//#region essential variables
const user_input = document.querySelector("#input");
const user_output = document.querySelector("#output");
const encrpytBtn = document.querySelector("#encrypt");
const decrpytBtn = document.querySelector("#decrypt");
const body = document.querySelector("body");
const secMessage = document.querySelector("#security");
//#endregion essential variables

//#region old variables
let names = ["Ace Clavano", "Amado Punzalan", "Jason Buhain"];
let password = ["@aceclavano", "!amadopunzalan"];
let std_id = ["2021-05800-MN-0", "2021-05773-MN-0"];
let gender = ["male", "female"];
let color = ["blue", "red"];
//#endregion old variables

//#region new variables
let lowLevelData = {
  color: ["Blue", "Red", "Orange", "Black", "White"],
};

let mediumLevelData = {
  gender: ["Male", "Female", "Transgender"],
};

let highLevelData = {
  name: ["Ace Clavano", "Amado Punzalan", "Jason Buhain"],
  studentID: ["2021-05800-MN-0", "2021-12345-MN-0"],
};
//#endregion new variables

// checks whether the entered data is present to the existing object
function isPresent(data, input) {
  return Object.values(data).some((array) => array.includes(input));
}

// checks whether the entered data is considered to be a password
function isPassword(input) {
  const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
  const hasNoSpaces = !/\s/.test(input);
  const characterLimit = input.length >= 8 && input.length <= 16;

  return hasSymbols && hasNoSpaces && characterLimit;
}

function toBase64(input) {
  // if (
  //   names.includes(input) ||
  //   password.includes(input) ||
  //   std_id.includes(input)
  // ) {
  //   let encryptedVal = btoa(input);
  //   user_output.value = encryptedVal;
  //   secMessage.innerHTML = "High";
  //   secMessage.style.color = "red";
  //   console.log("High");
  // } else if (gender.includes(input)) {
  //   user_output.value = input;
  //   secMessage.innerHTML = "Medium";
  //   secMessage.style.color = "orange";
  //   console.log("Low");
  // } else if (color.includes(input)) {
  //   user_output.value = input;
  //   secMessage.innerHTML = "Low";
  //   secMessage.style.color = "green";
  // } else {
  //   secMessage.innerHTML = "No data";
  //   secMessage.style.color = "purple";
  //   user_output.value = "";
  // }

  if (isPassword(input) || isPresent(highLevelData, input)) {
    console.log("High");
    let encryptedVal = btoa(input);
    user_output.value = encryptedVal;
    secMessage.innerHTML = "High";
    secMessage.style.color = "red";
  } else if (isPresent(mediumLevelData, input)) {
    console.log("Medium");
    user_output.value = input;
    secMessage.innerHTML = "Medium";
    secMessage.style.color = "orange";
  } else if (isPresent(lowLevelData, input)) {
    console.log("Low");
    user_output.value = input;
    secMessage.innerHTML = "Low";
    secMessage.style.color = "green";
  } else {
    console.log("Could not fetch data");
    secMessage.innerHTML = "No data";
    secMessage.style.color = "purple";
    user_output.value = "";
  }
}

function fromBase64(input) {
  try {
    let decrpytedVal = atob(input);
    user_input.value = decrpytedVal;
  } catch (error) {
    secMessage.innerHTML = "Not valid base64";
    secMessage.style.color = "red";
    user_input.value = "";
  }
}

const input = document.getElementById("text-input");
const result = document.getElementById("result");
const btn = document.getElementById("check-btn");
const blockDiv = document.getElementById("palindrome-div");

function checkIsPalindrome(str) {

  //сохраняем введенный текст с инпута для выведения в результат
  //save str for later output result
    const inputText = str;

  //check for empty input value
  //проверяем не пустая ли строка в инпуте
  if (str === "") {
    alert("Please input a value");
    result.innerText = "";
    return;
  }

  //Удаляем предыдущий результат
  // Remove the previous result
  result.replaceChildren();

  // Приводим строку к нижнему регистру и удаляем все ненужные символы (пробелы, знаки препинания и т.д.)
  //We convert the string to lower case and remove all unnecessary characters (spaces, punctuation marks, etc.)
  const lowerCaseStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Сравниваем строку с ее перевернутым вариантом
  //Compare a string with its inverted version

//my version 
let resultMsg = ``;

  if(lowerCaseStr === lowerCaseStr.split("").reverse().join("")){
    resultMsg = `${inputText} is a palindrome`;
    result.innerText = resultMsg;
    return true;
  } else{
    resultMsg = `${inputText} is not a palindrome`;
    result.innerText = resultMsg;
    return false;
  }

// FCC version 
//   let resultMsg = `
//         ${inputText} ${
//     lowerCaseStr === lowerCaseStr.split("").reverse().join("") 
//     ? "is" 
//     : "not"
//   } a palindrome`;

  //записываем полученный результат в блок result
  //write result to the result div
//   result.innerText = resultMsg;
}

//вешаем слушатель событий на кнопку, при нажатии на которую запускаем функцию проверки на полиндром
//add event listener to the btn and run func to check polindrom

btn.addEventListener("click", () => {
  checkIsPalindrome(input.value);

  //if str is not a palindrom results color = red
  if(!checkIsPalindrome(input.value)){
    result.style.color = 'red';
  }else{
    //else results color = green
    result.style.color = 'green';
  }
  input.value = "";
});

//вешаем слушатель событий на инпут, при нажатии на кнопку Enter с клавиатуры запускаем функцию проверки на полиндром
//add event listener to the input press Enter and run func to check polindrom
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkIsPalindrome(input.value);
    input.value = "";
  }
});


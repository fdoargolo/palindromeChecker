const button = document.querySelector('#check-btn');
const result = document.querySelector('#result');
const textInput = document.querySelector('.text');

function reverseString(text){
    text = text.split("").reverse().join("");
    return text; 
}

button.addEventListener("click", function(){
    let text = textInput.value;
    text = text.trim(); //removing spaces

    if(text == ""){
        alert("Please input a value");
    }else if(reverseString(text) == text){
        result.innerHTML = text + " is a palindrome.";
    } else{
        result.innerHTML = text + " is not a palindrome.";
    }
});

const button = document.querySelector('#check-btn');
const result = document.querySelector('#result');
const textInput = document.querySelector('.text');

function reverseString(text){
    text = text.split("").reverse().join("");
    return text; 
}
function removeSpace(text){
    text = text.split(" ").join("");
    return text; 
}


button.addEventListener("click", function(){
    
    let text = textInput.value;
    let firstInput = text;
    text = text.trim(); 
    text = removeSpace(text);
    
    reversedText = reverseString(text);

    if(text == ""){
        alert("Please input a value");
    }else if(reversedText == text){
        result.style.color = 'green'; //coloring a little
        result.innerHTML = firstInput + " is a palindrome.";
    } else{
        result.style.color = 'red';
        result.innerHTML = firstInput + " is not a palindrome.";
    }
});

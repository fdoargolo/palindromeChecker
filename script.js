const button = document.querySelector('#check-btn');
const result = document.querySelector('#result');
const textInput = document.querySelector('.text');

//arrow functions to do the work
const reverseString = (text) => text = text.split("").reverse().join(""); 
const removeSpace = (text) => text.split(" ").join("");


button.addEventListener("click", function(){
    
    let text = textInput.value;
    let originalText = text;
    text = text.trim(); 

    text = removeSpace(text);
    reversedText = reverseString(text);

    if(text == ""){
        alert("Please input a value");
    }else if(reversedText == text){
        result.style.color = 'green'; //coloring a little
        result.innerHTML = originalText + " is a palindrome.";
    } else{
        result.style.color = 'red';
        result.innerHTML = originalText + " is not a palindrome.";
    }
});

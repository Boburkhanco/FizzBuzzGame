submit.addEventListener('click' , e => {
    e.preventDefault()
    if ((input.value % 3 == 0) && (input.value % 5 == 0)){
        info.textContent = "FizzBuzz"
    } else if(input.value % 3 == 0) {
        info.textContent = "Fizz"
    } else if (input.value % 5 == 0) {
        info.textContent = "Buzz"
    } else {
        info.textContent = "Siz kiritgan son 3 va 5 ga bolinmaydi (("
    }
       
})



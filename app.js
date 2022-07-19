// function abc() {
//     var inp = document.getElementById('userInp').value  
//     var inpValidation = document.getElementById('validation')
//     console.log(inp)
//     if (inp.length > 3) {
//         console.log(inp)        
//     }
//     else {
//         // alert('error')
//         inpValidation.innerHTML = "error"
//     }
// }


function searching() {
    var arr = ["karachi", "islamabad", "peshawar", "lahore", "multan"]
    var cityName = document.getElementById('cityName').value.toLowerCase()
    var flag = false;
    for (let i = 0; i < arr.length; i++) {
        if (cityName === arr[i]) {
            flag = true
            break
        }
        else {
            flag = false
        }
    }
    if(flag){
        alert("Correct!")
    }
    else {
        alert("Wrong")
    }

}
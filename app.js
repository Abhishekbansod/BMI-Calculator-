let form = document.querySelector('form')
// let results = document.querySelector('#results')
let results = document.querySelector('#results')

form.addEventListener('submit', (e) => {
    // first step to complete 
    e.preventDefault()

    // getting the values from form of wight and height
    // will get the value in string => convert it to int by parseInt
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)

    
    // performing checks on height weight
    if(height === '' || height <= 0 || isNaN(height)){
        results.innerHTML = `Please enter a valid height!`
    }else if(weight === '' || weight <= 0 || isNaN(weight)){
        results.innerHTML = `Please enter a valid weight!`
    }else{
        // calculating BMI with formula
        let BMI = (weight / ((height * height) / 10000)).toFixed(1)
        results.innerHTML = `Your BMI is : ${BMI}`
    }
})
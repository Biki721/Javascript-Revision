const form = document.querySelector('form')
console.log(form)

form.addEventListener('submit', (event) => {
    event.preventDefault()

    const bmiGuide = (bmi) => (bmi<18.6 ? 'You are under weight': bmi > 24.9 ? 'You are over weight':'You are healthy')

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results');

    if (height==='' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    } else if  (weight==='' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid height ${weight}`;
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}. ${bmiGuide(bmi)}`;
    }

})
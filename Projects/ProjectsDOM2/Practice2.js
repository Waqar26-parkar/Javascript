const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value) 
    const results = document.querySelector('#results')

    if(height === '' || height <0 || isNaN(height))   
    {
       results.innerHTML = `Please enter a valid height : ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight))
    {
        // results.innerHtml = `Please enter a valid weight : ${weight}`;
        results.innerHTML = `<span>${bmi} </span>`;
    }
    else{

        const bmi = weight /((height*height)/1000).toFixed(2);
        results.innerHTML = `Your BMI is : ${bmi}`;

        if(bmi <18.6)
        {
            results.innerHTML = `Your BMI is : ${bmi} and you are underweight`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9)
        {
            results.innerHTML = `Your BMI is : ${bmi} and you are normal`;
        }
        else
        {
            results.innerhtml = `Your BMI ${bmi} Range is Greater`;
        }
    }

   
});
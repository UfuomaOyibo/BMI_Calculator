// max-width: 978px;
const metricSec = document.querySelector('#mection')
const allInputs = document.querySelectorAll("input[type='text']");
const metInputs = document.querySelectorAll("input[class='metric_input']");
const rection = document.querySelectorAll(".results");
const weltion = document.querySelectorAll(".welcome");



function validate(event) {
    if (event.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
        var regex = /[0-9]|\./;
        if (!regex.test(key)) {
            event.returnValue = false;
            if (event.preventDefault) event.preventDefault();
        }
    } else {
        if (!((event.which >= 48 && event.which <= 57)
            || event.which == 8 || event.which == 46 || event.which == 190)) {
            event.returnValue = false;
        }
    }
}

function resetValues() {
    Array.prototype.forEach.call(allInputs, function (input) {
        input.value = "0";
    });
    showResult();
}

function validInput(string) {
    const given = Number(string);
    return given !== NaN && given > 0;
}

function showResult(value) {

    if (value) {
        Array.prototype.forEach.call(weltion, function (input) {
            input.style.display = 'none';
        });
        Array.prototype.forEach.call(rection, function (input) {
            input.style.display = 'block';
        });

        document.getElementById('current_bmi').innerText = value;
        if (value <= 18.5) {
            document.getElementById('vatail').innerHTML = "<p>Your BMI suggests you’re underweight. Your ideal weight is between <strong>53.5kgs - 72.0kgs<strong>.<p>";
        } else if (value >= 25.0) {
            document.getElementById('vatail').innerHTML = "<p>Your BMI suggests you’re overweight. Your ideal weight is between <strong> 66.8kgs - 89.9kgs<strong>.<p>";
        } else if (value >= 30.0) {
            document.getElementById('vatail').innerHTML = "<p>Your BMI suggests you’re Obese. Please take care of your health.<p>";
        } else { };
        console.log(value);
    } else {
        Array.prototype.forEach.call(rection, function (input) {
            input.style.display = 'none';
        });
        Array.prototype.forEach.call(weltion, function (input) {
            input.style.display = 'block';
        });
        document.getElementById('current_bmi').innerText = '';
    }

}
function calculateBMI() {
    const height = document.getElementById('metric_height').value;
    const weight = document.getElementById('metric_weight').value;

    if (height && weight) {
        if (validInput(weight) && validInput(height)) {
            const bmi = Number((weight / (height * height)) * 10000).toFixed(1)
            showResult(bmi)
        } else {
            showResult()
        }
    } else {
        showResult()
    }
}
for (let i = 0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('keydown', validate)
}


Array.prototype.forEach.call(metInputs, function (input) {
    input.addEventListener('keyup', calculateBMI);
});


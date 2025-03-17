const inputField = document.querySelector('.input-field')
const result = document.querySelector('.result')
const button = document.querySelector('button')

function defineParity(num) {
    if (!Number.isInteger(num)) {
        return NaN
    }
    return num % 2 === 0 ? 'Чётное' : 'Нечётное'
}

button.addEventListener('click', function () {
    let num = parseFloat(inputField.value)
    if (!isNaN(num)) {
        result.textContent = defineParity(num)
        if (defineParity(num) === 'Чётное') {
            result.style.color = 'green'
        } else {
            result.style.color = 'red'
        }
    }
})

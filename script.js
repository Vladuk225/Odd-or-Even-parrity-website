const inputField = document.querySelector('.input-field')
const result = document.querySelector('.result')
const button = document.querySelector('button')


function defineParity(num) {
    if (num % 2 == 0) {
        return 'Чётное'
    } else {
        return 'Нечётное'
    }
}


button.addEventListener('click', function () {
    const num = parseInt(inputField.value, 10)
    if (!isNaN(num)) {
        result.textContent = defineParity(num)
        if (defineParity(num) == 'Чётное') {
            result.style.color = 'green'
        } else {
            result.style.color = 'red'
        }
    }
})
document.querySelector('#wuMaker').addEventListener('click',generator)
const radios = document.querySelectorAll('input[name="dynasty"]')
const yinYangs = document.querySelectorAll('input[name="yinYang"]')


function generator(){
    let firstNumber = 0     //cipher for the first name
    let lastNumber = 0      //cipher for the last name

    const firstName = document.querySelector('#firstname').value.toLowerCase()
    const lastName = document.querySelector('#lastname').value.toLowerCase()

    for (let i=0; i < firstName.length; i++){
        firstNumber += firstName.charCodeAt(i)
    }

    for (let i=0; i < lastName.length; i++){
        lastNumber += lastName.charCodeAt(i)
    }

    let radioValue
    let yinYang
    radios.forEach(radio => {
        if(radio.checked){
            radioValue = radio.value
            firstNumber += Number(radioValue)
        }
    })

    const dropdown = document.querySelector('#color').value
    firstNumber += Number(dropdown)

    yinYangs.forEach(radio => {
        if(radio.checked){
            yinYang = radio.value
            lastNumber += Number(yinYang)
        }
    })

    fetch(`/namemaker?generator=${firstNumber}+w+${lastNumber}`)
        .then(res => res.text())
        .then(data => {
            console.log(data)
            document.querySelector('h3').innerText = `From henceforth, you shall be known as`
            document.querySelector('h2').innerText = data
        })
}
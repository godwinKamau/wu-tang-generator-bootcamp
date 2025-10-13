document.querySelector('#wuMaker').addEventListener('click',generator)
const radios = document.querySelectorAll('input[type="radio"]')


function generator(){
    const first = document.querySelector('#firstname').value.toLowerCase()
    const last = document.querySelector('#lastname').value.toLowerCase()
    radios.forEach(radio => {
        if(radio.checked){
            const radioValue = radio.value
        }
    })
    console.log(document.querySelector('#color').value)
    fetch(`/namemaker?generator=${first}+${last}`)
        .then(res => res.text())
        .then(data => {
            console.log(data)
            document.querySelector('h3').innerText = `From henceforth, you shall be known as`
            document.querySelector('h2').innerText = data
        })
}
document.querySelector('#wuMaker').addEventListener('click',generator)

function generator(){
    const first = document.querySelector('#firstname').value.toLowerCase()
    const last = document.querySelector('#lastname').value.toLowerCase()
    fetch(`/namemaker?generator=${first}+${last}`)
        .then(res => res.text())
        .then(data => {
            console.log(data)
            document.querySelector('h3').innerText = `From henceforth, you shall be known as`
            document.querySelector('h2').innerText = data
        })
}
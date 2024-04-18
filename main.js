
// const kmPercorsi = prompt('inserire chilomerti da percorrere')
// console.log('i chilometri percorsi sono ' + kmPercorsi)
// document.getElementById('km').innerHTML = (`${kmPercorsi} km`)

// const eta = prompt('Inserire la tua eta`:')
// console.log('la tua eta` e` ' + eta)
// document.getElementById('anni').innerHTML = (`${eta} anni`)

// let prezzoFinale = kmPercorsi * prezzoKm
// console.log('il costo e` di ' + prezzoFinale)

// if (eta < 18) {
//     prezzoFinale = prezzoFinale - (prezzoFinale * 20 / 100)
// } else if (eta > 65) {
//     prezzoFinale = prezzoFinale - (prezzoFinale * 40 / 100)
// }

// console.log('il costo e` di ' + prezzoFinale)
// document.getElementById('costo').innerHTML = (`${prezzoFinale.toFixed(2)} €`)

const prezzoKm = 0.21

const kmInput = document.getElementById('km-input');

const nameInput = document.getElementById('name-input');

const ageInput = document.getElementById('age-input');

const btnGenerate = document.getElementById('click-generate')

const btnDelete = document.getElementById('click-delete')

let prezzoFinale = 0;

btnGenerate.addEventListener('click', function () {

    prezzoFinale = kmInput.value * prezzoKm

    if (ageInput.value < 18) {

        prezzoFinale = prezzoFinale - (prezzoFinale * 20 / 100)

    } else if (ageInput.value > 65) {

        prezzoFinale = prezzoFinale - (prezzoFinale * 40 / 100)
    }

    document.getElementById('passeggero').innerText = nameInput.value

    document.getElementById('carrozza').innerText = (Math.floor(Math.random() * 11))


    console.log('km ', kmInput.value)
    console.log('nome ', nameInput.value)
    console.log('eta ', ageInput.value)
    console.log('prezzo ', prezzoFinale.toFixed(2))
})

btnDelete.addEventListener('click', function () {

    document.getElementById('km-input').value = ''
    document.getElementById('name-input').value = ''
    document.getElementById('age-input').value = ''

    prezzoFinale = 0;

    console.log('km ', kmInput.value)
    console.log('nome ', nameInput.value)
    console.log('eta ', ageInput.value)
    console.log('prezzo ', prezzoFinale)
})


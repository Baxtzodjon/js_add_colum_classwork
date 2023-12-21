/* let blocks = document.querySelector.querySelectorAll('.block') */

let cont2 = document.querySelector('.container2')

let arr = [{
    "id": 1,
    "edit": "Charles Ross",
    "age": 21,
}, {
    "id": 2,
    "edit": "Timothy Guerrero",
    "age": 21,
}, {
    "id": 3,
    "edit": "Adam Hoffman",
    "age": 21,
}, {
    "id": 4,
    "edit": "Chris Diaz",
    "age": 41,
}, {
    "id": 5,
    "edit": "Terry Guerrero",
    "age": 54,
}, {
    "id": 6,
    "edit": "Alan Adams",
    "age": 89
}]

rel(arr)

function rel(arr) {
    cont2.innerHTML = ""

    for (let item of arr) {
        // create
        let medium_div = document.createElement('div')
        let box_block_div = document.createElement('div')
        let h1_big_text_div = document.createElement('div')
        let box_div = document.createElement('div')
        let p_age = document.createElement('div')
        let p_digit = document.createElement('div')

        // styling
        medium_div.classList.add('medium')
        box_block_div.classList.add('box_block')
        h1_big_text_div.classList.add('big_text')
        box_div.classList.add('box')
        p_age.classList.add('age')
        p_digit.classList.add('digit')

        h1_big_text_div.innerHTML = item.edit
        p_age.innerHTML = 'Age'
        p_digit.innerHTML = item.age

        // append
        /* let body = document.body */

        cont2.append(medium_div)
        medium_div.append(box_block_div)
        box_block_div.append(h1_big_text_div, box_div)
        box_div.append(p_age, p_digit)
    }
}

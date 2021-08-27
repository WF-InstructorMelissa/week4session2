console.log("Message: Pulling dino info ", dinos)

var names = []
function getDinos() {
    for(var i = 0; i < dinos.length; i++) {
        names.push(dinos[i].name)
    }
    console.log("Message: filled array ", names)
    document.getElementById('dinos').innerHTML = '<h1>' + names + '</h1>'
}
var toons = new Request(`https://looney-toons-api.herokuapp.com/api/characters`)

function getToons() {
    fetch(toons)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        for(var items of data.data) {
            console.log(items)
            var box = `<div>`
            box += `<h2>${items.name}</h2></div>`
            console.log('box', box)
        }
    })
}
getToons()

var dogs = new Request(`https://random.dog/woof.json
`)

function getDog() {
    fetch(dogs)
    .then(res => res.json())
    .then(data => {console.log(data)
        let theImg = `<img src='${data.url}' alt='#' />`
        document.getElementById('dog').innerHTML = theImg
    })
}
// getDog()
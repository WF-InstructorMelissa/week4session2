console.log("Message: Pulling dino info ", dinos)

var names = []
function getDinos() {
    for(var i = 0; i < dinos.length; i++) {
        names.push(dinos[i].name)
    }
    console.log("Message: filled array ", names)
    document.getElementById('dinos').innerHTML = '<h1>' + names + '</h1>'
}
var theToons = new Request(`https://looney-toons-api.herokuapp.com/api/characters`)

function toons() {
    fetch(theToons)
    .then(res => res.json())
    .then(data => {
        console.log(data.data)
        // for(var items of data.data) {
        //     console.log(items)
        //     var box = `<div>`
        //     box += `<h2>${items.name}</h2></div>`
        //     console.log('box', box)
        // }
        for(var i = 0; i < data.data.length; i++) {
            var box = `<div><h2>${data.data[i].name}</h2></div>`
            console.log('box', box)
            document.getElementById('toons').innerHTML = box
        }
        
    })
}


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
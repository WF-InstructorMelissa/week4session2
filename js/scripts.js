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
            var node = document.createElement('div')
            node.classList.add('theToons')
            var h2 = document.createElement('h2')
            var name = document.createTextNode(data.data[i].name)
            h2.appendChild(name)
            var img = new Image()
            img.src = `${data.data[i].img}`
            img.alt = `${data.data[i].name}`
            var h3 = document.createElement('h3')
            var birth = document.createTextNode(data.data[i].birthDay)
            h3.appendChild(birth)
            node.appendChild(h2)
            node.appendChild(img)
            node.appendChild(h3)
            document.getElementById('toons').appendChild(node)
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
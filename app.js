const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')
const templateCard = document.getElementById('template-card').content
const templateFooterCarrito = document.getElementById('template-footer-carrito').content
const templateCarrito = document.getElementById('template-carrito').content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
})

cards.addEventListener('click', e => {
    addCarrito(e)
})


const fetchData = async () => {
    try {
        const res = await fetch('api.json')
        const data = await res.json()
        //console.log(data)
        recorrerTarjetas(data)
        
    } catch (error) {
        console.log(error)
    }
}  

const recorrerTarjetas = data => {
    data.forEach(producto => {
        templateCard.querySelector('h5').textContent = producto.title
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('.btn-dark').dataset.id = producto.id
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    cards.appendChild(fragment)
}

const addCarrito = e => {
    //console.log(e.target)
    //console.log(e.target.classList.contains('btn-dark'))
    if (e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    //console.log(objeto)
    const producto = {
        id: objeto.querySelector('.btn-dark').dataset.id,
        title: objeto.querySelector('h5').textContent,
        precio: objeto.querySelector('p').textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)){
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    recorrerCarrito()
}

const recorrerCarrito = () => {
    console.log(carrito)
    object.values(carrito).forEach( producto => {
        templateCarrito.querySelector('th').textContent = producto.id
        templateCarrito.querySelectorAll('td')[0].textContent = producto.cantidad
    })
}

//desafío array agregado(agrego array apartado del carrito para cumplir con el desafío)

//const frutas = ["banana", "manzana", "higo", "níspero", "pomelo"]

//for (let i = 0; i <= frutas.length; i++) {
//    if (frutas[i] === "higo") {
//        console.log(frutas[i])
//    }else {
//        console.log("solo queremos higos")
//    }
//}



//utilizando .map (otro array usando otro metodo para agregar una propiedad nueva al objeto)

//const autos2 = [{patente:1, marca:"ford", puertas:"4 puertas", velMax:220, precio:160}]

//const agregandoModelo = autos2.map((auto) => ({
//   ...auto,
//    modelo: "focus"
//}))

//console.log(agregandoModelo)


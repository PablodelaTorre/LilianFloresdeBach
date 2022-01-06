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

class Auto {
    constructor(marca, modelo, color, velMax, cantPuertas) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
        this.velMax = velMax
        this.cantPuertas = cantPuertas
    }
    encendido(){
        console.log("El motor esta encendido")
    }
}

const toyota = new Auto ("toyota", "corolla", "rojo", 210, "4 puertas")
console.log(toyota)
toyota.encendido()
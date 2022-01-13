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

const addCarrito = e => {    if (e.target.classList.contains('btn-dark')){
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {    const producto = {
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

class TarjetasCarrito {
    constructor(id, title, precio, cantidad) {
        this.id = id,
        this.title = title,
        this.precio = precio,
        this.cantidad = cantidad}
        precioIva(){
            return (this.precio * 1.21)
        }
}

const producto1 = new TarjetasCarrito (1, "Agrimony", 100, 0)
const producto2 = new TarjetasCarrito (2, "Aspen", 100, 0)
const producto3 = new TarjetasCarrito (3, "Beech", 120, 0)
const producto4 = new TarjetasCarrito (4, "Cerato", 150, 0)

console.log("El precio total es de: " + producto1.precioIva() + "$")

let productos = [producto1, producto2, producto3, producto4];

const recorreProductos = (arr) => {
    for (let i=0; i<=arr.length-1; i++){
        console.log(productos[i])
    }    
}

recorreProductos(productos)




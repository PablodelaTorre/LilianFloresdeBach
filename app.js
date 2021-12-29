const items = document.getElementById('items')
const templateCard = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
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
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })
    items.appendChild(fragment)
}
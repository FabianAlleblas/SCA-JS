import createElement from './createElement'
import './Header.css'
import BackgroundShape1 from './assets/background_shape_1-line.svg'
//import BackgroundShape2 from './assets/background_shape_2-lines.svg'

export default function Header({ target, text }) {
    const el = createElement({ type:'header', className: 'Header-60 center', target})

    update(text)

    return { update }

function update(text) {

    el.innerHTML = `
    <img class="Header-60">${BackgroundShape1}</img> 
    <h1 class="Header__heading">${text}</h1>
    `
    }    
}



/* el.setAttribute('style', `'background-image: ${BackgroundShape1};background-size: cover;`)
    */
/* el.style.backgroundImage = BackgroundShape1
el.style.backgroundSize = 'cover' */

/* 

el.innerHTML = `
<img class="Header-60" style="background-image: ${BackgroundShape1}; background-size: cover;" >Header</img> 
`
<body style="font-weight:bold;">



*/
import createElement from './createElement'
import './Header.css'

export default function Header({ target, title, subTitle }) {
    const el = createElement({ type:'header', className: 'Header center', target})

    update(title, subTitle)

    return { update }

function update(title, subTitle = '') {
    el.innerHTML = `
    <h1 class="Header__heading">${title}</h1>
    <h2 class="Header__subheading">${subTitle}</h2>
    `
    subTitle.length > 0 ? el.classList.add('Header-80') : el.classList.remove('Header-80')
    }    
}
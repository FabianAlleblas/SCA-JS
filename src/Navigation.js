import createElement from './createElement'
import './Navigation.css'

export default function Navigation({target, onNavigate, navItems}) {

const el = createElement({ type: 'footer', className: 'Navigation__container', target})
const navBar = createElement({ type: 'nav', className: 'Navigation', target: el})

navItems.forEach((navItem) => {

const btn = createElement({type: 'button', target: navBar, className: 'Navigation__link Navigation__link--active w-100' })
btn.innerHTML = navItem.icon
btn.addEventListener('click', () => onNavigate(navItem.path))
} )

return {}

}
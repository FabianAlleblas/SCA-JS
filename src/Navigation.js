import createElement from './createElement'
import './Navigation.css'

export default function Navigation({target}) {

const el = createElement({ type: 'footer', className: 'Navigation__container', target})
const navBar = createElement({ type: 'nav', className: 'Navigation', target: el})



}
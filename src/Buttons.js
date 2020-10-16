import createElement from './createElement'
import './Button.css'

export default function Button({ text, target, className }){
const el = createElement({ type: 'button', className, target})
el.textContent = text
}
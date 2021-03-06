import createElement from './createElement'
import './Button.css'

export default function Button({ text, target, className, onClick, path }) {
  const el = createElement({ type: 'button', className, target })
  el.textContent = text
  el.addEventListener('click', (event) => onClick({ event, path }))
}

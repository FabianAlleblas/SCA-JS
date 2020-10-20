import createElement from './createElement'
import './Button.css'

export default function Button({ text, target, className, onClick }) {
  const el = createElement({ type: 'button', className, target })
  el.textContent = text
  el.addEventListener('click', () => onClick())
}

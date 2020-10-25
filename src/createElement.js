export default function createElement({
  type = 'div',
  target = document.body,
  className,
  text = '',
}) {
  const el = document.createElement(type)
  el.className = className
  el.textContent = text
  target.appendChild(el)
  return el
}

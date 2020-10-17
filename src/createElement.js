export default function createElement({
    type = 'div',
    target = document.body,
    className,
  }) {
    const el = document.createElement(type)
    el.className = className
    target.appendChild(el)
    return el
  }
  
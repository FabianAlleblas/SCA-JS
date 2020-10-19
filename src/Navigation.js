import createElement from './createElement'
import './Navigation.css'

export default function Navigation({ target, onNavigate, navItems }) {
  const el = createElement({
    type: 'footer',
    className: 'Navigation__container',
    target,
  })
  const navBar = createElement({
    type: 'nav',
    className: 'Navigation',
    target: el,
  })

  let allButtons = []

  navItems.forEach((navItem, index) => {
    const btn = createElement({
      type: 'button',
      target: navBar,
      className: 'Navigation__link w-100',
    })
    index == 0 ? btn.classList.add('Navigation__link--active') : ''
    btn.innerHTML = navItem.icon

    allButtons.push(btn)

    btn.addEventListener('click', () => {
      onNavigate(navItem.path, btn, allButtons)
    })
  })

  return {}
}

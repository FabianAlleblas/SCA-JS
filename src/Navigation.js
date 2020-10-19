import createElement from './createElement'
import './Navigation.css'

export default function Navigation({
  target,
  onNavigate,
  navItems,
  activateNavButton,
}) {
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

  navItems.forEach((navItem, index) => {
    const btn = createElement({
      type: 'button',
      target: navBar,
      className: 'Navigation__link w-100',
    })
    index === 0 ? btn.classList.add('Navigation__link--active') : ''
    btn.innerHTML = navItem.icon
    btn.name = navItem.path

    btn.addEventListener('click', () => {
      onNavigate(navItem.path)
      activateNavButton(navItem.path, navBar)
    })
  })

  return {}
}

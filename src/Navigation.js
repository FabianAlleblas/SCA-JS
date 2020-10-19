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

  navItems.forEach((navItem) => {
    const btn = createElement({
      type: 'button',
      target: navBar,
      className: 'Navigation__link w-100',
    })
    btn.innerHTML = navItem.icon
    btn.name = navItem.path

    btn.addEventListener('click', () => {
      onNavigate(navItem.path)
      activateNavButton(navItem.path, navBar)
    })
  })

  return {}
}

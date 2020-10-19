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

  navItems.forEach((navItem) => {
    const btn = createElement({
      type: 'button',
      target: navBar,
      className: 'Navigation__link w-100',
    })
    btn.innerHTML = navItem.icon
    btn.addEventListener('click', (event) => {
      onNavigate(navItem.path)
      activateButton(event)
    })

    function activateButton(event) {
      const buttonSelector = navBar.querySelectorAll('button')
      buttonSelector.forEach((button) =>
        button === event.currentTarget
          ? button.classList.add('Navigation__link--active')
          : button.classList.remove('Navigation__link--active')
      )
    }
  })

  return {}
}

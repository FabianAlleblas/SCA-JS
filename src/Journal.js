import './Journal.css'
import createElement from './createElement'
import Button from './Buttons'
import renderJournalCard from './renderJournalCard'

export default function Journal({
  target,
  hidden = true,
  singleButtonNavigation,
}) {
  const el = createElement({
    type: 'main',
    className: 'main-scrolling p-3 grid-20',
    target,
  })

  const buttonWrapper = createElement({
    type: 'section',
    className: 'center',
    target: el,
  })

  Button({
    text: 'Rate Today ⭑',
    className: 'button btn-200 shadow-orange',
    target: buttonWrapper,
    path: 'journal-form',
    onClick: singleButtonNavigation,
  })

  renderJournalCard({ target: el })

  hidden && hide()

  function show() {
    el.classList.remove('hidden')
  }

  function hide() {
    el.classList.add('hidden')
  }

  return { show, hide, el }
}

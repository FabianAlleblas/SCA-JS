import Buddy from './Buddy'
import Teams from './Teams'
import Journal from './Journal'
import createElement from './createElement'
import renderJournalCard from './renderJournalCard'

export default function Dashboard({ target, hidden = true }) {
  const el = createElement({
    type: 'main',
    className: 'main-scrolling p-3 grid-30',
    target,
  })
  Buddy({ target: el, dashBoardMode: true })
  Teams({ target: el, dashBoardMode: true })
  const journalWrapper = createElement({ target: el })
  renderJournalCard({ target: journalWrapper, dashBoardMode: true })

  hidden && hide()

  function show() {
    el.classList.remove('hidden')
  }

  function hide() {
    el.classList.add('hidden')
  }

  return { show, hide }
}

import { loadLocally } from './handleStorage'
import createElement from './createElement'

import RatingStar from './assets/Star.svg'
import RatingComprehension from './assets/Rectangle.svg'

export default function renderJournalCard({ target, dashBoardMode = false }) {
  const journalEntries = loadLocally('journalEntries') ?? []

  const updatedJournalEntries = dashBoardMode
    ? journalEntries.reverse().slice(0, 1)
    : journalEntries.reverse()

  updatedJournalEntries.forEach((journalEntry) => {
    journalCard(
      journalEntry.notes,
      journalEntry.motto,
      journalEntry.rating,
      journalEntry.comprehension
    )
  })

  function journalCard(journalNotes, journalMotto, journalRating, journalComp) {
    const card = createElement({
      type: 'section',
      className: 'Journal-card shadow-blue p-2',
      target: target,
    })
    const journalHeading = createElement({
      type: 'h3',
      className: 'Journal-card__heading',
      target: card,
    })
    journalHeading.textContent = 'Yesterday'
    subHeading({ text: 'Rating:' })
    const rating = createElement({
      type: 'ul',
      className: 'Journal-card__rating',
      target: card,
    })

    const journalStars = Array(5).fill()

    journalStars.forEach((_, index) => {
      const ratingItem = createElement({ type: 'li', target: rating })
      ratingItem.innerHTML = RatingStar

      index + 1 > journalRating && ratingItem.classList.add('inactive')
    })

    subHeading({ text: 'Comprehension:' })
    const comprehension = createElement({
      type: 'ul',
      className: 'Journal-card__comprehension',
      target: card,
    })

    const compLevels = Array(10).fill()

    compLevels.forEach((_, index) => {
      const compItem = createElement({ type: 'li', target: comprehension })
      compItem.innerHTML = RatingComprehension

      index + 1 > journalComp && compItem.classList.add('inactive')
    })

    subHeading({ text: 'Motto:' })
    const motto = createElement({
      type: 'p',
      className: 'Journal-card__motto',
      target: card,
    })
    motto.textContent = journalMotto
    subHeading({ text: 'Notes:' })
    const notes = createElement({
      type: 'p',
      className: 'Journal-card__notes',
      target: card,
    })
    notes.textContent = journalNotes

    function subHeading({ text }) {
      const journalSubheading = createElement({
        type: 'h4',
        className: 'Journal-card__sub-heading mt-2 mb-1',
        target: card,
      })
      journalSubheading.textContent = text
    }
  }
}
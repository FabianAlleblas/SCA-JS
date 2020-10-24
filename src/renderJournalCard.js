import { loadLocally } from './handleStorage'
import createElement from './createElement'

import RatingStar from './assets/Star.svg'
import RatingComprehension from './assets/Rectangle.svg'

export default function renderJournalCard({ target, dashBoardMode = false }) {
  const journalEntries = loadLocally('journalEntries') ?? []

  if (dashBoardMode === true) {
    const journalHeading = createElement({
      type: 'h3',
      className: 'Journal-card__heading mb-1',
      target: target,
    })
    journalHeading.textContent = 'Yesterdays Journal:'
  }

  const updatedJournalEntries = dashBoardMode
    ? journalEntries.reverse().slice(0, 1)
    : journalEntries.reverse()

  updatedJournalEntries.forEach((journalEntry) => {
    journalCard(
      journalEntry.notes,
      journalEntry.motto,
      journalEntry.rating,
      journalEntry.comprehension,
      journalEntry.date,
      journalEntry.timestamp
    )
  })

  function journalCard(
    journalNotes,
    journalMotto,
    journalRating,
    journalComp,
    journalDate,
    journalTimeStamp
  ) {
    const dateNow = Date.now()
    const dateOrDayTrying = (dateNow - journalTimeStamp) / 1000 / 3600
    console.log(dateOrDayTrying)
    const card = createElement({
      type: 'section',
      className: 'Journal-card shadow-blue p-2',
      target: target,
    })

    if (dashBoardMode === false) {
      const journalHeading = createElement({
        type: 'h3',
        className: 'Journal-card__heading mb-2',
        target: card,
      })
      journalHeading.textContent = journalDate
    }

    subHeading({ text: 'Rating:' })
    const rating = createElement({
      type: 'ul',
      className: 'Journal-card__rating mb-2',
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
      className: 'Journal-card__comprehension mb-2',
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
      className: 'Journal-card__motto mb-2',
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
        className: 'Journal-card__sub-heading mb-1',
        target: card,
      })
      journalSubheading.textContent = text
    }
  }
}

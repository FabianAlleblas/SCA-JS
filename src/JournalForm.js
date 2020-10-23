import createElement from './createElement'
import './JournalForm.css'
import RatingStar from './assets/star_outline.svg'
import ComprehensionLevel from './assets/rectangle_outline.svg'
import Button from './Buttons'
import { saveLocally, loadLocally } from './handleStorage'

export default function JournalForm({ target, hidden = false, onCLick }) {
  const el = createElement({
    type: 'main',
    className: 'main-scrolling p-3',
    target,
  })

  const journalForm = createElement({
    type: 'form',
    className: 'Journal-form',
    target: el,
  })

  const heading = createElement({
    type: 'h3',
    className: 'Journal-form__heading mb-3',
    target: journalForm,
  })
  heading.textContent = 'Today, 12.10.2020'

  const ratingWrapper = createElement({
    type: 'fieldset',
    className: 'rating-wrapper',
    target: journalForm,
  })

  subHeading({ type: 'legend', text: 'Rating:', target: ratingWrapper })

  const starWrapper = createElement({
    target: ratingWrapper,
    className: 'Journal-form__rating mb-2',
  })

  const allRatingStars = Array(5)
    .fill()
    .map((_, index, arr) => arr.length - index)

  allRatingStars.forEach((ratingStarNumber) =>
    videoKilledTheRadioStar({
      name: 'rating',
      value: ratingStarNumber,
      target: starWrapper,
      //icon: RatingStar,
      icon: `<svg width="36px" 
                  height="35px" 
                  stroke="#7589a2" 
                  stroke-width=".75" 
                  fill="none" 
                  fill-rule="evenodd" 
                  viewBox="-1 0 27 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path d="M8.23458443,7.2288 L0.825542795,8.30177333 L0.715980417,8.32378638 C0.00767592863,8.50741356 -0.252463118,9.41029168 0.291855842,9.93923898 L5.65288072,15.14976 L4.3876206,22.5059207 L4.37507497,22.6116336 C4.32751461,23.3425174 5.11048682,23.8713631 5.78483118,23.5179301 L12.4119178,20.0448 L19.0390043,23.5179301 L19.1359768,23.5624921 C19.8185371,23.833441 20.5650032,23.2545037 20.4362149,22.5059207 L19.1699918,15.14976 L24.5319797,9.93923898 L24.6076386,9.85722905 C25.0724025,9.29362162 24.750523,8.41074247 23.9982927,8.30177333 L16.5882881,7.2288 L13.2754414,0.535136917 C12.9222134,-0.178378972 11.9016221,-0.178378972 11.5483941,0.535136917 L8.23458443,7.2288 Z" id="Path"></path>
             </svg>`,
    })
  )

  const compWrapper = createElement({
    type: 'fieldset',
    className: 'comp-wrapper',
    target: journalForm,
  })

  subHeading({ type: 'legend', text: 'Comprehension:', target: compWrapper })

  const levelWrapper = createElement({
    target: compWrapper,
    className: 'Journal-form__comprehension mb-2',
  })

  const allComprehensionLevels = Array(10)
    .fill()
    .map((_, index, arr) => arr.length - index)

  allComprehensionLevels.forEach((comprehensionLevelNumber) =>
    videoKilledTheRadioStar({
      name: 'comprehension',
      value: comprehensionLevelNumber,
      target: levelWrapper,
      icon: `<svg width="26px" 
                  height="26px" 
                  stroke="#7589a2" 
                  stroke-width=".85" 
                  fill="none" 
                  fill-rule="evenodd" 
                  viewBox="-.5 -.5 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect id="Rectangle-Copy-6" transform="translate(11.000000, 11.000000) rotate(-90.000000) translate(-11.000000, -11.000000) " x="0" y="0" width="22" height="22" rx="4"></rect>
              </svg>`,
    })
  )

  const motto = subHeading({
    type: 'label',
    text: 'Motto:',
    target: journalForm,
  })
  const mottoInput = createElement({
    type: 'input',
    className: 'Journal-form__input w-100 mt-1 mb-2',
    target: motto,
  })

  const notes = subHeading({
    type: 'label',
    text: 'Notes:',
    target: journalForm,
  })
  const notesInput = createElement({
    type: 'textarea',
    className: 'Journal-form__input w-100 mt-1 mb-2',
    target: notes,
  })

  const buttonWrapper = createElement({
    className: 'Journal-form__button-wrapper grid-10 mt-1',
    target: journalForm,
  })
  Button({
    text: 'Cancel',
    className: 'button plain',
    target: buttonWrapper,
    onClick: resetForm,
  })
  Button({
    text: 'Save ✓',
    className: 'button',
    target: buttonWrapper,
    onClick: saveForm,
  })

  function resetForm(event) {
    event.preventDefault()
    journalForm.reset()
  }

  let journalEntries = loadLocally('journalEntries') ?? []

  function saveForm(event) {
    event.preventDefault()
    journalEntries = [
      ...journalEntries,
      {
        Rating: Number(journalForm.rating.value),
        Comprehension: Number(journalForm.comprehension.value),
        Motto: mottoInput.value,
        Notes: notesInput.value,
      },
    ]
    saveLocally('journalEntries', journalEntries)
    journalForm.reset()
  }

  function videoKilledTheRadioStar({
    name,
    value,
    id = `${name}${value}`,
    target,
    icon,
  }) {
    const ratingBox = createElement({ type: 'input', target })
    ratingBox.type = 'radio'
    ratingBox.name = name
    ratingBox.value = value
    ratingBox.id = id
    const iconLabel = createElement({ type: 'label', target })
    iconLabel.setAttribute('for', id)
    iconLabel.innerHTML = `${icon}`
  }

  function subHeading({ type, text, target }) {
    const journalSubheading = createElement({
      type,
      className: 'Journal-form__subheading mb-1',
      target: target,
    })
    journalSubheading.textContent = text
    return journalSubheading
  }

  hidden && hide()

  function show() {
    el.classList.remove('hidden')
  }

  function hide() {
    el.classList.add('hidden')
  }

  return { show, hide }
}

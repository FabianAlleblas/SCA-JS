import createElement from './createElement'
import './JournalForm.css'
import RatingStar from './assets/star_outline.svg'
import ComprehensionLevel from './assets/rectangle_outline.svg'
import Button from './Buttons'

export default function JournalForm({ target, hidden = false }) {
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
    target: journalForm,
  })

  subHeading({ type: 'legend', text: 'Rating:', target: ratingWrapper })

  const starWrapper = createElement({
    target: ratingWrapper,
    className: 'Journal-form__rating mb-2',
  })

  videoKilledTheRadioStar({
    name: 'rating',
    value: '5',
    target: starWrapper,
    icon: RatingStar,
  })
  videoKilledTheRadioStar({
    name: 'rating',
    value: '4',
    target: starWrapper,
    icon: RatingStar,
  })
  videoKilledTheRadioStar({
    name: 'rating',
    value: '3',
    target: starWrapper,
    icon: RatingStar,
  })
  videoKilledTheRadioStar({
    name: 'rating',
    value: '2',
    target: starWrapper,
    icon: RatingStar,
  })
  videoKilledTheRadioStar({
    name: 'rating',
    value: '1',
    target: starWrapper,
    icon: RatingStar,
  })

  const compWrapper = createElement({
    type: 'fieldset',
    target: journalForm,
  })

  subHeading({ type: 'legend', text: 'Comprehension:', target: compWrapper })

  const levelWrapper = createElement({
    target: compWrapper,
    className: 'Journal-form__comprehension mb-2',
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '10',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '9',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '8',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '7',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '6',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '5',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '4',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '3',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '2',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  videoKilledTheRadioStar({
    name: 'comprehension',
    value: '1',
    target: levelWrapper,
    icon: ComprehensionLevel,
  })

  const motto = subHeading({
    type: 'label',
    text: 'Motto:',
    target: journalForm,
  })
  createElement({
    type: 'input',
    className: 'Journal-form__input w-100 mt-1 mb-2',
    target: motto,
  })

  const notes = subHeading({
    type: 'label',
    text: 'Notes:',
    target: journalForm,
  })
  createElement({
    type: 'textarea',
    className: 'Journal-form__input w-100 mt-1 mb-2',
    target: notes,
  })

  const buttonWrapper = createElement({
    className: 'Journal-form__button-wrapper grid-10 mt-1',
    target: journalForm,
  })
  Button({ text: 'Cancel', className: 'button plain', target: buttonWrapper })
  Button({ text: 'Save ✓', className: 'button', target: buttonWrapper })

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

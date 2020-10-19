import createElement from './createElement'
import './JournalForm.css'
import RatingStar from './assets/star_outline.svg'
import ComprehensionLevel from './assets/rectangle_outline.svg'
import Button from './Buttons'

export default function JournalForm({ target, hidden = true }) {
   const el = createElement({ type: 'main', className: 'main-scrolling p-3', target})
   const journalForm = createElement({ type: 'form', className: 'Journal-form', target: el })
   const heading = createElement({ type: 'h3', className: 'Journal-form__heading mb-3', target: journalForm})
    heading.textContent = 'Today, 12.10.2020'
   subHeading({ type: 'h4', text: 'Rating:' })
   const ratingList = createElement({ type:'ul', className: 'Journal-form__rating mb-2', target: journalForm})
    ratingList.innerHTML = `
    <li>${RatingStar}</li> 
    <li>${RatingStar}</li> 
    <li>${RatingStar}</li> 
    <li>${RatingStar}</li> 
    <li>${RatingStar}</li> 
    `
  subHeading({ type: 'h4', text: 'Comprehension:' })
  const comprehensionList = createElement({ type:'ul', className: 'Journal-form__comprehension mb-2', target: journalForm})
  comprehensionList.innerHTML = `
    <li>${ComprehensionLevel}</li>
    <li>${ComprehensionLevel}</li>
    <li>${ComprehensionLevel}</li>
    <li>${ComprehensionLevel}</li>
    <li>${ComprehensionLevel}</li>
    <li>${ComprehensionLevel}</li>
    <li>${ComprehensionLevel}</li>
    <li>${ComprehensionLevel}</li>
    <li>${ComprehensionLevel}</li>
    <li>${ComprehensionLevel}</li>
    `
    
/*  const mottoSubHeading = subHeading({ type: 'label', text: 'Motto:' })
        mottoSubHeading.setAttribute('for', 'motto')  
    const inputMotto = createElement({type: 'input', className: 'Journal-form__input w-100 mt-1 mb-2', target: journalForm })
        inputMotto.id = 'motto'

    const notesSubHeading = subHeading({ type: 'label', text: 'Notes:' })
        notesSubHeading.setAttribute('for', 'notes') 
    const inputNotes = createElement({ type: 'textarea', className: 'Journal-form__input w-100 mt-1 mb-2', target: journalForm })
        inputNotes.id = 'notes' */

    const mottoSubHeading = subHeading({ type: 'label', text: 'Motto:' })
    createElement({type: 'input', className: 'Journal-form__input w-100 mt-1 mb-2', target: mottoSubHeading })

    const notesSubHeading = subHeading({ type: 'label', text: 'Notes:' })
    createElement({ type: 'textarea', className: 'Journal-form__input w-100 mt-1 mb-2', target: notesSubHeading })
        
    const buttonWrapper = createElement({ className: 'Journal-form__button-wrapper grid-10 mt-1', target: journalForm })
    Button({ text: 'Cancel', className: 'button plain', target: buttonWrapper })
    Button({ text: 'Save ✓', className: 'button', target: buttonWrapper })

    function subHeading({ type, text }){
        const journalSubheading = createElement({type, className: 'Journal-form__subheading mb-1', target: journalForm})
        journalSubheading.textContent = text
        return (journalSubheading)
}

hidden && hide()

function show() {
    el.classList.remove('hidden')
}

function hide() {
    el.classList.add('hidden')
}

return {show, hide}
}






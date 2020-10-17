import './Journal.css'
import createElement from './createElement'
import Button from './Buttons'
import RatingStar from './assets/Star.svg'
import RatingComprehension from './assets/Rectangle.svg'

export default function Journal({ target, hidden = true }){
    
    const el = createElement({ type: 'main', className: 'main-scrolling p-3 grid-20', target})
    const buttonWrapper = createElement({ type: 'section', className: 'center', target: el})
    Button({ text: 'Rate Today ⭑', className: 'button btn-200 shadow-orange' ,target: buttonWrapper })
    journalCard()
    journalCard()
    journalCard()


function journalCard(){
    const card = createElement({ type: 'section', className: 'Journal-card shadow-blue p-2', target: el })
    const journalHeading = createElement({ type: 'h3', className: 'Journal-card__heading', target: card })
    journalHeading.textContent = 'Yesterday'
    subHeading({ text: 'Rating:' })
    const rating = createElement({ type: 'ul', className: 'Journal-card__rating', target: card})
    rating.innerHTML = `
    <li>${RatingStar}</li>
    <li>${RatingStar}</li>
    <li>${RatingStar}</li>
    <li class="inactive">${RatingStar}</li>
    <li class="inactive">${RatingStar}</li>
    `
    subHeading({ text: 'Comprehension:' })
    const comprehension = createElement({ type: 'ul', className: 'Journal-card__comprehension', target: card})
    comprehension.innerHTML = `
    <li>${RatingComprehension}</li>
    <li>${RatingComprehension}</li>
    <li>${RatingComprehension}</li>
    <li>${RatingComprehension}</li>
    <li>${RatingComprehension}</li>
    <li>${RatingComprehension}</li>
    <li class="inactive">${RatingComprehension}</li>
    <li class="inactive">${RatingComprehension}</li>
    <li class="inactive">${RatingComprehension}</li>
    <li class="inactive">${RatingComprehension}</li>
    `
    subHeading({ text: 'Motto:' })
        const motto = createElement({ type: 'p', className: 'Journal-card__motto', target: card })
        motto.textContent = '„That\'s life in the city“'
    subHeading({ text: 'Notes:' })
        const notes = createElement({ type: 'p', className: 'Journal-card__notes', target: card })
        notes.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus iusto accusantium possimus ex vero.'

    function subHeading({ text }){
        const journalSubheading = createElement({ type: 'h4', className: 'Journal-card__sub-heading mt-2 mb-1', target: card})
        journalSubheading.textContent = text
    }

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
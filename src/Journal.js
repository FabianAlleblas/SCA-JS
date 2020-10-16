import './Journal.css'
import createElement from './createElement'
import Button from './Buttons'
import RatingStar from './assets/Star.svg'
import RatingComprehension from './assets/Rectangle.svg'

export default function Journal({ target }){
    const el = createElement({ type: 'main', className: 'main-scrolling p-3 grid-20', target})
    const buttonWrapper = createElement({ type: 'section', className: 'center', target: el})
    Button({ text: 'Rate Today ⭑', className: 'button btn-200 shadow-orange' ,target: buttonWrapper })
    const journalCard = createElement({ type: 'section', className: 'Journal-card shadow-blue p-2', target: el })
    const journalHeading = createElement({ type: 'h3', className: 'Journal-card__heading', target: journalCard })
    journalHeading.textContent = 'Yesterday'
    const journalSubheading = createElement({ type: 'h4', className: 'Journal-card__sub-heading mt-2 mb-1', target: journalCard})
    journalSubheading.textContent = 'Rating:'
    const journalList = createElement({ type: 'ul', className: 'journal-card__rating', target: journalCard})
    journalList.innerHTML = `
    <li>${RatingStar}</li>
    <li>${RatingStar}</li>
    <li>${RatingStar}</li>
    <li class="inactive">${RatingStar}</li>    
    <li class="inactive">${RatingStar}</li>
    `
}
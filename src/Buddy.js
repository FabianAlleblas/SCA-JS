import createElement from './createElement'
import './Students.css'

export default function Buddy({ target }){
    const el = createElement({ type: 'main', className: 'main-scrolling scrolling-80 p-3 grid-20', target })
    const studentCard = createElement({ type: 'section', target: el})
    const studentsList = createElement({ type: 'ul', className: 'Students__list Students__pairing', target: studentCard })
    studentsList.innerHTML = `
    <li>Angela Longoria</li>
    <li>Maria Trofimova</li>
    ` 
}
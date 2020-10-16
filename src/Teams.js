import createElement from './createElement'
import './Students.css'

export default function Teams({ target }){
 const el = createElement({ type: 'main', className: 'main-scrolling scrolling-80 p-3 grid-30 hidden', target })
 
 teamList({ heading: 'Team 1' })
 teamList({ heading: 'Team 2' })
 teamList({ heading: 'Team 3' })
 teamList({ heading: 'Team 4' })
 
 function teamList ({ heading }){
    const studentCard = createElement({ type: 'section', target: el })
    const studentsHeading = createElement({ type: 'h3', className: 'Students__heading mb-1', target: studentCard})
    studentsHeading.textContent = heading
    const studentsList = createElement({ type: 'ul', className: 'Students__list', target: studentCard})
    studentsList.innerHTML = `
       <li>Sudanka Bakalowits</li>
       <li>Yasaman Foroutan</li>
       <li>Sudanka Bakalowits</li>
       <li>Yasaman Foroutan</li>
       <li>Sudanka Bakalowits</li>`
    }
}
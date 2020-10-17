import createElement from './createElement'
import './Students.css'
import Plus from './assets/Plus.svg'

export default function Buddy({ target }){
    const el = createElement({ type: 'main', className: 'main-scrolling scrolling-80 p-3 grid-20 hidden', target })
    pairList({ student1: 'Sudanka Bakalowits', student2: 'Yasaman Foroutan' })
    pairList({ student1: 'Sudanka Bakalowits', student2: 'Yasaman Foroutan' })
    pairList({ student1: 'Sudanka Bakalowits', student2: 'Yasaman Foroutan' })
    pairList({ student1: 'Sudanka Bakalowits', student2: 'Yasaman Foroutan' })

    function pairList({ student1, student2 }){
        const studentCard = createElement({ type: 'section', target: el})
        const studentsList = createElement({ type: 'ul', className: 'Students__list Students__pairing', target: studentCard })
        studentsList.innerHTML = `
        <li>${student1}</li>
        ${Plus}
        <li>${student2}</li>
        ` 
    }
}


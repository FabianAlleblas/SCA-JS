import createElement from './createElement'
import './Students.css'
import Plus from './assets/Plus.svg'

export default function Buddy({ target, dashBoardMode = false }){

    const el = dashBoardMode ? target : createElement({ type: 'main', className: 'main-scrolling scrolling-80 p-3 grid-20', target })
    
    const studentPairs = [
        { student1: 'Sudanka Bakalowits', student2: 'Yasaman Foroutan' },
        { student1: 'Sudanka Foo Bakalowits', student2: 'Yasaman Foo Foroutan' },
        { student1: 'Sudanka Bar Bakalowits', student2: 'Yasaman Bar Foroutan' },
        { student1: 'Sudanka Bla Bakalowits', student2: 'Yasaman Bla Foroutan' }
    ]
    
    const firstStudentPair = studentPairs.slice(0,1)
    const listStudents = dashBoardMode ? firstStudentPair : studentPairs
    listStudents.forEach(studentPair => pairList(studentPair))

    function pairList({ student1, student2 }){
        const studentCard = createElement({ type: 'section', target: el })
        const studentsList = createElement({ type: 'ul', className: 'Students__list Students__pairing', target: studentCard })
        studentsList.innerHTML = `
        <li>${student1}</li>
        ${Plus}
        <li>${student2}</li>
        ` 
    }
}


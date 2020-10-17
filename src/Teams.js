import createElement from './createElement'
import './Students.css'

export default function Teams({ target, dashBoardMode = false }){
 const el = dashBoardMode ? target : createElement({ type: 'main', className: 'main-scrolling scrolling-80 p-3 grid-30', target })
 const studentTeamList = [
   {
   student1: 'Sudanka Bakalowits',
   student2: 'Yasaman Foroutan',
   student3: 'Sudanka Bakalowits',
   student4: 'Yasaman Foroutan',
   student5: 'Sudanka Bakalowits'
   },
   {
   student1: 'Sudanka sri Bakalowits',
   student2: 'Yasaman sri Foroutan',
   student3: 'Sudanka sri Bakalowits',
   student4: 'Yasaman sri Foroutan',
   student5: 'Sudanka sri Bakalowits'
   },
   {
   student1: 'Sudanka blub Bakalowits',
   student2: 'Yasaman blub Foroutan',
   student3: 'Sudanka blub Bakalowits',
   student4: 'Yasaman blub Foroutan',
   student5: 'Sudanka blub Bakalowits'
   },
   {
   student1: 'Sudanka bla Bakalowits',
   student2: 'Yasaman bla Foroutan',
   student3: 'Sudanka bla Bakalowits',
   student4: 'Yasaman bla Foroutan',
   student5: 'Sudanka bla Bakalowits'
   }
 ]

 studentTeamList.forEach((team, index) => teamList({ team, index })) 
 
 function teamList ({ index, team }){
   const studentCard = createElement({ type: 'section', target: el })
   const studentsHeading = createElement({ type: 'h3', className: 'Students__heading mb-1', target: studentCard})
   studentsHeading.textContent = 'Team ' + ++index
   const studentsList = createElement({ type: 'ul', className: 'Students__list', target: studentCard})
   const teamStudentNames = Object.values(team)
   teamStudentNames.forEach(member => {
   const studentListItem = createElement({ type:'li', target: studentsList })
   studentListItem.textContent = member
      })
   }
}
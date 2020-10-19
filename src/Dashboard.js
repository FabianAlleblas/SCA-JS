import Buddy from './Buddy'
import Teams from './Teams'
import Journal from './Journal'
import createElement from './createElement'

export default function Dashboard({ target, hidden = false }){
const el = createElement({ type: 'main', className: 'main-scrolling p-3 grid-30', target })
Buddy({ target: el, dashBoardMode: true })
Teams({ target: el, dashBoardMode: true })

hidden && hide()

function show() {
    el.classList.remove('hidden')
}

function hide() {
    el.classList.add('hidden')
}

return {show, hide}
}
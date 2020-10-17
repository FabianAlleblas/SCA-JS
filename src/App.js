import './App.css'

import createElement from './createElement'

// import Header from './Header'
import Navigation from './Navigation'
// import Button from './Button'
import Energy from './Energy'
import Journal from './Journal'
import JournalForm from './JournalForm'
import Teams from './Teams'
import Buddy from './Buddy'
import Dashboard from './Dashboard'

import DashboardIcon from './assets/DashboardIcon.svg'
import BuddyIcon from './assets/BuddyIcon.svg'
import TeamIcon from './assets/TeamIcon.svg'
import JournalIcon from './assets/JournalIcon.svg'
import EnergyIcon from './assets/EnergyIcon.svg'


export default function App({ target }) {
    const el = createElement({ className: 'App' })


const navMappings = [

    /* {
        path: 'Dashboard',
        component: Dashboard({target: el, hidden: false })
        icon: DashboardIcon
    }, */
    {
        path: 'buddys',
        component: Buddy({target: el, hidden: true }),
        icon: BuddyIcon
    },
    {
        path: 'teams',
        component: Teams({target: el, hidden: false }),
        icon: TeamIcon
    },
    {
        path: 'energy',
        component: Energy({target: el, hidden: false }),
        icon: EnergyIcon
    },
    {
        path: 'journal',
        component: Journal({target: el, hidden: false }),
        icon: JournalIcon
    },
    
    ]


/* Teams({ target: el })
Buddy({ target: el })
Energy({ target: el })
Journal({ target: el }) */
JournalForm( {target: el })
Navigation( {target: el })
}


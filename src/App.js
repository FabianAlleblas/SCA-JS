import './App.css'

import createElement from './createElement'

// import Header from './Header'
// import Navigation from './Navigation'
// import Button from './Button'
import Energy from './Energy'
import Journal from './Journal'
// import JournalForm from './JournalForm'
import Teams from './Teams'
import Buddy from './Buddy'

export default function App({ target }) {
    const el = createElement({ className: 'App' })

Teams({ target: el })
Buddy({ target: el })
Journal({ target: el })
Energy({ target: el })
}
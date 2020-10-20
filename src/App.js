import './App.css'

import createElement from './createElement'

import Header from './Header'
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

  const navItems = [
    {
      path: 'dashboard',
      component: Dashboard({ target: el, hidden: true }),
      icon: DashboardIcon,
      title: 'Dashboard',
    },
    {
      path: 'buddys',
      component: Buddy({ target: el, hidden: true }),
      icon: BuddyIcon,
      title: 'Code Buddys',
      subtitle: 'On Monday - 18.07.2020',
    },
    {
      path: 'teams',
      component: Teams({ target: el, hidden: true }),
      icon: TeamIcon,
      title: 'Teams',
      subtitle: 'for Exercise 1',
    },
    {
      path: 'energy',
      component: Energy({ target: el, hidden: true }),
      icon: EnergyIcon,
      title: 'Energy',
    },
    {
      path: 'journal',
      component: Journal({ target: el, hidden: true }),
      icon: JournalIcon,
      title: 'Journal',
    },
  ]

  const header = Header({ title: navItems[0].title, target: el })

  JournalForm({ target: el, hidden: false })

  Navigation({ target: el, navItems, onNavigate: handleNavigate })

  function handleNavigate(path) {
    const newNavItem = navItems.find((navItem) => navItem.path === path)
    header.update(newNavItem.title, newNavItem.subtitle)
    navItems.forEach((navItem) =>
      navItem === newNavItem
        ? navItem.component.show()
        : navItem.component.hide()
    )
  }
}

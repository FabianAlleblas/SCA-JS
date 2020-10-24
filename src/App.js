import './App.css'

import createElement from './createElement'

import Header from './Header'
import Navigation from './Navigation'
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
import getDate from './getDate'

export default function App({ target }) {
  const date = getDate()
  const el = createElement({ className: 'App' })

  const navItems = [
    {
      path: 'dashboard',
      component: Dashboard({ target: el, hidden: false }),
      icon: DashboardIcon,
      title: 'Dashboard',
    },
    {
      path: 'buddys',
      component: Buddy({ target: el, hidden: true }),
      icon: BuddyIcon,
      title: 'Code Buddys',
      subtitle: date.subheadingDate,
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
      component: Journal({ target: el, hidden: true, singleButtonNavigation }),
      icon: JournalIcon,
      title: 'Journal',
    },
    {
      path: 'journal-form',
      component: JournalForm({
        target: el,
        hidden: true,
        singleButtonNavigation,
      }),
      title: 'Journal',
    },
  ]

  const header = Header({ title: navItems[0].title, target: el })

  Navigation({ target: el, navItems, onNavigate: handleNavigate })

  function handleNavigate(path, btn, allButtons) {
    const newNavItem = navItems.find((navItem) => navItem.path === path)
    header.update(newNavItem.title, newNavItem.subtitle)

    allButtons.forEach((Button) => {
      btn === Button
        ? Button.classList.add('Navigation__link--active')
        : Button.classList.remove('Navigation__link--active')
    })

    navItems.forEach((navItem) =>
      navItem === newNavItem
        ? navItem.component.show()
        : navItem.component.hide()
    )
  }

  function singleButtonNavigation({ path }) {
    navItems.forEach((navItem) => {
      navItem.path === path
        ? navItem.component.show()
        : navItem.component.hide()
    })
  }
}

export default function getDate() {
  const d = new Date()

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  const dayIndex = d.getDay()
  const dayName = days[dayIndex]

  const date = d.toLocaleDateString('de-DE')

  const subheadingDate = `On ${dayName} - ${date}`
  const journalDate = `${date}`

  return { subheadingDate, journalDate }
}

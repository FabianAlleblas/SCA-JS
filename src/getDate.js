export default function getDate() {
  const d = new Date()

  const months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ]
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

  const date = d.getDate()

  const monthIndex = d.getMonth()
  const month = months[monthIndex]

  const year = d.getFullYear()

  const formattedDate = `On ${dayName} - ${date}.${month}.${year}`

  return formattedDate
}

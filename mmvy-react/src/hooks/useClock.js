import { useEffect, useState } from 'react'

const pad2 = (n) => n.toString().padStart(2, '0')

function format(now) {
  const date = `${pad2(now.getDate())}/${pad2(now.getMonth() + 1)}/${now.getFullYear()}`
  const time = `${pad2(now.getHours())}:${pad2(now.getMinutes())}:${pad2(now.getSeconds())}`
  return { date, dateTime: `${date} ${time}` }
}

// Live clock: updates every second
export default function useClock() {
  const [clock, setClock] = useState(() => format(new Date()))

  useEffect(() => {
    const id = setInterval(() => setClock(format(new Date())), 1000)
    return () => clearInterval(id)
  }, [])

  return clock
}

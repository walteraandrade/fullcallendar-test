import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'

import React from 'react';

const Home = () => {
  return (
    <div>
      <FullCalendar
      plugins={[timeGridPlugin]} />
    </div>
  )
}

export default Home;
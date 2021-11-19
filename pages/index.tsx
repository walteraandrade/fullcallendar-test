import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import React from 'react';

const Home = () => {
  return (
    <FullCalendar
    plugins={[interactionPlugin, timeGridPlugin]}
    initialView='timeGridWeek'
    nowIndicator={true}
    editable={true}
    initialEvents={[
      { title: 'nice event', start: new Date() }
    ]}
  />
  )
}

export default Home;
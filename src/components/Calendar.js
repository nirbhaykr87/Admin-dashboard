import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // For interaction features
import './Calendar.css'; // Import custom CSS for styling

const Calendar = () => {
  // Function to handle event clicks
  const handleEventClick = (clickInfo) => {
    alert(`Event: ${clickInfo.event.title}`);
  };

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={[
          { title: 'Event 1', date: '2024-07-01', backgroundColor: '#ff9f40' },
          { title: 'Event 2', date: '2024-07-02', backgroundColor: '#f15c80' },
        ]}
        eventClick={handleEventClick} // Handle event clicks
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        themeSystem="bootstrap" // Optionally use a bootstrap theme
        eventContent={(eventInfo) => (
          <div style={{ backgroundColor: eventInfo.event.backgroundColor, color: '#fff', padding: '5px', borderRadius: '4px' }}>
            {eventInfo.event.title}
          </div>
        )}
      />
    </div>
  );
};

export default Calendar;

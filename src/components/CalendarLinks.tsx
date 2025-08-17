import React from "react";

const CalendarLinks = () => {
  // Event details
  const eventTitle = "John & Emily's Wedding";
  const eventDescription = "Join us for our wedding celebration!";
  const eventLocation = "Circ, 210 S 1st St, Ann Arbor, MI 48104";

  // Date and time (ISO format for compatibility)
  const startDate = "2026-07-11T16:00:00"; // 4:00 PM
  const endDate = "2026-07-11T23:00:00"; // 11:00 PM

  // Google Calendar link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventTitle,
  )}&dates=${startDate.replace(/[-:]/g, "")}/${endDate.replace(
    /[-:]/g,
    "",
  )}&details=${encodeURIComponent(
    eventDescription,
  )}&location=${encodeURIComponent(eventLocation)}`;

  // Apple Calendar link (ics file)
  const generateIcsContent = () => {
    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      `SUMMARY:${eventTitle}`,
      `DTSTART:${startDate.replace(/[-:]/g, "")}`,
      `DTEND:${endDate.replace(/[-:]/g, "")}`,
      `LOCATION:${eventLocation}`,
      `DESCRIPTION:${eventDescription}`,
      "STATUS:CONFIRMED",
      "SEQUENCE:0",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    return "data:text/calendar;charset=utf-8," + encodeURIComponent(icsContent);
  };

  const appleCalendarUrl = generateIcsContent();

  return (
    <div className="calendar-links">
      <p className="event-date">
        <strong>Saturday, July 11, 2026</strong>
      </p>
      <p>Ceremony: 4:00 PM</p>
      <p>Reception: 6:00 PM</p>
      <div className="calendar-buttons">
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="calendar-button google-calendar"
        >
          Add to Google Calendar
        </a>
        <a
          href={appleCalendarUrl}
          download="john-emily-wedding.ics"
          className="calendar-button apple-calendar"
        >
          Add to Apple Calendar
        </a>
      </div>
      <style jsx>{`
        .calendar-links {
          margin: 1rem 0;
        }
        .event-date {
          margin-bottom: 0.5rem;
        }
        .calendar-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin-top: 1rem;
        }
        .calendar-button {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.2s ease;
          display: inline-block;
          text-align: center;
        }
        .calendar-button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        .google-calendar {
          background-color: var(--color-primary);
          color: white;
        }
        .apple-calendar {
          background-color: var(--color-sage);
          color: white;
        }

        @media (min-width: 768px) {
          .calendar-buttons {
            flex-direction: row;
          }
        }
      `}</style>
    </div>
  );
};

export default CalendarLinks;

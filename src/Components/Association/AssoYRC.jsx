import React, { useState } from 'react';

const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const MONTH_SHORT = [
  'Jan','Feb','Mar','Apr','May','Jun',
  'Jul','Aug','Sep','Oct','Nov','Dec'
];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

const ALL_EVENTS = [
  { month: 1,  day: 12, name: 'Youth Day',                         tag: 'YRC Awareness Campaign' },
  { month: 2,  day: 4,  name: 'World Cancer Day',                  tag: 'Health Awareness Drive' },
  { month: 2,  day: 6,  name: 'Zero Tolerance FGM Day',            tag: 'Human Rights Campaign' },
  { month: 2,  day: 15, name: 'YRC Day',                           tag: 'YRC Foundation Day' },
  { month: 3,  day: 8,  name: "International Women's Day",         tag: 'Gender Equality Event' },
  { month: 3,  day: 21, name: 'World Water Day',                   tag: 'Environmental Awareness' },
  { month: 3,  day: 24, name: 'World TB Day',                      tag: 'Health Awareness Drive' },
  { month: 4,  day: 7,  name: 'World Health Day',                  tag: 'Community Health Outreach' },
  { month: 4,  day: 22, name: 'World Earth Day',                   tag: 'Green Campus Drive' },
  { month: 5,  day: 3,  name: 'World Asthma Day',                  tag: 'Health Awareness Drive' },
  { month: 5,  day: 8,  name: 'World Red Cross Day',               tag: 'Founder: Jean Henri Dunant' },
  { month: 5,  day: 31, name: 'World No Tobacco Day',              tag: 'Anti-Tobacco Campaign' },
  { month: 6,  day: 5,  name: 'World Environment Day',             tag: 'Environmental Campaign' },
  { month: 6,  day: 26, name: 'International Anti-Drug Abuse Day', tag: 'Drug Prevention Awareness' },
  { month: 7,  day: 11, name: 'World Population Day',              tag: 'Community Awareness' },
  { month: 8,  day: 12, name: 'Geneva Convention Day',             tag: 'Humanitarian Law Day' },
  { month: 8,  day: 31, name: "World Missing Persons Day",         tag: 'Awareness Campaign' },
  { month: 9,  day: 5,  name: "Teachers' Day",                     tag: 'Felicitation Programme' },
  { month: 9,  day: 8,  name: 'World Literacy Day',                tag: 'Education Drive' },
  { month: 9,  day: 25, name: 'World Heart Day',                   tag: 'Cardiac Health Awareness' },
  { month: 10, day: 1,  name: 'National Blood Donors Day',         tag: 'Blood Donation Camp' },
  { month: 10, day: 2,  name: 'National Disaster Reduction Day',   tag: 'Safety Awareness' },
  { month: 10, day: 10, name: 'World Mental Health Day',           tag: 'Mental Wellness Drive' },
  { month: 11, day: 7,  name: 'National Cancer Awareness Day',     tag: 'Health Drive' },
  { month: 11, day: 11, name: 'National Filaria Day',              tag: 'Disease Prevention Drive' },
  { month: 11, day: 14, name: 'World Diabetes Day',                tag: 'Health Awareness Drive' },
  { month: 12, day: 1,  name: 'World AIDS Day',                    tag: 'HIV Awareness Campaign' },
  { month: 12, day: 3,  name: 'World Disabled Day',                tag: 'Inclusion & Accessibility' },
  { month: 12, day: 10, name: 'National Pulse Polio Day',          tag: 'Immunisation Drive' },
];

function getEventsForMonth(m) {
  return ALL_EVENTS.filter(e => e.month === m).sort((a, b) => a.day - b.day);
}

function getEventsForDay(m, d) {
  return ALL_EVENTS.filter(e => e.month === m && e.day === d);
}

function buildCalendarCells(month) {
  const year = new Date().getFullYear();
  const firstDay = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();
  const prevDays = new Date(year, month - 1, 0).getDate();
  const cells = [];

  for (let i = 0; i < firstDay; i++) {
    cells.push({ day: prevDays - firstDay + 1 + i, current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, current: true });
  }
  const rows = Math.ceil(cells.length / 7);
  const remaining = rows * 7 - cells.length;
  for (let i = 1; i <= remaining; i++) {
    cells.push({ day: i, current: false });
  }
  return cells;
}

const AssoYRC = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth() + 1);
  const [focusDay, setFocusDay] = useState(null);

  const cells = buildCalendarCells(currentMonth);
  const monthEvents = getEventsForMonth(currentMonth);
  const displayEvents = focusDay
    ? getEventsForDay(currentMonth, focusDay)
    : monthEvents;

  const prevMonth = () => setCurrentMonth(m => (m === 1 ? 12 : m - 1));
  const nextMonth = () => setCurrentMonth(m => (m === 12 ? 1 : m + 1));

  const handleDayClick = (day, isCurrent) => {
    if (!isCurrent) return;
    const evs = getEventsForDay(currentMonth, day);
    if (!evs.length) return;
    if (focusDay === day) {
      setFocusDay(null);
    } else {
      setFocusDay(day);
    }
  };

  const handleMonthChange = (dir) => {
    setFocusDay(null);
    dir === -1 ? prevMonth() : nextMonth();
  };

  const panelTitle = focusDay
    ? `${MONTHS[currentMonth - 1]} ${focusDay}`
    : `Events in ${MONTHS[currentMonth - 1]}`;

  return (
    <section className="yrc" id="yrc">
      <div className="yrc__container">

        <div className="yrc__header">
          <span className="yrc__badge">YRC Activity Calendar</span>
          <h2 className="yrc__title">Year-Round <span>Events &amp; Drives</span></h2>
          <p className="yrc__sub">
            The Youth Red Cross chapter conducts meaningful campaigns throughout the year,
            building a culture of compassion and service.
          </p>
        </div>

        <div className="yrc__grid">

          {/* Left — Calendar */}
          <div className="yrc__cal">
            <div className="yrc__cal-header">
              <button className="yrc__nav-btn" onClick={() => handleMonthChange(-1)} aria-label="Previous month">
                &#8249;
              </button>
              <span className="yrc__cal-month">{MONTHS[currentMonth - 1]}</span>
              <button className="yrc__nav-btn" onClick={() => handleMonthChange(1)} aria-label="Next month">
                &#8250;
              </button>
            </div>

            <div className="yrc__cal-dow-row">
              {DAYS.map(d => (
                <div key={d} className="yrc__cal-dow">{d}</div>
              ))}
            </div>

            <div className="yrc__cal-cells">
              {cells.map((cell, i) => {
                const evCount = cell.current ? getEventsForDay(currentMonth, cell.day).length : 0;
                let cls = 'yrc__cal-cell';
                if (!cell.current) cls += ' yrc__cal-cell--dim';
                else if (evCount > 1) cls += ' yrc__cal-cell--multi';
                else if (evCount === 1) cls += ' yrc__cal-cell--single';
                if (cell.current && focusDay === cell.day) cls += ' yrc__cal-cell--active';

                return (
                  <div
                    key={i}
                    className={cls}
                    onClick={() => handleDayClick(cell.day, cell.current)}
                    title={evCount ? getEventsForDay(currentMonth, cell.day).map(e => e.name).join(', ') : ''}
                  >
                    {cell.day}
                    {evCount > 0 && <span className="yrc__cal-dot" />}
                  </div>
                );
              })}
            </div>

            <div className="yrc__legend">
              <div className="yrc__legend-item">
                <span className="yrc__legend-dot yrc__legend-dot--single" />
                1 event
              </div>
              <div className="yrc__legend-item">
                <span className="yrc__legend-dot yrc__legend-dot--multi" />
                2+ events
              </div>
              <div className="yrc__legend-item yrc__legend-hint">
                Click a date to filter
              </div>
            </div>
          </div>

          {/* Right — Event List */}
          <div className="yrc__events">
            <div className="yrc__events-header">
              <span className="yrc__events-title">{panelTitle}</span>
              {focusDay && (
                <button className="yrc__clear-btn" onClick={() => setFocusDay(null)}>
                  Show all &times;
                </button>
              )}
            </div>

            <div className="yrc__event-list">
              {displayEvents.length === 0 ? (
                <div className="yrc__empty">No events this month</div>
              ) : (
                displayEvents.map((ev, i) => (
                  <div key={i} className="yrc__event-item">
                    <div className="yrc__event-badge">
                      <span className="yrc__event-badge-day">{ev.day}</span>
                      <span className="yrc__event-badge-mo">{MONTH_SHORT[ev.month - 1]}</span>
                    </div>
                    <div className="yrc__event-info">
                      <div className="yrc__event-name">{ev.name}</div>
                      <div className="yrc__event-tag">{ev.tag}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AssoYRC;
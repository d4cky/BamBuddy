// Turns "2025-08-17" into "20250817", and returns the following day for the end date.
// Google Calendar (like iCalendar) treats the end of an all-day event as exclusive,
// so a one-day event on 17 Aug must be written as 20250817/20250818.
function toAllDayRange(isoDate) {
  const [year, month, day] = isoDate.split("-").map(Number);
  const startDate = new Date(Date.UTC(year, month - 1, day));
  const endDate = new Date(Date.UTC(year, month - 1, day + 1));
  const format = (d) => d.toISOString().slice(0, 10).replace(/-/g, "");
  return `${format(startDate)}/${format(endDate)}`;
}

function getAllDayGoogleCalendarUrl({ title, date, details, location }) {
  const base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';

  const params = new URLSearchParams({
    text: title,
    dates: toAllDayRange(date),
    details,
    location,
  });

  return `${base}&${params.toString()}`;
}

module.exports = { getAllDayGoogleCalendarUrl, toAllDayRange };

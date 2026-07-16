/**
 * All schedule times are shown in the event's timezone (Africa/Windhoek),
 * not the visitor's, so every visitor sees the venue's wall-clock times.
 * Formatting is done with Intl so the output is identical on server and
 * client regardless of their local timezones.
 */
const EVENT_TIME_ZONE = "Africa/Windhoek";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: EVENT_TIME_ZONE,
  month: "long",
  day: "2-digit",
  year: "numeric",
});

const timeFormatter = new Intl.DateTimeFormat("en-GB", {
  timeZone: EVENT_TIME_ZONE,
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const dayLabelFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: EVENT_TIME_ZONE,
  month: "short",
  day: "2-digit",
});

const dayKeyFormatter = new Intl.DateTimeFormat("en-CA", {
  timeZone: EVENT_TIME_ZONE,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

/** e.g. "August 04, 2026" */
export function formatEventDate(date: Date): string {
  return dateFormatter.format(date);
}

/** e.g. "08:00" */
export function formatEventTime(date: Date): string {
  return timeFormatter.format(date);
}

/** e.g. "Aug 04" — used for the day-selector buttons. */
export function formatEventDayLabel(date: Date): string {
  return dayLabelFormatter.format(date);
}

/** e.g. "2026-08-04" — sortable key for grouping sessions by event day. */
export function getEventDayKey(date: Date): string {
  return dayKeyFormatter.format(date);
}

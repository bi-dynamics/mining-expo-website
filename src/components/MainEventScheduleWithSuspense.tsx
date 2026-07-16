import { getExpoSessions } from "@/lib/getSessions";
import EventSchedule from "./EventSchedule";

export async function MainEventScheduleWithSuspense() {
  const sessions = await getExpoSessions();
  return <EventSchedule heading="Schedule" sessions={sessions} />;
}

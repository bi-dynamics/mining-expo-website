import { getConferenceSessions } from "@/lib/getSessions";
import EventSchedule from "./EventSchedule";

export async function ProgrammeScheduleWithSuspense() {
  const sessions = await getConferenceSessions();
  return <EventSchedule heading="Programme Schedule" sessions={sessions} />;
}

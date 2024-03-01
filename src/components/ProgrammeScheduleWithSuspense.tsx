import { getProgrammeSchedule } from "@/lib/getProgrammeSchedule";
import ProgrammeSchedule from "./ProgrammeSchedule";

export async function ProgrammeScheduleWithSuspense() {
  const programmeSchedules = await getProgrammeSchedule();
  return <ProgrammeSchedule schedules={programmeSchedules} />;
}

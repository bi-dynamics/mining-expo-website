import { getMainSchedule } from "@/lib/getMainSchedule";
import MainEventSchedule from "./MainEventSchedule";

export async function MainEventScheduleWithSuspense() {
  const schedules = await getMainSchedule();
  return <MainEventSchedule schedules={schedules} />;
}

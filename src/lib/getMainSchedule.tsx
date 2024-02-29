import { db } from "./firebaseConfig";
import { Timestamp, collection, getDocs } from "firebase/firestore";

export interface ScheduleData {
  id?: string;
  description?: string;
  location?: string;
  name?: string;
  speakerNames?: string;
  timeEnd?: Timestamp;
  timeStart?: Timestamp;
  tracks?: string;
  speakerProfilePicture?: string;
  speakerTitle?: string;
}

export async function getMainSchedule(): Promise<ScheduleData[]> {
  const querySnapshot = await getDocs(collection(db, "conference_schedule"));
  const schedule: ScheduleData[] = [];

  querySnapshot.forEach((doc) => {
    schedule.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return schedule;
}

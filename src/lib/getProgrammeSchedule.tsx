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
  speakers?: SpeakersAttending[];
  chairperson?: ChairpersonAttending[];
  moderator?: ModeratorAttending[];
  panelists?: PanelistsAttending[];
}

export interface SpeakersAttending {
  speakerName: string;
  speakerTitle: string;
  speakerProfilePicture: string;
}

export interface ChairpersonAttending {
  speakerName: string;
  speakerTitle: string;
  speakerProfilePicture?: string;
}

export interface ModeratorAttending {
  speakerName: string;
  speakerTitle: string;
  speakerProfilePicture?: string;
}

export interface PanelistsAttending {
  speakerName: string;
  speakerTitle: string;
  speakerProfilePicture?: string;
}

export async function getProgrammeSchedule(): Promise<ScheduleData[]> {
  const querySnapshot = await getDocs(collection(db, "expo_schedule"));
  const programmeSchedule: ScheduleData[] = [];

  querySnapshot.forEach((doc) => {
    programmeSchedule.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return programmeSchedule;
}

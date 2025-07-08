import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export interface SpeakerData {
  id?: string;
  bio?: string;
  profilePicture?: string;
  speakerName?: string;
  title?: string;
  linkedinProfile?: string;
  websiteLink?: string;
  email?: string;
  status?: "active" | "draft";
}

export async function getSpeakers(): Promise<SpeakerData[]> {
  const querySnapshot = await getDocs(collection(db, "speakers"));
  const speakers: SpeakerData[] = [];

  querySnapshot.forEach((doc) => {
    speakers.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return speakers;
}

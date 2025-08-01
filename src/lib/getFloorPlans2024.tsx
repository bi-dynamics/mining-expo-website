import { db } from "./firebaseConfig";
import { collection, getDocs, getDocsFromServer } from "firebase/firestore";

export interface FloorPlanData2024 {
  id: string;
  image?: string;
  alt?: string;
  exhibitors?: ExhibitorsData[];
  sourceYears?: { year: number; src: string }[];
}

export interface ExhibitorsData {
  image: string;
  name: string;
  standNumber: number;
}

export async function getFloorPlans2024(): Promise<FloorPlanData2024[]> {
  const querySnapshot = await getDocs(collection(db, "floor_plans_2024"));
  const floorPlans: FloorPlanData2024[] = [];

  querySnapshot.forEach((doc) => {
    floorPlans.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return floorPlans;
}

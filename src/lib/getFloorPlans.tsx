import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export interface FloorPlanData {
  id?: string;
  image?: string;
  alt?: string;
}

export async function getFloorPlans(): Promise<FloorPlanData[]> {
  const querySnapshot = await getDocs(collection(db, "floor_plans"));
  const floorPlans: FloorPlanData[] = [];

  querySnapshot.forEach((doc) => {
    floorPlans.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return floorPlans;
}
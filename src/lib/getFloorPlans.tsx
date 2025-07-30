import { db } from "./firebaseConfig";
import { collection, getDocs, getDocsFromServer } from "firebase/firestore";

export interface FloorPlanData {
  id?: string;
  image?: string;
  alt?: string;
  sourceYears?: { src: string; year: number }[];
}

export async function getFloorPlansByYear(year: number) {
  //for year 2023, the collection name is just floor_plans
  //for year 2024 and beyond, the collection name is floor_plans_<year>
  const collectionName = year === 2023 ? "floor_plans" : `floor_plans_${year}`;
  const querySnapshot = await getDocs(collection(db, collectionName));
  const floorPlans: FloorPlanData[] = [];

  querySnapshot.forEach((doc) => {
    floorPlans.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return floorPlans;
}

export async function getFloorPlans(): Promise<FloorPlanData[]> {
  const querySnapshot = await getDocsFromServer(collection(db, "floor_plans"));
  const floorPlans: FloorPlanData[] = [];

  querySnapshot.forEach((doc) => {
    floorPlans.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return floorPlans;
}

export async function getCurrentYearFloorPlans() {
  const currentYear = new Date().getFullYear();
  const querySnapshot = await getDocs(collection(db, "floor_plans"));
  const floorPlans: FloorPlanData[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as FloorPlanData;
    if (
      data.sourceYears &&
      data.sourceYears.some((source) => source.year === currentYear)
    ) {
      floorPlans.push({
        id: doc.id,
        ...data,
      });
    }
  });

  return floorPlans;
}

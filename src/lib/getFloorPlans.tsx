import { db } from "./firebaseConfig";
import { collection, getDocs, getDocsFromServer, query, where } from "firebase/firestore";

export interface FloorPlanData {
  id?: string;
  image?: string;
  alt?: string;
  sourceYears?: { src: string; year: number }[];
  years?: number[];
}

export async function getFloorPlansByYear(year: number) {
  //for year 2024, 2025 and beyond the collection name is floor_plans_<year>
  //for year 2023 and before, the collection name is floor_plans
  const collectionName = year >= 2024 ? `floor_plans_2024` : "floor_plans";
  //have the query check for the years field of the object in the firestore array where the source year === year
  //years is an array of numbers
  const q = query(collection(db, collectionName));
  const querySnapshot = await getDocs(q);
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

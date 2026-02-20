import { db } from "./firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export interface ExhibitorData {
  id?: string;
  description?: string;
  logo?: string;
  name?: string;
  yearsAtEvent?: number[];
  status?: "active" | "draft";
}

export async function getExhibitorsByYear(year: number) {
  const currentYear = new Date().getFullYear();
  //for year 2024, the collection name is  exhibitors_<year>
  //for year 2023, 2025 and beyond, the collection name is exhibitors
  const collectionName = year === 2024 ? `exhibitors_${year}` : "exhibitors";
  const querySnapshot = await getDocs(collection(db, collectionName));
  const exhibitors: ExhibitorData[] = [];

  if (collectionName === "exhibitors") {
    const q = query(collection(db, collectionName), where("yearsAtEvent", "array-contains", year));
    const filteredSnapshot = await getDocs(q);
    filteredSnapshot.forEach((doc) => {
      exhibitors.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return exhibitors;
  }


  querySnapshot.forEach((doc) => {
    exhibitors.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return exhibitors;
}

export async function getExhibitors() {
  const querySnapshot = await getDocs(collection(db, "exhibitors"));
  const exhibitors: ExhibitorData[] = [];

  querySnapshot.forEach((doc) => {
    exhibitors.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return exhibitors;
}

export async function getCurrentYearExhibitors() {
  const currentYear = new Date().getFullYear();
  const querySnapshot = await getDocs(collection(db, "exhibitors"));
  const exhibitors: ExhibitorData[] = [];

  querySnapshot.forEach((doc) => {
    const data = doc.data() as ExhibitorData;
    if (
      data.status === "active" &&
      Array.isArray(data.yearsAtEvent) &&
      data.yearsAtEvent.map(Number).includes(currentYear)
    ) {
      exhibitors.push({
        id: doc.id,
        ...data,
      });
    }
  });

  return exhibitors;
}

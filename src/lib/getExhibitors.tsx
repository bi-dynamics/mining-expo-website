import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export interface ExhibitorData {
  id?: string;
  description?: string;
  logo?: string;
  name?: string;
  yearsAtEvent?: number[];
  status?: "active" | "draft";
}

export async function getExhibitorsByYear(year: number) {
  //for year 2023, the collection name is just exhibitors
  //for year 2024 and beyond, the collection name is exhibitors_<year>
  const collectionName = year === 2023 ? "exhibitors" : `exhibitors_${year}`;
  const querySnapshot = await getDocs(collection(db, collectionName));
  const exhibitors: ExhibitorData[] = [];

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

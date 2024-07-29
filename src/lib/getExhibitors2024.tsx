import { db } from "./firebaseConfig";
import { collection, getDocs, getDocsFromServer } from "firebase/firestore";

export interface ExhibitorData {
  id?: string;
  description?: string;
  logo?: string;
  name?: string;
}

export async function getExhibitors2024() {
  const querySnapshot = await getDocsFromServer(
    collection(db, "exhibitors_2024")
  );
  const exhibitors: ExhibitorData[] = [];

  querySnapshot.forEach((doc) => {
    exhibitors.push({
      id: doc.id,
      ...doc.data(),
    });
  });
  return exhibitors;
}

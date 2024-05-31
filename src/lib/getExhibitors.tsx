import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export interface ExhibitorData {
  id?: string;
  description?: string;
  logo?: string;
  name?: string;
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

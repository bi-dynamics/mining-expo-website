import FloorPlans from "./FloorPlans";
import { getFloorPlans } from "@/lib/getFloorPlans";

export async function FloorPlansWithSuspense() {
  const floorPlans = await getFloorPlans();
  return <FloorPlans floorPlansList={floorPlans} />;
}

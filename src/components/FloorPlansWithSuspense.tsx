import FloorPlans from "./FloorPlans";
import { getFloorPlans2024 } from "@/lib/getFloorPlans2024";

export async function FloorPlansWithSuspense() {
  const floorPlans = await getFloorPlans2024();
  return <FloorPlans floorPlansList={floorPlans} />;
}

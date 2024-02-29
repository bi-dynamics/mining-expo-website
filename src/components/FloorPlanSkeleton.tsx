import { Skeleton } from "./ui/skeleton";

function FloorPlanSkeleton() {
  return (
    <section className="py-16 w-full xl:w-[80%] mx-auto flex items-center justify-center flex-wrap gap-8">
      <div className="flex flex-col xl:flex-row items-start   justify-start gap-8 p-8 w-full md:w-[45vw] xl:w-[35vw]">
        <div className="flex flex-col items-center justify-center gap-16 w-full">
          <Skeleton className="h-[50px] w-[350px] rounded-xl" />
          <Skeleton className="h-[350px] w-full " />
        </div>
      </div>
    </section>
  );
}

export default FloorPlanSkeleton;

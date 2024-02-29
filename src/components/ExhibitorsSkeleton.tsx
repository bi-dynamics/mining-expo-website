import { Skeleton } from "./ui/skeleton";

function ExhibitorsSkeleton() {
  const skeletonCount = 9;
  return (
    <section className="py-16 w-full xl:w-[60%] mx-auto flex items-center justify-center flex-wrap gap-8">
      <div className="flex flex-col xl:flex-row items-start   justify-start gap-8 p-8 w-full">
        <div className="flex flex-wrap items-center justify-center gap-16 w-full">
          {Array(skeletonCount)
            .fill(null)
            .map(() => (
              <Skeleton className="h-[250px] w-1/4 rounded-xl" />
            ))}
        </div>
      </div>
    </section>
  );
}

export default ExhibitorsSkeleton;

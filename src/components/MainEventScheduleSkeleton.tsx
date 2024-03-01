import { Skeleton } from "./ui/skeleton";

function MainEventScheduleSkeleton() {
  return (
    <section className="py-8 w-full xl:w-[80%] mx-auto flex items-center justify-center flex-wrap gap-4">
      <div className="flex flex-col items-start  justify-start gap-2 py-8 w-full">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <Skeleton className=" h-14 w-56 mb-4" />
          <Skeleton className="h-8 w-40 mb-4" />
        </div>
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <Skeleton className="flex items-center justify-start h-[72px] w-full mb-4 px-8 gap-2">
            <Skeleton className="h-full w-16 brightness-[0.95] rounded-none" />
            <Skeleton className="h-full w-16 brightness-[0.95] rounded-none" />
          </Skeleton>
          <div className="flex items-center justify-center flex-col px-8 py-4 gap-8 w-full">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainEventScheduleSkeleton;

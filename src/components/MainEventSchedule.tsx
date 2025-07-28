"use client";

import { useMemo, useState } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScheduleData } from "@/lib/getMainSchedule";
import { format } from "date-fns";
import Image from "next/image";

function MainEventSchedule({ schedules }: { schedules: ScheduleData[] }) {
  // const sortedSchedule = schedule.sort(
  //   (a: any, b: any) => a.timeStart - b.timeStart
  // );

  // const sortedSchedules = schedules.slice().sort((a, b) => {
  //   const timeA = new Date(a.timeStart?.seconds! * 1000);
  //   const timeB = new Date(b.timeStart?.seconds! * 1000);

  //   // Ensure both are valid dates before comparison
  //   if (isNaN(timeA.getTime()) || isNaN(timeB.getTime())) {
  //     console.warn("Invalid timeStart format for schedule items:", a, b);
  //     return 0; // Return 0 to avoid unexpected behavior (e.g., incorrect sorting)
  //   }

  //   return timeA.getTime() - timeB.getTime();
  // });

  // const day1Schedule = sortedSchedules.filter((schedule) =>
  //   schedule.timeStart
  //     ? format(new Date(schedule.timeStart?.seconds! * 1000), "dd").includes(
  //         "7"
  //       )
  //     : ""
  // );
  // const day2Schedule = sortedSchedules.filter((schedule) =>
  //   schedule.timeStart
  //     ? format(new Date(schedule.timeStart?.seconds! * 1000), "dd").includes(
  //         "8"
  //       )
  //     : ""

  const sortedSchedule = schedules.sort((a: any, b: any) => {
    if (!a.timeStart || !b.timeStart) return 0;
    return a.timeStart.seconds - b.timeStart.seconds;
  });

  // Group schedules by day and create day buttons dynamically
  const schedulesByDay = useMemo(() => {
    const grouped: { [key: string]: ScheduleData[] } = {};

    sortedSchedule.forEach((schedule) => {
      if (schedule.timeStart) {
        const dayKey = format(
          new Date(schedule.timeStart.seconds * 1000),
          "dd"
        );
        if (!grouped[dayKey]) {
          grouped[dayKey] = [];
        }
        grouped[dayKey].push(schedule);
      }
    });

    return grouped;
  }, [sortedSchedule]);

  // const [day, setDay] = useState(1);
  const days = Object.keys(schedulesByDay).sort();
  const [selectedDay, setSelectedDay] = useState(days[0] || "");

  if (days.length === 0) {
    return (
      <section className="flex items-center justify-center w-full h-fit py-16 bg-slate-100">
        <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-8">
          <h2 className="text-2xl md:text-5xl font-poppins font-bold text-black">
            Schedule
          </h2>
          <p>No schedule data available.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="flex items-center justify-center w-full h-fit py-16 bg-slate-100">
      {/* Container */}
      <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-8">
        <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-poppins font-bold text-black">
            Schedule
          </h2>
        </div>
        <div className="w-full h-full flex flex-col gap-8 bg-white">
          <div className="flex items-center justify-center bg-slate-100 px-8 flex-wrap gap-2">
            {days.map((day, index) => {
              // Get a sample schedule item from this day to format the date nicely
              const sampleSchedule = schedulesByDay[day][0];
              const dayLabel = sampleSchedule.timeStart
                ? format(
                    new Date(sampleSchedule.timeStart.seconds * 1000),
                    "MMM dd"
                  )
                : `Day ${index + 1}`;

              return (
                <Button
                  key={day}
                  onClick={() => setSelectedDay(day)}
                  className={
                    selectedDay === day
                      ? "bg-expoOrange rounded-none py-8 p-12 hover:bg-expoOrange transition-all duration-200"
                      : "bg-expoOrange/70 hover:bg-expoOrange rounded-none py-8 p-12 transition-all duration-200"
                  }
                >
                  {dayLabel}
                </Button>
              );
            })}
          </div>

          <Accordion
            type="single"
            className="w-full flex flex-col gap-6 px-8 pb-8"
            defaultValue={"1"}
            collapsible
          >
            {schedulesByDay[selectedDay]?.map(
              ({ description, location, name, speakers, timeStart }, index) => (
                <AccordionItem
                  key={index}
                  value={description ? "1" : "0"}
                  className="border-none"
                  disabled={!description || description === null}
                >
                  <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange bg-slate-100 hover:bg-white focus:bg-white border border-slate-200 rounded-lg px-8">
                    <div className="flex gap-2 lg:gap-8 flex-wrap text-left">
                      <div className="font-rubik font-light text-sm sm:text-base">
                        {timeStart
                          ? format(
                              new Date(timeStart?.seconds! * 1000),
                              "MMMM dd, yyyy"
                            )
                          : ""}
                      </div>
                      <div className="font-rubik font-light text-sm sm:text-base">
                        {timeStart
                          ? format(
                              new Date(timeStart?.seconds! * 1000),
                              "HH:mm "
                            )
                          : ""}
                      </div>
                      <div className="flex flex-col gap-2 text-left">
                        <h3 className="font-semibold">{name} </h3>
                        <h3 className="font-bold text-expoOrange">
                          {location}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="border-x border-b border-slate-200 rounded-lg p-8 flex flex-col gap-8">
                    <div>{description}</div>
                    {speakers && (
                      <div className="flex gap-4 items-center justify-start flex-wrap ">
                        <p className="font-semibold">Speakers:</p>
                        {speakers.map((speaker, index) => (
                          <div
                            key={index}
                            className="h-fit flex flex-wrap bg-slate-100 rounded-lg p-2 px-4 gap-4"
                          >
                            <div className="w-fit h-fit">
                              <Image
                                src={speaker.speakerProfilePicture as string}
                                alt={speaker.speakerName}
                                width={50}
                                height={50}
                                className="rounded-full object-contain bg-transparent"
                              />
                            </div>
                            <div className="font-rubik flex flex-col items-start justify-start">
                              <p className="text-black text-base font-normal">
                                {speaker.speakerName}
                              </p>
                              <p className="text-black/50 text-sm font-medium">
                                {speaker.speakerTitle}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              )
            )}
          </Accordion>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className="flex items-center justify-center w-full h-fit py-16 bg-slate-100">
  //     {/* Container */}
  //     <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-8">
  //       <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
  //         <h2 className="text-2xl md:text-5xl font-poppins font-bold text-black">
  //           Schedule
  //         </h2>
  //       </div>
  //       <div className="w-full h-full flex flex-col gap-8 bg-white">
  //         <div className="flex items-center justify-center bg-slate-100 px-8">
  //           <Button
  //             onClick={() => setDay(1)}
  //             className={
  //               day === 1
  //                 ? "bg-expoOrange rounded-none py-8 p-12 hover:bg-expoOrange transition-all duration-200"
  //                 : "bg-expoOrange/70 hover:bg-expoOrange rounded-none py-8 p-12 transition-all duration-200"
  //             }
  //           >
  //             DAY 1
  //           </Button>
  //           <Button
  //             onClick={() => setDay(2)}
  //             className={
  //               day === 2
  //                 ? "bg-expoOrange rounded-none py-8 p-12 hover:bg-expoOrange transition-all duration-200"
  //                 : "bg-expoOrange/70 hover:bg-expoOrange rounded-none py-8 p-12 transition-all duration-200"
  //             }
  //           >
  //             DAY 2
  //           </Button>
  //         </div>
  //         {day == 1 ? (
  //           <Accordion
  //             type="single"
  //             className="w-full flex flex-col gap-6 px-8 pb-8"
  //             defaultValue={"1"}
  //             collapsible
  //           >
  //             {day1Schedule.map(
  //               (
  //                 { description, location, name, speakers, timeStart },
  //                 index
  //               ) => (
  //                 <AccordionItem
  //                   key={index}
  //                   value={description ? "1" : "0"}
  //                   className="border-none"
  //                   disabled={!description || description === null}
  //                 >
  //                   <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange bg-slate-100 hover:bg-white focus:bg-white border border-slate-200 rounded-lg px-8">
  //                     <div className="flex gap-2 lg:gap-8 flex-wrap text-left">
  //                       <div className="font-rubik font-light text-sm sm:text-base">
  //                         {timeStart
  //                           ? format(
  //                               new Date(timeStart?.seconds! * 1000),
  //                               "MMMM dd, yyyy"
  //                             )
  //                           : ""}
  //                       </div>
  //                       <div className="font-rubik font-light text-sm sm:text-base">
  //                         {timeStart
  //                           ? format(
  //                               new Date(timeStart?.seconds! * 1000),
  //                               "HH:mm "
  //                             )
  //                           : ""}
  //                       </div>
  //                       <div className="flex flex-col gap-2 text-left">
  //                         <h3 className="font-semibold">{name} </h3>
  //                         <h3 className="font-bold text-expoOrange">
  //                           {location}
  //                         </h3>
  //                       </div>
  //                     </div>
  //                   </AccordionTrigger>
  //                   <AccordionContent className="border-x border-b border-slate-200 rounded-lg p-8 flex flex-col gap-8">
  //                     <div>{description}</div>
  //                     {speakers && (
  //                       <div className="flex gap-4 items-center justify-start flex-wrap ">
  //                         <p className="font-semibold">Speakers:</p>
  //                         {speakers.map((speaker, index) => (
  //                           <div
  //                             key={index}
  //                             className="h-fit flex flex-wrap bg-slate-100 rounded-lg p-2 px-4 gap-4"
  //                           >
  //                             <div className="w-fit h-fit">
  //                               <Image
  //                                 src={speaker.speakerProfilePicture as string}
  //                                 alt={speaker.speakerName}
  //                                 width={50}
  //                                 height={50}
  //                                 className="rounded-full bg-transparent"
  //                               />
  //                             </div>
  //                             <div className="font-rubik flex flex-col items-start justify-start">
  //                               <p className="text-black text-base font-normal">
  //                                 {speaker.speakerName}
  //                               </p>
  //                               <p className="text-black/50 text-sm font-medium">
  //                                 {speaker.speakerTitle}
  //                               </p>
  //                             </div>
  //                           </div>
  //                         ))}
  //                       </div>
  //                     )}
  //                   </AccordionContent>
  //                 </AccordionItem>
  //               )
  //             )}
  //           </Accordion>
  //         ) : (
  //           <Accordion
  //             type="single"
  //             className="w-full flex flex-col gap-6 px-8 pb-8"
  //             defaultValue={"1"}
  //             collapsible
  //           >
  //             {day2Schedule.map(
  //               (
  //                 { description, location, name, speakers, timeStart },
  //                 index
  //               ) => (
  //                 <AccordionItem
  //                   key={index}
  //                   value={description ? "1" : "0"}
  //                   className="border-none"
  //                   disabled={!description || description === null}
  //                 >
  //                   <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange bg-slate-100 hover:bg-white focus:bg-white border border-slate-200 rounded-lg px-8">
  //                     <div className="flex gap-2 lg:gap-8 flex-wrap text-left">
  //                       <div className="font-rubik font-light text-sm sm:text-base">
  //                         {timeStart
  //                           ? format(
  //                               new Date(timeStart?.seconds! * 1000),
  //                               "MMMM dd, yyyy"
  //                             )
  //                           : ""}
  //                       </div>
  //                       <div className="font-rubik font-light text-sm sm:text-base">
  //                         {timeStart
  //                           ? format(
  //                               new Date(timeStart?.seconds! * 1000),
  //                               "HH:mm "
  //                             )
  //                           : ""}
  //                       </div>
  //                       <div className="flex flex-col gap-2 text-left">
  //                         <h3 className="font-semibold">{name} </h3>
  //                         <h3 className="font-bold text-expoOrange">
  //                           {location}
  //                         </h3>
  //                       </div>
  //                     </div>
  //                   </AccordionTrigger>
  //                   <AccordionContent className="border-x border-b border-slate-200 rounded-lg p-8 flex flex-col gap-8">
  //                     <div>{description}</div>
  //                     {speakers && (
  //                       <div className="flex gap-4 items-center justify-start flex-wrap ">
  //                         <p className="font-semibold">Speakers:</p>
  //                         {speakers.map((speaker, index) => (
  //                           <div
  //                             key={index}
  //                             className="h-fit flex flex-wrap bg-slate-100 rounded-lg p-2 px-4 gap-4"
  //                           >
  //                             <div className="w-fit h-fit">
  //                               <Image
  //                                 src={speaker.speakerProfilePicture as string}
  //                                 alt={speaker.speakerName}
  //                                 width={50}
  //                                 height={50}
  //                                 className="rounded-full object-contain bg-transparent"
  //                               />
  //                             </div>
  //                             <div className="font-rubik flex flex-col items-start justify-start">
  //                               <p className="text-black text-base font-normal">
  //                                 {speaker.speakerName}
  //                               </p>
  //                               <p className="text-black/50 text-sm font-medium">
  //                                 {speaker.speakerTitle}
  //                               </p>
  //                             </div>
  //                           </div>
  //                         ))}
  //                       </div>
  //                     )}
  //                   </AccordionContent>
  //                 </AccordionItem>
  //               )
  //             )}
  //           </Accordion>
  //         )}
  //       </div>
  //     </div>
  //   </section>
  // );
}

export default MainEventSchedule;

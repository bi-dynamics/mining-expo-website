"use client";

import { useState } from "react";
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
  const sortedSchedules = schedules.sort((a: any, b: any) => a.id - b.id);

  const day1Schedule = sortedSchedules.filter((schedule) =>
    schedule.timeStart
      ? format(new Date(schedule.timeStart?.seconds! * 1000), "dd").includes(
          "30"
        )
      : ""
  );
  const day2Schedule = sortedSchedules.filter((schedule) =>
    schedule.timeStart
      ? format(new Date(schedule.timeStart?.seconds! * 1000), "dd").includes(
          "31"
        )
      : ""
  );

  const [day, setDay] = useState(1);
  return (
    <section className="flex items-center justify-center w-full h-fit py-16 bg-slate-100">
      {/* Container */}
      <div className="w-full lg:w-[80%] h-full flex flex-col items-center justify-center gap-8">
        <div className="h-full w-full flex flex-col gap-4 items-center justify-center">
          <h2 className="text-2xl md:text-5xl font-poppins font-bold text-black">
            Schedule
          </h2>
          <h2 className="text-xl md:text-3xl  font-semibold text-expoOrange">
            30-31 August
          </h2>
        </div>
        <div className="w-full h-full flex flex-col gap-8 bg-white">
          <div className="flex flex-wrap border bg-expoOrange px-8">
            <Button
              onClick={() => setDay(1)}
              className={
                day === 1
                  ? "bg-black/20 rounded-none py-8 hover:bg-black/20 transition-all duration-200"
                  : "bg-expoOrange hover:bg-black/10 rounded-none py-8 transition-all duration-200"
              }
            >
              DAY 1
            </Button>
            <Button
              onClick={() => setDay(2)}
              className={
                day === 2
                  ? "bg-black/20 rounded-none py-8 hover:bg-black/20 transition-all duration-200"
                  : "bg-expoOrange hover:bg-black/10 rounded-none py-8 transition-all duration-200"
              }
            >
              DAY 2
            </Button>
          </div>
          {day == 1 ? (
            <Accordion
              type="multiple"
              defaultValue={["0", "1"]}
              className="w-full flex flex-col gap-6 px-8 pb-8"
            >
              {day1Schedule.map((schedule, index) => (
                <AccordionItem
                  key={index}
                  value={index + ""}
                  className="border-none"
                >
                  <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange bg-slate-100 hover:bg-white focus:bg-white border border-slate-200 rounded-lg px-8">
                    <div className="flex gap-2 lg:gap-8 flex-wrap text-left">
                      <div className="font-rubik font-light text-sm sm:text-base">
                        {schedule.timeStart
                          ? format(
                              new Date(schedule.timeStart?.seconds! * 1000),
                              "MMMM dd, yyyy"
                            )
                          : ""}
                      </div>
                      <div className="font-rubik font-light text-sm sm:text-base">
                        {schedule.timeStart
                          ? format(
                              new Date(schedule.timeStart?.seconds! * 1000),
                              "HH:mm "
                            )
                          : ""}
                      </div>
                      <div className="flex flex-col gap-2 text-left">
                        <h3 className="font-semibold">{schedule.name} </h3>
                        <h3 className="font-bold text-expoOrange">
                          {schedule.location}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="border-x border-b border-slate-200 rounded-lg p-8 flex flex-col gap-8">
                    <div>{schedule.description}</div>
                    {schedule.speakerNames ? (
                      <div className="flex gap-4 items-center justify-start flex-wrap ">
                        <p className="font-semibold">Speakers:</p>
                        <div className="h-fit flex flex-wrap bg-slate-100 rounded-lg p-2 px-4 gap-4">
                          <div className="w-fit h-fit">
                            <Image
                              src={schedule.speakerProfilePicture as string}
                              alt={schedule.speakerNames}
                              width={50}
                              height={50}
                              className="rounded-full bg-expoBlue"
                            />
                          </div>
                          <div className="font-rubik flex flex-col items-start justify-start">
                            <p className="text-black text-base font-normal">
                              {schedule.speakerNames}
                            </p>
                            <p className="text-black/50 text-sm font-medium">
                              {schedule.speakerTitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <Accordion
              type="multiple"
              defaultValue={["0", "1"]}
              className="w-full flex flex-col gap-6 px-8 pb-8"
            >
              {day2Schedule.map((schedule, index) => (
                <AccordionItem
                  key={index}
                  value={index + ""}
                  className="border-none"
                >
                  <AccordionTrigger className="font-bold focus:text-expoOrange hover:text-expoOrange bg-slate-100 hover:bg-white focus:bg-white border border-slate-200 rounded-lg px-8">
                    <div className="flex gap-2 lg:gap-8 flex-wrap">
                      <div className="font-rubik font-light text-sm sm:text-base">
                        {schedule.timeStart
                          ? format(
                              new Date(schedule.timeStart?.seconds! * 1000),
                              "MMMM dd, yyyy"
                            )
                          : ""}
                      </div>
                      <div className="font-rubik font-light text-sm sm:text-base">
                        {schedule.timeStart
                          ? format(
                              new Date(schedule.timeStart?.seconds! * 1000),
                              "HH:mm"
                            )
                          : ""}
                      </div>
                      <div className="flex flex-col gap-2 text-left">
                        <h3 className="font-semibold">{schedule.name}</h3>
                        <h3 className="font-bold text-expoOrange">
                          {schedule.location}
                        </h3>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="border-x border-b border-slate-200 rounded-lg p-8 flex flex-col gap-8">
                    <div>{schedule.description}</div>
                    {schedule.speakerProfilePicture ? (
                      <div className="flex gap-4 items-center justify-start flex-wrap ">
                        <p className="font-semibold">Speakers:</p>
                        <div className="h-fit flex flex-wrap bg-slate-100 rounded-lg p-2 px-4 gap-4">
                          <div className="w-fit h-fit">
                            <Image
                              src={schedule.speakerProfilePicture as string}
                              alt={schedule.speakerNames as string}
                              width={50}
                              height={50}
                              className="rounded-full bg-expoBlue"
                            />
                          </div>
                          <div className="font-rubik flex flex-col items-start justify-start">
                            <p className="text-black text-base font-normal">
                              {schedule.speakerNames}
                            </p>
                            <p className="text-black/50 text-sm font-medium">
                              {schedule.speakerTitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
        </div>
      </div>
    </section>
  );
}

export default MainEventSchedule;

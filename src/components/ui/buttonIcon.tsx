"use client";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

export function ButtonIcon() {
  return (
    <Button
      variant="default"
      className="rounded-[100px] py-4 border-2 h-fit bg-white/50 border-none hover:bg-white"
    >
      <Icon
        icon="mdi:play"
        className=" bg-transparent text-expoOrange"
        fontSize={100}
      />
    </Button>
  );
}

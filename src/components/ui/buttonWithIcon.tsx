"use client";
import { Button } from "./button";
import { Icon } from "@iconify/react";

const ButtonWithIcon = ({ children }: any) => {
  return (
    <Button
      size="lg"
      className="bg-expoOrange text-base flex flex-row items-center justify-center gap-1"
    >
      {children}
      <Icon icon="lucide:chevron-right" width="24" height="24" className="" />
    </Button>
  );
};

export default ButtonWithIcon;

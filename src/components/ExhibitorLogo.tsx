"use client";

import { useState } from "react";
import Image from "next/image";
import { getAvatarColor, getInitials } from "@/lib/avatar";

interface ExhibitorLogoProps {
  name: string;
  logoUrl: string | null;
}

function ExhibitorLogo({ name, logoUrl }: ExhibitorLogoProps) {
  const [logoFailed, setLogoFailed] = useState(false);

  if (logoUrl && !logoFailed) {
    return (
      <Image
        src={logoUrl}
        alt={name}
        width={250}
        height={250}
        className="block object-contain h-full rounded-xl z-30"
        onError={() => setLogoFailed(true)}
      />
    );
  }

  const color = getAvatarColor(name);
  return (
    <div
      className="w-full h-full rounded-xl z-30 flex flex-col items-center justify-center gap-2 p-4 text-center"
      style={{ backgroundColor: color.background, color: color.text }}
    >
      <span className="font-poppins font-bold text-3xl">
        {getInitials(name)}
      </span>
      <span className="font-rubik text-sm">{name}</span>
    </div>
  );
}

export default ExhibitorLogo;

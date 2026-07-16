"use client";

import { useState } from "react";
import Image from "next/image";
import { getAvatarColor, getInitials } from "@/lib/avatar";

interface SpeakerAvatarProps {
  name: string;
  photoUrl: string | null;
  size?: number;
}

function SpeakerAvatar({ name, photoUrl, size = 56 }: SpeakerAvatarProps) {
  const [photoFailed, setPhotoFailed] = useState(false);

  if (photoUrl && !photoFailed) {
    return (
      <Image
        src={photoUrl}
        alt={name}
        width={size}
        height={size}
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
        onError={() => setPhotoFailed(true)}
      />
    );
  }

  const color = getAvatarColor(name);
  return (
    <div
      aria-hidden
      className="rounded-full flex items-center justify-center font-poppins font-bold select-none"
      style={{
        width: size,
        height: size,
        backgroundColor: color.background,
        color: color.text,
        fontSize: size * 0.36,
      }}
    >
      {getInitials(name)}
    </div>
  );
}

export default SpeakerAvatar;

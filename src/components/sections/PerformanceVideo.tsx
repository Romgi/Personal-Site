"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function PerformanceVideo() {
  const [playing, setPlaying] = useState(false);
  const frame = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    if (playing) frame.current?.focus();
  }, [playing]);
  return (
    <div className="performance-video">
      {playing ? (
        <iframe
          ref={frame}
          className="size-full"
          src="https://www.youtube-nocookie.com/embed/f8E05xtGEq4?autoplay=1"
          title="Jonathan Graydon performing Bugler's Holiday with the McMaster Concert Band"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          className="performance-poster"
          aria-label="Play Bugler's Holiday with the McMaster Concert Band in the YouTube player"
          onClick={() => setPlaying(true)}
        >
          <Image
            src="/images/music/buglers-holiday-video.jpg"
            alt=""
            fill
            sizes="(max-width: 768px) 90vw, 40vw"
          />
          <span className="performance-play">
            <Play size={22} fill="currentColor" aria-hidden />
            <span>Play Bugler&apos;s Holiday</span>
          </span>
        </button>
      )}
    </div>
  );
}

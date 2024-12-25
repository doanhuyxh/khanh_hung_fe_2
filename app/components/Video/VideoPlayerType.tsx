'use client'

import Loading from "@/app/loading";
import Hls from "hls.js";
import React, { useEffect, useRef } from "react";

export default function VideoPlayerType({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isM3U8 = (url: string) => url.endsWith('.m3u8');
  useEffect(() => {
    if (videoSrc && isM3U8(videoSrc) && videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = videoSrc;
      }
    }
  }, [videoSrc]);

  if (!videoSrc) return (
    <div className="w-full h-full">
      <Loading />
    </div>);

  return (
    <>
      {isM3U8(videoSrc) ? (
        <video ref={videoRef} className="w-full h-auto object-contain" controls />
      ) : (
        <video src={videoSrc || ""} className="w-full h-auto object-contain" controls />
      )}
    </>
  )
}
'use client'

import LoadingVideo from "@/app/components/Loading/LoadingVideo";
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
    <div className="w-full min-h-[35vh] lg:min-h-[60vh] flex flex-1 bg-[#380b42]">
        <LoadingVideo/>
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
'use client'

import LoadingVideo from "@/app/_components/Loading/LoadingVideo";
import Hls from "hls.js";
import React, {useEffect, useRef, useState} from "react";

export default function VideoPlayerType({ videoSrc }: { videoSrc: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isM3U8 = (url: string) => url.endsWith('.m3u8');

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoSrc && isM3U8(videoSrc) && videoElement) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(videoElement);
      } else if (videoElement.canPlayType('application/vnd.apple.mpegurl')) {
        videoElement.src = videoSrc;
      }
    }

    const handleTimeUpdate = () => {
      if (videoElement) {
        sessionStorage.setItem("currentTime", videoElement.currentTime.toString());
      }
    };

    const handleLoadedMetadata = () => {
      if (videoElement) {
        sessionStorage.setItem("totalDuration", videoElement.duration.toString());
      }
    };

    if (videoElement) {
      videoElement.addEventListener("timeupdate", handleTimeUpdate);
      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("timeupdate", handleTimeUpdate);
        videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
    };
  }, [videoSrc]);

  if (!videoSrc) return (
    <div className="w-full min-h-[35vh] lg:min-h-[60vh] flex flex-1 bg-[#380b42]">
        <LoadingVideo/>
    </div>);
  return (
      <>
        {isM3U8(videoSrc) ? (
            <video ref={videoRef} className="w-full h-auto object-contain" controls/>
        ) : (
            <video src={videoSrc || ""} ref={videoRef} className="w-full h-auto object-contain" controls/>
        )}
      </>
  )
}
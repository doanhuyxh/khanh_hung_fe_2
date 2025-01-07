'use client';

import Image from "next/image";
import VideoPlayerType from "./VideoPlayerType";
import ShowNotifyNotFree from "../ShowNotifyNotFree/ShowNotifyNotFree";
import ShowNotifyNotLogin from "../ShowNotifyNotFree/ShowNotifyNotLogin";

interface VideoPlayerProps {
  title: string;
  timeDuration: string;
  views: number;
  videoUrl: string;
  imageThumbnail: string;
  isUpgrade: boolean;
  isLogin: boolean;
  isFree: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  title,
  timeDuration,
  views,
  videoUrl,
  imageThumbnail,
  isUpgrade,
  isLogin,
  isFree
}) => {

  return (
    <div className="flex-1">
      <div className="h-auto w-full flex justify-center text-white video_div">
        {!isLogin && <div className={`w-full min-h-[25vh] lg:min-h-[60vh] overflow-hidden`}><ShowNotifyNotLogin imageThumbnail={imageThumbnail} /></div>}
        {isLogin && isUpgrade && <div className="w-full min-h-[25vh] lg:min-h-[60vh] flex flex-1 bg-[#380b42]"><ShowNotifyNotFree /></div>}
        {isLogin && !isUpgrade && <VideoPlayerType videoSrc={videoUrl} />}
      </div>
      <div className="mt-10">
        <h1 className="lesson_name my-2">{title}</h1>
        <p className="flex gap-1">
          <span>
            <Image
              src="/assets/images/ic-clock.svg"
              width={20}
              height={20}
              alt="Clock icon"
            />
          </span>
          <span className="text-black">{timeDuration}</span>
          <span className="line" />
          <span>
            <Image
              src="/assets/images/ic-play.svg"
              width={20}
              height={20}
              alt="Play icon"
            />
          </span>
          <span className="text-black">{views} Lượt xem</span>
          <span className="line" />
          <span>
            <Image
              src="/assets/images/ic-bg.svg"
              width={20}
              height={20}
              alt="Background icon"
            />
          </span>
          <span className="text-black">Bài giảng</span>
          {isFree && <span className="font-bold text-white bg-green-800 px-3 py-1 rounded-lg flex gap-2">
            <span className="m-auto">
              <Image
                src="/assets/images/ic-tag-free.svg"
                width={10}
                height={10}
                alt="Tag icon"
              />
            </span>
            <span className="md:divide-none hidden md:inline-block">Free</span>
          </span>
          }
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;

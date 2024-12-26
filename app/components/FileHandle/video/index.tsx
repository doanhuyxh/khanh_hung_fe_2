'use client';

import React, { useEffect, useState, useRef } from 'react';
import Hls from 'hls.js';
import { toast } from 'react-hot-toast';

interface VideoUploadProps {
  initialLink: string;
  onChange: (value: string) => void;
}

const VideoUpload: React.FC<VideoUploadProps> = ({ initialLink, onChange }) => {
  const [videoUrl, setVideoUrl] = useState<string | null>(initialLink);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Kiểm tra video có phải M3U8 không
  const isM3U8 = (url: string) => url.endsWith('.m3u8');

  // Xử lý video M3U8 với HLS.js
  useEffect(() => {
    if (videoUrl && isM3U8(videoUrl) && videoRef.current) {
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(videoUrl);
        hls.attachMedia(videoRef.current);
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        videoRef.current.src = videoUrl;
      }
    }
  }, [videoUrl]);

  // Cập nhật video URL khi người dùng thay đổi
  const handleLinkChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setVideoUrl(value);
    onChange(value);
  };

  // Xử lý upload video
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const fileType = file.type;
      if (fileType != "video/mp4") {
        toast.error("Định dạng video không đúng, vui lòng chọn định dạng MP4",{
          duration: 10000,
          position: "top-right",
          style: {
            background: "#f44336",
            color: "#fff",
          },
        });
        return;
      }
      const formData = new FormData();
      formData.append("video", file);
      fetch('https://media.vuacontent.vn/api/video/upload', {
        method: 'POST',
        body: formData
      })
        .then((res) => res.json())
        .then((data) => {
          data.url = "http://media.vuacontent.vn" + data.url;
          toast.success("Tải video lên thành công, đang xử lý video...",{
            duration: 10000,
            position: "top-right",
            style: {
              background: "#4CAF50",
              color: "#fff",
            },  
          });
          setTimeout(() => {
            setVideoUrl(data.url);
            onChange(data.url);
          }, 3000);
        })
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">Video giới thiệu</label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
        <div className="mb-2">
          {videoUrl ? (
            <div>
              {isM3U8(videoUrl) ? (
                // Video M3U8: Xử lý bằng HLS.js
                <video
                  ref={videoRef}
                  className="mx-auto w-4/5 max-h-48"
                  controls
                />
              ) : (
                // Video MP4: Hiển thị trực tiếp
                <video className="mx-auto w-4/5 max-h-48" controls>
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          ) : (
            // SVG khi không có video
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>

        {/* Nút tải video lên */}
        <div className="text-sm text-gray-600">
          <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
            <span>Tải video lên</span>
            <input type="file" className="sr-only" accept="video/*" onChange={handleFileChange} />
          </label>
        </div>

        {/* Input để dán link video */}
        <div className="mt-2">
          <input
            type="text"
            value={videoUrl || ""}
            onChange={handleLinkChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Hoặc dán đường dẫn video tại đây"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoUpload;

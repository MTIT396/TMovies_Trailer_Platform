/* eslint-disable @typescript-eslint/no-explicit-any */
import YouTube, { YouTubePlayer } from "react-youtube";
import { useRef, useEffect } from "react";

export default function TrailerPlayer({
  videoId,
  isOpen,
}: {
  videoId: string | undefined;
  isOpen: boolean;
}) {
  const playerRef = useRef<YouTubePlayer | null>(null);

  const onReady = (event: any) => {
    playerRef.current = event.target;
  };

  // Only play Video if videoId not null & is open modal
  useEffect(() => {
    if (isOpen && playerRef.current) {
      try {
        playerRef.current.playVideo();
      } catch (err) {
        console.log("Player not ready yet:", err);
      }
    }
  }, [isOpen]);

  return (
    <div className="relative w-full pb-[58.25%] rounded-xl overflow-hidden">
      <div className="absolute inset-0">
        <YouTube
          videoId={videoId}
          onReady={onReady}
          className="w-full h-full"
          iframeClassName="w-full h-full"
          opts={{
            playerVars: {
              autoplay: 1,
              mute: 1,
            },
          }}
        />
      </div>
    </div>
  );
}

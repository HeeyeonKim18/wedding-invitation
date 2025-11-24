import React, { useState, useRef } from 'react';
import { Music, Pause } from 'lucide-react';
import FadeIn from './common/FadeIn';

const MainCover = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch(() => console.warn('자동재생이 차단될 수 있습니다.'));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-[140vh] max-h-[1400px] min-h-[800px] bg-gray-200 overflow-hidden flex flex-col justify-between pb-10">
      <img
        src="./image/main1.jpg"
        alt="Main Wedding"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 p-4 flex justify-end">
        <button
          onClick={toggleAudio}
          className="bg-white/80 p-2 rounded-full shadow-lg backdrop-blur-sm"
        >
          {isPlaying ? <Pause size={20} /> : <Music size={20} />}
        </button>
        <audio ref={audioRef} src="/bgm.mp3" loop />
      </div>

      <div className="relative z-10 text-center text-white mb-20 font-serif">
        <FadeIn>
          <h2 className="text-2xl mb-2 tracking-widest">
            차성범 <br /> & <br /> 조주영
          </h2>
          <p className="text-lg mt-6 mb-2">2026. 05. 23. SAT 12:00 PM</p>
          <p className="text-sm font-light">창원 리베라컨벤션 아르덴하우스 10층</p>
        </FadeIn>
      </div>
    </section>
  );
};

export default MainCover;

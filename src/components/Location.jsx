import React, { useEffect, useRef } from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import FadeIn from './common/FadeIn';

const parkings = [
  { id: 'P1', name: '리베라 주차장(300대)',      lat: 35.2232, lng: 128.6807 },
  { id: 'P2', name: '리베라 야외 주차장(150대)',  lat: 35.2228, lng: 128.6806 },
  { id: 'P3', name: '공영주차타워 주차장(500대)', lat: 35.222138929, lng: 128.680903704 },
  { id: 'P4', name: '범한빌딩 주차장(150대)',    lat: 35.222183428, lng: 128.679589651 },
  { id: 'P5', name: '국민은행 주차장',    lat: 35.221581593, lng: 128.680581795 },
  { id: 'P6', name: '미성주차장',        lat: 35.2240972, lng: 128.6810699 },
  { id: 'P7', name: '수협주차장(100대)',        lat: 35.223437107, lng: 128.682239157 },
  { id: 'P8', name: 'STX 주차장(380대)',        lat: 35.2245, lng: 128.6791 },
];

const Location = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    if (!mapRef.current) return;
    if (!window.kakao || !window.kakao.maps) return;

    window.kakao.maps.load(() => {
      const { kakao } = window;

      // 웨딩홀 좌표
      const hallPosition = new kakao.maps.LatLng(35.2232565, 128.6805064);

      const map = new kakao.maps.Map(mapRef.current, {
        center: hallPosition,
        level: 3,
      });

      // 웨딩홀 기본 마커
      new kakao.maps.Marker({
        position: hallPosition,
        map,
      });

      parkings.forEach((p) => {
        const pos = new kakao.maps.LatLng(p.lat, p.lng);

        const content = `
          <div class="
            px-2 py-[2px] rounded-full bg-amber-700 text-white text-[10px]
            font-semibold shadow border border-white
          ">
            ${p.id}
          </div>
        `;

        new kakao.maps.CustomOverlay({
          position: pos,
          content,
          yAnchor: 1,
          zIndex: 5,
          map,
        });
      });
    });
  }, []);

  return (
    <section className="py-16 px-6 bg-white">
      <FadeIn>
        <h3 className="text-xl font-serif text-center mb-6 text-accent">
          L O C A T I O N
        </h3>

        <div className="text-center mb-8">
          <h4 className="text-lg font-bold">창원 리베라컨벤션 아르덴하우스 10층</h4>
          <p className="text-gray-500 mt-2">경남 창원시 성산구 중앙대로100번길 9</p>
          <p className="text-gray-500 text-sm">055-282-2600</p>
        </div>

        {/* 지도 + 카카오맵 링크 */}
        <div>
          <div
            ref={mapRef}
            className="w-full h-64 mb-6 rounded-lg overflow-hidden relative border"
          />

          <a
            href="https://map.kakao.com/link/search/창원 리베라컨벤션"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-between px-4 py-3 text-xs text-gray-600 bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-accent" />
              카카오맵에서 길 찾기
            </span>
            <ExternalLink size={14} className="opacity-60" />
          </a>
        </div>

        {/* 주차 안내 리스트 */}
        <div className="max-w-lg mx-auto mt-6 text-sm text-gray-700 bg-white border border-gray-100 rounded-lg shadow-sm">
          <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-accent tracking-wide">
              P A R K I N G
            </span>
            <span className="text-[11px] text-gray-400">
              웨딩홀 주변 주차장 안내
            </span>
          </div>
          <ul className="divide-y divide-gray-100">
            {parkings.map((p) => (
              <li
                key={p.id}
                className="flex items-center justify-between px-4 py-2.5"
              >
                <span className="inline-flex items-center gap-2">
                  <span className="px-2 py-[2px] rounded-full bg-amber-100 text-amber-800 text-[11px] font-semibold">
                    {p.id}
                  </span>
                  <span className="text-sm text-gray-800">{p.name}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* 길 안내 */}
        <div className="max-w-lg mx-auto mt-8 text-sm text-gray-700 bg-gray-50 p-6 rounded-lg shadow-sm space-y-5">
          <div className="space-y-1 border-b border-gray-200 pb-4">
            <p className="text-xs font-semibold text-accent tracking-wide">
              창원종합버스터미널 → 리베라컨벤션
            </p>
            <p>
              <span className="font-medium text-gray-900">택시</span> · 약 5.3km (약 10분)
            </p>
            <p>
              <span className="font-medium text-gray-900">버스</span> · 151, 115, 106, 103
            </p>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold text-accent tracking-wide">
              창원중앙역 → 리베라컨벤션
            </p>
            <p>
              <span className="font-medium text-gray-900">택시</span> · 약 3.2km (약 7분)
            </p>
            <p>
              <span className="font-medium text-gray-900">버스</span> · 3004, 3000, 215, 156
            </p>
          </div>
        </div>

        
      </FadeIn>
    </section>
  );
};

export default Location;

'use client';

import Image from 'next/image';
import SnowEffect from '@/components/SnowEffect';
import { useEffect, useState } from 'react';
import Head from 'next/head';

// Export metadata for this page
export const metadata = {
  title: '개소식에 초대합니다.',
  description: '메타리치·시너지그룹 컴패니언사업부 송파지점 개소식에 초대합니다.',
  openGraph: {
    title: '개소식에 초대합니다.',
    description: '메타리치·시너지그룹 컴패니언사업부 송파지점 개소식에 초대합니다.',
    url: 'https://synergymobile.vercel.app/songpa',
    images: [
      {
        url: '/synergy_logo.png',
        width: 800,
        height: 600,
        alt: '시너지그룹 로고',
      },
    ],
    type: 'website',
  },
};

export default function SongpaOpeningEvent() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    setIsLoaded(true);

    // Auto-scroll through items for a subtle highlight effect
    const interval = setInterval(() => {
      setActiveItem((prev) => {
        if (prev === null || prev >= 10) return 1;
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>개소식에 초대합니다.</title>
        <meta name='description' content='메타리치·시너지그룹 컴패니언사업부 송파지점 개소식에 초대합니다.' />
        <meta property='og:title' content='개소식에 초대합니다.' />
        <meta property='og:description' content='메타리치·시너지그룹 컴패니언사업부 송파지점 개소식에 초대합니다.' />
        <meta property='og:url' content='https://synergymobile.vercel.app/songpa' />
        <meta property='og:image' content='/synergy_logo.png' />
        <meta property='og:type' content='website' />
      </Head>

      <div className='relative min-h-screen bg-gradient-to-b from-blue-50 to-cyan-50 px-4 py-6 flex flex-col items-center overflow-hidden font-sans'>
        {/* Snow Effect */}
        <SnowEffect />

        {/* Logos with animation */}
        <div
          className={`flex justify-center items-center gap-4 mb-8 mt-6 w-full z-10 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <div className='w-1/3 flex justify-center transform hover:scale-110 transition-transform duration-300'>
            <Image
              src='/metarich_logo.png'
              alt='Metarich Logo'
              width={90}
              height={90}
              className='object-contain drop-shadow-md'
            />
          </div>
          <div className='w-1/3 flex justify-center transform hover:scale-110 transition-transform duration-300'>
            <Image
              src='/synergy_logo.png'
              alt='Synergy Logo'
              width={90}
              height={90}
              className='object-contain drop-shadow-md'
            />
          </div>
          <div className='w-1/3 flex justify-center transform hover:scale-110 transition-transform duration-300'>
            <Image
              src='/companion_logo.png'
              alt='Companion Logo'
              width={90}
              height={90}
              className='object-contain drop-shadow-md'
            />
          </div>
        </div>

        {/* Header with animation - Fixed to prevent awkward line breaks */}
        <div
          className={`text-center mb-8 z-10 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h1 className='text-2xl sm:text-3xl font-bold text-teal-600 mb-3 leading-snug px-2'>
            감사합니다. 덕분입니다. 사랑합니다!
          </h1>
          <p className='text-gray-700 font-medium max-w-xs mx-auto'>저희 개소식에 귀한 발걸음 해주셔서</p>
          <p className='text-gray-700 font-medium max-w-xs mx-auto'>진심으로 감사드립니다.</p>
        </div>

        {/* Main Content with improved styling */}
        <div
          className={`bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl w-full max-w-md z-10 border border-teal-200 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            boxShadow: '0 10px 25px -5px rgba(153, 246, 228, 0.5), 0 8px 10px -6px rgba(153, 246, 228, 0.3)',
          }}
        >
          <ul className='space-y-5'>
            {[...Array(10)].map((_, i) => {
              const itemNumber = i + 1;
              return (
                <li
                  key={itemNumber}
                  className={`flex items-start p-2 rounded-xl transition-all duration-300 ${
                    activeItem === itemNumber ? 'bg-teal-50' : ''
                  }`}
                  onClick={() => setActiveItem(itemNumber)}
                >
                  <span
                    className='bg-gradient-to-br from-teal-500 to-cyan-600 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 shadow-md'
                    style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
                  >
                    {itemNumber}
                  </span>

                  {itemNumber === 1 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>방명록 작성</span> 여러분의 소중한 메시지를 남겨주시면 큰 힘이 됩니다.
                      ✍️
                    </div>
                  )}

                  {itemNumber === 2 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>럭키 드로우</span> 행운의 기회! 한 분당 한 장씩만 참여해주세요. 🍀
                    </div>
                  )}

                  {itemNumber === 3 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>본 행사중에는</span> 진동, 무음 매너 지켜주실거죠?🙏
                    </div>
                  )}

                  {itemNumber === 4 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>네트워킹 시간</span> 다과와 함께 자유로운 소통의 시간을 즐겨주세요. 🥂
                    </div>
                  )}

                  {itemNumber === 5 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>주차 안내</span> 오늘 하루 24시간 무료주차가 제공됩니다. 🚗
                    </div>
                  )}

                  {itemNumber === 6 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>답례품 안내</span> 행사 종료 시 답례품을 준비했습니다. <br />
                      <div className='mt-2 bg-amber-50 p-2 rounded-md text-sm border border-amber-200'>
                        <span className='font-medium'>럭키드로우 당첨 안내:</span>
                        <br />- 숫자 '3'이 <span className='underline'>하나라도 있으면</span> 노란색 선물
                        <br />- 숫자 '3'이 <span className='underline'>없으면</span> 흰색 선물을 받아가세요
                      </div>
                    </div>
                  )}

                  {itemNumber === 7 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>흡연 안내</span> 지정된 흡연 구역을 이용해 주시고, 꽁초는 재떨이에
                      버려주세요!!
                    </div>
                  )}

                  {itemNumber === 8 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>음식 및 음료</span> 모든 제공되는 다과는 자유롭게 즐겨주시기 바랍니다.
                      🍽️
                    </div>
                  )}

                  {itemNumber === 9 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>시간 안내</span>
                      <div className='mt-2 ml-1 space-y-1'>
                        <div className='flex items-center'>
                          <div className='w-3 h-3 rounded-full bg-teal-400 mr-2'></div>
                          <span>본식: 17:30 ~ 19:00</span>
                        </div>
                        <div className='flex items-center'>
                          <div className='w-3 h-3 rounded-full bg-teal-400 mr-2'></div>
                          <span>다과 및 네트워킹: 19:00 ~ 20:30</span>
                        </div>
                        <div className='flex items-center'>
                          <div className='w-3 h-3 rounded-full bg-teal-400 mr-2'></div>
                          <span>뒷풀이: 21:00 부터</span>
                        </div>
                      </div>
                      <div className='mt-2 bg-blue-50 p-2 rounded-lg inline-block'>
                        <span className='font-bold'>뒷풀이 장소:</span> 펀비어킹 성남 남위례점
                        <br />
                        <span className='text-sm'>(사무실에서 차로 5분 거리에 위치)</span> 🍻
                      </div>
                    </div>
                  )}

                  {itemNumber === 10 && (
                    <div className='text-gray-800 leading-relaxed'>
                      <span className='font-bold'>소중한 마음,</span> 돼지머리에 전달해주시면 저희 송파지점 영업가족의
                      발전과 복지를 위해 소중히 사용하겠습니다.
                      <p>진심으로 감사합니다. 💙</p>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Footer with animation */}
        <div
          className={`mt-8 text-center z-10 transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className='text-teal-600 font-bold text-lg'>즐겁고 행복한 시간 되세요!</p>
          <div className='mt-3 animate-pulse'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-8 w-8 mx-auto text-teal-500'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

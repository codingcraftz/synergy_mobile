import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = '시너지그룹 송파지점 개소식';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        {/* Logo Container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '40px',
            width: '100%',
            maxHeight: '200px',
          }}
        >
          <img
            src={new URL('/public/synergy_logo.png', import.meta.url).toString()}
            alt="시너지그룹 로고"
            style={{
              objectFit: 'contain',
              width: 'auto',
              height: '100%',
              maxWidth: '80%',
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#0f766e',
            marginBottom: '20px',
            textAlign: 'center',
          }}
        >
          개소식에 초대합니다
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: '24px',
            color: '#374151',
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          메타리치·시너지그룹 컴패니언사업부 송파지점 개소식
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'Pretendard',
          data: await fetch(
            new URL('/public/fonts/Pretendard-Bold.woff', import.meta.url)
          ).then((res) => res.arrayBuffer()),
          weight: 700,
          style: 'normal',
        },
 
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
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          backgroundImage: 'linear-gradient(to bottom, #f0f9ff, #e0f2fe)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            padding: '2rem',
            borderRadius: '1rem',
            margin: '2rem',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Logo */}
          <img src='https://synergymobile.vercel.app/synergy_logo.png' alt='Synergy Logo' width={400} height={100} />
        </div>

        <div
          style={{
            fontSize: '56px',
            fontWeight: 'bold',
            color: '#0f766e',
            marginBottom: '1.5rem',
            textAlign: 'center',
          }}
        >
          개소식에 초대합니다
        </div>

        <div
          style={{
            fontSize: '32px',
            color: '#374151',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <div>메타리치·시너지그룹</div>
          <div>컴패니언사업부 송파지점 개소식</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

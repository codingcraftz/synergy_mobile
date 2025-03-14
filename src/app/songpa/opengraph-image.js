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
          fontFamily: 'sans-serif',
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
            height: '200px',
            position: 'relative',
          }}
        >
          {/* Background color block for logo */}
          <div
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                color: '#0f766e',
                fontSize: '64px',
                fontWeight: 'bold',
              }}
            >
              SYNERGY
            </div>
          </div>
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
            lineHeight: 1.4,
          }}
        >
          메타리치·시너지그룹 컴패니언사업부
          <br />
          송파지점 개소식
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

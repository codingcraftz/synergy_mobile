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
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#0f766e',
              marginBottom: '1rem',
            }}
          >
            SYNERGY
          </div>
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
      fonts: undefined,
    }
  );
}

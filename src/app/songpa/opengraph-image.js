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
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
        }}
      >
        {/* Logo */}
        <img
          src='https://synergymobile.vercel.app/synergy_logo.png'
          alt='Synergy Logo'
          width={800}
          height={200}
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}

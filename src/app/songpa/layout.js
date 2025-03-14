export const metadata = {
  title: '개소식에 초대합니다.',
  description: '메타리치·시너지그룹 컴패니언사업부 송파지점 개소식에 초대합니다.',
  openGraph: {
    title: '개소식에 초대합니다.',
    description: '메타리치·시너지그룹 컴패니언사업부 송파지점 개소식에 초대합니다.',
    url: 'https://synergymobile.vercel.app/songpa',
    siteName: '시너지그룹',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '개소식에 초대합니다.',
    description: '메타리치·시너지그룹 컴패니언사업부 송파지점 개소식에 초대합니다.',
  },
};

export default function SongpaLayout({ children }) {
  return <div>{children}</div>;
}

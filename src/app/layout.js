import {
	Noto_Serif,
} from "next/font/google";
import "./globals.css";

const serif = Noto_Serif({
	subsets: ["latin"], // 사용할 언어 서브셋
	weight: ["400", "500", "600"], // 사용할 폰트 두께
});

export const metadata = {
	title: "개소식 초대창",
	description: "메타리치 컴패니언 사업부 개소식 초대장",
};

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<title>초대합니다.</title>
				<meta property="og:url" content="https://synergymobile.vercel.app/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="초대합니다." />
				<meta
					property="og:description"
					content="메타리치 컴페니언 사업부 개소식에 초대합니다."
				/>
				<meta
					property="og:image"
					content="https://opengraph.b-cdn.net/production/images/821547a8-96e0-4699-b8f0-b0c2e932446d.png?token=CKZiBjVrYCoAEIbSQkvW4gjmnxccAEIy4XK9ALikLXA&height=1121&width=1029&expires=33274832364"
				/>

				{/* Twitter Meta Tags */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="https://synergymobile.vercel.app/" />
				<meta
					property="twitter:url"
					content="https://synergymobile.vercel.app/"
				/>
				<meta name="twitter:title" content="초대합니다." />
				<meta
					name="twitter:description"
					content="메타리치 컴페니언사업부 개소식에 초대합니다."
				/>
				<meta
					name="twitter:image"
					content="https://opengraph.b-cdn.net/production/images/821547a8-96e0-4699-b8f0-b0c2e932446d.png?token=CKZiBjVrYCoAEIbSQkvW4gjmnxccAEIy4XK9ALikLXA&height=1121&width=1029&expires=33274832364"
				/>
			</head>

			<body
				className={`${serif.variable}`}
			>
				{children}
			</body>
		</html>
	);
}

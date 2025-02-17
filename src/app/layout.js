import { Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const serif = Noto_Serif_KR({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-serif", // Tailwind에서 사용할 수 있도록 CSS 변수 등록
});

export const metadata = {
	title: "초대합니다.",
	description: "메타리치 컴패니언 사업부 개소식 초대장",
};

export default function RootLayout({ children }) {
	return (
		<html>
			<body className={`${serif.variable}`}>
				{children}
			</body>
		</html>
	);
}


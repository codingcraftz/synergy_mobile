import Main from "@/components/Main";
import KakaoMap from "@/components/Map";
import Message from "@/components/Message";
import Information from "@/components/Information";
import WeddingCalendar from "@/components/WeddingCalendar";

export const metadata = {
	title: "개소식 초대장",
	description: "메타리치 컴패니언 사업부 개소식 초대장",
	openGraph: {
		title: "초대합니다.",
		description: "메타리치 컴패니언 사업부 개소식에 초대합니다.",
		url: "https://synergymobile.vercel.app/",
		type: "website",
		images: [
			{
				url: "https://opengraph.b-cdn.net/production/images/821547a8-96e0-4699-b8f0-b0c2e932446d.png",
				width: 1200,
				height: 630,
				alt: "개소식 초대장",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "초대합니다.",
		description: "메타리치 컴패니언 사업부 개소식에 초대합니다.",
		images: ["https://opengraph.b-cdn.net/production/images/821547a8-96e0-4699-b8f0-b0c2e932446d.png"],
	},
};

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen max-w-screen-sm mx-auto bg-[#f7f6f1] shadow-md">
			<main className="flex flex-col flex-1 pb-6 text-[#948172] gap-14">
				<Main image='/images/main_1.png' />
				<Message ceoImage='/images/ceo_image.jpg' color='#956f48'>
					<p>메타리치 컴패니언사업부가</p>
					<p>더 나은 미래를 향한</p>
					<p>스무 번째 걸음을 내딛습니다.</p>
					<br />
					<p>국내 19개 거점에 이어</p>
					<p>역동의 중심 송파에 </p>
					<p>20번째 사무실을 성공적으로 오픈합니다.</p>
					<br />
					<p>새로운 공간에서</p>
					<p>더욱 성장하고 발전할 우리의 여정을</p>
					<p>함께 축하해 주시면 더없이 기쁘겠습니다.</p>
					<br />
					<p>맛있는 음식과 따뜻한 인사</p>
					<p>그리고 좋은 사람들과의 시간을 기대하며</p>
					<p>정중히 초대합니다.</p>
					<br />
					<p>귀한 걸음 하시어 자리를 빛내 주시길 바랍니다.</p>
					<br />
					<p>대표 <span className="text-lg font-bold">김윤성</span> 올림</p>
				</Message>

				<Information />
				<WeddingCalendar WEDDING_DATE={"2025-03-14"} textColor={'#956f48'} />
				<KakaoMap HALL_LAT={37.48698802179592} HALL_LNG={127.1424851268385}
					HALL_ADDRESS={"서울특별시 송파구 위례서로 252, 유원플러스빌딩 203호"}
					HALL_NAME={"서울특별시 송파구 위례서로 252"}
					PICKER_NAME={"유원플러스빌딩 203호"}
					PICKER_Y={"-translate-y-12"}
					PARKING_MESSAGE={"*주차는 개소식 당일 유원플러스 빌딩 항시 무료입니다."}
					borderColor='#956f48'
				/>
			</main>

			{/* 푸터 */}
			<footer className="bg-gray-800 text-white text-center py-6 text-sm">
				<p>메타리치 컴패니언사업부 개소식에 초대합니다.</p>
				<p className="mt-2">뜻깊은 자리를 함께 빛내 주시면 감사하겠습니다.</p>
			</footer>
		</div>
	);
}

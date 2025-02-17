import Main from "@/components/Main";
import Message from "@/components/Message";
import WeddingCalendar from "@/components/WeddingCalendar";
import KakaoMap from "@/components/Map";
import Frame from "@/components/Frame";


export const metadata = {
	title: "초대합니다.",
	description: "메타리치 컴패니언 사업부 진교사무실 개소식에 초대합니다.",
	openGraph: {
		title: "초대합니다.",
		description: "메타리치 컴패니언 사업부 진교사무실 개소식에 초대합니다.",
		url: "https://synergymobile.vercel.app/jin-kyo",
		type: "website",
		images: [
			{
				url: "https://opengraph.b-cdn.net/production/images/3b4efbfc-8e65-4d1b-89e0-6186ea4addd7.png?token=WkCEq-DtlLoiVy5W4ka7lbGclY8SbNSeey9r9lxAxAA&height=773&width=794&expires=33275763678",
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
		images: ["https://opengraph.b-cdn.net/production/images/3b4efbfc-8e65-4d1b-89e0-6186ea4addd7.png?token=WkCEq-DtlLoiVy5W4ka7lbGclY8SbNSeey9r9lxAxAA&height=773&width=794&expires=33275763678"], // 트위터 이미지 변경
	},
};

export default function JinKyoPage() {
	return (
		<div className="flex flex-col min-h-screen max-w-screen-sm mx-auto bg-[#fcfcfc] shadow-md">
			<main className="flex flex-col flex-1 pb-6 text-[#956f48] gap-14">
				<Main image='/images/jin-kyo.png' />
				<Message color={'#956f48'}>
					<p>메타리치 컴패니언사업부 진교사무실이</p>
					<p>드디어 첫발을 내딛습니다.</p>
					<br />
					<p>새로운 도전인 만큼</p>
					<p>더욱 성장하고 발전할 우리의 여정을</p>
					<p>함께 축하해주시면 더없이 기쁘겠습니다.</p>
					<br />
					<p>지역 상생을 위한 일환으로</p>
					<p>쌀 화한을 보내주시면</p>
					<p>지역 단체에 기부할 예정입니다.</p>
					<br />
					<p>겨울의 매서운 바람이 물러가는</p>
					<p>봄의 초입에서 자리를 빛내주실</p>
					<p>여러분들을 기다리겠습니다.</p>
					<br />
					<p><span className="text-lg font-bold">이혜지</span>영업이사 올림</p>
				</Message>

				<div className="flex flex-col items-center font-sans">
					<Frame fill={'#956f48'} />
					<p className="tracking-widest font-serif">INFORMATION</p>
					<p className="font-bold tracking-widest font-serif">안  내</p>
					<section className="flex flex-col gap-2 p-4 text-center font-sans py-6 items-start translate-y-10">
						<div className="flex gap-2 items-center">
							<p className="bg-orange-400 text-white rounded-lg px-2">개소식</p>
							<p className="text-md">2025년 2월 27일 (목) PM 2:00</p>
						</div>
					</section>
				</div >
				<WeddingCalendar WEDDING_DATE={"2025-02-27"} textColor={'#956f48'} />
				<KakaoMap HALL_LAT={35.02732836040296} HALL_LNG={127.90366046479706}
					HALL_ADDRESS={"경남 하동군 진교면 민다리길 62-4 진교보험주민센터"}
					HALL_NAME={"경남 하동군 진교면 민다리길 62-4 "}
					PICKER_NAME={"진교보험주민센터"}
					PICKER_Y={"-translate-y-12"}
					borderColor={'#956f48'}
				/>
			</main>

			{/* 푸터 */}
			<footer className="bg-gray-800 text-white text-center py-6 text-sm">
				<p>메타리치 컴패니언사업부 진교사무실 개소식에 초대합니다.</p>
				<p className="mt-2">뜻깊은 자리를 함께 빛내 주시면 감사하겠습니다.</p>
			</footer>
		</div>

	);
}


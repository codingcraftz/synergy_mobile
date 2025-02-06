"use client";

import Main from "@/components/Main";
import KAKAOMAP from "@/components/Map";
import Message from "@/components/Message";
import Information from "@/components/Information";
import WeddingCalendar from "@/components/WeddingCalendar";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen max-w-screen-sm mx-auto bg-[#f7f6f1] shadow-md">
			<main className="flex flex-col flex-1 pb-6 text-[#948172] gap-14">
				<Main />
				<Message />
				<Information />
				<WeddingCalendar />
				<KAKAOMAP />
			</main>

			{/* 푸터 */}
			<footer className="bg-gray-800 text-white text-center py-6 text-sm">
				<p>시너지그룹 개소식에 초대합니다.</p>
				<p className="mt-2">뜻깊은 자리를 함께 빛내 주시면 감사하겠습니다.</p>
			</footer>
		</div>
	);
}

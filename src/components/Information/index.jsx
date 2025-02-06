import { RiKakaoTalkFill } from "react-icons/ri";
import Frame from "../Frame"

const Information = () => {
	return (
		<div className="flex flex-col items-center font-sans">
			<Frame />
			<p className="text-[#956f48] tracking-widest font-serif">INFORMATION</p>
			<p className="font-bold tracking-widest font-serif">안  내</p>
			<section className="flex flex-col gap-2 p-4 text-center font-sans py-6 items-start mt-5">
				<div className="flex gap-2 items-center">
					<p className="bg-orange-400 rounded-lg px-2 text-white">특별강의</p>
					<p>15:00 ~ 17:00</p>
				</div>
				<p>손해사정사도 모르는 실전 숨은 보험금 마스터파일</p>
				<p>수강료: <span>개소식 기념 <span className="font-bold">무료</span></span></p>
				<div className="flex items-center">
					<p>수강신청:<span>카카오채널 <span className="font-bold">@시너지그룹</span> 검색 후 신청</span></p>
				</div>
				<a
					href="http://pf.kakao.com/_xkxaHMn"
					target="_blank"
					rel="noopener noreferrer"
					className="flex gap-1 ml-auto items-center bg-[#FEE500] rounded-lg py-1 px-2 text-[#191919] hover:bg-orange-500 transition-colors cursor-pointer"
				>
					<RiKakaoTalkFill className="text-lg" />
					<p className="text-sm">카카오 채널</p>
				</a>

				<div className="flex gap-2 items-center">
					<p className="bg-orange-400 text-white rounded-lg px-2">개소식</p>
					<p className="text-md font-bold text-red-400">17:30 시작</p>
				</div>
			</section>

		</div >
	)

}

export default Information


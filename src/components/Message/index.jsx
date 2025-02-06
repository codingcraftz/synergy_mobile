import Image from "next/image"
import Frame from "../Frame"

const Message = () => {
	return (
		<div className="flex flex-col items-center font-sans">
			<Frame />
			<p className="text-[#956f48] tracking-widest font-serif">MESSAGE</p>
			<p className="font-bold tracking-widest font-serif">인사말</p>
			<div className="relative w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg py-6 mt-5">
				<Image
					src="/images/ceo_image.jpg" // 실제 CEO 이미지 경로로 변경
					alt="CEO Image"
					layout="fill"
					objectFit="cover"
					objectPosition="top" // 이미지의 상단을 중심으로 보여줌
					className="rounded-full"
				/>
			</div>
			<section className="font-semibold text-md p-4 text-center font-serif py-6">
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

			</section>

		</div >
	)

}

export default Message

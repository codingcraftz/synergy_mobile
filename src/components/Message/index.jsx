import Image from "next/image"
import Frame from "../Frame"

const Message = ({ ceoImage, children, color }) => {
	return (
		<div className="flex flex-col items-center">
			<Frame fill={color} />
			<p className=" tracking-widest font-serif" style={{ color }}>MESSAGE</p>
			<p className="font-bold tracking-widest font-serif" style={{ color }}>인사말</p>
			{ceoImage &&
				<div className="relative w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden shadow-lg py-6 mt-5">
					<Image
						src={ceoImage}
						alt="CEO Image"
						layout="fill"
						objectFit="cover"
						objectPosition="top"
						className="rounded-full"
					/>
				</div>
			}
			<section className="font-semibold text-md p-4 text-center font-serif py-6">
				{children}
			</section>

		</div >
	)

}

export default Message

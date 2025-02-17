import Image from "next/image";


const Main = ({ image }) => {
	return (
		<div className="relative flex justify-center text-[#948172] text-start flex-1 mt-0">
			<Image src={image} width={600} height={200} alt="main" />
		</div>
	);
};

export default Main;

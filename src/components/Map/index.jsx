"use client";

import { HALL_NAME, HALL_ADDRESS, HALL_LAT, HALL_LNG } from "@/utils/constants";
import Script from "next/script";
import { Toaster, toast } from "react-hot-toast";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";
import { FaRegCopy } from "react-icons/fa";

export default function NavigationAndAddress() {
	const kakaoNaviUrl = `kakaomap://look?p=${HALL_LAT},${HALL_LNG}`;

	const naverNaviUrl = `nmap://navigation?dlat=${HALL_LAT}&dlng=${HALL_LNG}&dname=${encodeURIComponent(HALL_NAME)}&appname=your.package.name`;

	const tMapNaviUrl = `tmap://route?goalname=${HALL_NAME}&goalx=${HALL_LNG}&goaly=${HALL_LAT}`;

	const copyAddress = async () => {
		try {
			await navigator.clipboard.writeText(HALL_ADDRESS);
			toast.success("주소가 복사되었습니다!", {
				style: {
					background: "#333",
					color: "#fff",
				},
			});
		} catch (err) {
			console.error("주소 복사 실패:", err);
			toast.error("주소 복사에 실패했습니다. 다시 시도해주세요.");
		}
	};

	return (
		<div className="flex flex-col items-center justify-center py-6 gap-2 font-sans">
			<Toaster position="top-center" reverseOrder={false} />
			<Script
				src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services,clusterer&autoload=false`}
				strategy="beforeInteractive"
			/>

			<div className="border-2 border-[#956f48] font-bold px-4 py-1 rounded-full font-crimson">
				오시는 길
			</div>

			{/* 카카오 지도 */}
			<div className="w-full h-80 relative px-4">
				<Map
					center={{ lat: HALL_LAT, lng: HALL_LNG }}
					style={{ width: "100%", height: "100%" }}
					level={3}
				>
					<MapMarker position={{ lat: HALL_LAT, lng: HALL_LNG }}></MapMarker>
					<CustomOverlayMap
						position={{ lat: HALL_LAT, lng: HALL_LNG }}
						yAnchor={1}
					>
						<div className="customoverlay -translate-y-12 bg-white px-2 border-2 border-[#956f48] rounded-lg">
							<a
								href="https://naver.me/GDafxW5N"
								target="_blank"
								rel="noreferrer"
							>
								<span className="text-sm flex justify-center items-center">유원플러스 빌딩 203호</span>
							</a>
						</div>
					</CustomOverlayMap>
				</Map>
			</div>

			<div className="flex flex-col gap-1 py-1 font-sans items-center w-full px-2">
				<p>서울 특별시 송파구 위례서로 252</p>
				<div className="flex">
					<p>유원플러스 빌딩 203호</p> 				<button
						onClick={copyAddress}
						className="bg-gray-800 text-white px-2 py-1 rounded-lg shadow-md hover:bg-gray-900 text-sm ml-2 flex items-center justify-center gap-1"
					>
						<FaRegCopy />
						<p>복사하기</p>
					</button>
				</div>
			</div>


			{/* 내비게이션 버튼 */}
			<div className="flex flex-col gap-4 w-full px-4 mt-4">
				<div className="flex gap-4">
					<button
						onClick={() => (window.location.href = kakaoNaviUrl)}
						className="bg-[#FEE500] text-[#191919] px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 flex-1"
					>
						카카오맵
					</button>
					<button
						onClick={() => (window.location.href = naverNaviUrl)}
						className="bg-[#00c73c] text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 flex-1"
					>
						네이버맵
					</button>
					<button
						onClick={() => (window.location.href = tMapNaviUrl)}
						className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 flex-1"
					>
						티맵
					</button>
				</div>
			</div>

			{/* 주소 복사 버튼 */}
		</div>
	);
}

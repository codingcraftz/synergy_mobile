"use client";

import React from "react";
import "./CalendarStyles.css";

export default function WeddingCalendar({ WEDDING_DATE, textColor }) {
	const weddingDate = new Date(WEDDING_DATE); // 결혼식 날짜

	// 날짜 생성 로직
	const generateCalendar = () => {
		const firstDay = new Date(
			weddingDate.getFullYear(),
			weddingDate.getMonth(),
			1,
		).getDay(); // 첫째 날의 요일
		const daysInMonth = new Date(
			weddingDate.getFullYear(),
			weddingDate.getMonth() + 1,
			0,
		).getDate(); // 월의 총 일수

		const calendar = [];
		let day = 1;

		for (let week = 0; week < 6; week++) {
			const row = [];
			for (let weekday = 0; weekday < 7; weekday++) {
				if (week === 0 && weekday < firstDay) {
					row.push(null); // 공백 추가
				} else if (day > daysInMonth) {
					row.push(null); // 남은 공백 추가
				} else {
					row.push(day); // 날짜 추가
					day++;
				}
			}
			calendar.push(row);
		}
		return calendar;
	};

	const calendar = generateCalendar();

	// 날짜 포맷
	const year = weddingDate.getFullYear();
	const month = String(weddingDate.getMonth() + 1).padStart(2, "0");
	const day = String(weddingDate.getDate()).padStart(2, "0");

	// 요일 계산
	const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
	const weekday = weekdays[weddingDate.getDay()];

	// 최종 포맷
	const formattedDate = `${year}.${month}.${day} ${weekday}`;

	return (
		<div className={`text-[${textColor}] flex flex-col items-center justify-center font-sans`}>
			{/* 헤더에 동적으로 날짜 표시 */}
			<h2 className="text-lg">{formattedDate}</h2>
			<div className="w-80 rounded-lg p-2">
				{/* 달력 헤더 */}
				<div className={`grid grid-cols-7 text-center text-[${textColor}] mb-4`}>
					<div>SUN</div>
					<div>MON</div>
					<div>TUE</div>
					<div>WED</div>
					<div>THU</div>
					<div>FRI</div>
					<div>SAT</div>
				</div>
				{/* 달력 내용 */}
				<div className="grid grid-cols-7 text-center">
					{calendar.map((week, weekIndex) => (
						<React.Fragment key={weekIndex}>
							{week.map((dayValue, dayIndex) => (
								<div
									key={dayIndex}
									className={`py-2 ${dayValue === weddingDate.getDate()
										? "bg-[#956f48] opacity-90 text-white font-bold rounded-full"
										: "text-[#956f48]"
										}`}
								>
									{dayValue || ""}
								</div>
							))}
						</React.Fragment>
					))}
				</div>
			</div>
		</div>
	);
}

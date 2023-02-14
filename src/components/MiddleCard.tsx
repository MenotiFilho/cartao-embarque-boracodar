import React from "react";
import "./InvertedBorder.css";

function MiddleCard() {
	return (
		<div className="bg-white w-80 flex flex-col py-6 px-8 font-rubik rounded-3xl border border-black border-opacity-40 md:rounded-none inner-round">
			<div className="flex justify-between text-sm opacity-60">
				<p className="leading-4">Passageiro</p>
				<p className="leading-5">Assento</p>
			</div>
			<div className="flex justify-between font-medium text-base opacity-90">
				<p className="leading-4">Rodrigo Terron</p>
				<p className="leading-5">28A</p>
			</div>
		</div>
	);
}

export default MiddleCard;

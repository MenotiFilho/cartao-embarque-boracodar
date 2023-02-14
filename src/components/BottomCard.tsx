import React from "react";
import QRCode from "react-qr-code";

function BottomCard() {
	return (
		<div className="w-80 flex flex-col py-6 px-8 rounded-3xl md:rounded-b-3xl md:rounded-t-none inner-round-top font-rubik gap-6 justify-between center bg-white ">
			<div className="flex gap-2 justify-between">
				<div className="flex flex-col gap-4 my-2">
					<div className="flex flex-col gap-1 justify-start">
						<p className="text-sm opacity-60 leading-4">Embarque</p>
						<div className="bg-[#633BBC] w-fit px-2 py-1 rounded-lg text-white font-medium leading-5">
							16:15
						</div>
					</div>
					<div>
						<p className="text-sm opacity-60 leading-4">Terminal</p>
						<p className="font-medium leading-5">2</p>
					</div>
					<div>
						<p className="text-sm opacity-60 leading-4">Portão</p>
						<p className="font-medium leading-5">15</p>
					</div>
				</div>
				<div className="flex flex-col items-center">
					<div className="p-2">
						<QRCode value="hey" size={140} />
					</div>
					<p className=" opacity-60 text-sm leading-4">Grupo de embarque: 3</p>
				</div>
			</div>
			<p className="flex items-center justify-center leading-5">
				<span className="font-medium">Atenção:</span>&nbsp;o portão fecha 16:45
			</p>
		</div>
	);
}

export default BottomCard;

import { Airplane } from "phosphor-react";
import React from "react";

function TopCard() {
	return (
		<div className="w-80 flex flex-col py-6 px-8 rounded-3xl md:rounded-t-3xl md:rounded-b-none inner-round-bottom font-rubik gap-6 justify-between center bg-white">
			<div className="flex flex-col gap-6">
				<div className="flex flex-col">
					<div className="flex justify-between text-sm opacity-60 leading-4">
						<p>Voo</p>
						<p>Data</p>
					</div>
					<div className="flex font-medium justify-between opacity-90 leading-5">
						<p>RS995</p>
						<p>23/05/2023</p>
					</div>
				</div>
				<div>
					<div className="flex text-sm opacity-60 justify-between leading-4">
						<p>São Paulo, Brasil</p>
						<p>São Francisco, EUA</p>
					</div>
					<div className="flex items-center font-medium text-[40px] opacity-90 justify-between leading-10">
						<p>GRU</p>
						<span className="rotate-90">
							<Airplane size={24} weight="fill" />
						</span>
						<p>SFO</p>
					</div>
					<div className="flex opacity-80 justify-between">
						<p className=" leading-5">17:00</p>
						<span className="flex leading-5">
							<p>04:48</p>
							<p className="font-medium text-[10px] leading-3">+1</p>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TopCard;

import TopCard from "./components/TopCard";
import MiddleCard from "./components/MiddleCard";
import BottomCard from "./components/BottomCard";

function App() {
	return (
		<div className="flex p-6 justify-center bg-gradient-to-b from-[#8257E5] to-[#271A45] h-screen">
			<div className="flex flex-col items-center max-w-7xl tracking-tighter">
				<h1 className="font-rubik font-medium text-xl text-white mb-5">
					Cartão de embarque
				</h1>
				<TopCard />
				<MiddleCard />
				<BottomCard />
				<p className="text-center mt-5 text-white opacity-60 text-sm leading-6 w-64">
					Qualquer problema procure o balcão de atendimento da sua companhia
					aérea
				</p>
			</div>
		</div>
	);
}

export default App;

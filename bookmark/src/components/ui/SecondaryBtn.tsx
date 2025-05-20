const SecondaryBtn = ({ children }: { children: React.ReactNode }) => {
	return (
		<a href="#" className="text-sm font-medium bg-zinc-100 text-zinc-600 py-2.5 px-6 rounded border-zinc-100 border-2 shadow-lg hover:bg-white hover:text-zinc-600 hover:border-zinc-600 duration-300 cursor-pointer transition">
			{children}
		</a>
	);
};

export default SecondaryBtn;

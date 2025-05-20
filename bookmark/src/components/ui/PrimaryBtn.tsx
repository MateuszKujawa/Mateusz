const PrimaryBtn = ({ children }: { children: React.ReactNode }) => {
	return (
		<a href="#" className="text-sm font-medium bg-blue-primary text-white py-2.5 px-4 md:px-6 rounded border-blue-primary border-2 hover:bg-white hover:text-blue-primary duration-300 cursor-pointer transition">
			{children}
		</a>
	);
};

export default PrimaryBtn;

const Hero = () => {
	return (
		<div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center px-16 md:px-20 lg:px-40 bg-gradient space-y-10 md:space-y-0">
			<div className="lg:hidden w-full md:w-1/2 h-full flex flex-col justify-center items-center">
				<img src="/hero.png" alt="" />
			</div>
			<div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start space-y-5">
				<h1 className="w-20 text-[4em] md:text-[8em] xl:text-[10em] leading-none font-black -mb-5">BUILD, SHARE EARN</h1>
				<p className="w-full lg:w-4/5 font-medium text-sm md:text-md">A New way of launching Projects and getting Incentivized for it. Create a project - Share with everyone - Project belivers will give you crypto kicks and share you the inputs </p>
				<a href='https://tally.so/r/wdG5N3' target='_blank' className="p-4 rounded-xl bg-gradient-to-r from-[#FFD600] to-[#FF5C00] font-bold cursor-pointer hover:scale-110 duration-300">Get Early Access</a>
			</div>
			<div className="hidden lg:block w-full md:w-1/2 h-full flex flex-col justify-center items-center">
				<img src="/hero.png" alt="" />
			</div>
		</div>
	)
}

export default Hero
interface Props {
	id: string
	title: string
	desc: string
	img: string
}

const HowCard = (props: Props) => {
	return (
		<div className="w-full h-full flex flex-col lg:flex-row justify-center items-center px-16 md:px-20 lg:px-40 space-y-5 lg:space-y-0">
			<div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start">
				<h1 className="text-white/20 text-[4em] md:text-[8em] xl:text-[12em] -mb-10 font-black">{props.id}</h1>
				<h1 className="text-transparent bg-clip-text bg-gradient-to-br from-[#FFD600] to-[#FF5C00] font-black text-4xl mb-2">{props.title}</h1>
				<p className="w-full lg:w-1/2 text-sm font-medium">{props.desc}</p>
			</div>
			<div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center space-y-5">
				<img src={props.img} alt="" className="" />
			</div>
		</div>
	)
}

export default HowCard
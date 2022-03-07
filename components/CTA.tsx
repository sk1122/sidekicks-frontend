const CTA = () => {
	return (
            <div className="relative flex flex-col lg:flex-row justify-around items-center w-11/12 h-fit py-20 rounded-xl overflow-hidden shadow-xl bg-white/20">
				<div className="text-center lg:text-left px-16 lg:px-40 w-full h-full flex flex-col items-center lg:items-start justify-center space-y-2">
					<div className="text-3xl lg:text-5xl font-bold w-full">
						Let's make building side projects more fun 
					</div>
				</div>
                <div className="h-full w-full px-16 lg:px-40 flex justify-center lg:justify-end items-center mt-10 lg:mt-0">
					<a href='https://tally.so/r/wdG5N3' target='_blank' className="w-1/3 bg-gradient-to-tr from-[#FFD600] to-[#FF5C00] flex justify-center items-center text-white rounded-xl py-3 text-sm">Register</a>
                </div>
            </div>
    )
}

export default CTA

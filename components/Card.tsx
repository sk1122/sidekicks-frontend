interface Props {
    title: string,
    text: string
	img: string
}

export const FeatureCard = (props: Props) => {
    return (
        <>
            <div className="bg-white/20 flex py-5 my-4 lg:m-0 w-[200px] md:w-[250px] lg:w-[338px] m-auto p-5 rounded-xl cursor-pointer hover:scale-125 duration-300">
                <img src={props.img} alt="" className="h-fit" />
                <div className="ml-[5px]">
                    <p className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#FFD600] to-[#FF5C00]">{props.title}</p>
                    <p className="text-left">{props.text}</p>
                </div>
            </div>
        </>
    )
}
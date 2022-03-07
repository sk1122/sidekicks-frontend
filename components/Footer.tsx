interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="font-poppins w-full h-fit bg-brand-dark text-white px-16 md:px-20 lg:px-40 py-20 pb-36">
      <div className="flex justify-around border-t-2 border-gray-700 pt-20">
        {/* left side */}
        <div className="flex flex-col w-full">
          <h1 className="text-2xl font-extrabold">
            SideKicks
          </h1>
          <p className="w-7/12">
            A New way of launching Projects and getting Incentivized for it. Create a project - Share with everyone - Project belivers will give you crypto kicks and share you the inputs 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

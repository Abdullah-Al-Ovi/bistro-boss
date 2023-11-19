
const Heading = ({subHeading,heading}) => {
    return (
        <div className="text-center">
            <h3 className="text-[#D99904] italic">---{subHeading}---</h3>
            <h1 className="text-2xl uppercase p-2 border-y-2 w-[30%] mx-auto my-2">{heading}</h1>
        </div>
    );
};

export default Heading;
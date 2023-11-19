

const PriceList = ({common}) => {
    return (
        <div className="flex items-center gap-5">
            <div>
            <img className="w-[90px] rounded-b-[200px] rounded-tr-[200px]" src={common.image} />
            </div>
            <div>
                <h4 className="uppercase font-medium">{common.name}------</h4>
                <p>{common.recipe}</p>
            </div>
            <div>
                <p className="text-[#BB8506] ">${common.price}</p>
            </div>
        </div>
    );
};

export default PriceList;
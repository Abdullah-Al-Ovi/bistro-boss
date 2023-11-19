import PriceList from "../PriceList/PriceList";


const CategoryMenu = ({cateMenu}) => {
    return (
        <div className="grid grid-cols-2 gap-7 w-[80%] mx-auto">
                {
                    cateMenu?.map(common=><PriceList key={common._id} common={common}></PriceList>)
                }
            </div>
    );
};

export default CategoryMenu;
import Foodcard from "./Foodcard/Foodcard";


const Foodcards = ({cateMenu}) => {
    return (
        <div className="grid grid-cols-3 gap-5">
            {
                cateMenu?.map(menuItem=><Foodcard key={menuItem._id}
                    menuItem={menuItem}
                ></Foodcard>)
            }
        </div>
    );
};

export default Foodcards;
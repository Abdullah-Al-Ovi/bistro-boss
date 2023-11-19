import Banner from "./Banner/Banner";
import ChiefService from "./ChiefService/ChiefService";
import CommonMenu from "./CommonMenu/CommonMenu";
import OrderOnline from "./OrderOnline/OrderOnline";


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <OrderOnline></OrderOnline> 
          <ChiefService></ChiefService>
          <CommonMenu></CommonMenu>

        </div>
    );
};

export default Home;
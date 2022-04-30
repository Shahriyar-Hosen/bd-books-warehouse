import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Products from '../Products/Products';

const Home = () => {
   
    return (
        <div>
            <BannerCarousel />
            <h1 className=''>This home Page</h1>
            <Products />
        </div>
    );
};

export default Home;
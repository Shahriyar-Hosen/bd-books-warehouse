import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Products from '../Products/Products';
import TopCategories from '../TopCategories/TopCategories';

const Home = () => {
   
    return (
        <div>
            <BannerCarousel />
            <TopCategories />
            <Products />
        </div>
    );
};

export default Home;
import BannerCarousel from '../BannerCarousel/BannerCarousel';
import Products from '../Products/Products';
import TopCategories from '../TopCategories/TopCategories';
import TopPublications from '../TopPublications/TopPublications';

const Home = () => {
   
    return (
        <div>
            <BannerCarousel />
            <TopCategories />
            <Products />
            <TopPublications />
        </div>
    );
};

export default Home;
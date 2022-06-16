import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <AwesomeSlider className="home__slider">
          <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/JayeshbhaiJordaar/3000x1200_Hero-Tall_NP._CB634520229_.jpg" />
          <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/June_hero/UP_desktop_tall._CB634407690_.jpg" />

          <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/unrec/D39822856_WLA_BAU_GW-Unrec-heroes_DesktopTallHero_3000x1200_p._CB623159886_.jpg" />
          <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/2022/under1999/1999_Tallhero_3000x1200_n._CB636771823_.jpg" />
          <div data-src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/jun22/SBIUNREC/WA_3000._CB634772465_.jpg" />
        </AwesomeSlider>

        <div className="home__row">
          <Product
            id={101}
            title="Apple Watch Series 3 Space Grey Aluminium Case with Black Sport Band"
            price={30.5}
            rating={4}
            image="https://m.media-amazon.com/images/I/71SFsTBSJgL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id={102}
            title="Amazon Echo Studio Smart Voice Activated Speaker, Black"
            price={78.6}
            rating={5}
            image="https://www.reliancedigital.in/medias/Amazon-Echo-Plus-2-0-GRY-Computer-Speaker-491431038-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMDQ1NTl8aW1hZ2UvanBlZ3xpbWFnZXMvaDJjL2g5Ni85MDQzNzA1MTM1MTM0LmpwZ3wwMTg4MDIzZDZkOTQ3ODQ3NTUxYjdjMDU2NGEwNzAyNzM4MmI0YTNjNDM5NjRjMmUwZjgxNmZmMWZmNjliNjNh"
          />
          <Product
            id={103}
            title="Apple iPhone 13 Pro 256 GB, Gold"
            price={350}
            rating={5}
            image="https://img.freepik.com/free-vector/new-phone-front-white-back-with-dual-camera-drawing-format-isolated-white-background_117553-334.jpg?w=740"
          />
        </div>
        <div className="home__row home__productImages">
          <img
            className="home__productImage"
            src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={112}
            title="Amazon Brand - Solimo Muddha XXXL Faux Leather Bean Bag Filled With Beans (Brown & Orange)"
            price={29.29}
            rating={5}
            image="https://m.media-amazon.com/images/I/71vLStZUt7L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id={113}
            title="Amazon Brand - Solimo Swerve Height Adjustable Plastic Laptop & Utility Table with Cup Holder (Black)"
            price={29.29}
            rating={5}
            image="https://m.media-amazon.com/images/I/71FD9gwfKYS._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id={114}
            title="Amazon Brand - Solimo 2-Door Foldable Wardrobe, 8 Racks, Maroon"
            price={29.29}
            rating={5}
            image="https://m.media-amazon.com/images/I/91WnOMhgfbL._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row home__productImages">
          <img
            className="home__productImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/SS22/AFpage/L1headers/Cat-header-PC-Deals-on-clothing-1500x270.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id={132}
            title="U.S. POLO ASSN.
            Men T-Shirt"
            price={54.5}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41IWK0Q8Y-L._AC_SR400,600_.jpg"
          />
          <Product
            id={133}
            title="Dhruvi Trendz Soft Cotton & Silk Saree For Women Banarasi Saree"
            price={54.5}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/410atkHUl+L._AC_SR400,600_.jpg"
          />
          <Product
            id={134}
            title="Dennis Lingo
            Men's Slim Fit Casual Shirt"
            price={54.5}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/31yOcajvAZS._AC_SR400,600_.jpg"
          />
        </div>
        <div className="home__row home__productImages">
          <img
            className="home__productImage"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Laptops/Digit_1500X300.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={183}
            title="LED TV with brighter screen , rich user experince 100inch smart tv"
            price={350}
            rating={4}
            image="https://m.media-amazon.com/images/I/81k5Yb4BfGL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            id={106}
            title="Samsung 163 cm (65 Inches) 4K Ultra HD Smart QLED TV"
            price={350}
            rating={4}
            image="https://m.media-amazon.com/images/I/81Pp+KXbrjL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

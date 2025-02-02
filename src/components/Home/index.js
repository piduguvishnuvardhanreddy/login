import Header from '../Header'
import Footer from '../Footer'
import AllProductsSection from '../AllProductsSection'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="discover-container-section-container">
      <div className="discover-container">
        <h1 className="discover-heading">DISCOVER OUR PRODUCTS</h1>
        <p className="discover-para">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
    </div>
    <div>
      <div>
        <AllProductsSection />
      </div>
    </div>
    <Footer />
  </>
)

export default Home

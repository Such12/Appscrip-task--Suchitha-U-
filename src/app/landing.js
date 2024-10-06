"use client";
import Head from 'next/head';
import { useState } from 'react';
import { FaHeart, FaShoppingBag, FaUserCircle } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
const products = [
    {
        id: 1,
        title: "Bioglow makeup",
        image: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 2,
        title: "Chanel Rose Perfume ",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: false, 
      },
      {
        id: 3,
        title: "Ordinary makeup",
        image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 4,
        title: "Clinque Lipset",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 5,
        title: "Chanel Vanilla Perfume",
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 6,
        title: "Nike Unisex Shoes ",
        image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: false, 
      },
      {
        id: 7,
        title: "Vans Red Mens Shoes",
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 8,
        title: "Neauthy beauty",
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 9,
        title: "Lash Paradise",
        image: "https://images.unsplash.com/photo-1650664370914-f026578ec2a4?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 10,
        title: "Lancome Lipstick",
        image: "https://images.unsplash.com/photo-1542452255191-c85a98f2c5d1?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: false, 
      },
      {
        id: 11,
        title: "Brekin Slippers ",
        image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 12,
        title: "Everyday Humans SPF",
        image: "https://images.unsplash.com/photo-1598662957563-ee4965d4d72c?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 13,
        title: "705 Califonia Sweatshirt",
        image: "https://images.unsplash.com/photo-1618354691229-88d47f285158?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
      },
      {
        id: 14,
        title: "INN Beauty",
        image: "https://images.unsplash.com/photo-1668255446079-b15fd061735d?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true, 
      },
      {
        id: 15,
        title: "Apple watch",
        image: "https://images.unsplash.com/photo-1637412173653-de70428ee3ce?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: false, 
      },
      {
        id: 16,
        title: "Clara Neckpiece",
        image: "https://plus.unsplash.com/premium_photo-1681276170423-2c60b95094b4?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true, 
      },
      {
        id: 17,
        title: "Backpack by Rio",
        image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: false, 
      },
      {
        id: 18,
        title: "diGioia Perfume",
        image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=500&h=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        inStock: true,
}
];

const LandingPage = () => {
    const [showFilters, setShowFilters] = useState(false);

    const toggleFilters = () => {
        setShowFilters(prevState => !prevState);
    };

    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </Head>
            <div className="navbar">
    <div className="logo-container">
        <div className="logo">LOGO</div>
        <div className="navbar-icons">
                        <FaHeart className="icon" />
                        <FaShoppingBag className="icon" />
                        <FaUserCircle className="icon" />
                    </div>
    </div>
    <ul>
        <li><a href="#">SHOP</a></li>
        <li><a href="#">SKILLS</a></li>
        <li><a href="#">STORIES</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT US</a></li>
    </ul>
</div>
           
            <div className="hero">
                <h1>DISCOVER OUR PRODUCTS</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque.</p>
            </div>

           
            <div className="container">
                <aside className={`sidebar ${showFilters ? 'visible' : 'hidden'}`}>
                    <h3>Categories</h3>
                    <div className="checkbox-group">
                        <h4>Ideal for</h4>
                        <label>
                            <input type="checkbox" /> Children
                        </label>
                        <label>
                            <input type="checkbox" /> Adults
                        </label>

                        <h4>Occasion</h4>
                        <label>
                            <input type="checkbox" /> Casual
                        </label>
                        <label>
                            <input type="checkbox" /> Formal
                        </label>

                        <h4>Work</h4>
                        <label>
                            <input type="checkbox" /> Office
                        </label>
                        <label>
                            <input type="checkbox" /> Remote
                        </label>

                        <h4>Fabric</h4>
                        <label>
                            <input type="checkbox" /> Cotton
                        </label>
                        <label>
                            <input type="checkbox" /> Polyester
                        </label>

                        <h4>Segment</h4>
                        <label>
                            <input type="checkbox" /> Men
                        </label>
                        <label>
                            <input type="checkbox" /> Women
                        </label>
                        <label>
                            <input type="checkbox" /> Unisex
                        </label>

                        <h4>Suitable for</h4>
                        <label>
                            <input type="checkbox" /> Hiking
                        </label>
                        <label>
                            <input type="checkbox" /> Traveling
                        </label>

                        <h4>Raw Material</h4>
                        <label>
                            <input type="checkbox" /> Organic
                        </label>
                        <label>
                            <input type="checkbox" /> Recycled
                        </label>

                        <h4>Pattern</h4>
                        <label>
                            <input type="checkbox" /> Striped
                        </label>
                        <label>
                            <input type="checkbox" /> Printed
                        </label>
                    </div>
                </aside>

                <div className="main-content">
                    <div className="recommended-section">
                        <button onClick={toggleFilters}>
                            {showFilters ? 'Hide Filters' : 'Show Filters'}
                        </button>
                        <div className="sort-options">
                            <label htmlFor="sort" className="sort-label">Sort by: </label>
                            <select id="sort" name="sort" className="sort-dropdown">
                                <option value="recommended">RECOMMENDED</option>
                                <option value="newest">NEWEST FIRST</option>
                                <option value="popular">POPULAR</option>
                                <option value="price_high_low">PRICE: HIGH TO LOW</option>
                                <option value="price_low_high">PRICE: LOW TO HIGH</option>
                                <FaChevronDown className="sort-arrow" size={10} />
                            </select>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="grid">
                        {products.map((product) => (
                            <div key={product.id} className="card">
                                <div className="image-container">
                                    <img src={product.image} alt={product.title} />
                                    {!product.inStock && <span className="out-of-stock">Out of Stock</span>}
                                </div>
                                <h2>{product.title}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
          {/* Footer */}
          <footer className="footer">
            <div className="footer-container">
              
              {/* Top Section: Newsletter and Contact Us */}
              <div className="footer-top">
                {/* Newsletter */}
                <div className="newsletter">
                  <h4>BE THE FIRST TO KNOW</h4>
                  <p>Sign up for updates from mettà muse.</p>
                  <form>
                    <input type="email" placeholder="Enter your e-mail" />
                    <button type="submit">SUBSCRIBE</button>
                  </form>
                </div>
                
                {/* Contact Us */}
                <div className="contact-us">
                  <h4>CONTACT US</h4>
                  <p>+44 221 133 5350</p>
                  <p>customercare@mettamuse.com</p>
                  <h4>CURRENCY</h4>
                  <p>
                    <img src="data:image/svg+xml;base64,..." alt="USD" /> USD
                  </p>
                  <p>
                    Transactions will be completed in Euros and a currency reference is available on hover.
                  </p>
                </div>
              </div>
              
              {/* Middle Section: Footer Links */}
              <div className="footer-links">
                <div className="about">
                  <h4>mettā muse</h4>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Stories</a></li>
                    <li><a href="#">Artisans</a></li>
                    <li><a href="#">Boutiques</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">EU Compliances Docs</a></li>
                  </ul>
                </div>
                <div className="quick-links">
                  <h4>QUICK LINKS</h4>
                  <ul>
                    <li><a href="#">Orders & Shipping</a></li>
                    <li><a href="#">Join/Login as a Seller</a></li>
                    <li><a href="#">Payment & Pricing</a></li>
                    <li><a href="#">Return & Refunds</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                  </ul>
                </div>
                <div className="social-media">
                  <h4>FOLLOW US</h4>
                  <div className="social-icons">
                    <a href="#"><img src="data:image/svg+xml;base64,..." alt="LinkedIn" /></a>
                    <a href="#"><img src="data:image/svg+xml;base64,..." alt="Instagram" /></a>
                    <a href="#"><img src="data:image/svg+xml;base64,..." alt="Twitter" /></a>
                  </div>
                  <h4>mettā muse ACCEPTS</h4>
                  <div className="payment-icons">
                    <img src="data:image/svg+xml;base64,..." alt="Visa" />
                    <img src="data:image/svg+xml;base64,..." alt="Apple Pay" />
                    <img src="data:image/svg+xml;base64,..." alt="Amex" />
                    <img src="data:image/svg+xml;base64,..." alt="Google Pay" />
                    <img src="data:image/svg+xml;base64,..." alt="PayPal" />
                  </div>
                </div>
              </div>
              
              <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} My E-commerce Store. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      );
    };
    
    export default LandingPage;
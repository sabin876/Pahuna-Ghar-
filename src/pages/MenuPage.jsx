import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, 
  MessageCircle, 
  Coffee, 
  Flame, 
  ChefHat, 
  Sparkles, 
  Mountain, 
  Star, 
  Soup, 
  GlassWater, 
  Wheat, 
  Beef,
  UtensilsCrossed,
  ArrowRight
} from 'lucide-react';
import thaliImg from '../assets/menu_thali.png';
import chowmeinImg from '../assets/Chowmein.webp';
import dhidoImg from '../assets/Dhido set.webp';
import fryItemsImg from '../assets/Fry items.webp';
import nepaliThaliImg from '../assets/Nepali Thali set.webp';
import newariKhajaImg from '../assets/Newari Khaja Tass.webp';
import momoImg from '../assets/momo.webp';

// ESLint workaround: this project’s ESLint config doesn’t count `<motion.* />` usage.
void motion;

// Authentic realistic placeholder images mapped to each item
const menuData = [
  {
    category: 'NEPALI THALI SET',
    img: nepaliThaliImg,
    items: [
      { name: 'Veg Set', price: '11 Dhs' },
      { name: 'Chicken Set (Normal)', price: '13 Dhs' },
      { name: 'Chicken Set (Local)', price: '15 Dhs' },
      { name: 'Chicken Choila / Fry / Chilly Set', price: '14 Dhs' },
      { name: 'Sausage / Liver / Egg Set', price: '13 Dhs' },
      { name: 'Sukuti Set (Buff)', price: '17 Dhs' },
      { name: 'Fish Set', price: '14 Dhs' },
      { name: 'Paya Set', price: '15 Dhs' },
      { name: 'Mutton Set', price: '18 Dhs' },
      { name: 'Mutton Masala Set', price: '20 Dhs' },
      { name: 'Bhutan Set', price: '17 Dhs' },
      { name: 'Thakali Set (Veg/Chicken/Buff/Mutton)', price: '14/16/20/20 Dhs' },
    ],
  },
  {
    category: 'DHIDO SET',
    img: dhidoImg,
    items: [
      { name: 'Mutton Dhido Set', price: '18 Dhs' },
      { name: 'Mutton Masala Dhido Set', price: '20 Dhs' },
      { name: 'Chicken Dhido Set', price: '16 Dhs' },
      { name: 'Local Chicken Dhido Set', price: '18 Dhs' },
      { name: 'Sukuti Dhido Set', price: '17 Dhs' },
      { name: 'Veg Dhido Set', price: '14 Dhs' },
      { name: 'Paya Dhido Set', price: '15 Dhs' },
    ],
  },
  {
    category: 'MO:MO',
    img: momoImg,
    items: [
      { name: 'Steam Momo Chicken', price: '11 Dhs' },
      { name: 'Steam Momo Buff', price: '12 Dhs' },
      { name: 'Fry Momo (Chicken / Buff)', price: '13 Dhs' },
      { name: 'Jhol Momo (Chicken / Buff)', price: '15 Dhs' },
      { name: 'C-Momo (Chicken / Buff)', price: '15 Dhs' },
    ],
  },
  {
    category: 'CHOWMEIN / THUKPA',
    img: chowmeinImg,
    items: [
      { name: 'Chowmein (Veg / Chicken)', price: '' },
      { name: 'Chowmein Egg', price: '' },
      { name: 'Chowmein Buff', price: '' },
      { name: 'Chowmein Mix', price: '' },
      { name: 'Thukpa Veg', price: '' },
      { name: 'Thukpa (Chicken / Egg)', price: '' },
      { name: 'Paya Thukpa', price: '' },
      { name: 'Thukpa Mix', price: '' },
    ],
  },
  {
    category: 'NEWARI KHAJA / TASS',
    img: newariKhajaImg,
    items: [
      { name: 'Newari Khaja Set (Chi/Buff/Mutt)', price: '16/18/20 Dhs' },
      { name: 'Tass Set (Chi/Buff/Mutt)', price: '16/18/20 Dhs' },
      { name: 'Combo Set (Chi/Buff/Mutton/Bhutan)', price: '20/25/25/25 Dhs' },
    ],
  },
  {
    category: 'EGGS',
    items: [
      { name: 'Boiled Egg', price: '1 Dhs' },
      { name: 'Egg Bhujuri (Half / Full)', price: '3/5 Dhs' },
      { name: 'Plain Omelette (Half / Full)', price: '2/4 Dhs' },
      { name: 'Masala Omelette (Half / Full)', price: '3/5 Dhs' },
    ],
  },
  {
    category: 'SADEKO ITEMS',
    items: [
      { name: 'Sukuti Sadeko (S/M/L)', price: '10/18/30 Dhs' },
      { name: 'Chatpate (Half / Full)', price: '5/10 Dhs' },
      { name: 'Bhatmas Sadeko (Half / Full)', price: '5/10 Dhs' },
      { name: 'Chana Sadeko (Half / Full)', price: '4/8 Dhs' },
      { name: 'Waiwai Sadeko', price: '7 Dhs' },
      { name: 'Bhatmas + Waiwai Sadeko', price: '10 Dhs' },
    ],
  },
  {
    category: 'VEGETABLES',
    items: [
      { name: 'Karela Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Cauliflower Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Mushroom Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Broccoli Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Vindi Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Beans Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Rajma Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Chana Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Saag Green (Half/Full)', price: '3/5 Dhs' },
      { name: 'Paneer Masala (Half / Full)', price: '6/10 Dhs' },
      { name: 'Palak Paneer (Half / Full)', price: '6/10 Dhs' },
    ],
  },
  {
    category: 'NON-VEG',
    items: [
      { name: 'Chicken Chilly (Regular / Large)', price: '10/20 Dhs' },
      { name: 'Chicken Fry', price: '5/10/15 Dhs' },
      { name: 'Chicken Masala (Half / Full)', price: '5/10 Dhs' },
      { name: 'Chicken Choila', price: '5/10/15 Dhs' },
      { name: 'Chicken with Jhol', price: '3/5 Dhs' },
      { name: 'Chicken Lollipop Regular', price: '13 Dhs' },
      { name: 'Chicken Drumsticks Regular', price: '12 Dhs' },
      { name: 'Gizzard + Liver', price: '5/10/15 Dhs' },
      { name: 'Local Chicken', price: '9/15 Dhs' },
      { name: 'Local Mutton', price: '10/18 Dhs' },
      { name: 'Sukuti - Buff', price: '10/18/30 Dhs' },
      { name: 'Paya', price: '10/18 Dhs' },
      { name: 'Bhutan', price: '10/17/30 Dhs' },
      { name: 'Fish', price: '5/10 Dhs' },
      { name: 'Sausage', price: '5/10 Dhs' },
    ],
  },
  {
    category: 'BREAKFAST',
    items: [
      { name: 'Chapatti', price: '1 Dhs' },
      { name: 'Plain Paratha', price: '2 Dhs' },
      { name: 'Alu Paratha', price: '3 Dhs' },
      { name: 'Puri Tarkari', price: '5 Dhs' },
      { name: 'Chana', price: '5 Dhs' },
      { name: 'Anda', price: '5 Dhs' },
      { name: 'Sell Roti + Tarkari', price: '5 Dhs' },
      { name: 'Omelette Paratha', price: '5 Dhs' },
    ],
  },
  {
    category: 'FRY ITEMS',
    img: fryItemsImg,
    items: [
      { name: 'Egg Fried Rice', price: '10 Dhs' },
      { name: 'Sukuti Fried Rice', price: '13 Dhs' },
      { name: 'Mix Fried Rice', price: '12 Dhs' },
      { name: 'Chicken Triple Rice', price: '14 Dhs' },
      { name: 'Plain Rice', price: '3 Dhs' },
    ],
  },
  {
    category: 'SOUP',
    items: [
      { name: 'Chicken Soup', price: '' },
      { name: 'Veg Soup', price: '' },
    ],
  },
  {
    category: 'DRINKS',
    items: [
      { name: 'Water', price: '1 Dhs' },
      { name: 'Coke / Sprite', price: '3 Dhs' },
      { name: 'Red Bull', price: '8 Dhs' },
      { name: 'Boom Boom', price: '5 Dhs' },
      { name: 'Banana Lassi / Milk Shake', price: '8 Dhs' },
      { name: 'Mango Juice / Watermelon Juice', price: '7 Dhs' },
      { name: 'Orange Juice / Pineapple Juice', price: '8 Dhs' },
    ],
  },
];

// Note: categoryIcons were defined but not used in the current UI design.
// Removed to keep the file clean as categories have changed.

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const activeData = menuData.find(cat => cat.category === activeCategory) || menuData[0];
  
  // Use the category image if available, otherwise fallback to the default thali image
  const currentImage = activeData.img || thaliImg;

  return (
    <div className="menu-page" style={{ backgroundColor: '#050505', minHeight: '100vh', color: '#FFFFFF', paddingTop: '120px' }}>

      {/* Decorative Header */}
      <div className="menu-header-container">
        <div className="menu-header-decorative">
          <div className="header-line">
            <span className="dot"></span>
            <span className="dot"></span>
            <div className="line"></div>
            <span className="dot big"></span>
          </div>
          <h1 className="menu-title">Our Menu</h1>
          <div className="header-line rotate">
            <span className="dot big"></span>
            <div className="line"></div>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Category Navigation */}
        <div className="menu-categories-wrapper">
          <div className="menu-categories">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                className={`category-btn ${activeCategory === cat.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.category)}
              >
                {cat.category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="menu-content-grid">
          {/* Left Column: Menu List */}
          <div className="menu-list-container">
            <div className="section-subtitle">
              Authentic {activeCategory}
            </div>
            
            <div className="menu-items-list">
              {activeData.items.map((item, index) => (
                <div key={`${item.name}-${index}`} className="menu-item-row">
                  <div className="item-name">{item.name.toUpperCase()}</div>
                  {item.price && (
                    <>
                      <div className="leader-line"></div>
                      <div className="item-price">{item.price}</div>
                    </>
                  )}
                </div>
              ))}
            </div>

            <div className="menu-cta">
              <a
                href={`https://wa.me/97145526929?text=${encodeURIComponent(`Hello! I'd like to order from the ${activeCategory} menu.`)}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-order-btn"
              >
                ORDER VIA WHATSAPP <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Featured Image */}
          <div className="menu-image-container">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="featured-image-wrapper"
            >
              <img src={currentImage} alt={activeCategory} className="featured-food-img" />
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .menu-header-container {
          display: flex;
          justify-content: center;
          margin-bottom: 60px;
        }

        .menu-header-decorative {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .header-line {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .header-line.rotate {
          flex-direction: row;
        }

        .line {
          height: 1px;
          width: clamp(100px, 15vw, 250px);
          background: #d1a257;
          opacity: 0.6;
        }

        .dot {
          width: 4px;
          height: 4px;
          background: #d1a257;
          border-radius: 50%;
        }

        .dot.big {
          width: 6px;
          height: 6px;
        }

        .menu-title {
          font-family: var(--font-serif);
          font-size: clamp(40px, 6vw, 64px);
          color: #d1a257;
          font-weight: 400;
          margin: 0;
          text-transform: capitalize;
        }

        .menu-categories-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          overflow-x: auto;
          padding: 10px 0;
        }

        .menu-categories {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .category-btn {
          background: transparent;
          border: 1px solid #d1a257;
          color: #d1a257;
          padding: 12px 25px;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 4px;
          white-space: nowrap;
        }

        .category-btn.active {
          background: #d1a257;
          color: #000;
        }

        .category-btn:hover:not(.active) {
          background: rgba(209, 162, 87, 0.1);
        }

        .menu-content-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 80px;
          align-items: flex-start;
          padding-bottom: 100px;
        }

        .section-subtitle {
          font-family: var(--font-serif);
          font-size: 32px;
          color: #d1a257;
          margin-bottom: 40px;
          font-weight: 400;
          text-align: center;
        }

        .section-subtitle.extra-top {
          margin-top: 60px;
        }

        .menu-items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .menu-item-row {
          display: flex;
          align-items: baseline;
          gap: 15px;
        }

        .item-name {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 18px;
          color: #fff;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .leader-line {
          flex-grow: 1;
          height: 1px;
          border-bottom: 2px dotted rgba(209, 162, 87, 0.4);
          transform: translateY(-4px);
        }

        .item-price {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 18px;
          color: #fff;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .menu-image-container {
          position: sticky;
          top: 150px;
        }

        .featured-image-wrapper {
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          aspect-ratio: 1/1;
          max-height: 480px;
        }

        .featured-food-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .menu-cta {
          margin-top: 60px;
          display: flex;
          justify-content: center;
        }

        .whatsapp-order-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background: #d1a257;
          color: #000;
          padding: 16px 40px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 1.5px;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .whatsapp-order-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(209, 162, 87, 0.3);
        }

        @media (max-width: 1024px) {
          .menu-content-grid {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .menu-image-container {
            position: relative;
            top: auto;
            order: -1;
          }

          .featured-image-wrapper {
            aspect-ratio: 16/9;
            max-width: 600px;
            margin: 0 auto;
          }
        }

        @media (max-width: 768px) {
          .header-line .line {
            width: 40px;
          }
          
          .menu-title {
            font-size: 32px;
          }

          .item-name, .item-price {
            font-size: 15px;
          }
          
          .section-subtitle {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuPage;

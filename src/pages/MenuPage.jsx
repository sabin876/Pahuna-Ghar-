import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Utensils, 
  MessageCircle,
  Coffee, 
  Flame, 
  ChefHat, 
  Mountain, 
  Star, 
  Soup, 
  GlassWater, 
  Wheat,
  UtensilsCrossed,
  ArrowRight,
  Egg,
  Salad,
  Drumstick
} from 'lucide-react';
import thaliImg from '../assets/menu_thali.png';
import chowmeinImg from '../assets/Chowmein.webp';
import dhidoImg from '../assets/Dhido set.webp';
import fryItemsImg from '../assets/Fry items.webp';
import nepaliThaliImg from '../assets/Nepali Thali set.webp';
import newariKhajaImg from '../assets/Newari Khaja Tass.webp';
import momoImg from '../assets/momo.webp';
import drinksImg from '../assets/menu_drinks.png';
import soupImg from '../assets/menu_soup.png';
import eggsImg from '../assets/menu_eggs.png';
import vegetablesImg from '../assets/menu_vegetables.png';

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
    img: eggsImg,
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
    img: vegetablesImg,
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
    img: soupImg,
    items: [
      { name: 'Chicken Soup', price: '' },
      { name: 'Veg Soup', price: '' },
    ],
  },
  {
    category: 'DRINKS',
    img: drinksImg,
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

const categoryIcons = {
  'NEPALI THALI SET': <Utensils size={18} />,
  'DHIDO SET': <Mountain size={18} />,
  'MO:MO': <ChefHat size={18} />,
  'CHOWMEIN / THUKPA': <Wheat size={18} />,
  'NEWARI KHAJA / TASS': <UtensilsCrossed size={18} />,
  'EGGS': <Egg size={18} />,
  'SADEKO ITEMS': <Salad size={18} />,
  'VEGETABLES': <Flame size={18} />,
  'NON-VEG': <Drumstick size={18} />,
  'BREAKFAST': <Coffee size={18} />,
  'FRY ITEMS': <Star size={18} />,
  'SOUP': <Soup size={18} />,
  'DRINKS': <GlassWater size={18} />,
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const activeData = menuData.find(cat => cat.category === activeCategory) || menuData[0];
  
  // Use the category image if available, otherwise fallback to the default thali image
  const currentImage = activeData.img || thaliImg;

  return (
    <div className="menu-page" style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a', paddingTop: '120px' }}>

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
                <span className="cat-icon">{categoryIcons[cat.category] || <Utensils size={18} />}</span>
                <span className="cat-label">{cat.category}</span>
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
                  <div className="item-top-row">
                    <div className="item-name">{item.name.toUpperCase()}</div>
                    {item.price && (
                      <>
                        <div className="leader-line"></div>
                        <div className="item-price">{item.price}</div>
                        <motion.a
                          href={`https://wa.me/971555429243?text=${encodeURIComponent(`Hello! I'd like to order: ${item.name}${item.price ? ` (${item.price})` : ''} from the ${activeCategory} menu.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="item-order-btn"
                          title={`Order ${item.name} via WhatsApp`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageCircle size={11} />
                          Order
                        </motion.a>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="menu-cta">
              <motion.a
                href={`https://wa.me/971555429243?text=${encodeURIComponent(`Hello! I'd like to order from the ${activeCategory} menu.`)}`}
                target="_blank"
                rel="noreferrer"
                className="whatsapp-order-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                ORDER VIA WHATSAPP <ArrowRight size={18} />
              </motion.a>
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
          background: #2d6a2d;
          opacity: 0.5;
        }

        .dot {
          width: 4px;
          height: 4px;
          background: #2d6a2d;
          border-radius: 50%;
        }

        .dot.big {
          width: 6px;
          height: 6px;
        }

        .menu-title {
          font-family: var(--font-serif);
          font-size: clamp(40px, 6vw, 64px);
          color: #1e4d1e;
          font-weight: 400;
          margin: 0;
          text-transform: capitalize;
        }

        .menu-categories-wrapper {
          background: #f5f0e8;
          border-radius: 999px;
          display: inline-flex;
          justify-content: center;
          margin: 0 auto 36px auto;
          max-width: 100%;
          overflow-x: auto;
          padding: 8px 10px;
          display: flex;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          scrollbar-width: none;
        }

        .menu-categories-wrapper::-webkit-scrollbar {
          display: none;
        }

        .menu-categories {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .category-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1.5px solid #d0d0d0;
          color: #1a3a1a;
          padding: 10px 20px;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.25s ease;
          border-radius: 999px;
          white-space: nowrap;
        }

        .cat-icon {
          display: flex;
          align-items: center;
          color: #2d6a2d;
          flex-shrink: 0;
        }

        .cat-label {
          text-transform: capitalize;
          font-size: 13px;
        }

        .category-btn.active {
          background: #1e4d1e;
          border-color: #1e4d1e;
          color: #ffffff;
        }

        .category-btn.active .cat-icon {
          color: #ffffff;
        }

        .category-btn:hover:not(.active) {
          background: #f0f7f0;
          border-color: #2d6a2d;
          color: #1a3a1a;
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
          color: #1e4d1e;
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
          flex-direction: column;
          gap: 10px;
          padding: 14px 0;
          border-bottom: 1px solid rgba(0,0,0,0.07);
        }

        .item-top-row {
          display: flex;
          align-items: baseline;
          gap: 12px;
          width: 100%;
        }

        .item-order-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          border: none;
          color: #fff;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.6px;
          text-decoration: none;
          white-space: nowrap;
          flex-shrink: 0;
          transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-transform: uppercase;
          box-shadow: 0 2px 8px rgba(37, 211, 102, 0.35);
          position: relative;
          overflow: hidden;
        }

        .item-order-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%);
          border-radius: 999px;
          pointer-events: none;
        }

        .item-order-btn:hover {
          transform: translateY(-2px) scale(1.04);
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.55);
          background: linear-gradient(135deg, #2de070 0%, #0fa37a 100%);
        }

        .item-order-btn:hover svg {
          animation: iconPulse 0.6s ease infinite alternate;
        }

        @keyframes iconPulse {
          from { transform: scale(1); }
          to   { transform: scale(1.25); }
        }

        .item-name {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 16px;
          color: #1a1a1a;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .leader-line {
          flex-grow: 1;
          height: 1px;
          border-bottom: 2px dotted rgba(45, 106, 45, 0.25);
          transform: translateY(-4px);
        }

        .item-price {
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 18px;
          color: #1e4d1e;
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
          background: #1e4d1e;
          color: #fff;
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
          box-shadow: 0 10px 20px rgba(30, 77, 30, 0.25);
        }

        @media (max-width: 1024px) {
          .menu-content-grid {
            grid-template-columns: 1fr;
            gap: 40px;
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
          .header-line .line { width: 30px; }

          .menu-title { font-size: 28px; }

          .menu-header-container { margin-bottom: 30px; }

          .menu-categories-wrapper {
            border-radius: 16px;
            padding: 10px;
            margin-bottom: 24px;
          }

          .menu-categories {
            display: grid;
            grid-template-columns: 1fr 1fr;
            flex-wrap: unset;
            gap: 8px;
            overflow-x: unset;
            justify-content: unset;
          }

          .category-btn {
            padding: 10px 12px;
            font-size: 12px;
            flex-shrink: unset;
            justify-content: center;
            width: 100%;
          }

          .cat-label { font-size: 12px; }

          .menu-image-container { display: none; }

          .section-subtitle {
            font-size: 20px;
            margin-bottom: 20px;
          }

          .menu-items-list { gap: 10px; }

          .menu-item-row {
            flex-direction: column;
            gap: 0;
            padding: 0;
            border-bottom: none;
            background: #f8faf8;
            border: 1px solid rgba(45, 106, 45, 0.15);
            border-radius: 12px;
            padding: 14px 16px;
          }

          .item-top-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 8px;
            margin-bottom: 10px;
          }

          .item-name {
            font-size: 13px;
            white-space: normal;
            word-break: break-word;
            flex: 1;
          }

          .item-price {
            font-size: 13px;
            font-weight: 700;
            color: #d1a257;
            white-space: nowrap;
            flex-shrink: 0;
          }

          .leader-line { display: none; }

          .item-order-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            width: 100%;
            padding: 10px 0;
            font-size: 12px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
            box-shadow: 0 3px 12px rgba(37, 211, 102, 0.35);
            color: #fff;
          }

          .item-order-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 6px 18px rgba(37, 211, 102, 0.5);
          }

          .menu-cta { margin-top: 30px; }

          .whatsapp-order-btn {
            padding: 14px 28px;
            font-size: 13px;
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuPage;

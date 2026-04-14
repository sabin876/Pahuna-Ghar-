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
  Drumstick,
  Sparkles,
  Beer
} from 'lucide-react';
import thaliImg from '../assets/menu_thali.png';
import dhidoImg from '../assets/Dhido set.webp';
import fryItemsImg from '../assets/Fry items.webp';
import nepaliThaliImg from '../assets/Nepali Thali set.webp';
import newariKhajaImg from '../assets/Newari Khaja Tass.webp';
import drinksImg from '../assets/menu_drinks.png';
import soupImg from '../assets/menu_soup.png';
import eggsImg from '../assets/menu_eggs.png';
import vegetablesImg from '../assets/menu_vegetables.png';

// New Menu Images based on assets
import chickenChowminImg from '../assets/chicken chowmin all .png';
import vegChowminImg from '../assets/veg chowmin.png';
import fryMomoImg from '../assets/fry momo.png';
import steamMomoImg from '../assets/steam momo.png';
import momoPlatterImg from '../assets/momo plater.png';
import thukpaImg from '../assets/thupa.png';
import pakuChiliImg from '../assets/paku chili new 30 aed price.png';
import waterImg from '../assets/water.webp';
import cokeSpriteImg from '../assets/coke Sprite.jpg';
import redBullImg from '../assets/red bull.jpg';
import boomBoomImg from '../assets/Boom Boom.jpg';
import lassiImg from '../assets/Banana Lasi.jpg';

// Newly added menu images
import chickenBiryaniImg from '../assets/chicken biryani.jpg';
import muttonBiryaniImg from '../assets/mutton biryani.jpg';
import vegBiryaniImg from '../assets/veg biryani .jpg';
import eggFryRiceImg from '../assets/egg fry rice.jpg';
import vegFryRiceImg from '../assets/veg fry rice.jpg';
import chickenFriedRiceImg from '../assets/chicken fry rice .jpg';
import andaBhurjiImg from '../assets/anda bhurji1.png';
import buffSukutiImg from '../assets/buff sukuti.jpg';
import chatpateImg from '../assets/chatpate.jpg';
import chickenChoilaImg from '../assets/chicken choila.jpg';
import jholMomoImg from '../assets/jhol momo.jpg';
import panipuriImg from '../assets/panipuri.png';
import puriTarkariImg from '../assets/puri tarkari.png';
import selRotiImg from '../assets/selroti.jpg';
import laphingImg from '../assets/laphing.png';
import chiliMomoImg from '../assets/chili momo.png';
import muttonThakaliImg from '../assets/mutoon thakali.jpg';
import mushroomThakaliImg from '../assets/mushroom thakali.jpg';
import paneerTikkaImg from '../assets/paneer tika.png';
import dalMakhniImg from '../assets/dal makhni.png';

// ESLint workaround: this project’s ESLint config doesn’t count `<motion.* />` usage.
void motion;

// Authentic realistic placeholder images mapped to each item
const menuData = [
  {
    category: 'Thakali Set',
    img: nepaliThaliImg,
    items: [
      { name: 'Veg Set', price: '11 Dhs', itemImg: nepaliThaliImg },
      { name: 'Chicken Set (Normal)', price: '13 Dhs', itemImg: nepaliThaliImg },
      { name: 'Chicken Set (Local)', price: '15 Dhs', itemImg: nepaliThaliImg },
      { name: 'Chicken Choila / Fry / Chilly Set', price: '14 Dhs', itemImg: chickenChoilaImg },
      { name: 'Sausage / Liver / Egg Set', price: '13 Dhs' },
      { name: 'Sukuti Set (Buff)', price: '17 Dhs', itemImg: buffSukutiImg },
      { name: 'Fish Set', price: '14 Dhs' },
      { name: 'Paya Set', price: '15 Dhs' },
      { name: 'Mutton Set', price: '18 Dhs', itemImg: muttonThakaliImg },
      { name: 'Mutton Masala Set', price: '20 Dhs', itemImg: muttonThakaliImg },
      { name: 'Bhutan Set', price: '17 Dhs' },
      { name: 'Thakali Set (Veg/Chicken/Buff/Mutton)', price: '14/16/20/20 Dhs', itemImg: nepaliThaliImg },
    ],
  },
  {
    category: 'Dhido Set',
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
    category: 'Star Momo Special',
    img: momoPlatterImg,
    items: [
      { name: 'Steam Momo Chicken', price: '11 Dhs', itemImg: steamMomoImg },
      { name: 'Steam Momo Buff', price: '12 Dhs', itemImg: steamMomoImg },
      { name: 'Fry Momo (Chicken / Buff)', price: '13 Dhs', itemImg: fryMomoImg },
      { name: 'Jhol Momo (Chicken / Buff)', price: '15 Dhs', itemImg: jholMomoImg },
      { name: 'C-Momo (Chicken / Buff)', price: '15 Dhs', itemImg: chiliMomoImg },
    ],
  },
  {
    category: 'Sekuwa Set',
    img: chickenChowminImg,
    items: [
      { name: 'Chowmein Veg', price: '11 Dhs', itemImg: vegChowminImg },
      { name: 'Chowmein Chicken', price: '13 Dhs', itemImg: chickenChowminImg },
      { name: 'Chowmein Egg', price: '12 Dhs' },
      { name: 'Chowmein Buff', price: '14 Dhs' },
      { name: 'Chowmein Mix', price: '15 Dhs' },
      { name: 'Thukpa Veg', price: '11 Dhs', itemImg: thukpaImg },
      { name: 'Thukpa (Chicken / Egg)', price: '13 Dhs', itemImg: thukpaImg },
      { name: 'Paya Thukpa', price: '15 Dhs', itemImg: thukpaImg },
      { name: 'Thukpa Mix', price: '15 Dhs', itemImg: thukpaImg },
    ],
  },
  {
    category: 'Taas Set',
    img: newariKhajaImg,
    items: [
      { name: 'Newari Khaja Set (Chi/Buff/Mutt)', price: '16/18/20 Dhs', itemImg: newariKhajaImg },
      { name: 'Tass Set (Chi/Buff/Mutt)', price: '16/18/20 Dhs', itemImg: newariKhajaImg },
      { name: 'Combo Set (Chi/Buff/Mutton/Bhutan)', price: '20/25/25/25 Dhs', itemImg: newariKhajaImg },
    ],
  },
  {
    category: 'Chewra Set',
    img: eggsImg,
    items: [
      { name: 'Egg Bhujuri (Half / Full)', price: '3/5 Dhs', itemImg: andaBhurjiImg },
      { name: 'Boiled Egg', price: '1 Dhs' },
      { name: 'Plain Omelette (Half / Full)', price: '2/4 Dhs' },
      { name: 'Masala Omelette (Half / Full)', price: '3/5 Dhs' },
    ],
  },
  {
    category: 'Special Khata',
    items: [
      { name: 'Laphing', price: '10 Dhs', itemImg: laphingImg },
      { name: 'Panipuri', price: '10 Dhs', itemImg: panipuriImg },
      { name: 'Sukuti Sadeko (S/M/L)', price: '10/18/30 Dhs', itemImg: buffSukutiImg },
      { name: 'Chatpate (Half / Full)', price: '5/10 Dhs', itemImg: chatpateImg },
      { name: 'Bhatmas Sadeko (Half / Full)', price: '5/10 Dhs' },
      { name: 'Chana Sadeko (Half / Full)', price: '4/8 Dhs' },
      { name: 'Waiwai Sadeko', price: '7 Dhs' },
      { name: 'Bhatmas + Waiwai Sadeko', price: '10 Dhs' },
    ],
  },
  {
    category: 'Khaja Set',
    img: vegetablesImg,
    items: [
      { name: 'Karela Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Cauliflower Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Mushroom Alu (Half/Full)', price: '3/5 Dhs', itemImg: mushroomThakaliImg },
      { name: 'Broccoli Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Vindi Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Beans Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Rajma Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Chana Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Saag Green (Half/Full)', price: '3/5 Dhs' },
      { name: 'Paneer Masala (Half / Full)', price: '6/10 Dhs', itemImg: paneerTikkaImg },
      { name: 'Palak Paneer (Half / Full)', price: '6/10 Dhs', itemImg: paneerTikkaImg },
    ],
  },
  {
    category: 'Indian Cuisine',
    items: [
      { name: 'Chicken Chilly (Regular / Large)', price: '10/20 Dhs', itemImg: pakuChiliImg },
      { name: 'Chicken Fry', price: '5/10/15 Dhs' },
      { name: 'Chicken Masala (Half / Full)', price: '5/10 Dhs' },
      { name: 'Chicken Choila', price: '5/10/15 Dhs', itemImg: chickenChoilaImg },
      { name: 'Dal Makhni', price: '10 Dhs', itemImg: dalMakhniImg },
      { name: 'Chicken with Jhol', price: '3/5 Dhs' },
      { name: 'Chicken Lollipop Regular', price: '13 Dhs' },
      { name: 'Chicken Drumsticks Regular', price: '12 Dhs' },
      { name: 'Gizzard + Liver', price: '5/10/15 Dhs' },
      { name: 'Local Chicken', price: '9/15 Dhs' },
      { name: 'Local Mutton', price: '10/18 Dhs', itemImg: muttonThakaliImg },
      { name: 'Sukuti - Buff', price: '10/18/30 Dhs', itemImg: buffSukutiImg },
      { name: 'Paya', price: '10/18 Dhs' },
      { name: 'Bhutan', price: '10/17/30 Dhs' },
      { name: 'Fish', price: '5/10 Dhs' },
      { name: 'Sausage', price: '5/10 Dhs' },
    ],
  },
  {
    category: 'Breakfast',
    items: [
      { name: 'Chapatti', price: '1 Dhs' },
      { name: 'Plain Paratha', price: '2 Dhs' },
      { name: 'Alu Paratha', price: '3 Dhs' },
      { name: 'Puri Tarkari', price: '5 Dhs', itemImg: puriTarkariImg },
      { name: 'Chana', price: '5 Dhs' },
      { name: 'Anda', price: '5 Dhs' },
      { name: 'Sell Roti + Tarkari', price: '5 Dhs', itemImg: selRotiImg },
      { name: 'Omelette Paratha', price: '5 Dhs' },
    ],
  },
  {
    category: 'Biryani / Fried Rice',
    img: fryItemsImg,
    items: [
      { name: 'Chicken Biryani', price: '15 Dhs', itemImg: chickenBiryaniImg },
      { name: 'Mutton Biryani', price: '18 Dhs', itemImg: muttonBiryaniImg },
      { name: 'Veg Biryani', price: '12 Dhs', itemImg: vegBiryaniImg },
      { name: 'Egg Fried Rice', price: '10 Dhs', itemImg: eggFryRiceImg },
      { name: 'Veg Fried Rice', price: '11 Dhs', itemImg: vegFryRiceImg },
      { name: 'Chicken Fried Rice', price: '13 Dhs', itemImg: chickenFriedRiceImg },
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
    category: 'Drinks',
    img: drinksImg,
    items: [
      { name: 'Water', price: '1 Dhs', itemImg: waterImg },
      { name: 'Coke / Sprite', price: '3 Dhs', itemImg: cokeSpriteImg },
      { name: 'Red Bull', price: '8 Dhs', itemImg: redBullImg },
      { name: 'Boom Boom', price: '5 Dhs', itemImg: boomBoomImg },
      { name: 'Banana Lassi / Milk Shake', price: '8 Dhs', itemImg: lassiImg },
      { name: 'Mango Juice / Watermelon Juice', price: '7 Dhs' },
      { name: 'Orange Juice / Pineapple Juice', price: '8 Dhs' },
    ],
  },
];

const categoryIcons = {
  'Thakali Set': <Utensils size={18} />,
  'Dhido Set': <Mountain size={18} />,
  'Star Momo Special': <Star size={18} />,
  'Sekuwa Set': <Drumstick size={18} />,
  'Taas Set': <Flame size={18} />,
  'Chewra Set': <Wheat size={18} />,
  'Special Khata': <Sparkles size={18} />,
  'Khaja Set': <ChefHat size={18} />,
  'Indian Cuisine': <UtensilsCrossed size={18} />,
  'Breakfast': <Coffee size={18} />,
  'Biryani / Fried Rice': <Soup size={18} />,
  'SOUP': <Soup size={18} />,
  'Drinks': <GlassWater size={18} />,
};

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const activeData = menuData.find(cat => cat.category === activeCategory) || menuData[0];
  
  // Use the category image if available, otherwise fallback to the default thali image
  const currentCategoryBg = activeData.img || thaliImg;

  return (
    <div className="menu-page" style={{ backgroundColor: '#ffffff', minHeight: '100vh', color: '#1a1a1a', paddingTop: '120px' }}>

      {/* Decorative Header */}
      <div className="menu-header-container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="menu-header-content text-center"
        >
          <span className="menu-subtitle-elegant">AUTHENTIC NEPALESE CUISINE</span>
          <h1 className="menu-title-premium">Explore Our Menu</h1>
          <div className="menu-header-divider">
            <span className="line"></span>
            <Utensils size={18} className="icon" />
            <span className="line"></span>
          </div>
        </motion.div>
      </div>

      <div className="container">
        {/* Category Navigation */}
        <div className="menu-nav-container">
          <div className="menu-categories-pills">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                className={`menu-pill ${activeCategory === cat.category ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.category)}
              >
                <span className="pill-icon">{categoryIcons[cat.category]}</span>
                <span className="pill-text">{cat.category}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="menu-items-grid-v2"
          >
            {activeData.items.map((item, index) => (
              <motion.div 
                key={`${item.name}-${index}`}
                className="dish-card-premium"
                whileHover={{ y: -5 }}
              >
                <div className="dish-image-box">
                  <img src={item.itemImg || currentCategoryBg} alt={item.name} className="dish-img" />
                </div>
                <div className="dish-info-box">
                  <div className="dish-header">
                    <h3 className="dish-name">{item.name}</h3>
                    <div className="dish-price">{item.price}</div>
                  </div>
                  <p className="dish-desc">Prepared with authentic Himalayan spices and fresh ingredients.</p>
                  <div className="dish-actions">
                    <motion.a
                      href={`https://wa.me/971555429243?text=${encodeURIComponent(`Hello! I'd like to order: ${item.name}${item.price ? ` (${item.price})` : ''} from the ${activeCategory} menu.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="order-btn-link"
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle size={14} />
                      Order Now
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="menu-footer-cta">
          <p>Don't see what you're looking for?</p>
          <a 
            href="https://wa.me/971555429243" 
            target="_blank" 
            rel="noreferrer"
            className="full-menu-wa-btn"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>

      <style jsx>{`
        .menu-page {
          background-color: var(--menu-bg-light) !important;
        }

        .menu-header-container {
          padding: 60px 0 40px;
          background: linear-gradient(to bottom, #ffffff, var(--menu-bg-light));
        }

        .menu-subtitle-elegant {
          display: block;
          font-family: var(--font-sans);
          font-size: 14px;
          font-weight: 600;
          color: var(--menu-green-bright);
          letter-spacing: 3px;
          margin-bottom: 12px;
          text-transform: uppercase;
        }

        .menu-title-premium {
          font-family: var(--font-serif);
          font-size: clamp(36px, 5vw, 56px);
          color: var(--menu-green-dark);
          margin-bottom: 24px;
          font-weight: 700;
        }

        .menu-header-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .menu-header-divider .line {
          height: 1px;
          width: 60px;
          background: var(--menu-green-bright);
          opacity: 0.4;
        }

        .menu-header-divider .icon {
          color: var(--menu-green-bright);
        }

        .menu-nav-container {
          margin-bottom: 50px;
          position: sticky;
          top: 100px;
          z-index: 100;
          background: var(--menu-bg-light);
          padding: 10px 0;
        }

        .menu-categories-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          padding: 20px 0;
        }

        .menu-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 24px;
          background: #ffffff;
          border: none;
          border-radius: 50px;
          color: #2D3748;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          white-space: nowrap;
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          letter-spacing: 0.2px;
        }

        .menu-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          color: var(--primary);
        }

        .menu-pill.active {
          background: var(--primary);
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(26, 93, 26, 0.25);
          transform: translateY(-1px);
        }

        .menu-pill.active .pill-icon {
          color: #ffffff;
        }

        .pill-icon {
          display: flex;
          align-items: center;
          color: var(--primary);
          transition: color 0.3s ease;
        }

        .menu-items-grid-v2 {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 30px;
          padding-bottom: 60px;
        }

        .dish-card-premium {
          display: flex;
          background: #ffffff;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(0,0,0,0.03);
        }

        .dish-image-box {
          width: 140px;
          min-width: 140px;
          height: auto;
          overflow: hidden;
        }

        .dish-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .dish-card-premium:hover .dish-img {
          transform: scale(1.1);
        }

        .dish-info-box {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .dish-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
          gap: 10px;
        }

        .dish-name {
          font-family: var(--font-serif);
          font-size: 18px;
          color: var(--menu-green-dark);
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
        }

        .dish-price {
          font-family: var(--font-sans);
          font-size: 16px;
          color: var(--menu-green-bright);
          font-weight: 700;
          white-space: nowrap;
        }

        .dish-desc {
          font-size: 13px;
          color: #666;
          margin-bottom: 18px;
          line-height: 1.5;
          flex-grow: 1;
        }

        .dish-actions {
          margin-top: auto;
        }

        .order-btn-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--menu-green-bright);
          color: #ffffff;
          padding: 8px 18px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .order-btn-link:hover {
          background: var(--menu-green-dark);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(43, 182, 115, 0.3);
        }

        .menu-footer-cta {
          text-align: center;
          margin-top: 40px;
          padding: 40px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03);
          margin-bottom: 100px;
        }

        .menu-footer-cta p {
          font-size: 18px;
          color: var(--menu-green-dark);
          margin-bottom: 20px;
          font-family: var(--font-serif);
        }

        .full-menu-wa-btn {
          display: inline-block;
          background: #25D366;
          color: #fff;
          padding: 15px 35px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .full-menu-wa-btn:hover {
          background: #128C7E;
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .menu-items-grid-v2 {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .dish-card-premium {
            flex-direction: column;
          }

          .dish-image-box {
            width: 100%;
            height: 200px;
          }

          .menu-nav-container {
            top: 70px;
          }

          .menu-pill {
            padding: 10px 18px;
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default MenuPage;

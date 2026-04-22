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
import aluParathaImg from '../assets/Alu Paratha.jpg';
import andaImg from '../assets/Anda.jpg';
import chanaImg from '../assets/Chana.jpg';
import chapattiImg from '../assets/Chapatti.jpg';
import omeletteParathaImg from '../assets/Omelette Paratha.jpg';
import plainParathaImg from '../assets/Plain Paratha.jpg';
import sausageImg from '../assets/Sausage.jpg';
import specialKhajaSetImg from '../assets/Special Khaja set.jpg';
import sekuwaComboImg from '../assets/chicken mutton sekwa combo .png';
import momoChowmeinComboImg from '../assets/momo chowmein combo.jpg';
import mushroomSoupImg from '../assets/mushroom shoup.png';
import muttonKadaiImg from '../assets/mutton kadai .png';
import muttonPakuImg from '../assets/mutton paku.png';
import rotiSetImg from '../assets/roti set.png';
import rotiImg from '../assets/roti.png';
import soupDefaultImg from '../assets/shoup.png';
import specialComboBuffImg from '../assets/special combo buff .jpg';
import specialComboImg from '../assets/special combo.jpg';
import jumboComboImg from '../assets/jumbo combo.jpg';
import tandooriHalfImg from '../assets/tandori chicken half.png';
import tandooriFullImg from '../assets/tandori chicken. fullpng.png';
import thukpaMomoImg from '../assets/thupa momo.png';
import fishImg from '../assets/Fish.jpg';
import chickenDrumsticksImg from '../assets/Chicken Drumsticks Regular.jpg';
import chickenFryImg from '../assets/Chicken Fry.jpg';
import chickenLollipopImg from '../assets/Chicken Lollipop Regular.jpg';
import chickenMasalaImg from '../assets/Chicken Masala.avif';
import chickenWithJholImg from '../assets/Chicken with Jhol.jpg';
import gizzardLiverImg from '../assets/Gizzard + Liver.jpg';
import localChickenImg from '../assets/Local Chicken.jpg';
import localMuttonImg from '../assets/Local Mutton.jpg';
import paneerMasalaImg from '../assets/Paneer Masala.jpg';
import payaImg from '../assets/Paya.jpg';
import beansAluImg from '../assets/Beans Alu.jpg';
import broccoliAluImg from '../assets/Broccoli Alu.jpg';
import cauliflowerAluImg from '../assets/Cauliflower Alu.jpg';
import chanaAluImg from '../assets/Chana Alu.jpg';
import mushroomAluImg from '../assets/Mushroom Alu.jpg';
import palakPaneerImg from '../assets/Palak Paneer.jpg';
import rajmaAluImg from '../assets/Rajma Alu.jpg';
import vindiAluImg from '../assets/Vindi Alu.jpg';
import saagGreenImg from '../assets/saag Green.jpg';
import chowmeinEggImg from '../assets/Chowmein Egg.jpg';
import chowmeinBuffImg from '../assets/Chowmein Buff.jpg';
import chowmeinMixImg from '../assets/Chowmein Mix.jpg';
import waiwaiSadekoImg from '../assets/Waiwai Sadeko.jpg';
import bhatmasWaiwaiSadekoImg from '../assets/Bhatmas + Waiwai Sadeko.jpg';
import payaThukpaImg from '../assets/Paya Thukpa.jpg';
import thukpaChickenEggImg from '../assets/Thukpa (Chicken, Egg).webp';
import chickenSetNormalImg from '../assets/Chicken Set (Normal).jpg';

import chickenSetLocalImg from '../assets/Chicken Set (Local).jpg';
import muttonDhidoSetImg from '../assets/Thakali Dhido   Mutton Curry.jpg';
import bhutanSetImg from '../assets/Bhutan Set.png';
import chanaAndaImg from '../assets/chana anda.png';
import rollImg from '../assets/roll.png';
import teelJholMomoImg from '../assets/teel jhol momo.jpg';



// ESLint workaround: this project’s ESLint config doesn’t count `<motion.* />` usage.
void motion;

// Authentic realistic placeholder images mapped to each item
const menuData = [
  {
    category: 'Thakali Set',
    img: nepaliThaliImg,
    items: [
      { name: 'Veg Set', price: '11 Dhs', itemImg: nepaliThaliImg, desc: 'A healthy assortment of lentils, spinach, vegetable curry, and pickles served with steamed rice.' },
      { name: 'Chicken Set (Normal)', price: '13 Dhs', itemImg: chickenSetNormalImg, desc: 'Authentic Nepalese chicken curry served with dal, rice, and traditional side dishes.' },
      { name: 'Chicken Set (Local)', price: '15 Dhs', itemImg: chickenSetLocalImg, desc: 'Flavorful local chicken prepared with traditional mountain spices for an authentic taste.' },
      { name: 'Chicken Choila / Fry / Chilly Set', price: '14 Dhs', itemImg: chickenChoilaImg, desc: 'Your choice of spicy grilled or fried chicken served in a complete thali set.' },
      { name: 'Sausage / Liver / Egg Set', price: '13 Dhs', itemImg: sausageImg, desc: 'A protein-rich set featuring savory sausages, liver, or eggs cooked in Nepalese style.' },
      { name: 'Sukuti Set (Buff)', price: '17 Dhs', itemImg: buffSukutiImg, desc: 'Dried and spiced buffalo meat sauteed to perfection, served with a full rice set.' },
      { name: 'Fish Set', price: '14 Dhs', itemImg: fishImg, desc: 'Traditional river fish curry prepared with a unique blend of coastal and mountain spices.' },
      { name: 'Paya Set', price: '15 Dhs', itemImg: payaImg, desc: 'Slow-cooked trotter soup rich in collagen and flavor, served with steamed rice.' },
      { name: 'Mutton Set', price: '18 Dhs', itemImg: muttonThakaliImg, desc: 'Tender mutton cooked in a rich, aromatic gravy, served with a traditional Thakali set.' },
      { name: 'Mutton Masala Set', price: '20 Dhs', itemImg: muttonThakaliImg, desc: 'A premium mutton dish cooked with extra spices for a bold and spicy flavor profile.' },
      { name: 'Bhutan Set', price: '17 Dhs', itemImg: bhutanSetImg, desc: 'A traditional spicy offal dish prepared with Himalayan herbs and spices.' },
      { name: 'Thakali Set (Veg/Chicken/Buff/Mutton)', price: '14/16/20/20 Dhs', itemImg: nepaliThaliImg, desc: 'The signature Pahuna Ghar multi-course platter with your choice of protein.' },
    ],
  },
  {
    category: 'Dhido Set',
    img: dhidoImg,
    items: [
      { name: 'Mutton Dhido Set', price: '18 Dhs', itemImg: muttonDhidoSetImg, desc: 'Stone-ground buckwheat porridge served with rich mutton curry and traditional sides.' },
      { name: 'Mutton Masala Dhido Set', price: '20 Dhs', itemImg: muttonDhidoSetImg, desc: 'Spiced mutton masala served with healthy and nutritious Nepalese dhido.' },
      { name: 'Chicken Dhido Set', price: '16 Dhs', itemImg: localChickenImg, desc: 'Classic chicken curry paired with traditional steamed buckwheat or millet porridge.' },
      { name: 'Local Chicken Dhido Set', price: '18 Dhs', itemImg: localChickenImg, desc: 'Authentic local chicken flavor served with the traditional Himalayan staple, dhido.' },
      { name: 'Sukuti Dhido Set', price: '17 Dhs', itemImg: buffSukutiImg, desc: 'A savory combination of dried spiced meat and nutritious stone-ground porridge.' },
      { name: 'Veg Dhido Set', price: '14 Dhs', itemImg: dhidoImg, desc: 'A healthy and simple vegetarian version of the traditional Nepalese dhido set.' },
      { name: 'Paya Dhido Set', price: '15 Dhs', itemImg: payaImg, desc: 'Rich and flavorful trotter soup served with fresh, warm Nepalese dhido.' },
    ],
  },
  {
    category: 'MO:MO',
    img: momoPlatterImg,
    items: [
      { name: 'Steam Momo Chicken', price: '11 Dhs', itemImg: steamMomoImg, desc: 'Tender chicken dumplings steamed to perfection, served with spicy tomato chutney.' },
      { name: 'Steam Momo Buff', price: '12 Dhs', itemImg: steamMomoImg, desc: 'Juicy buffalo meat dumplings steamed with traditional spices and herbs.' },
      { name: 'Fry Momo (Chicken / Buff)', price: '13 Dhs', itemImg: fryMomoImg, desc: 'Golden-fried dumplings with a crispy exterior and a juicy meat filling.' },
      { name: 'Jhol Momo (Chicken / Buff)', price: '15 Dhs', itemImg: teelJholMomoImg, desc: 'Steam-cooked dumplings served in a rich, spicy, and tangy sesame-based soup.' },
      { name: 'C-Momo (Chicken / Buff)', price: '15 Dhs', itemImg: chiliMomoImg, desc: 'Wok-tossed dumplings in a spicy chili sauce with onions, peppers, and green chilies.' },
      { name: 'Thukpa Momo (Chicken / Buff)', price: '16 Dhs', itemImg: thukpaMomoImg, desc: 'A comforting combination of meat dumplings and noodle soup with Himalayan herbs.' },
    ],
  },
  {
    category: 'Chowmein/Thukpa',
    img: chickenChowminImg,
    items: [
      { name: 'Chowmein Veg', price: '11 Dhs', itemImg: vegChowminImg },
      { name: 'Chowmein Chicken', price: '13 Dhs', itemImg: chickenChowminImg },
      { name: 'Chowmein Egg', price: '12 Dhs', itemImg: chowmeinEggImg },
      { name: 'Chowmein Buff', price: '14 Dhs', itemImg: chowmeinBuffImg },
      { name: 'Chowmein Mix', price: '15 Dhs', itemImg: chowmeinMixImg },
      { name: 'Thukpa Veg', price: '11 Dhs', itemImg: thukpaImg },
      { name: 'Thukpa (Chicken / Egg)', price: '13 Dhs', itemImg: thukpaChickenEggImg },
      { name: 'Paya Thukpa', price: '15 Dhs', itemImg: payaThukpaImg },
      { name: 'Thukpa Mix', price: '15 Dhs', itemImg: thukpaImg },

      { name: 'Momo & Chowmein Combo', price: '17 Dhs', itemImg: momoChowmeinComboImg },
      { name: 'Chicken & Mutton Sekuwa Combo', price: '25 Dhs', itemImg: sekuwaComboImg },
    ],
  },
  {
    category: 'Newari Khaja/Tass',
    img: newariKhajaImg,
    items: [
      { name: 'Newari Khaja Set (Chi/Buff/Mutt)', price: '16/18/20 Dhs', itemImg: newariKhajaImg },
      { name: 'Tass Set (Chi/Buff/Mutt)', price: '16/18/20 Dhs', itemImg: newariKhajaImg },
      { name: 'Combo Set (Chi/Buff/Mutton/Bhutan)', price: '20/25/25/25 Dhs', itemImg: newariKhajaImg },
    ],
  },
  {
    category: 'Egg',
    img: eggsImg,
    items: [
      { name: 'Egg Bhujuri (Half / Full)', price: '3/5 Dhs', itemImg: andaBhurjiImg },
      { name: 'Boiled Egg', price: '1 Dhs', itemImg: andaImg },
      { name: 'Plain Omelette (Half / Full)', price: '2/4 Dhs' },
      { name: 'Masala Omelette (Half / Full)', price: '3/5 Dhs' },
    ],
  },
  {
    category: 'Sadeko Items',
    img: specialKhajaSetImg,
    items: [
      { name: 'Sukuti Sadeko (S/M/L)', price: '10/18/30 Dhs', itemImg: buffSukutiImg, desc: 'Traditional dried meat salad with onions, green chilies, and roasted spices.' },
      { name: 'Chatpate (Half / Full)', price: '5/10 Dhs', itemImg: chatpateImg, desc: 'A popular street snack made with puffed rice, noodles, and a mix of spicy ingredients.' },
      { name: 'Bhatmas Sadeko (Half / Full)', price: '5/10 Dhs', itemImg: bhatmasWaiwaiSadekoImg, desc: 'Crunchy roasted soybeans tossed with ginger, garlic, and fresh citrus.' },
      { name: 'Chana Sadeko (Half / Full)', price: '4/8 Dhs', itemImg: chanaImg, desc: 'Spiced chickpeas salad with fresh herbs and authentic Nepalese seasonings.' },
      { name: 'Waiwai Sadeko', price: '7 Dhs', itemImg: waiwaiSadekoImg, desc: 'The classic Nepalese instant noodle snack, spiced and served dry as a savory salad.' },
      { name: 'Bhatmas + Waiwai Sadeko', price: '10 Dhs', itemImg: bhatmasWaiwaiSadekoImg, desc: 'A powerhouse combination of crunchy soybeans and spiced instant noodles.' },
    ],
  },
  {
    category: 'Vegetables',
    img: vegetablesImg,
    items: [
      { name: 'Karela Alu (Half/Full)', price: '3/5 Dhs' },
      { name: 'Cauliflower Alu (Half/Full)', price: '3/5 Dhs', itemImg: cauliflowerAluImg },
      { name: 'Mushroom Alu (Half/Full)', price: '3/5 Dhs', itemImg: mushroomAluImg },
      { name: 'Broccoli Alu (Half/Full)', price: '3/5 Dhs', itemImg: broccoliAluImg },
      { name: 'Vindi Alu (Half/Full)', price: '3/5 Dhs', itemImg: vindiAluImg },
      { name: 'Beans Alu (Half/Full)', price: '3/5 Dhs', itemImg: beansAluImg },
      { name: 'Rajma Alu (Half/Full)', price: '3/5 Dhs', itemImg: rajmaAluImg },
      { name: 'Chana Alu (Half/Full)', price: '3/5 Dhs', itemImg: chanaAluImg },
      { name: 'Saag Green (Half/Full)', price: '3/5 Dhs', itemImg: saagGreenImg },
      { name: 'Paneer Masala (Half / Full)', price: '6/10 Dhs', itemImg: paneerMasalaImg },
      { name: 'Palak Paneer (Half / Full)', price: '6/10 Dhs', itemImg: palakPaneerImg },
    ],
  },
  {
    category: 'Indian Cuisine',
    items: [
      { name: 'Chicken Chilly (Regular / Large)', price: '10/20 Dhs', itemImg: pakuChiliImg, desc: 'Wok-tossed chicken chunks in a spicy and savory chili glaze.' },
      { name: 'Chicken Fry', price: '5/10/15 Dhs', itemImg: chickenFryImg, desc: 'Crispy and marinated fried chicken pieces with traditional seasoning.' },
      { name: 'Chicken Masala (Half / Full)', price: '5/10 Dhs', itemImg: chickenMasalaImg, desc: 'Tender chicken cooked in a rich and creamy spiced tomato-based gravy.' },
      { name: 'Chicken Choila', price: '5/10/15 Dhs', itemImg: chickenChoilaImg, desc: 'Spiced and grilled chicken salad, a staple of Newari cuisine.' },
      { name: 'Dal Makhni', price: '10 Dhs', itemImg: dalMakhniImg, desc: 'Slow-cooked black lentils and kidney beans in a creamy, buttery sauce.' },
      { name: 'Chicken/Veg Roll', price: '6 Dhs', itemImg: rollImg, desc: 'Savory filling wrapped in a soft paratha, perfect for a quick snack.' },
      { name: 'Chicken with Jhol', price: '3/5 Dhs', itemImg: chickenWithJholImg, desc: 'Spiced chicken served in a traditional and flavorful thin soup base.' },
      { name: 'Chicken Lollipop Regular', price: '13 Dhs', itemImg: chickenLollipopImg, desc: 'Succulent chicken wings shaped like lollipops and fried to golden perfection.' },
      { name: 'Chicken Drumsticks Regular', price: '12 Dhs', itemImg: chickenDrumsticksImg, desc: 'Marinated and fried drumsticks with a crispy, flavorful coating.' },
      { name: 'Gizzard + Liver', price: '5/10/15 Dhs', itemImg: gizzardLiverImg, desc: 'Authentically spiced gizzard and liver sauteed with onions and herbs.' },
      { name: 'Local Chicken', price: '9/15 Dhs', itemImg: localChickenImg, desc: 'Traditional local chicken curry with bone-in depth of flavor.' },
      { name: 'Local Mutton', price: '10/18 Dhs', itemImg: localMuttonImg, desc: 'Rich and hearty mutton curry prepared in authentic village style.' },
      { name: 'Mutton Kadai', price: '20 Dhs', itemImg: muttonKadaiImg, desc: 'Mutton cooked with bell peppers and tomatoes in a heavy iron wok.' },
      { name: 'Mutton Paku', price: '25 Dhs', itemImg: muttonPakuImg, desc: 'Slow-cooked spiced mutton chunks, rich in flavor and tradition.' },
      { name: 'Tandoori Chicken (Half)', price: '15 Dhs', itemImg: tandooriHalfImg, desc: 'Traditional tandoor-roasted chicken with smoky aromatic spices.' },
      { name: 'Tandoori Chicken (Full)', price: '28 Dhs', itemImg: tandooriFullImg, desc: 'A full chicken marinated and roasted to perfection in the clay oven.' },
      { name: 'Sukuti - Buff', price: '10/18/30 Dhs', itemImg: buffSukutiImg, desc: 'Legendary spiced dried buffalo meat, a favorite Nepalese delicacy.' },
      { name: 'Paya', price: '10/18 Dhs', itemImg: payaImg, desc: 'Traditional trotter soup, rich, nutritious, and full of flavor.' },
      { name: 'Bhutan', price: '10/17/30 Dhs', itemImg: bhutanSetImg, desc: 'Spiced and sauteed organs, a traditional delicacy with bold flavors.' },
      { name: 'Fish', price: '5/10 Dhs', itemImg: fishImg, desc: 'Fresh fish marinated and fried with a crispy, spicy crust.' },
      { name: 'Sausage', price: '5/10 Dhs', itemImg: sausageImg, desc: 'Spiced and grilled sausages with a flavorful Nepalese twist.' },
    ],
  },
  {
    category: 'Breakfast',
    items: [
      { name: 'Chapatti', price: '1 Dhs', itemImg: chapattiImg, desc: 'Freshly made whole wheat flatbread, soft and light, perfect with any curry.' },
      { name: 'Plain Paratha', price: '2 Dhs', itemImg: plainParathaImg, desc: 'Layered and flaky pan-fried flatbread made with premium flour.' },
      { name: 'Alu Paratha', price: '3 Dhs', itemImg: aluParathaImg, desc: 'Spiced mashed potato stuffed flatbread, served hot and crispy.' },
      { name: 'Puri Tarkari', price: '5 Dhs', itemImg: puriTarkariImg, desc: 'Deep-fried puffed bread served with a savory and spicy vegetable curry.' },
      { name: 'Chana', price: '5 Dhs', itemImg: chanaImg, desc: 'Flavorful chickpeas cooked in a traditional Nepalese gravy.' },
      { name: 'Anda', price: '5 Dhs', itemImg: andaImg, desc: 'Standard boiled or fried eggs prepared to your liking.' },
      { name: 'Chana Anda', price: '7 Dhs', itemImg: chanaAndaImg, desc: 'A classic breakfast duo of spiced chickpeas and perfectly cooked eggs.' },
      { name: 'Sell Roti + Tarkari', price: '5 Dhs', itemImg: selRotiImg, desc: 'Traditional ring-shaped sweet rice bread served with vegetable curry.' },
      { name: 'Omelette Paratha', price: '5 Dhs', itemImg: omeletteParathaImg, desc: 'Fluffy omelette paired with a crispy, buttery paratha.' },
    ],
  },
  {
    category: 'Biryani / Fried Rice',
    img: fryItemsImg,
    items: [
      { name: 'Chicken Biryani', price: '15 Dhs', itemImg: chickenBiryaniImg, desc: 'Aromatic layered basmati rice and tender chicken cooked with exotic Himalayan spices.' },
      { name: 'Mutton Biryani', price: '18 Dhs', itemImg: muttonBiryaniImg, desc: 'Fragrant and spicy mutton biryani prepared with premium rice and rich mutton gravy.' },
      { name: 'Veg Biryani', price: '12 Dhs', itemImg: vegBiryaniImg, desc: 'A flavorful vegetarian delight with fresh seasonal vegetables and aromatic basmati rice.' },
      { name: 'Egg Fried Rice', price: '12 Dhs', itemImg: eggFryRiceImg, desc: 'Wholesome stir-fried rice with fluffy eggs, vegetables, and savory seasonings.' },
      { name: 'Veg Fried Rice', price: '10 Dhs', itemImg: vegFryRiceImg, desc: 'Freshly tossed fried rice with a variety of seasonal vegetables and light spices.' },
      { name: 'Chicken Fried Rice', price: '13 Dhs', itemImg: chickenFriedRiceImg, desc: 'Savory stir-fried rice with tender chicken pieces and vibrant vegetables.' },
      { name: 'Sukuti Fried Rice', price: '14 Dhs', itemImg: fryItemsImg, desc: 'A unique combination of crispy spiced dried meat and flavorful fried rice.' },
      { name: 'Mix Fried Rice', price: '15 Dhs', itemImg: fryItemsImg, desc: 'The ultimate fried rice ensemble with chicken, egg, and fresh vegetables.' },
      { name: 'Chicken Triple Rice', price: '16 Dhs', itemImg: fryItemsImg, desc: 'A hearty meal featuring three styles of flavorful rice served with chicken gravy.' },
      { name: 'Plain Rice', price: '3 Dhs', desc: 'Perfectly steamed fluffy long-grain rice, the ideal accompaniment to any curry.' },
    ],
  },
  {
    category: 'SOUP',
    img: soupImg,
    items: [
      { name: 'Chicken Soup', price: '10 Dhs', itemImg: soupDefaultImg, desc: 'Hearty and clear chicken broth with tender pieces and mountain herbs.' },
      { name: 'Veg Soup', price: '8 Dhs', itemImg: soupDefaultImg, desc: 'A light and healthy soup made with a medley of fresh seasonal vegetables.' },
      { name: 'Mushroom Soup', price: '12 Dhs', itemImg: mushroomSoupImg, desc: 'Creamy and earthy soup featuring fresh mushrooms and aromatic seasonings.' },
    ],
  },
  {
    category: 'Drinks',
    img: drinksImg,
    items: [
      { name: 'Water', price: '1 Dhs', itemImg: waterImg, desc: 'Pure and refreshing bottled mineral water.' },
      { name: 'Coke / Sprite', price: '3 Dhs', itemImg: cokeSpriteImg, desc: 'Chilled carbonated soft drinks to complement your meal.' },
      { name: 'Red Bull', price: '8 Dhs', itemImg: redBullImg, desc: 'Vitalizes body and mind - perfect for an energy boost.' },
      { name: 'Boom Boom', price: '5 Dhs', itemImg: boomBoomImg, desc: 'A sweet and refreshing energy beverage.' },
      { name: 'Banana Lassi / Milk Shake', price: '8 Dhs', itemImg: lassiImg, desc: 'Creamy and smooth traditional yogurt-based or milk-based fruit drink.' },
      { name: 'Mango Juice / Watermelon Juice', price: '7 Dhs', itemImg: drinksImg, desc: 'Freshly extracted fruit juices, bursting with natural sweetness.' },
      { name: 'Orange Juice / Pineapple Juice', price: '8 Dhs', itemImg: drinksImg, desc: 'Cooling and vitamin-rich fresh fruit juices to refresh your palate.' },
    ],
  },
];

const categoryIcons = {
  'Thakali Set': <Utensils size={18} />,
  'Dhido Set': <Mountain size={18} />,
  'MO:MO': <Star size={18} />,
  'Chowmein/Thukpa': <Drumstick size={18} />,
  'Newari Khaja/Tass': <Flame size={18} />,
  'Egg': <Egg size={18} />,
  'Sadeko Items': <Sparkles size={18} />,
  'Vegetables': <Salad size={18} />,
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
                  <p className="dish-desc">
                    {item.desc || `An authentic ${activeCategory.toLowerCase()} dish prepared with traditional Himalayan spices and fresh ingredients.`}
                  </p>
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

        .menu-nav-container::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 40px;
          height: 100%;
          background: linear-gradient(to left, var(--menu-bg-light), transparent);
          pointer-events: none;
          z-index: 101;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .menu-categories-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: center;
          padding: 20px 0;
        }

        /* Scrollbar Hide Utility */
        .menu-categories-pills::-webkit-scrollbar {
          display: none;
        }
        .menu-categories-pills {
          -ms-overflow-style: none;
          scrollbar-width: none;
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
          width: auto;
        }

        .menu-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0,0,0,0.1);
          color: var(--primary);
        }

        .menu-pill.active {
          background: var(--primary) !important;
          color: #ffffff !important;
          box-shadow: 0 8px 20px rgba(26, 93, 26, 0.25);
          transform: translateY(-1px);
        }

        .menu-pill.active .pill-icon {
          color: #ffffff !important;
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
          background: rgba(43, 182, 115, 0.08);
          padding: 4px 10px;
          border-radius: 6px;
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
          .menu-header-container {
            padding: 40px 0 20px;
          }

          .menu-title-premium {
            font-size: clamp(28px, 8vw, 36px);
            margin-bottom: 12px;
            padding: 0 15px;
            line-height: 1.2;
          }

          .menu-items-grid-v2 {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 0 10px 60px;
          }

          .dish-card-premium {
            flex-direction: column;
          }

          .dish-image-box {
            width: 100%;
            height: 220px;
          }

          .menu-nav-container {
            top: 65px; /* Adjusted to better align with sticky navbar */
            margin-bottom: 30px;
            padding: 15px 0;
            background: #ffffff;
            box-shadow: 0 4px 12px rgba(0,0,0,0.08); /* More refined shadow */
            width: 100%;
            position: sticky;
            z-index: 100;
          }

          .menu-nav-container::after {
            display: none; /* Removed the gradient indicator as scrolling is no longer used */
          }

          .menu-categories-pills {
            display: flex;
            flex-wrap: wrap; /* Allow pills to wrap into multiple rows */
            gap: 10px;
            padding: 0 15px;
            justify-content: center; /* Center the wrapped items */
          }

          .menu-pill {
            padding: 8px 16px !important;
            font-size: 12px !important;
            flex-shrink: 0;
            white-space: nowrap;
            text-align: center;
            justify-content: center;
            height: auto;
            border-radius: 50px; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            background: #f8f9fa; /* Slightly off-white for better contrast */
          }
          
          .pill-icon {
            flex-shrink: 0;
            transform: scale(0.9); /* Scale down icons slightly for mobile */
          }

          .dish-info-box {
            padding: 16px;
          }

          .dish-name {
            font-size: 17px;
          }

          .dish-price {
            font-size: 15px;
          }
        }

      `}</style>
    </div>
  );
};

export default MenuPage;

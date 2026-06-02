import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../Components/ProductCard';
import './Category.css';

// Localized Database using Indian Rupees (INR)
export const PRODUCT_DATABASE = [
  // ==========================================
  // --- MEN'S COLLECTION (32 Items) ---
  // ==========================================
  { id: 101, name: 'Vintage Casual Denim Jacket', price: 3499, category: 'men', img: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?q=80&w=400' },
  { id: 102, name: 'Slim Fit Textured Cotton Shirt', price: 1899, category: 'men', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=400' },
  { id: 103, name: 'Premium Tailored Charcoal Suit', price: 12999, category: 'men', img: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=400' },
  { id: 104, name: 'Off-White Designer Festival Kurta', price: 2499, category: 'men', img: 'https://images.unsplash.com/photo-1608748010899-18f300247112?q=80&w=400' },
  { id: 105, name: 'Urban Waterproof Bomber Jacket', price: 4299, category: 'men', img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=400' },
  { id: 106, name: 'Classic Charcoal Crewneck Sweater', price: 2199, category: 'men', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=400' },
  { id: 107, name: 'Relaxed Fit Linen Resort Trousers', price: 2799, category: 'men', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=400' },
  { id: 108, name: 'Midnight Black Premium Street Hoodie', price: 3199, category: 'men', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=400' },
  { id: 109, name: 'Smart Casual Olive Chino Shorts', price: 1599, category: 'men', img: 'https://images.unsplash.com/photo-1565041718-138250083567?q=80&w=400' },
  { id: 110, name: 'Suede Camel Chesterfield Overcoat', price: 9499, category: 'men', img: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?q=80&w=400' },
  { id: 111, name: 'Monochrome Athletic Gym Stringer', price: 899, category: 'men', img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=400' },
  { id: 112, name: 'Biker Distressed Leather Jacket', price: 7999, category: 'men', img: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=400' },
  { id: 113, name: 'Burgundy Luxury Velvet Bandhgala', price: 11499, category: 'men', img: 'https://images.unsplash.com/photo-1593030103066-0093718efeb9?q=80&w=400' },
  { id: 114, name: 'Khaki Field Utility Cargo Pants', price: 2499, category: 'men', img: 'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?q=80&w=400' },
  { id: 115, name: 'Breton Striped Nautical Longsleeve', price: 1399, category: 'men', img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=400' },
  { id: 116, name: 'Emerald Green Silk Wedding Sherwani', price: 14999, category: 'men', img: 'https://images.unsplash.com/photo-1598112972982-f54f2482ff5f?q=80&w=400' },
  { id: 117, name: 'Minimalist Sand Knit Cardigan', price: 3299, category: 'men', img: 'https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?q=80&w=400' },
  { id: 118, name: 'Graphite Tech-Stretch Joggers', price: 1999, category: 'men', img: 'https://images.unsplash.com/photo-1551854838-212c50b4c184?q=80&w=400' },
  { id: 119, name: 'Classic White Pique Polo Shirt', price: 1299, category: 'men', img: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?q=80&w=400' },
  { id: 120, name: 'Washed Sage Corduroy Shacket', price: 2999, category: 'men', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=400' },
  { id: 121, name: 'Acid-Wash Heavyweight Boxy Tee', price: 1199, category: 'men', img: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=400' },
  { id: 122, name: 'Navy Tailored Double-Breasted Blazer', price: 6499, category: 'men', img: 'https://images.unsplash.com/photo-1621531201725-d716cf979707?q=80&w=400' },
  { id: 123, name: 'Crimson Tartan Flannel Button-Down', price: 1799, category: 'men', img: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=400' },
  { id: 124, name: 'Light Wash Tapered Crop Jeans', price: 2299, category: 'men', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400' },
  { id: 125, name: 'All-Weather Charcoal Windbreaker', price: 3799, category: 'men', img: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?q=80&w=400' },
  { id: 126, name: 'Traditional Chikankari White Kurta', price: 2100, category: 'men', img: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c93ab?q=80&w=400' },
  { id: 127, name: 'Raw Indigo Selvedge Denim Jeans', price: 4999, category: 'men', img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=400' },
  { id: 128, name: 'Cozy Sherpa-Lined Trucker Vest', price: 3100, category: 'men', img: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=400' },
  { id: 129, name: 'Abstract Geometrical Resort Shirt', price: 1699, category: 'men', img: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=400' },
  { id: 130, name: 'Luxe Merino Wool Turtleneck Sweater', price: 4500, category: 'men', img: 'https://images.unsplash.com/photo-1614975344737-724d2938a0f9?q=80&w=400' },
  { id: 131, name: 'Moisture-Wicking Seamless Training Tee', price: 999, category: 'men', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400' },
  { id: 132, name: 'Double-Pleated Slate Suit Trousers', price: 2599, category: 'men', img: 'https://images.unsplash.com/photo-1505022610485-0249ba5b3675?q=80&w=400' },

  // ==========================================
  // --- WOMEN'S COLLECTION (32 Items) ---
  // ==========================================
  { id: 201, name: 'Elegant Evening Linen Gown', price: 4500, category: 'women', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=400' },
  { id: 202, name: 'Richly Embroidered Royal Lehenga', price: 18500, category: 'women', img: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=400' },
  { id: 203, name: 'Traditional Deep Crimson Silk Saree', price: 8999, category: 'women', img: 'https://images.unsplash.com/photo-1610030469668-93535c17b6b3?q=80&w=400' },
  { id: 204, name: 'Floral Print Festive Wear Dress', price: 2999, category: 'women', img: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=400' },
  { id: 205, name: 'Pastel Mint Oversized Blazer', price: 4999, category: 'women', img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=400' },
  { id: 206, name: 'Boho Summer Cotton Sundress', price: 2499, category: 'women', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400' },
  { id: 207, name: 'Plum Satin Wrap Style Blouse', price: 1999, category: 'women', img: 'https://images.unsplash.com/photo-1548624149-f7b3e64de734?q=80&w=400' },
  { id: 208, name: 'High-Waisted Ivory Wide-Leg Pants', price: 2899, category: 'women', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400' },
  { id: 209, name: 'Hand-Block Printed Indigo Anarkali', price: 3799, category: 'women', img: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=400' },
  { id: 210, name: 'Chic Ribbed Bodycon Midi Dress', price: 2299, category: 'women', img: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=400' },
  { id: 211, name: 'Handspun Khadi Jacket Set', price: 3400, category: 'women', img: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?q=80&w=400' },
  { id: 212, name: 'Luxe Cashmere Cable-Knit Cardigan', price: 6999, category: 'women', img: 'https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=400' },
  { id: 213, name: 'Lavender Tiered Chiffon Maxi Skirt', price: 1899, category: 'women', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=400' },
  { id: 214, name: 'Terracotta Linen Utility Jumpsuit', price: 3200, category: 'women', img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=400' },
  { id: 215, name: 'Asymmetrical Silk Camisole Top', price: 1499, category: 'women', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=400' },
  { id: 216, name: 'Gothic Black Velvet A-Line Gown', price: 7499, category: 'women', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=400' },
  { id: 217, name: 'Sage Green Ribbed Loungewear Co-ord', price: 2799, category: 'women', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400' },
  { id: 218, name: 'Distressed High-Rise Boyfriend Jeans', price: 2599, category: 'women', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=400' },
  { id: 219, name: 'Hand-Woven Banarasi Brocade Dupatta', price: 4200, category: 'women', img: 'https://images.unsplash.com/photo-1583391733971-da08fbe7ea3e?q=80&w=400' },
  { id: 220, name: 'Fuchsia Pink Summer Cotton Kaftan', price: 1699, category: 'women', img: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=400' },
  { id: 221, name: 'Tailored Houndstooth Pencil Skirt', price: 2199, category: 'women', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400' },
  { id: 222, name: 'Canary Yellow Puff-Sleeve Crop Top', price: 1299, category: 'women', img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=400' },
  { id: 223, name: 'Copper Foil Metallic Party Dress', price: 5899, category: 'women', img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=400' },
  { id: 224, name: 'Classic Trench Coat with Tie Belt', price: 8499, category: 'women', img: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=400' },
  { id: 225, name: 'Chikankari Georgette Palazzo Kurti', price: 3100, category: 'women', img: 'https://images.unsplash.com/photo-1609357605129-26f69add5d6e?q=80&w=400' },
  { id: 226, name: 'Active Performance Seamless Leggings', price: 1799, category: 'women', img: 'https://images.unsplash.com/photo-1506152983158-b4a74a01c721?q=80&w=400' },
  { id: 227, name: 'Cream Crochet Knit Resort Kimono', price: 2499, category: 'women', img: 'https://images.unsplash.com/photo-1566207274740-0f8cf6b7d5a5?q=80&w=400' },
  { id: 228, name: 'Teal Blue Silk Sharara Suit Set', price: 9500, category: 'women', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=400' },
  { id: 229, name: 'Oversized Distressed Denim Vest', price: 1999, category: 'women', img: 'https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?q=80&w=400' },
  { id: 230, name: 'Minimalist Oatmeal Linen Shorts', price: 1499, category: 'women', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=400' },
  { id: 231, name: 'Burgundy Pleated Crushed-Velvet Camisole', price: 1350, category: 'women', img: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=400' },
  { id: 232, name: 'Abstract Printed Tiered Midi Skirt', price: 2099, category: 'women', img: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=400' },

  // ==========================================
  // --- KIDS' COLLECTION (32 Items) ---
  // ==========================================
  { id: 301, name: 'Kids Casual Denim Overalls', price: 1499, category: 'kids', img: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=400' },
  { id: 302, name: 'Chunky Knit Playground Jumper', price: 1299, category: 'kids', img: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=400' },
  { id: 303, name: 'Bright Yellow Cotton Rain-Jacket', price: 1799, category: 'kids', img: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=400' },
  { id: 304, name: 'Toddler Floral Summer Romper', price: 999, category: 'kids', img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=400' },
  { id: 305, name: 'Dinosaur Printed Pyjama Set', price: 1199, category: 'kids', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=400' },
  { id: 306, name: 'Miniature Cotton Party Tuxedo', price: 3499, category: 'kids', img: 'https://images.unsplash.com/photo-1611106211090-8f3c79ee8552?q=80&w=400' },
  { id: 307, name: 'Little Princess Tulle Layered Dress', price: 2999, category: 'kids', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=400' },
  { id: 308, name: 'Active Wear Soft Fleece Joggers', price: 1099, category: 'kids', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=400' },
  { id: 309, name: 'Unicorn Sequined Hooded Sweatshirt', price: 1699, category: 'kids', img: 'https://images.unsplash.com/photo-15192383263530-99bdd11df2ea?q=80&w=400' },
  { id: 310, name: 'Checked Cotton Suspenders Chino Set', price: 2299, category: 'kids', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=400' },
  { id: 311, name: 'Baby Organic Cotton Ribbed Onesie', price: 799, category: 'kids', img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=400' },
  { id: 312, name: 'Kids Camouflage Cargo Shorts', price: 1150, category: 'kids', img: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=400' },
  { id: 313, name: 'Bright Orange Waterproof Rainboots', price: 1399, category: 'kids', img: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=400' },
  { id: 314, name: 'Toddler Denim Tiered Pinafore', price: 1499, category: 'kids', img: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=400' },
  { id: 315, name: 'Traditional Dhoti-Kurta Ethnic Suit', price: 2499, category: 'kids', img: 'https://images.unsplash.com/photo-1611106211090-8f3c79ee8552?q=80&w=400' },
  { id: 316, name: 'Kids Striped Breathable Linen Top', price: 999, category: 'kids', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=400' },
  { id: 317, name: 'Gingham Bow-Tie Summer Sundress', price: 1799, category: 'kids', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=400' },
  { id: 318, name: 'High-Top Durable Playground Sneakers', price: 2199, category: 'kids', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=400' },
  { id: 319, name: 'Little Guy Tweed Winter Waistcoat', price: 1899, category: 'kids', img: 'https://images.unsplash.com/photo-1611106211090-8f3c79ee8552?q=80&w=400' },
  { id: 320, name: 'Cozy Sherpa Fleece Zip-Up Vest', price: 1599, category: 'kids', img: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=400' },
  { id: 321, name: 'Space-Rocket Embroidered Cotton Tee', price: 699, category: 'kids', img: 'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=400' },
  { id: 322, name: 'Girls Pastel Silk Lehenga Choli', price: 3999, category: 'kids', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=400' },
  { id: 323, name: 'Soft Velvet Festive Hairband Set', price: 499, category: 'kids', img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=400' },
  { id: 324, name: 'Kids Heavyweight Thermal Baselayer', price: 1299, category: 'kids', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=400' },
  { id: 325, name: 'Chic Corduroy Buttoned Skirt-Alls', price: 1699, category: 'kids', img: 'https://images.unsplash.com/photo-1622296089863-eb7fc530daa8?q=80&w=400' },
  { id: 326, name: 'Cartoon-Patch Soft Cotton Sweatpants', price: 899, category: 'kids', img: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=400' },
  { id: 327, name: 'Infant Anti-Slip Soft Booties', price: 599, category: 'kids', img: 'https://images.unsplash.com/photo-1522771930-78848d9293e8?q=80&w=400' },
  { id: 328, name: 'Sun-Protection Wide Brim Straw Bonnet', price: 799, category: 'kids', img: 'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=400' },
  { id: 329, name: 'Breathable Knit Toddler Socks (5-Pack)', price: 450, category: 'kids', img: 'https://images.unsplash.com/photo-1503919545889-aef636e10ad4?q=80&w=400' },
  { id: 330, name: 'Kids Polarized Active Sunglasses', price: 899, category: 'kids', img: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=400' },
  { id: 331, name: 'Festive Jacquard Silk Boy Kurta', price: 1999, category: 'kids', img: 'https://images.unsplash.com/photo-1611106211090-8f3c79ee8552?q=80&w=400' },
  { id: 332, name: 'Water-Repellent Puffer Snow Suit', price: 4299, category: 'kids', img: 'https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=400' },

  // ==========================================
  // --- ACCESSORIES (32 Items) ---
  // ==========================================
  { id: 401, name: 'Premium Classic Dial Leather Watch', price: 6499, category: 'accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400' },
  { id: 402, name: 'Handcrafted Minimalist Gold Bangle', price: 24500, category: 'accessories', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400' },
  { id: 403, name: 'Polarized Vintage Tortoise Sunglasses', price: 1999, category: 'accessories', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400' },
  { id: 404, name: 'Full-Grain Leather Trifold Wallet', price: 1499, category: 'accessories', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400' },
  { id: 405, name: 'Structured Executive Suede Tote Bag', price: 5499, category: 'accessories', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400' },
  { id: 406, name: 'Sterling Silver Blue Sapphire Ring', price: 7999, category: 'accessories', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400' },
  { id: 407, name: 'Woven Summer Wide-Brim Straw Hat', price: 1299, category: 'accessories', img: 'https://images.unsplash.com/photo-1572421714207-68b31cc714d6?q=80&w=400' },
  { id: 408, name: 'Silk Jacquard Paisley Pattern Tie', price: 1199, category: 'accessories', img: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?q=80&w=400' },
  { id: 409, name: 'Water-Resistant Canvas Tech Backpack', price: 3899, category: 'accessories', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400' },
  { id: 410, name: 'Pure Pashmina Rose-Pink Shawl', price: 11500, category: 'accessories', img: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=400' },
  { id: 411, name: 'Stainless Steel Braided Cable Bracelet', price: 1699, category: 'accessories', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400' },
  { id: 412, name: 'Tooled Tan Western Leather Belt', price: 1899, category: 'accessories', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400' },
  { id: 413, name: 'Chunky Link Chunky Silver Choker', price: 3499, category: 'accessories', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400' },
  { id: 414, name: 'Aviator Gold-Frame Night Driving Glasses', price: 2199, category: 'accessories', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400' },
  { id: 415, name: 'Genuine Pebbled Leather Passport Holder', price: 999, category: 'accessories', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400' },
  { id: 416, name: 'Boho Tassel Fringe Crossbody Bag', price: 2799, category: 'accessories', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400' },
  { id: 417, name: '14k Rose Gold Pearl Drop Earrings', price: 13500, category: 'accessories', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400' },
  { id: 418, name: 'Merino Wool Flat Cap Hat', price: 1499, category: 'accessories', img: 'https://images.unsplash.com/photo-1572421714207-68b31cc714d6?q=80&w=400' },
  { id: 419, name: 'Luxe Enamel Floral Brooch Pin', price: 899, category: 'accessories', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400' },
  { id: 420, name: 'Satin Twill Hair Scarf Ribbon', price: 599, category: 'accessories', img: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=400' },
  { id: 421, name: 'Rugged Canvas Weekend Duffle Bag', price: 4999, category: 'accessories', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400' },
  { id: 422, name: 'Premium Ceramic Minimalist Chronograph', price: 9999, category: 'accessories', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400' },
  { id: 423, name: 'Handcrafted Beaded Ethnic Jutti Clutches', price: 2399, category: 'accessories', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400' },
  { id: 424, name: 'Titanium Sport Sunglasses Wrap-Around', price: 3199, category: 'accessories', img: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=400' },
  { id: 425, name: 'Embossed Crocodile Slim Card Sleeve', price: 799, category: 'accessories', img: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=400' },
  { id: 426, name: 'Chunky Woolen Knit Infinity Scarf', price: 1299, category: 'accessories', img: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=400' },
  { id: 427, name: 'Engraved Cuff Links & Tie Clip Gift Set', price: 1999, category: 'accessories', img: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?q=80&w=400' },
  { id: 428, name: 'Raw Amethyst Crystal Pendant Necklace', price: 2899, category: 'accessories', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400' },
  { id: 429, name: 'Urban Waterproof Hip Pack', price: 1599, category: 'accessories', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400' },
  { id: 430, name: 'Solid Brass Geometric Key Organizer', price: 699, category: 'accessories', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400' },
  { id: 431, name: 'Oversized Felt Fedora Winter Hat', price: 2199, category: 'accessories', img: 'https://images.unsplash.com/photo-1572421714207-68b31cc714d6?q=80&w=400' },
  { id: 432, name: 'Swarovski Element Crystal Hairpins (3-Pack)', price: 1199, category: 'accessories', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400' }
];

function Category({ addToCart }) {
  const { type } = useParams();
  const currentCategory = type ? type.toLowerCase() : '';
  
  const displayProducts = PRODUCT_DATABASE.filter(
    item => item.category === currentCategory
  );

  return (
    <div className="category-page" style={{ padding: '40px 6%' }}>
      <h1 className="category-title" style={{ textAlign: 'center', marginBottom: '30px', fontWeight: '700' }}>
        {currentCategory.toUpperCase()} COLLECTION
      </h1>
      <div className="category-container">
        {displayProducts.length > 0 ? (
          <div className="products-grid-layout" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
            {displayProducts.map(product => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
        ) : (
          <div className="no-items" style={{ textAlign: 'center', padding: '50px' }}>
            <p>Catalog updating. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Category;
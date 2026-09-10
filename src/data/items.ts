export interface StoreItem {
  id: string;
  name: string;
  gujarati: string;
  category: 'yatra' | 'pooja' | 'dryfruits' | 'clothing' | 'groceries' | 'snacks' | 'drinks' | 'care';
  unit: string;
  badge: string;
  wholesaleAvailable: boolean;
  retailAvailable: boolean;
}

export const CATEGORIES = [
  { id: 'all', name: 'All Store Items', gujarati: 'બધી વસ્તુઓ', count: 149 },
  { id: 'yatra', name: 'Palitana Yatra Gear', gujarati: 'યાત્રા સાધનો', icon: 'hiking' },
  { id: 'pooja', name: 'Jain Pooja Upkaran', gujarati: 'જૈન પૂજા સામગ્રી', icon: 'flame' },
  { id: 'dryfruits', name: 'Dry Fruits & Nuts', gujarati: 'સુકા મેવા', icon: 'nut' },
  { id: 'clothing', name: 'White Yatra Clothes', gujarati: 'સફેદ વસ્ત્રો', icon: 'shirt' },
  { id: 'groceries', name: 'Grains, Dals & Flours', gujarati: 'કરિયાણું & લોટ', icon: 'wheat' },
  { id: 'snacks', name: 'Jain Khakhra & Snacks', gujarati: 'ખાખરા & ફરસાણ', icon: 'cookie' },
  { id: 'drinks', name: 'Cold Drinks & Water', gujarati: 'ઠંડા પીણા & પાણી', icon: 'bottle' },
  { id: 'care', name: 'Personal Care & Travel', gujarati: 'પર્સનલ કેર', icon: 'sparkle' },
] as const;

export const STORE_ITEMS: StoreItem[] = [
  {
    "id": "item-1",
    "name": "Almonds (Badam)",
    "gujarati": "બદામ (Badam)",
    "category": "dryfruits",
    "unit": "250g / 500g / 1kg / Bulk Box",
    "badge": "Premium Dry Fruit",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-2",
    "name": "Cashews (Kaju)",
    "gujarati": "કાજુ (Kaju)",
    "category": "dryfruits",
    "unit": "250g / 500g / 1kg / Bulk Box",
    "badge": "Best Seller",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-3",
    "name": "Raisins (Kishmish)",
    "gujarati": "કિસમિસ (Kishmish)",
    "category": "dryfruits",
    "unit": "Pack / Box",
    "badge": "Energy Booster",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-4",
    "name": "Pistachios",
    "gujarati": "પિસ્તા (Pista)",
    "category": "dryfruits",
    "unit": "Pack / 1kg",
    "badge": "Premium Quality",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-5",
    "name": "Walnuts (Akhrot)",
    "gujarati": "અખરોટ (Akhrot)",
    "category": "dryfruits",
    "unit": "Pack / Box",
    "badge": "Healthy Yatra Snack",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-6",
    "name": "Makhana",
    "gujarati": "મખાના (Fox Nuts)",
    "category": "dryfruits",
    "unit": "Pack / Bulk Bag",
    "badge": "Pure Jain Snack",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-7",
    "name": "Dry Coconut",
    "gujarati": "સૂકું કોપરું / વાટી",
    "category": "dryfruits",
    "unit": "Piece / Kg",
    "badge": "Pooja & Prasad",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-8",
    "name": "Coconut",
    "gujarati": "શ્રીફળ / નાળિયેર",
    "category": "pooja",
    "unit": "Piece / Carton",
    "badge": "Pooja Essential",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-9",
    "name": "Chana",
    "gujarati": "દેશી ચણા (Brown Chana)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg Bag",
    "badge": "Wholesale Grocery",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-10",
    "name": "Chaval (Rice)",
    "gujarati": "ચોખા (Rice - Basmati/Wada)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg Bag",
    "badge": "Kitchen Staple",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-11",
    "name": "Supari",
    "gujarati": "સોપારી (Betel Nut)",
    "category": "pooja",
    "unit": "Pack / Kg",
    "badge": "Pooja Samagri",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-12",
    "name": "Mishri",
    "gujarati": "સાકર / મિશ્રી",
    "category": "pooja",
    "unit": "Pack / Kg",
    "badge": "Prasad Sweet",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-13",
    "name": "Kharek",
    "gujarati": "ખારેક (Dry Dates)",
    "category": "dryfruits",
    "unit": "Pack / Kg",
    "badge": "Hill Climbing Energy",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-14",
    "name": "Dates",
    "gujarati": "ખજૂર (Dates)",
    "category": "dryfruits",
    "unit": "Box / Pack",
    "badge": "Instant Energy",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-15",
    "name": "Cloves (Laung)",
    "gujarati": "લવિંગ (Laung)",
    "category": "pooja",
    "unit": "Pack / 100g",
    "badge": "Pooja & Taste",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-16",
    "name": "Cardamom (Elaichi)",
    "gujarati": "લીલી એલચી (Elaichi)",
    "category": "pooja",
    "unit": "Pack / 50g",
    "badge": "Aroma & Prasad",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-17",
    "name": "Kapoor",
    "gujarati": "ભીમસેની કપૂર (Camphor)",
    "category": "pooja",
    "unit": "Pack / Box",
    "badge": "Pure Pooja Item",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-18",
    "name": "Dhoop Sticks",
    "gujarati": "ધૂપ સ્ટીક્સ",
    "category": "pooja",
    "unit": "Box / Wholesale Pack",
    "badge": "Fragrant Incense",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-19",
    "name": "Dhoop Cups",
    "gujarati": "હવન ધૂપ કપ (Sambrani)",
    "category": "pooja",
    "unit": "Box of 12 / Bulk",
    "badge": "Temple Grade",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-20",
    "name": "Agarbatti",
    "gujarati": "અગરબત્તી (Incense)",
    "category": "pooja",
    "unit": "Pack / Wholesale Box",
    "badge": "Devotional Fragrance",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-21",
    "name": "Chandan Powder",
    "gujarati": "ચંદન પાવડર (Sandalwood)",
    "category": "pooja",
    "unit": "Pack / Bottle",
    "badge": "Jain Pooja Tilak",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-22",
    "name": "Kumkum",
    "gujarati": "કંકુ / કુંકુમ",
    "category": "pooja",
    "unit": "Pack",
    "badge": "Shubh Pooja",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-23",
    "name": "Chandla",
    "gujarati": "ચાંદલો / તિલક સામગ્રી",
    "category": "pooja",
    "unit": "Pack",
    "badge": "Traditional",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-24",
    "name": "Kesari",
    "gujarati": "કેસરી / કેસર પાઉડર",
    "category": "pooja",
    "unit": "Bottle / Pack",
    "badge": "Pooja Special",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-25",
    "name": "Cotton Wicks",
    "gujarati": "રૂની વાટ (Round & Long)",
    "category": "pooja",
    "unit": "Pack / Bulk Bag",
    "badge": "Diya Essentials",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-26",
    "name": "Puja Diya",
    "gujarati": "પૂજા દીવો (Mitti/Brass)",
    "category": "pooja",
    "unit": "Piece / Set",
    "badge": "Sacred Lighting",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-27",
    "name": "Ghee Diya",
    "gujarati": "રેડી ઘી દીવા (Ready Diya)",
    "category": "pooja",
    "unit": "Box of 30/60",
    "badge": "Convenient Pooja",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-28",
    "name": "Matchbox",
    "gujarati": "માચીસ (Matches)",
    "category": "pooja",
    "unit": "Pack / Wholesale Bundle",
    "badge": "Daily Need",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-29",
    "name": "Puja Thali",
    "gujarati": "પૂજા થાળી",
    "category": "pooja",
    "unit": "Piece / Set",
    "badge": "Temple Grade",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-30",
    "name": "Puja Bowl Set",
    "gujarati": "પૂજા વાટકી સેટ",
    "category": "pooja",
    "unit": "Set",
    "badge": "Brass / Steel",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-31",
    "name": "Small Lota",
    "gujarati": "નાનો લોટો (Pooja Kalash)",
    "category": "pooja",
    "unit": "Piece",
    "badge": "Jal Arpan",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-32",
    "name": "Kalash",
    "gujarati": "કળશ (Puja Kalash)",
    "category": "pooja",
    "unit": "Piece",
    "badge": "Mangal Kalash",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-33",
    "name": "Jain Dhwaja",
    "gujarati": "જૈન ધ્વજા (Panchrangi)",
    "category": "pooja",
    "unit": "Piece / Bundle",
    "badge": "Jain Flag",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-34",
    "name": "Navkar Mantra Book",
    "gujarati": "નવકાર મંત્ર પોથી",
    "category": "pooja",
    "unit": "Piece",
    "badge": "Jain Religious Book",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-35",
    "name": "Jain Stavan Book",
    "gujarati": "જૈન સ્તવન સંગ્રહ",
    "category": "pooja",
    "unit": "Piece",
    "badge": "Devotional Songs",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-36",
    "name": "Jain Mala",
    "gujarati": "જૈન માળા",
    "category": "pooja",
    "unit": "Piece",
    "badge": "Jaap 108 Beads",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-37",
    "name": "Jap Mala",
    "gujarati": "જાપ માળા (Tulsi/Sandalwood)",
    "category": "pooja",
    "unit": "Piece / Box",
    "badge": "Meditation Mala",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-38",
    "name": "Aasan",
    "gujarati": "પૂજા આસન / બેઠક",
    "category": "pooja",
    "unit": "Piece",
    "badge": "Pure Cotton / Velvet",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-39",
    "name": "Puja Cloth",
    "gujarati": "પૂજાનું કાપડ / લાલ-પીળો પટો",
    "category": "pooja",
    "unit": "Piece / Meter",
    "badge": "Sanctified Cloth",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-40",
    "name": "Jain Symbol Keychain",
    "gujarati": "જૈન પ્રતીક કી-ચેઇન",
    "category": "pooja",
    "unit": "Piece / Souvenir Pack",
    "badge": "Palitana Memorial",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-41",
    "name": "Wooden Walking Stick",
    "gujarati": "લાકડાની વોકિંગ લાકડી",
    "category": "yatra",
    "unit": "Piece / Bundle",
    "badge": "Palitana #1 Must Have",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-42",
    "name": "Bamboo Walking Stick",
    "gujarati": "વાંસની મજબૂત લાકડી",
    "category": "yatra",
    "unit": "Piece / Wholesale",
    "badge": "Lightweight & Strong",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-43",
    "name": "Climbing Support Stick",
    "gujarati": "ક્લાઇમ્બિંગ સપોર્ટ સ્ટીક",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Hill Climbing Gear",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-44",
    "name": "Yatra Bag",
    "gujarati": "યાત્રા જોળી / બેગ",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Comfort Shoulder Bag",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-45",
    "name": "Small Backpack",
    "gujarati": "લાઇટવેઇટ બેકપેક",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Water & Gear Carrier",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-46",
    "name": "Water Bottle",
    "gujarati": "પાણીની બોટલ",
    "category": "yatra",
    "unit": "Piece / Carton",
    "badge": "Stay Hydrated",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-47",
    "name": "Steel Water Bottle",
    "gujarati": "સ્ટીલ વોટર બોટલ (Insulated)",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Cool Water Carrier",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-48",
    "name": "Cap",
    "gujarati": "સન કેપ / ટોપી",
    "category": "yatra",
    "unit": "Piece / Wholesale Dozen",
    "badge": "Sun Protection",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-49",
    "name": "Gamcha",
    "gujarati": "કોટન ગમછો",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Pure Cotton",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-50",
    "name": "Small Towel",
    "gujarati": "રૂમાલ / નાનો ટુવાલ",
    "category": "yatra",
    "unit": "Piece / Pack",
    "badge": "Quick Dry",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-51",
    "name": "Handkerchief",
    "gujarati": "હાથરૂમાલ (Hanky)",
    "category": "yatra",
    "unit": "Pack of 3 / 6",
    "badge": "Soft Cotton",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-52",
    "name": "Sunglasses",
    "gujarati": "સનગ્લાસિસ (ગોગલ્સ)",
    "category": "yatra",
    "unit": "Piece",
    "badge": "UV Protection",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-53",
    "name": "Umbrella",
    "gujarati": "છત્રી (ફોલ્ડિંગ)",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Sun & Rain Shield",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-54",
    "name": "Raincoat",
    "gujarati": "રેઇનકોટ / પોંચો",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Monsoon Yatra",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-55",
    "name": "Knee Support",
    "gujarati": "ની કેપ / ઘૂંટણ સપોર્ટ",
    "category": "yatra",
    "unit": "Pair",
    "badge": "Shatrunjaya Steps Aid",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-56",
    "name": "Back Support Belt",
    "gujarati": "કમરનો બેલ્ટ / બેક સપોર્ટ",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Climbing Relief",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-57",
    "name": "Walking Socks",
    "gujarati": "વોકિંગ સોક્સ (કુશન)",
    "category": "yatra",
    "unit": "Pair / Pack of 3",
    "badge": "Blister Prevention",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-58",
    "name": "Shoe Cover",
    "gujarati": "શૂ કવર",
    "category": "yatra",
    "unit": "Pair / Pack",
    "badge": "Temple Cleanliness",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-59",
    "name": "Small Travel Pouch",
    "gujarati": "ટ્રાવેલ મની પાઉચ",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Secure Waist Pouch",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-60",
    "name": "Torch",
    "gujarati": "એલઇડી ટોર્ચ / ફ્લેશલાઇટ",
    "category": "yatra",
    "unit": "Piece",
    "badge": "Early Morning Yatra",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-61",
    "name": "White Kurta",
    "gujarati": "સફેદ કુર્તો (White Kurta)",
    "category": "clothing",
    "unit": "Piece (All Sizes)",
    "badge": "Pooja & Yatra Wear",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-62",
    "name": "White Pajama",
    "gujarati": "સફેદ પાયજામો (Cotton)",
    "category": "clothing",
    "unit": "Piece",
    "badge": "Comfort Fit",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-63",
    "name": "White Dhoti",
    "gujarati": "સફેદ ધોતી (Shwet Dhoti)",
    "category": "clothing",
    "unit": "Piece",
    "badge": "Temple Tradition",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-64",
    "name": "White Chadar",
    "gujarati": "સફેદ ચાદર (White Sheet)",
    "category": "clothing",
    "unit": "Piece",
    "badge": "Dharamshala & Yatra",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-65",
    "name": "White Cotton Shirt",
    "gujarati": "સફેદ કોટન શર્ટ",
    "category": "clothing",
    "unit": "Piece",
    "badge": "Breathable Cotton",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-66",
    "name": "White T-Shirt",
    "gujarati": "સફેદ ટી-શર્ટ",
    "category": "clothing",
    "unit": "Piece",
    "badge": "Casual Yatra Climb",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-67",
    "name": "White Pants",
    "gujarati": "સફેદ પેન્ટ / લેનિન",
    "category": "clothing",
    "unit": "Piece",
    "badge": "All Sizes",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-68",
    "name": "Jeans",
    "gujarati": "જીન્સ પેન્ટ",
    "category": "clothing",
    "unit": "Piece",
    "badge": "Durable Travel Wear",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-69",
    "name": "Jeans Sleeves/Leg Covers",
    "gujarati": "જીન્સ લેગ કવર્સ / સ્લીવ્ઝ",
    "category": "clothing",
    "unit": "Pair",
    "badge": "Sun & Dust Guard",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-70",
    "name": "Cotton Socks",
    "gujarati": "સફેદ કોટન મોજા",
    "category": "clothing",
    "unit": "Pair / Dozen",
    "badge": "Temple Soft Walk",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-71",
    "name": "Shawl",
    "gujarati": "શાલ / સફેદ ખેસ",
    "category": "clothing",
    "unit": "Piece",
    "badge": "Pooja & Morning Chill",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-72",
    "name": "Head Cover",
    "gujarati": "માથું ઢાંકવાનું કપડું / રૂમાલ",
    "category": "clothing",
    "unit": "Piece",
    "badge": "Temple Decorum",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-73",
    "name": "Cotton Nightwear",
    "gujarati": "કોટન નાઇટવેર",
    "category": "clothing",
    "unit": "Set",
    "badge": "Relaxed Stay",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-74",
    "name": "Wheat Flour (Aata)",
    "gujarati": "ઘઉંનો લોટ (Chakki Aata)",
    "category": "groceries",
    "unit": "5kg / 10kg / 25kg Bag",
    "badge": "Fresh Mill Quality",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-75",
    "name": "Maida",
    "gujarati": "મેંદો (Refined Flour)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg",
    "badge": "Cooking Essential",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-76",
    "name": "Besan",
    "gujarati": "ચણાનો લોટ (Pure Besan)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg",
    "badge": "Farsan Special",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-77",
    "name": "Suji (Rava)",
    "gujarati": "સુજી / રવો (Rava)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg",
    "badge": "Pure Quality",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-78",
    "name": "Poha",
    "gujarati": "પૌંઆ (Thick / Thin Poha)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg",
    "badge": "Morning Breakfast",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-79",
    "name": "Daliya",
    "gujarati": "ઘઉંના ફાડા (Daliya)",
    "category": "groceries",
    "unit": "1kg / 5kg",
    "badge": "Healthy Nutrition",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-80",
    "name": "Jowar Flour",
    "gujarati": "જુવારનો લોટ",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg",
    "badge": "Gluten Free Grain",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-81",
    "name": "Bajra Flour",
    "gujarati": "બાજરીનો લોટ",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg",
    "badge": "Kathiyawadi Rotla",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-82",
    "name": "Multigrain Flour",
    "gujarati": "મલ્ટીગ્રેઇન લોટ",
    "category": "groceries",
    "unit": "5kg / 10kg",
    "badge": "Healthy Flour",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-83",
    "name": "Toor Dal",
    "gujarati": "તુવેર દાળ (Unpolished)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg Bag",
    "badge": "Gujarati Dal Special",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-84",
    "name": "Moong Dal",
    "gujarati": "મગની દાળ (Chilta / Dhova)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg Bag",
    "badge": "Light & Easy Digest",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-85",
    "name": "Masoor Dal",
    "gujarati": "મસૂર દાળ",
    "category": "groceries",
    "unit": "1kg / 5kg",
    "badge": "Wholesale Grain",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-86",
    "name": "Chana Dal",
    "gujarati": "ચણાની દાળ",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg Bag",
    "badge": "Farsan Grade",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-87",
    "name": "Urad Dal",
    "gujarati": "અડદની દાળ",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg Bag",
    "badge": "Pure & Clean",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-88",
    "name": "Moong",
    "gujarati": "આખા મગ (Whole Moong)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg Bag",
    "badge": "Jain Diet Staple",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-89",
    "name": "Rajma",
    "gujarati": "રાજમા",
    "category": "groceries",
    "unit": "1kg / 5kg",
    "badge": "Premium Pulse",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-90",
    "name": "Kabuli Chana",
    "gujarati": "કાબુલી ચણા (Chole)",
    "category": "groceries",
    "unit": "1kg / 5kg / 25kg",
    "badge": "Large Size",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-91",
    "name": "Groundnut Oil",
    "gujarati": "સીંગતેલ (Groundnut Oil)",
    "category": "groceries",
    "unit": "1L / 5L / 15L Tin",
    "badge": "Pure Filtered Oil",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-92",
    "name": "Sunflower Oil",
    "gujarati": "સનફ્લાવર તેલ",
    "category": "groceries",
    "unit": "1L / 5L / 15L Tin",
    "badge": "Light Cooking Oil",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-93",
    "name": "Mustard Oil",
    "gujarati": "રાયડો / સરસવનું તેલ",
    "category": "groceries",
    "unit": "1L / 5L Bottle",
    "badge": "Strong Flavour",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-94",
    "name": "Ghee",
    "gujarati": "શુદ્ધ દેશી ઘી (Pure Cow/Buffalo Ghee)",
    "category": "groceries",
    "unit": "500g / 1kg / 15kg Tin",
    "badge": "Pooja & Kitchen",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-95",
    "name": "Butter",
    "gujarati": "બટર (અમૂલ / ટેબલ બટર)",
    "category": "groceries",
    "unit": "Pack",
    "badge": "Dairy Fresh",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-96",
    "name": "Salt",
    "gujarati": "મીઠું (ટાટા મીઠું / સિંધાલવ)",
    "category": "groceries",
    "unit": "1kg / Bag",
    "badge": "Kitchen Staple",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-97",
    "name": "Sugar",
    "gujarati": "ખાંડ (Pure Sugar)",
    "category": "groceries",
    "unit": "1kg / 5kg / 50kg Bag",
    "badge": "Fine Grain",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-98",
    "name": "Jaggery",
    "gujarati": "દેશી ગોળ (Pure Jaggery)",
    "category": "groceries",
    "unit": "1kg / 5kg / 10kg Box",
    "badge": "Organic & Sweet",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-99",
    "name": "Tea",
    "gujarati": "ચા પત્તી (Wagh Bakri / Premium Tea)",
    "category": "groceries",
    "unit": "250g / 500g / 1kg",
    "badge": "Morning Energy",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-100",
    "name": "Coffee",
    "gujarati": "ઇન્સ્ટન્ટ કોફી (Nescafe / Bru)",
    "category": "groceries",
    "unit": "Jar / Pouch",
    "badge": "Instant Brew",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-101",
    "name": "Chocolate",
    "gujarati": "ચોકલેટ (Chocolates)",
    "category": "snacks",
    "unit": "Piece / Box",
    "badge": "Sweet Treat",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-102",
    "name": "Dairy Milk",
    "gujarati": "ડેરી મિલ્ક (Cadbury)",
    "category": "snacks",
    "unit": "Piece / Box",
    "badge": "All Time Favorite",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-103",
    "name": "KitKat",
    "gujarati": "કિટકેટ (KitKat)",
    "category": "snacks",
    "unit": "Piece / Pack",
    "badge": "Crispy Wafer",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-104",
    "name": "5 Star",
    "gujarati": "ફાઇવ સ્ટાર (5 Star)",
    "category": "snacks",
    "unit": "Piece / Box",
    "badge": "Caramel Chocolate",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-105",
    "name": "Perk",
    "gujarati": "પર્ક (Perk)",
    "category": "snacks",
    "unit": "Piece / Box",
    "badge": "Crunchy Snack",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-106",
    "name": "Munch",
    "gujarati": "મંચ (Munch)",
    "category": "snacks",
    "unit": "Piece / Box",
    "badge": "Light Bite",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-107",
    "name": "Gems",
    "gujarati": "જેમ્સ (Cadbury Gems)",
    "category": "snacks",
    "unit": "Pack / Box",
    "badge": "Colorful Candy",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-108",
    "name": "Biscuits",
    "gujarati": "બિસ્કિટ્સ (Parle-G, Marie, Good Day)",
    "category": "snacks",
    "unit": "Pack / Box / Carton",
    "badge": "Tea Time",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-109",
    "name": "Khakhra",
    "gujarati": "ખાખરા (Methi / Sada)",
    "category": "snacks",
    "unit": "200g / 500g / Wholesale Box",
    "badge": "Kathiyawadi Khakhra",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-110",
    "name": "Jain Khakhra",
    "gujarati": "શુદ્ધ જૈન ખાખરા (Vacuum Pack)",
    "category": "snacks",
    "unit": "Pack / Bulk Carton",
    "badge": "100% Jain Pure",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-111",
    "name": "Jain Farsan",
    "gujarati": "જૈન ફરસાણ (Gathiya/Chivda)",
    "category": "snacks",
    "unit": "250g / 500g / 1kg",
    "badge": "No Onion/Garlic",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-112",
    "name": "Namkeen",
    "gujarati": "નમકીન (Mixed Namkeen)",
    "category": "snacks",
    "unit": "Pack / Carton",
    "badge": "Crispy Savory",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-113",
    "name": "Chips",
    "gujarati": "બટાટા ચિપ્સ (Potato Chips)",
    "category": "snacks",
    "unit": "Pack / Carton",
    "badge": "Snack Break",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-114",
    "name": "Wafers",
    "gujarati": "કેળા અને બટાટા વેફર્સ",
    "category": "snacks",
    "unit": "Pack / Carton",
    "badge": "Yellow / Masala",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-115",
    "name": "Popcorn",
    "gujarati": "પોપકોર્ન (Ready Popcorn)",
    "category": "snacks",
    "unit": "Pack",
    "badge": "Light Snack",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-116",
    "name": "Sev",
    "gujarati": "તીખી અને મોળી સેવ",
    "category": "snacks",
    "unit": "Pack / 1kg",
    "badge": "Tea Partner",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-117",
    "name": "Gathiya",
    "gujarati": "ભાવનગરી ગાંઠિયા / વણેલા",
    "category": "snacks",
    "unit": "Fresh Pack / Kg",
    "badge": "Palitana Specialty",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-118",
    "name": "Fafda",
    "gujarati": "ફાફડા (Crispy Fafda)",
    "category": "snacks",
    "unit": "Pack / Box",
    "badge": "Traditional Taste",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-119",
    "name": "Dry Fruit Mix",
    "gujarati": "મિક્સ ડ્રાયફ્રૂટ",
    "category": "dryfruits",
    "unit": "Pack / Kg",
    "badge": "Yatra Energy Pack",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-120",
    "name": "Packaged Juice",
    "gujarati": "પેક્ડ ફ્રૂટ જ્યુસ (Real / Tropicana)",
    "category": "drinks",
    "unit": "Tetra Pack / Carton",
    "badge": "Refreshing Juice",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-121",
    "name": "Coca-Cola",
    "gujarati": "કોકા કોલા (Coca-Cola Chilled)",
    "category": "drinks",
    "unit": "Bottle / Can / Crate",
    "badge": "Cold Drink",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-122",
    "name": "Pepsi",
    "gujarati": "પેપ્સી (Pepsi Chilled)",
    "category": "drinks",
    "unit": "Bottle / Can / Crate",
    "badge": "Chilled Drink",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-123",
    "name": "Sprite",
    "gujarati": "સ્પ્રાઈટ (Sprite Lemon)",
    "category": "drinks",
    "unit": "Bottle / Can / Crate",
    "badge": "Cool Refresher",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-124",
    "name": "Fanta",
    "gujarati": "ફેન્ટા ઓરેન્જ (Fanta)",
    "category": "drinks",
    "unit": "Bottle / Can / Crate",
    "badge": "Citrus Punch",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-125",
    "name": "Thums Up",
    "gujarati": "થમ્સ અપ (Thums Up Charged)",
    "category": "drinks",
    "unit": "Bottle / Can / Crate",
    "badge": "Toofani Refreshment",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-126",
    "name": "Limca",
    "gujarati": "લીમકા (Limca Lemoni)",
    "category": "drinks",
    "unit": "Bottle / Can / Crate",
    "badge": "Lime Sparkle",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-127",
    "name": "Maaza",
    "gujarati": "માઝા (Maaza Mango)",
    "category": "drinks",
    "unit": "Bottle / Carton",
    "badge": "Alphonso Mango Drink",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-128",
    "name": "Frooti",
    "gujarati": "ફ્રુટી (Frooti Tetra Pack)",
    "category": "drinks",
    "unit": "Pack / Crate",
    "badge": "Mango Sip",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-129",
    "name": "Slice",
    "gujarati": "સ્લાઇસ (Slice Mango)",
    "category": "drinks",
    "unit": "Bottle / Carton",
    "badge": "Thick Mango Delight",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-130",
    "name": "Bisleri Water",
    "gujarati": "બિસ્લેરી પાણી (Bisleri 500ml/1L/2L)",
    "category": "drinks",
    "unit": "Bottle / Wholesale Crate",
    "badge": "Pure Mineral Water",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-131",
    "name": "Soda Water",
    "gujarati": "સોડા વોટર (Kinley / Club Soda)",
    "category": "drinks",
    "unit": "Bottle / Crate",
    "badge": "Chilled Soda",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-132",
    "name": "Glucose Drink",
    "gujarati": "ગ્લુકોઝ ડ્રિંક (Glucon-D / Enerzal)",
    "category": "drinks",
    "unit": "Bottle / Pack",
    "badge": "Instant Yatra Stamina",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-133",
    "name": "Coconut Water",
    "gujarati": "નારિયેળ પાણી (Packaged/Natural)",
    "category": "drinks",
    "unit": "Bottle / Pack",
    "badge": "Natural Electrolyte",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-134",
    "name": "Bath Soap",
    "gujarati": "નાહવાનો સાબુ (Dettol / Lifebuoy / Medimix)",
    "category": "care",
    "unit": "Piece / Wholesale Bundle",
    "badge": "Hygiene Staple",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-135",
    "name": "Hand Wash",
    "gujarati": "હેન્ડ વોશ (Liquid Soap)",
    "category": "care",
    "unit": "Bottle / Refill Pouch",
    "badge": "Germ Protection",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-136",
    "name": "Shampoo",
    "gujarati": "શેમ્પૂ (Sachet / Bottle)",
    "category": "care",
    "unit": "Sachet / Bottle",
    "badge": "Hair Care",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-137",
    "name": "Conditioner",
    "gujarati": "કન્ડિશનર (Hair Conditioner)",
    "category": "care",
    "unit": "Sachet / Tube",
    "badge": "Smooth Hair",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-138",
    "name": "Toothpaste",
    "gujarati": "ટૂથપેસ્ટ (Colgate / Meswak / Dabur Red)",
    "category": "care",
    "unit": "Tube / Wholesale Carton",
    "badge": "Oral Hygiene",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-139",
    "name": "Toothbrush",
    "gujarati": "ટૂથબ્રશ (Soft / Medium)",
    "category": "care",
    "unit": "Piece / Pack of 4",
    "badge": "Travel Essential",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-140",
    "name": "Hair Oil",
    "gujarati": "હેર ઓઇલ (Almond / Navratna / Jasmine)",
    "category": "care",
    "unit": "Bottle",
    "badge": "Soothing Oil",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-141",
    "name": "Coconut Oil",
    "gujarati": "કોપરેલ તેલ (Parachute)",
    "category": "care",
    "unit": "Bottle / Wholesale Pack",
    "badge": "100% Pure Oil",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-142",
    "name": "Face Wash",
    "gujarati": "ફેસ વોશ (Himalaya / Garnier)",
    "category": "care",
    "unit": "Tube",
    "badge": "Dust & Oil Clean",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-143",
    "name": "Moisturizer",
    "gujarati": "મોઇશ્ચરાઇઝર (Nivea / Vaseline)",
    "category": "care",
    "unit": "Bottle / Tub",
    "badge": "Skin Hydration",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-144",
    "name": "Sunscreen",
    "gujarati": "સનસ્ક્રીન લોશન (SPF 30/50)",
    "category": "care",
    "unit": "Tube",
    "badge": "Hill Sunscreen Shield",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-145",
    "name": "Comb",
    "gujarati": "કાંસકો / દાંતિયો (Comb)",
    "category": "care",
    "unit": "Piece",
    "badge": "Daily Need",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-146",
    "name": "Sanitizer",
    "gujarati": "હેન્ડ સેનિટાઈઝર (Sanitizer)",
    "category": "care",
    "unit": "Pocket Bottle / Refill",
    "badge": "Pocket Hygiene",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-147",
    "name": "Tissue Paper",
    "gujarati": "ટિશ્યુ પેપર (Pocket / Box)",
    "category": "care",
    "unit": "Pack / Box",
    "badge": "Travel Soft Paper",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-148",
    "name": "Wet Wipes",
    "gujarati": "વેટ વાઇપ્સ (Wet Wipes)",
    "category": "care",
    "unit": "Pack of 20 / 72",
    "badge": "Instant Fresh Face",
    "wholesaleAvailable": true,
    "retailAvailable": true
  },
  {
    "id": "item-149",
    "name": "Detergent Powder",
    "gujarati": "વોશિંગ પાઉડર (Surf / Wheel / Rin)",
    "category": "care",
    "unit": "500g / 1kg / 5kg Bag",
    "badge": "Laundry Cleanser",
    "wholesaleAvailable": true,
    "retailAvailable": true
  }
];

// products.js

// All products data
const products = [
  {
    id: 1,
    name: "Formal Dress",
    description: "At VS Tailors, our formal attire is crafted to embody sophistication, elegance, and comfort. Each piece is meticulously tailored using premium fabrics that ensure a perfect fit and refined appearance for every occasion. From sharp business suits to sleek formal shirts, our collection seamlessly blends classic styles with modern trends, allowing you to make a confident statement at work, events, or meetings. Attention to detail, precise stitching, and luxurious finishes define every garment, offering timeless style that complements your personality. Experience the perfect harmony of elegance and professionalism with VS Tailors’ formal wear.",
    mainImage: "Images/Formal-Shirt.png"
  },
  {
    id: 2,
    name: "Blazer",
    description: "Elevate your style with VS Tailors’ premium blazer collection, where elegance meets precision tailoring. Each blazer is crafted from high-quality fabrics, designed to provide a sharp, structured fit that enhances your silhouette. Perfect for formal events, business meetings, or sophisticated casual outings, our blazers combine classic craftsmanship with contemporary style. Meticulous attention to detail—from perfectly stitched lapels to functional pockets—ensures a refined, polished look. Available in a range of colors and designs, VS Tailors’ blazers offer versatility and timeless appeal, making every appearance confidently stylish. Step into sophistication with a blazer that speaks volumes.",
    mainImage: "Images/coat pant.png"
  },
  {
    id: 3,
    name: "Kurta Pajama",
    description: "Experience traditional elegance with VS Tailors’ Kurta Pajama collection, crafted to bring comfort, style, and timeless charm together. Each kurta is designed with attention to detail, using premium fabrics that ensure a perfect drape and soft feel against the skin. The collection features classic cuts as well as contemporary designs, making it suitable for festivals, weddings, or casual celebrations. Paired with matching pajamas, each set offers a harmonious blend of style and comfort, allowing you to celebrate every occasion with grace and confidence. Step into tradition with VS Tailors’ Kurta Pajamas, where heritage meets modern sophistication.",
    mainImage: "Images/Kurta.png"
  },
  {
    id: 4,
    name: "Safari Uniform",
    description: "VS Tailors’ Safari Uniforms are designed for durability, comfort, and professional appearance, ideal for outdoor work, wildlife tours, and adventure activities. Crafted from high-quality, breathable fabrics, these uniforms ensure ease of movement while providing a polished, authoritative look. With thoughtful details such as multiple functional pockets, reinforced stitching, and adjustable fits, each uniform balances practicality with style. Available in classic earthy tones, our Safari Uniforms are perfect for teams, guides, and field professionals who require both performance and sophistication. Trust VS Tailors for uniforms that combine resilience, comfort, and impeccable style in every adventure.",
    mainImage: "Images/Safari Uniform.png"
  },
  {
    id: 5,
    name: "Chef Uniform",
    description: "VS Tailors’ Chef Uniforms are designed to deliver the perfect blend of professionalism, comfort, and durability for culinary experts. Crafted from high-quality, breathable fabrics, these uniforms ensure ease of movement and long-lasting performance in busy kitchens. With practical features like double-breasted fronts, adjustable cuffs, and convenient pockets, each uniform combines functionality with a polished, stylish appearance. Available in classic white and modern variations, our Chef Uniforms help you maintain a clean, professional look while focusing on your culinary craft. Elevate your kitchen presence with VS Tailors’ expertly tailored chef attire.",
    mainImage: "Images/Chef Uniform.png"
  },
  {
    id: 6,
    name: "Doctor Apron / Lab Coat",
    description: "VS Tailors’ Doctor Aprons are designed to combine professionalism, comfort, and practicality for healthcare professionals. Made from high-quality, durable fabrics, each coat ensures a clean, crisp appearance while providing ease of movement throughout long shifts. Thoughtfully tailored with multiple functional pockets, reinforced stitching, and a perfect fit, these aprons support both efficiency and style in clinical settings. Ideal for doctors, nurses, and laboratory staff, VS Tailors’ lab coats maintain a professional, authoritative presence while prioritizing comfort and hygiene. Experience the perfect balance of functionality and elegance with our expertly crafted medical aprons.",
    mainImage: "Images/Doctor Apron.png"
  },
  {
    id: 7,
    name: "Modi Jacket",
    description: "VS Tailors’ Modi Jackets are a perfect blend of tradition and modern style, designed to elevate your formal and semi-formal attire. Crafted with precision from premium fabrics, each jacket offers a tailored fit that enhances your silhouette and exudes sophistication. Featuring classic Mandarin collars, sleek lines, and subtle detailing, these jackets are ideal for weddings, festivals, business events, or social gatherings. Comfortable yet stylish, the VS Tailors Modi Jacket ensures you make a confident and elegant statement on every occasion. Redefine your wardrobe with timeless style and impeccable craftsmanship.",
    mainImage: "Images/Modi Jacket.png"
  },
  {
    id: 8,
    name: "Bouncer Uniform",
    description: "VS Tailors’ Bouncer Uniforms are crafted to combine authority, durability, and comfort for security professionals. Made from premium, high-strength fabrics, these uniforms ensure long-lasting performance while maintaining a sharp, professional appearance. Designed with practical features such as multiple pockets, reinforced stitching, and adjustable fits, each uniform allows ease of movement during demanding duties. Available in classic dark tones, VS Tailors’ Bouncer Uniforms project confidence, discipline, and professionalism, making them ideal for event security, nightclubs, corporate premises, and more. Trust our uniforms to deliver safety, functionality, and style in every role.",
    mainImage: "Images/Bouncer.png"
  },
  {
    id: 9,
    name: "Waistcoat",
    description: "VS Tailors’ Waistcoats are designed to add a touch of sophistication and elegance to any outfit. Crafted from premium fabrics with precise tailoring, each waistcoat offers a perfect fit and refined silhouette, enhancing both formal and semi-formal looks. Featuring classic buttons, sleek lines, and versatile designs, our waistcoats can be paired effortlessly with suits, shirts, or casual attire, making them ideal for weddings, office events, or special occasions. Comfortable yet stylish, VS Tailors’ Waistcoats combine timeless charm with modern craftsmanship, allowing you to make a confident, polished statement every time.",
    mainImage: "Images/Waistcoat.png"
  },
  {
    id: 10,
    name: "Wedding Sherwani",
    description: "VS Tailors’ Wedding Sherwanis are crafted to make every groom feel regal on his special day. Using premium fabrics and intricate detailing, each sherwani blends traditional craftsmanship with contemporary elegance. From delicate embroidery to perfectly tailored silhouettes, our designs ensure a comfortable fit while exuding sophistication and grandeur. Ideal for weddings, receptions, and festive occasions, these sherwanis allow you to make a lasting impression with timeless style. Experience the perfect combination of heritage, luxury, and meticulous tailoring with VS Tailors’ Wedding Sherwani collection—where every piece tells a story of elegance.",
    mainImage: "Images/Wedding Sherwani.png"
  },
  {
    id: 11,
    name: "Pathani Suit",
    description: "VS Tailors’ Pathani Suits bring together tradition, comfort, and contemporary style. Expertly tailored from premium fabrics, each suit ensures a perfect fit and graceful drape, making it ideal for festive occasions, casual gatherings, or cultural celebrations. Featuring classic cuts, detailed stitching, and stylish accents, our Pathani Suits offer a blend of heritage and modern elegance. Comfortable yet distinguished, they allow you to celebrate every moment with confidence and sophistication. Step into timeless tradition with VS Tailors’ Pathani Suit collection—where classic charm meets impeccable craftsmanship.",
    mainImage: "Images/Pathani Suit.png"
  },
  {
    id: 12,
    name: "Overcoat / Trench Coat",
    description: "VS Tailors’ Overcoats and Trench Coats combine timeless elegance with modern sophistication. Crafted from premium fabrics, each coat offers a tailored fit, superior warmth, and durability, making it perfect for formal outings, office wear, or stylish winter layering. With attention to detail in stitching, buttons, and lapels, our designs ensure a polished, refined look while providing comfort and functionality. Available in classic and contemporary styles, VS Tailors’ coats elevate any wardrobe, offering a perfect blend of style, protection, and confidence for every occasion.",
    mainImage: "Images/Overcoat.png"
  },
  {
    id: 13,
    name: "Jodhpuri Suit / Bandhgala Suit",
    description: "VS Tailors’ Jodhpuri and Bandhgala Suits are a perfect blend of regal tradition and modern sophistication. Crafted from premium fabrics with precise tailoring, each suit enhances your silhouette while exuding elegance and authority. Featuring intricately designed collars, sleek cuts, and exquisite detailing, these suits are ideal for weddings, formal events, and festive occasions. Comfortable yet distinguished, our Jodhpuri and Bandhgala Suits ensure you make a lasting impression while celebrating in style. Step into timeless royalty with VS Tailors’ meticulously crafted collection—where heritage meets contemporary fashion.",
    mainImage: "Images/Jodhpuri Suit.png"
  },
  {
    id: 14,
    name: "Boiler Suit",
    description: "VS Tailors’ Boiler Suits are designed for maximum durability, comfort, and practicality, making them ideal for industrial work, mechanical tasks, and hands-on professions. Crafted from high-quality, hard-wearing fabrics, each suit ensures ease of movement and long-lasting performance in demanding environments. With thoughtful details like multiple functional pockets, reinforced stitching, and adjustable fits, our boiler suits combine safety and utility with a polished, professional look. Available in versatile colors and sizes, VS Tailors’ Boiler Suits offer the perfect balance of functionality, protection, and style for professionals who value both performance and appearance.",
    mainImage: "Images/Boiler Suit.png"
  },
  {
    id: 15,
    name: "Kitchen Apron",
    description: "VS Tailors’ Kitchen Aprons are designed to offer maximum protection, comfort, and style for culinary enthusiasts and professionals alike. Made from high-quality, durable fabrics, each apron ensures long-lasting use while keeping your clothes clean during cooking or baking. Thoughtfully tailored with adjustable straps, convenient pockets, and reinforced stitching, these aprons provide both practicality and a polished appearance. Available in a variety of colors and designs, VS Tailors’ Kitchen Aprons combine functionality with elegance, making them perfect for home chefs, professional kitchens, and culinary events. Cook with confidence and style.",
    mainImage: "Images/Kitchen Apron.png"
  },
  {
    id: 16,
    name: "School Uniforms",
    description: "VS Tailors’ School Uniforms are crafted with precision, comfort, and durability in mind, making them ideal for bulk orders for schools, institutions, and academies. Using high-quality, long-lasting fabrics, each uniform is designed to withstand daily wear while ensuring a neat, professional appearance for students. Our tailored designs provide a perfect fit for all age groups and come in a range of styles and colors to reflect your institution’s identity. With attention to detail, reinforced stitching, and consistent quality across every piece, VS Tailors ensures that bulk orders meet the highest standards, delivering comfort, style, and reliability for every student.",
    mainImage: "Images/School Uniforms1.png"
  },
  {
    id: 17,
    name: "College Uniforms",
    description: "VS Tailors’ College Uniforms are crafted for comfort, durability, and a neat, professional appearance, making them ideal for bulk orders for colleges and educational institutions. Made from high-quality fabrics, each uniform ensures a perfect fit for students of all age groups while withstanding daily wear. With reinforced stitching, consistent sizing, and attention to detail, our uniforms maintain superior quality across every piece. Available in a variety of styles, colors, and designs to reflect your institution’s identity, VS Tailors’ College Uniforms help create a cohesive, disciplined, and stylish look for your students, fostering pride and professionalism in every classroom.",
    mainImage: "Images/College Uniforms.png"
  },
  {
    id: 18,
    name: "Hospital Uniforms",
    description: "VS Tailors’ Hospital Uniforms are crafted for comfort, hygiene, and durability, making them ideal for bulk orders for hospitals, clinics, and healthcare institutions. Made from high-quality, breathable fabrics, each uniform ensures ease of movement and a professional appearance throughout long shifts. Thoughtfully designed with reinforced stitching, functional pockets, and consistent sizing, our uniforms maintain superior quality across every piece. Available in a variety of colors and styles to suit different roles, VS Tailors’ Hospital Uniforms provide healthcare professionals with practical, reliable, and stylish attire, ensuring your team presents a cohesive and professional image at all times.",
    mainImage: "Images/Hospital Uniforms.png"
  },
  {
    id: 19,
    name: "Corporate Uniforms",
    description: "VS Tailors’ Corporate Uniforms are designed to reflect professionalism, style, and consistency, making them perfect for bulk orders for offices, corporate teams, and business establishments. Crafted from premium, durable fabrics, each uniform ensures a comfortable fit while maintaining a polished and cohesive appearance for your workforce. With attention to detail, reinforced stitching, and consistent sizing, our uniforms uphold high-quality standards across every piece. Available in a variety of styles, colors, and custom branding options, VS Tailors’ Corporate Uniforms help create a unified, professional image that strengthens your brand identity and leaves a lasting impression on clients and employees alike.",
    mainImage: "Images/Corporate Uniforms bulk.png"
  },
  {
    id: 20,
    name: "Garage Uniforms",
    description: "VS Tailors’ Garage Uniforms are built for durability, comfort, and practicality, making them ideal for bulk orders for workshops, garages, and automotive service centers. Crafted from high-quality, hard-wearing fabrics, each uniform provides ease of movement while withstanding the demands of daily mechanical work. Thoughtfully designed with reinforced stitching, multiple functional pockets, and adjustable fits, our uniforms ensure safety, utility, and a professional appearance. Available in versatile colors and sizes, VS Tailors’ Garage Uniforms deliver consistent quality across every piece, allowing your team to work efficiently while maintaining a polished, cohesive look.",
    mainImage: "Images/Garage Uniforms.png"
  },
  {
    id: 21,
    name: "Petrol Pump Uniforms",
    description: "VS Tailors’ Petrol Pump Uniforms are designed for durability, comfort, and a professional appearance, making them perfect for bulk orders for fuel stations and service outlets. Crafted from high-quality, breathable fabrics, each uniform ensures ease of movement while withstanding daily work demands. With reinforced stitching, practical pockets, and consistent sizing, our uniforms provide both functionality and a polished look across your entire team. Available in a variety of colors and designs to match your brand identity, VS Tailors’ Petrol Pump Uniforms help create a cohesive, professional image while prioritizing safety and comfort for your staff.",
    mainImage: "Images/Petrol pump Uniforms.png"
  },
  {
    id: 22,
    name: "Hotel Uniforms",
    description: "VS Tailors’ Hotel Uniforms are designed to combine elegance, comfort, and durability, making them perfect for bulk orders for hotels, resorts, and hospitality businesses. Crafted from premium, breathable fabrics, each uniform ensures a polished and professional appearance while allowing staff to move freely throughout long shifts. With attention to detail, reinforced stitching, and consistent sizing, our uniforms maintain a high standard of quality across every piece. Available in a variety of styles and colors to match your brand identity, VS Tailors’ Hotel Uniforms deliver both functionality and sophistication, ensuring your team makes a lasting impression on every guest.",
    mainImage: "Images/Hotel Uniforms.png"
  },
  {
    id: 23,
    name: "Bouncer Uniforms",
    description: "VS Tailors’ Bouncer Uniforms are designed for authority, durability, and comfort, making them ideal for bulk orders for security teams, nightclubs, events, and corporate premises. Crafted from high-quality, hard-wearing fabrics, each uniform ensures ease of movement while maintaining a sharp, professional appearance. With reinforced stitching, functional pockets, and adjustable fits, our uniforms provide both practicality and a polished, cohesive look for your entire security staff. Available in classic dark tones and consistent sizing, VS Tailors’ Bouncer Uniforms deliver reliability, professionalism, and confidence, ensuring your team is equipped to perform efficiently while projecting a strong, authoritative presence.",
    mainImage: "Images/Bouncers Uniform.png"
  },
  {
    id: 24,
    name: "Security Uniforms",
    description: "VS Tailors’ Security Uniforms are crafted for durability, comfort, and a professional appearance, making them ideal for bulk orders for security personnel across corporate offices, events, residential complexes, and institutions. Made from high-quality, robust fabrics, each uniform ensures ease of movement while withstanding daily work demands. With reinforced stitching, practical pockets, and adjustable fits, our uniforms offer both functionality and a polished, cohesive look for your team. Available in versatile colors and consistent sizing, VS Tailors’ Security Uniforms provide reliability, professionalism, and confidence, helping your staff maintain a strong, authoritative presence at all times.",
    mainImage: "Images/Security Uniforms.png"
  },
  {
    id: 25,
    name: "Airline Staff Uniforms",
    description: "VS Tailors’ Airline Staff Uniforms are designed to combine elegance, comfort, and professionalism, making them ideal for bulk orders for airlines and aviation services. Crafted from premium, breathable fabrics, each uniform ensures a polished, sophisticated appearance while allowing ease of movement for long shifts. With attention to detail in stitching, functional pockets, and consistent sizing, our uniforms maintain superior quality across every piece. Available in a variety of styles, colors, and customizable branding options, VS Tailors’ Airline Staff Uniforms help create a cohesive, stylish, and professional image, ensuring your cabin crew and ground staff leave a lasting impression on every passenger.",
    mainImage: "Images/Airlines Uniforms.png"
  },
  {
    id: 26,
    name: "Salon Uniforms",
    description: "VS Tailors’ Salon Uniforms are crafted to combine style, comfort, and durability, making them ideal for bulk orders for salons, spas, and beauty establishments. Made from high-quality, breathable fabrics, each uniform ensures ease of movement while maintaining a polished and professional appearance for your staff. Thoughtfully designed with reinforced stitching, practical pockets, and adjustable fits, our uniforms offer both functionality and elegance. Available in a variety of colors, styles, and consistent sizing, VS Tailors’ Salon Uniforms help create a cohesive and stylish look for your team, enhancing the overall client experience and reflecting the professionalism of your brand.",
    mainImage: "Images/Saloon Uniform.png"
  },
  {
    id: 27,
    name: "T-Shirts",
    description: "VS Tailors’ T-Shirts are designed for comfort, style, and durability, making them perfect for bulk orders for schools, corporate teams, events, and promotions. Crafted from high-quality, breathable fabrics, each T-shirt ensures a soft, comfortable fit while maintaining a polished appearance. With reinforced stitching and consistent sizing, our T-shirts offer long-lasting quality across every piece. Available in a variety of colors, styles, and customizable branding options, VS Tailors’ T-Shirts help create a unified, stylish, and professional look for your team or organization, making every group appearance coordinated and impressive.",
    mainImage: "Images/Tshirts.png"
  },
  {
    id: 28,
    name: "Police Uniforms",
    description: "VS Tailors’ Police Uniforms are designed to embody authority, durability, and professionalism, making them ideal for bulk orders for law enforcement departments and security agencies. Crafted from premium, long-lasting fabrics, each uniform ensures comfort and ease of movement during demanding duties while maintaining a sharp, disciplined appearance. With reinforced stitching, functional pockets, and consistent sizing, our uniforms deliver reliability and practicality across every piece. Available in standard designs and customizable options, VS Tailors’ Police Uniforms help officers present a unified, authoritative image while withstanding the rigors of daily service.",
    mainImage: "Images/Police Uniforms.png"
  },
  {
    id: 29,
    name: "Dhol Tasha Kurta Uniforms",
    description: "VS Tailors’ Dhol Tasha Kurta Uniforms are designed to celebrate tradition, energy, and unity, making them ideal for bulk orders for cultural groups, festive processions, and performances. Crafted from high-quality, breathable fabrics, each kurta ensures comfort and ease of movement during long hours of playing and marching. With vibrant colors, strong stitching, and consistent sizing, our uniforms create a striking, cohesive look for the entire team. VS Tailors’ Dhol Tasha Kurta Uniforms combine durability, cultural charm, and style, helping your group perform with pride while making a powerful visual impact in every celebration.",
    mainImage: "Images/Dhol Tasha Uniforms.png"
  },
  {
    id: 30,
    name: "Wedding Package",
    description: "VS Tailors’ Wedding Packages are designed to provide complete elegance, style, and convenience for grooms, bridal parties, and event ensembles. Perfect for bulk orders for weddings, pre-wedding ceremonies, or themed events, each package includes meticulously tailored outfits crafted from premium fabrics with attention to detail in stitching, fit, and design. From sherwanis, Bandhgala suits, and kurta pajamas to coordinated accessories, our packages ensure a cohesive, luxurious look for all participants. VS Tailors’ Wedding Packages combine tradition, modern style, and impeccable craftsmanship, helping you create memorable celebrations with elegance and sophistication for every guest or client.",
    mainImage: "Images/Wedding Package.png"
  },
  {
    id: 31,
    name: "Family Package",
    description: "VS Tailors’ Family Packages are crafted to bring style, elegance, and harmony to your family’s wardrobe, making them ideal for bulk orders for family events, photoshoots, or festive celebrations. Each package includes meticulously tailored outfits for all family members, using premium fabrics and attention to detail to ensure comfort, perfect fit, and coordinated looks. From traditional wear like kurta pajamas and sherwanis to contemporary ensembles, our packages offer versatile options that suit every occasion. VS Tailors’ Family Packages combine timeless craftsmanship with modern aesthetics, allowing your family to celebrate together in coordinated style and sophistication.",
    mainImage: "Images/Family Pack.png"
  }
  
];

// Function to get product ID from URL
function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("id"));
}

// Function to load product details
function loadProduct() {
  const productId = getProductIdFromUrl();
  const product = products.find(p => p.id === productId);

  if (!product) {
    document.querySelector(".product-info").innerHTML =
      "<h2>Product not found!</h2>";
    return;
  }

  // Set product name & description
  document.getElementById("product-name").textContent = product.name;
  document.getElementById("product-description").textContent =
    product.description;

  // Set main image
  document.getElementById("main-image").src = product.mainImage;
}

// Load product on page load
window.onload = loadProduct;

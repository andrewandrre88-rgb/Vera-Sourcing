export type Language = 'en' | 'es' | 'ar' | 'fr' | 'de';

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      pricing: "Pricing",
      contact: "Contact",
      quote: "Get a Free Quote",
      amazon_fba: "Amazon FBA",
      ecommerce: "E-commerce"
    },
    hero: {
      tag: "Based in China • Local Expertise",
      title: "Source Smarter from China",
      subtitle: "— Without the Stress",
      description: "We find trusted factories, negotiate the best prices, and handle quality control and shipping for you. Your local eyes and ears in China.",
      cta_quote: "Get a Free Quote",
      cta_whatsapp: "Chat on WhatsApp",
      alt_logistics: "Logistics and Sourcing"
    },
    why: {
      title: "Why work with Vera?",
      subtitle: "We eliminate the risks of importing from China, giving you peace of mind and better margins.",
      reasons: [
        { title: "Based in China", desc: "We are on the ground. We visit factories personally so you don't have to worry about scams." },
        { title: "Direct Connections", desc: "Skip the middlemen on Alibaba. We work directly with manufacturers for the best pricing." },
        { title: "Transparent Pricing", desc: "No hidden fees. We provide clear breakdowns of product costs, shipping, and our service fees." },
        { title: "Fast Communication", desc: "Fluent English support. We bridge the language and culture gap to ensure your requirements are met." }
      ]
    },
    pricing: {
      title: "Transparent Pricing",
      subtitle: "No hidden commissions. Choose the plan that fits your business stage.",
      plans: {
        basic: "Basic",
        basic_desc: "Perfect for beginners testing a single product idea.",
        basic_features: [
          "Sourcing from 3-5 factories",
          "Price comparison report",
          "Basic factory verification",
          "Email support"
        ],
        standard: "Standard",
        standard_desc: "Our most popular plan for scaling e-commerce brands.",
        standard_features: [
          "Everything in Basic",
          "Professional price negotiation",
          "Sample consolidation",
          "1x On-site quality inspection",
          "WhatsApp priority support"
        ],
        premium: "Premium",
        premium_desc: "Full supply chain management for established businesses.",
        premium_features: [
          "Everything in Standard",
          "Logistics & customs handling",
          "Private labeling & branding",
          "Unlimited inspections",
          "Dedicated account manager"
        ],
        per_project: "/project",
        popular: "Most Popular",
        choose: "Choose"
      }
    },
    contact: {
      title: "Ready to start sourcing from China?",
      subtitle: "Contact Vera today for a free consultation and quote. Let's build your brand together.",
      form_title: "Send a Message",
      name: "Full Name",
      email: "Email Address",
      product: "Product Interest",
      message: "Message",
      submit: "Send Inquiry",
      placeholder_name: "John Doe",
      placeholder_email: "john@example.com",
      placeholder_product: "e.g. Home Decor, Electronics",
      placeholder_message: "Tell us about your project...",
      whatsapp_message: "Hi Vera! I'm {name} ({email}). I'm interested in {product}.\nMessage: {message}"
    },
    footer: {
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      cookies: "Cookie Policy"
    },
    services: {
      title: "Everything you need to scale your inventory",
      subtitle: "From the first sample to global distribution, we handle the entire supply chain.",
      items: [
        { title: "Product Sourcing", desc: "We find reliable factories that match your quality and price requirements." },
        { title: "Price Negotiation", desc: "Our local experts negotiate with suppliers to get you the most competitive factory-direct prices." },
        { title: "Quality Inspection", desc: "We perform rigorous factory audits and pre-shipment inspections to ensure every unit is perfect." },
        { title: "Shipping & Logistics", desc: "From sea freight to air express, we handle all customs and delivery to your warehouse worldwide." },
        { title: "Branding & Labeling", desc: "Custom packaging, private labeling, and branding support to help you build your own brand." },
        { title: "Yiwu Market Guide", desc: "Personalized guidance through the world's largest small commodity market to find unique products." }
      ],
      cta: "View all services",
      ready: "Ready to find your next bestseller?",
      start: "Start Sourcing Now"
    },
    how: {
      title: "Simple 4-Step Process",
      subtitle: "We make importing from China as easy as ordering from a local supplier.",
      steps: [
        { title: "Tell us your product", desc: "Send us your requirements, photos, or links. We'll analyze your needs immediately." },
        { title: "We find suppliers", desc: "We shortlist the top 3-5 factories and provide you with a detailed price comparison." },
        { title: "Approve samples", desc: "We consolidate samples from different factories and ship them to you for final approval." },
        { title: "Production & Shipping", desc: "We oversee production, perform quality checks, and handle the entire shipping process." }
      ]
    },
    testimonials: {
      title: "Trusted by entrepreneurs worldwide",
      subtitle: "Join 200+ businesses sourcing smarter with Vera.",
      items: [
        { name: "Mark T.", role: "Amazon FBA Seller", content: "Vera saved me 30% on my product cost and found a factory that Alibaba search couldn't find. Her quality inspection is top-notch." },
        { name: "Sarah J.", role: "Shopify Store Owner", content: "I was terrified of being scammed. Vera visited the factory, sent me videos, and handled everything. Now I have my own branded products!" },
        { name: "David L.", role: "Small Business Owner", content: "The communication is excellent. I get updates every step of the way. Vera Sourcing is now my permanent partner in China." }
      ]
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        { q: "What is your Minimum Order Quantity (MOQ)?", a: "MOQ depends on the product type. Generally, we work with orders starting from $1,000 or 500 units." },
        { q: "How long does shipping take?", a: "Air express takes 5-7 days, air freight 10-15 days, and sea freight 30-45 days." },
        { q: "Can you help with product customization?", a: "Yes! We specialize in private labeling and OEM services." },
        { q: "Do you personally inspect the quality?", a: "Absolutely. We perform a 100% inspection or AQL sampling depending on your requirements." }
      ]
    },
    intake: {
      title: "Product Inquiry Form",
      subtitle: "Tell us what you're looking for so we can start sourcing immediately.",
      quantity: "Quantity",
      target_price: "Target Price (USD)",
      shipping_country: "Shipping Country",
      requirements: "Special Requirements",
      submit: "Submit Details",
      placeholder_product: "e.g. Ergonomic Chair",
      placeholder_quantity: "e.g. 500",
      placeholder_price: "e.g. $15.00",
      placeholder_country: "e.g. USA",
      placeholder_requirements: "Describe branding, materials, or special features...",
      whatsapp_message: "Hi Vera! I'm interested in sourcing:\nProduct: {product}\nQuantity: {quantity}\nTarget Price: {price}\nShipping Country: {country}\nRequirements: {requirements}"
    },
    success: {
      title: "Thank you for your purchase!",
      subtitle: "Your payment was successful. You will now be redirected to WhatsApp to finalize your product details with Vera.",
      cta: "Continue to WhatsApp",
      whatsapp_message: "Hi Vera, I just completed my payment and I'm ready to start sourcing!"
    },
    floating_whatsapp: {
      label: "Chat with Vera"
    },
    about_vera: {
      title: "Meet Vera",
      subtitle: "Your Trusted Partner in China",
      bio: "Based in the heart of China's manufacturing hub, Vera has spent over a decade building relationships with top-tier factories. Her mission is to make global sourcing accessible, transparent, and stress-free for businesses of all sizes.",
      mission: "Our Mission",
      mission_text: "To bridge the gap between international vision and Chinese manufacturing excellence.",
      experience: "10+ Years Experience",
      experience_text: "Deep knowledge of factory operations, quality standards, and export logistics.",
      stats_clients: "Clients Served",
      stats_factories: "Factories Vetted",
      role: "Founder & Lead Agent"
    },
    logistics: {
      title: "Global Logistics Solutions",
      subtitle: "Simplified",
      description: "We move your products from the factory floor to your warehouse door, anywhere in the world.",
      sea: "Sea Freight",
      sea_desc: "Cost-effective for large volumes. Full Container (FCL) or Less than Container (LCL) options.",
      air: "Air Freight",
      air_desc: "Fast delivery for high-value or time-sensitive inventory. 5-10 days worldwide.",
      express: "Express Courier",
      express_desc: "Door-to-door delivery via DHL, FedEx, or UPS. Perfect for samples and small batches.",
      customs: "Customs Clearance",
      customs_desc: "We handle all paperwork, duties, and taxes to ensure a smooth import process.",
      warehousing: "Free Warehousing",
      warehousing_desc: "We provide up to 30 days of free storage in our Yiwu warehouse to consolidate your orders from multiple suppliers."
    },
    engineering: {
      title: "Engineering & Prototyping",
      subtitle: "From Concept to Reality",
      description: "We don't just find factories; we help you build better products. Our engineering team assists with CAD designs, material selection, and functional prototyping.",
      items: [
        { title: "CAD Design", desc: "Professional 2D and 3D modeling to ensure your product is ready for mass production." },
        { title: "Prototyping", desc: "Rapid 3D printing and CNC samples to test form and function before you commit to tooling." },
        { title: "Tooling Management", desc: "We oversee the creation of molds and dies, ensuring precision and longevity." }
      ]
    },
    ip_protection: {
      title: "IP Protection & Ethics",
      subtitle: "Your Ideas are Safe with Us",
      description: "Protecting your intellectual property is our top priority. We implement strict NDAs and work only with ethical, audited factories.",
      items: [
        { title: "Strict NDAs", desc: "Legally binding non-disclosure agreements with every factory we vet." },
        { title: "Patent Support", desc: "Guidance on registering your trademarks and patents in China." },
        { title: "Ethical Sourcing", desc: "We ensure fair labor practices and environmental standards are met." }
      ]
    },
    industries: {
      title: "Industries We Serve",
      subtitle: "Expertise Across Categories",
      items: [
        { title: "Electronics", desc: "Consumer tech, PCBA, and smart home devices." },
        { title: "Toys & Games", desc: "Plush, plastic, and educational toys meeting global safety standards." },
        { title: "Home & Kitchen", desc: "Furniture, kitchenware, and home decor items." },
        { title: "Outdoor & Sports", desc: "Camping gear, fitness equipment, and sporting goods." },
        { title: "Promotional Products", desc: "Custom branded merchandise for events and marketing." },
        { title: "Amazon FBA", desc: "Specialized prep, labeling, and direct-to-warehouse logistics." },
        { title: "E-commerce", desc: "Photography, videography, and graphic design for online sellers." }
      ]
    },
    amazon_fba: {
      title: "Amazon FBA Prep Services",
      subtitle: "Direct to Amazon Warehouse",
      description: "We help Amazon sellers scale by handling the tedious prep work. We ensure your products meet all Amazon requirements before they leave China.",
      items: [
        { title: "FNSKU Labeling", desc: "We apply Amazon-compliant barcodes to every unit." },
        { title: "Bundling & Kitting", desc: "Combine multiple products into a single set or bundle." },
        { title: "Suffocation Warning", desc: "Apply required warning labels to poly bags." },
        { title: "Direct Shipping", desc: "Ship directly to FBA warehouses worldwide via sea or air." }
      ]
    },
    ecommerce_support: {
      title: "E-commerce Support",
      subtitle: "Visuals that Sell",
      description: "High-quality content is key to e-commerce success. We provide professional studio services to make your products stand out.",
      items: [
        { title: "Product Photography", desc: "White background and lifestyle shots for your listings." },
        { title: "Product Videography", desc: "Short, engaging videos for social media and product pages." },
        { title: "Graphic Design", desc: "Custom packaging design and infographic creation." }
      ]
    }
  },
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      pricing: "Precios",
      contact: "Contacto",
      quote: "Obtener Cotización",
      amazon_fba: "Amazon FBA",
      ecommerce: "E-commerce"
    },
    hero: {
      tag: "Basado en China • Experiencia Local",
      title: "Importe de China de forma Inteligente",
      subtitle: "— Sin Estrés",
      description: "Encontramos fábricas de confianza, negociamos los mejores precios y nos encargamos del control de calidad y el envío por usted.",
      cta_quote: "Cotización Gratis",
      cta_whatsapp: "Chat por WhatsApp"
    },
    why: {
      title: "¿Por qué trabajar con Vera?",
      subtitle: "Eliminamos los riesgos de importar de China, brindándole tranquilidad y mejores márgenes.",
      reasons: [
        { title: "Basado en China", desc: "Estamos en el terreno. Visitamos las fábricas personalmente para evitar estafas." },
        { title: "Conexiones Directas", desc: "Evite intermediarios en Alibaba. Trabajamos directamente con fabricantes." },
        { title: "Precios Transparentes", desc: "Sin tarifas ocultas. Desgloses claros de costos de productos y envío." },
        { title: "Comunicación Rápida", desc: "Soporte fluido. Cerramos la brecha lingüística y cultural." }
      ]
    },
    pricing: {
      title: "Precios Transparentes",
      subtitle: "Sin comisiones ocultas. Elija el plan que se adapte a su etapa de negocio.",
      plans: {
        basic: "Básico",
        basic_desc: "Perfecto para principiantes que prueban una sola idea de producto.",
        basic_features: [
          "Sourcing de 3-5 fábricas",
          "Informe de comparación de precios",
          "Verificación básica de fábrica",
          "Soporte por correo electrónico"
        ],
        standard: "Estándar",
        standard_desc: "Nuestro plan más popular para escalar marcas de comercio electrónico.",
        standard_features: [
          "Todo en Básico",
          "Negociación de precios profesional",
          "Consolidación de muestras",
          "1x Inspección de calidad in situ",
          "Soporte prioritario por WhatsApp"
        ],
        premium: "Premium",
        premium_desc: "Gestión completa de la cadena de suministro para empresas establecidas.",
        premium_features: [
          "Todo en Estándar",
          "Gestión de logística y aduanas",
          "Marca y etiquetado privado",
          "Inspecciones ilimitadas",
          "Gerente de cuenta dedicado"
        ],
        per_project: "/proyecto",
        popular: "Más Popular",
        choose: "Elegir"
      }
    },
    contact: {
      title: "¿Listo para empezar a importar de China?",
      subtitle: "Contacte a Vera hoy para una consulta gratuita. Construyamos su marca juntos.",
      form_title: "Enviar un Mensaje",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      product: "Interés de Producto",
      message: "Mensaje",
      submit: "Enviar Consulta",
      placeholder_name: "Juan Pérez",
      placeholder_email: "juan@ejemplo.com",
      placeholder_product: "ej. Decoración, Electrónica",
      placeholder_message: "Cuéntanos sobre tu proyecto...",
      whatsapp_message: "¡Hola Vera! Soy {name} ({email}). Estoy interesado en {product}.\nMensaje: {message}"
    },
    footer: {
      rights: "Todos los derechos reservados.",
      privacy: "Política de Privacidad",
      terms: "Términos de Servicio",
      cookies: "Política de Cookies"
    },
    services: {
      title: "Todo lo que necesitas para escalar tu inventario",
      subtitle: "Desde la primera muestra hasta la distribución global, manejamos toda la cadena de suministro.",
      items: [
        { title: "Sourcing de Productos", desc: "Encontramos fábricas confiables que coinciden con sus requisitos de calidad y precio." },
        { title: "Negociación de Precios", desc: "Nuestros expertos locales negocian con los proveedores para obtener los precios directos de fábrica más competitivos." },
        { title: "Inspección de Calidad", desc: "Realizamos auditorías de fábrica rigurosas e inspecciones previas al envío para garantizar que cada unidad sea perfecta." },
        { title: "Envío y Logística", desc: "Desde el flete marítimo hasta el expreso aéreo, nos encargamos de todas las aduanas y la entrega a su almacén en todo el mundo." },
        { title: "Marca y Etiquetado", desc: "Embalaje personalizado, etiquetado privado y soporte de marca para ayudarlo a construir su propia marca." },
        { title: "Guía del Mercado de Yiwu", desc: "Guía personalizada a través del mercado de productos básicos más grande del mundo para encontrar productos únicos." }
      ],
      cta: "Ver todos los servicios",
      ready: "¿Listo para encontrar tu próximo éxito de ventas?",
      start: "Comenzar Sourcing Ahora"
    },
    how: {
      title: "Proceso Simple de 4 Pasos",
      subtitle: "Hacemos que importar de China sea tan fácil como pedir a un proveedor local.",
      steps: [
        { title: "Cuéntanos tu producto", desc: "Envíanos tus requisitos, fotos o enlaces. Analizaremos tus necesidades de inmediato." },
        { title: "Buscamos proveedores", desc: "Seleccionamos las mejores 3-5 fábricas y te proporcionamos una comparación de precios detallada." },
        { title: "Aprueba muestras", desc: "Consolidamos muestras de diferentes fábricas y te las enviamos para su aprobación final." },
        { title: "Producción y Envío", desc: "Supervisamos la producción, realizamos controles de calidad y gestionamos todo el proceso de envío." }
      ]
    },
    testimonials: {
      title: "Confiado por emprendedores de todo el mundo",
      subtitle: "Únete a más de 200 empresas que importan de forma inteligente con Vera.",
      items: [
        { name: "Mark T.", role: "Vendedor de Amazon FBA", content: "Vera me ahorró un 30% en el costo de mi producto y encontró una fábrica que la búsqueda de Alibaba no pudo encontrar. Su inspección de calidad es de primera clase." },
        { name: "Sarah J.", role: "Dueña de tienda Shopify", content: "Tenía terror de ser estafada. Vera visitó la fábrica, me envió videos y se encargó de todo. ¡Ahora tengo mis propios productos de marca!" },
        { name: "David L.", role: "Dueño de pequeña empresa", content: "La comunicación es excelente. Recibo actualizaciones en cada paso del camino. Vera Sourcing es ahora mi socio permanente en China." }
      ]
    },
    faq: {
      title: "Preguntas Frecuentes",
      items: [
        { q: "¿Cuál es su cantidad mínima de pedido (MOQ)?", a: "El MOQ depende del tipo de producto. Generalmente, trabajamos con pedidos a partir de $1,000 o 500 unidades." },
        { q: "¿Cuánto tiempo tarda el envío?", a: "El expreso aéreo tarda 5-7 días, el flete aéreo 10-150 días y el flete marítimo 30-45 días." },
        { q: "¿Pueden ayudar con la personalización del producto?", a: "¡Sí! Nos especializamos en servicios de etiquetado privado y OEM." },
        { q: "¿Inspeccionan personalmente la calidad?", a: "Absolutamente. Realizamos una inspección al 100% o muestreo AQL según sus requisitos." }
      ]
    },
    intake: {
      title: "Formulario de Consulta de Producto",
      subtitle: "Cuéntanos qué estás buscando para que podamos comenzar el sourcing de inmediato.",
      quantity: "Cantidad",
      target_price: "Precio Objetivo (USD)",
      shipping_country: "País de Envío",
      requirements: "Requisitos Especiales",
      submit: "Enviar Detalles",
      placeholder_product: "ej. Silla Ergonómica",
      placeholder_quantity: "ej. 500",
      placeholder_price: "ej. $15.00",
      placeholder_country: "ej. España",
      placeholder_requirements: "Describa el branding, materiales o características especiales...",
      whatsapp_message: "¡Hola Vera! Estoy interesado en el abastecimiento:\nProducto: {product}\nCantidad: {quantity}\nPrecio Objetivo: {price}\nPaís de Envío: {country}\nRequisitos: {requirements}"
    },
    success: {
      title: "¡Gracias por su compra!",
      subtitle: "Su pago fue exitoso. Ahora será redirigido a WhatsApp para finalizar los detalles de su producto con Vera.",
      cta: "Continuar a WhatsApp",
      whatsapp_message: "¡Hola Vera, acabo de completar mi pago y estoy listo para comenzar el abastecimiento!"
    },
    floating_whatsapp: {
      label: "Chatear con Vera"
    },
    about_vera: {
      title: "Conoce a Vera",
      subtitle: "Tu Socia de Confianza en China",
      bio: "Ubicada en el corazón del centro manufacturero de China, Vera ha pasado más de una década construyendo relaciones con fábricas de primer nivel. Su misión es hacer que el sourcing global sea accesible, transparente y sin estrés para empresas de todos los tamaños.",
      mission: "Nuestra Misión",
      mission_text: "Cerrar la brecha entre la visión internacional y la excelencia manufacturera china.",
      experience: "Más de 10 Años de Experiencia",
      experience_text: "Profundo conocimiento de las operaciones de fábrica, estándares de calidad y logística de exportación.",
      stats_clients: "Clientes Atendidos",
      stats_factories: "Fábricas Verificadas",
      role: "Fundadora y Agente Principal"
    },
    logistics: {
      title: "Soluciones Logísticas Globales",
      subtitle: "Simplificado",
      description: "Movemos tus productos desde la fábrica hasta la puerta de tu almacén, en cualquier parte del mundo.",
      sea: "Flete Marítimo",
      sea_desc: "Rentable para grandes volúmenes. Opciones de Contenedor Completo (FCL) o Carga Consolidada (LCL).",
      air: "Flete Aéreo",
      air_desc: "Entrega rápida para inventario de alto valor o urgente. 5-10 días a todo el mundo.",
      express: "Mensajería Express",
      express_desc: "Entrega puerta a puerta a través de DHL, FedEx o UPS. Perfecto para muestras y lotes pequeños.",
      customs: "Despacho de Aduanas",
      customs_desc: "Nos encargamos de todo el papeleo, aranceles e impuestos para asegurar un proceso de importación fluido.",
      warehousing: "Almacenamiento Gratuito",
      warehousing_desc: "Ofrecemos hasta 30 días de almacenamiento gratuito en nuestro almacén de Yiwu para consolidar sus pedidos de múltiples proveedores."
    },
    engineering: {
      title: "Ingeniería y Prototipado",
      subtitle: "Del Concepto a la Realidad",
      description: "No solo buscamos fábricas; le ayudamos a construir mejores productos. Nuestro equipo de ingeniería asiste con diseños CAD, selección de materiales y prototipado funcional.",
      items: [
        { title: "Diseño CAD", desc: "Modelado profesional en 2D y 3D para asegurar que su producto esté listo para la producción en masa." },
        { title: "Prototipado", desc: "Impresión 3D rápida y muestras CNC para probar forma y función antes de invertir en moldes." },
        { title: "Gestión de Moldes", desc: "Supervisamos la creación de moldes y matrices, asegurando precisión y longevidad." }
      ]
    },
    ip_protection: {
      title: "Protección de IP y Ética",
      subtitle: "Sus Ideas están Seguras con Nosotros",
      description: "Proteger su propiedad intelectual es nuestra máxima prioridad. Implementamos acuerdos de confidencialidad estrictos y trabajamos solo con fábricas éticas y auditadas.",
      items: [
        { title: "Acuerdos de Confidencialidad", desc: "Acuerdos legalmente vinculantes con cada fábrica que verificamos." },
        { title: "Soporte de Patentes", desc: "Guía sobre el registro de sus marcas y patentes en China." },
        { title: "Sourcing Ético", desc: "Aseguramos que se cumplan las prácticas laborales justas y los estándares ambientales." }
      ]
    },
    industries: {
      title: "Industrias que Servimos",
      subtitle: "Experiencia en Diversas Categorías",
      items: [
        { title: "Electrónica", desc: "Tecnología de consumo, PCBA y dispositivos para el hogar inteligente." },
        { title: "Juguetes y Juegos", desc: "Juguetes de peluche, plástico y educativos que cumplen con los estándares globales de seguridad." },
        { title: "Hogar y Cocina", desc: "Muebles, utensilios de cocina y artículos de decoración para el hogar." },
        { title: "Aire Libre y Deportes", desc: "Equipo de camping, equipo de fitness y artículos deportivos." },
        { title: "Productos Promocionales", desc: "Mercancía personalizada para eventos y marketing." },
        { title: "Amazon FBA", desc: "Preparación especializada, etiquetado y logística directa al almacén." },
        { title: "E-commerce", desc: "Fotografía, videografía y diseño gráfico para vendedores en línea." }
      ]
    },
    amazon_fba: {
      title: "Servicios de Preparación Amazon FBA",
      subtitle: "Directo al Almacén de Amazon",
      description: "Ayudamos a los vendedores de Amazon a escalar encargándonos del tedioso trabajo de preparación. Nos aseguramos de que sus productos cumplan con todos los requisitos de Amazon antes de salir de China.",
      items: [
        { title: "Etiquetado FNSKU", desc: "Aplicamos códigos de barras compatibles con Amazon a cada unidad." },
        { title: "Bundling y Kitting", desc: "Combine múltiples productos en un solo juego o paquete." },
        { title: "Advertencia de Asfixia", desc: "Aplique las etiquetas de advertencia requeridas a las bolsas de polietileno." },
        { title: "Envío Directo", desc: "Envíe directamente a los almacenes de FBA en todo el mundo por mar o aire." }
      ]
    },
    ecommerce_support: {
      title: "Soporte para E-commerce",
      subtitle: "Visuales que Venden",
      description: "El contenido de alta calidad es clave para el éxito del comercio electrónico. Ofrecemos servicios de estudio profesional para que sus productos destaquen.",
      items: [
        { title: "Fotografía de Producto", desc: "Fotos con fondo blanco y de estilo de vida para sus listados." },
        { title: "Videografía de Producto", desc: "Videos cortos y atractivos para redes sociales y páginas de productos." },
        { title: "Diseño Gráfico", desc: "Diseño de empaques personalizados y creación de infografías." }
      ]
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      services: "Services",
      about: "À Propos",
      pricing: "Tarifs",
      contact: "Contact",
      quote: "Devis Gratuit",
      amazon_fba: "Amazon FBA",
      ecommerce: "E-commerce"
    },
    hero: {
      tag: "Basé en Chine • Expertise Locale",
      title: "Sourcez plus intelligemment en Chine",
      subtitle: "— Sans Stress",
      description: "Nous trouvons des usines de confiance, négocions les meilleurs prix et gérons le contrôle qualité et l'expédition pour vous.",
      cta_quote: "Devis Gratuit",
      cta_whatsapp: "Chat WhatsApp"
    },
    why: {
      title: "Pourquoi travailler avec Vera ?",
      subtitle: "Nous éliminons les risques d'importation de Chine, vous offrant tranquillité d'esprit et meilleures marges.",
      reasons: [
        { title: "Basé en Chine", desc: "Nous sommes sur place. Nous visitons les usines personnellement pour éviter les arnaques." },
        { title: "Connexions Directes", desc: "Évitez les intermédiaires sur Alibaba. Nous travaillons directement avec les fabricants." },
        { title: "Tarification Transparente", desc: "Pas de frais cachés. Détails clairs des coûts des produits et de l'expédition." },
        { title: "Communication Rapide", desc: "Support fluide. Nous comblons le fossé linguistique et culturel." }
      ]
    },
    pricing: {
      title: "Tarification Transparente",
      subtitle: "Pas de commissions cachées. Choisissez le plan qui convient à votre entreprise.",
      plans: {
        basic: "Basique",
        basic_desc: "Parfait pour les débutants testant une seule idée de produit.",
        basic_features: [
          "Sourcing auprès de 3-5 usines",
          "Rapport de comparaison de prix",
          "Vérification de base de l'usine",
          "Support par email"
        ],
        standard: "Standard",
        standard_desc: "Notre plan le plus populaire pour développer les marques e-commerce.",
        standard_features: [
          "Tout ce qui est dans le pack Basique",
          "Négociation de prix professionnelle",
          "Consolidation d'échantillons",
          "1x Inspection qualité sur site",
          "Support prioritaire WhatsApp"
        ],
        premium: "Premium",
        premium_desc: "Gestion complète de la chaîne d'approvisionnement pour les entreprises établies.",
        premium_features: [
          "Tout ce qui est dans le pack Standard",
          "Gestion de la logistique et des douanes",
          "Marquage et étiquetage privé",
          "Inspections illimitées",
          "Gestionnaire de compte dédié"
        ],
        per_project: "/projet",
        popular: "Plus Populaire",
        choose: "Choisir"
      }
    },
    contact: {
      title: "Prêt à commencer à sourcer en Chine ?",
      subtitle: "Contactez Vera aujourd'hui pour une consultation gratuite. Construisons votre marque ensemble.",
      form_title: "Envoyer un Message",
      name: "Nom Complet",
      email: "Adresse Email",
      product: "Produit d'Intérêt",
      message: "Message",
      submit: "Envoyer la Demande",
      placeholder_name: "Jean Dupont",
      placeholder_email: "jean@exemple.com",
      placeholder_product: "ex. Décoration, Électronique",
      placeholder_message: "Parlez-nous de votre projet...",
      whatsapp_message: "Salut Vera ! Je suis {name} ({email}). Je suis intéressé par {product}.\nMessage : {message}"
    },
    footer: {
      rights: "Tous droits réservés.",
      privacy: "Politique de Confidentialité",
      terms: "Conditions d'Utilisation",
      cookies: "Politique relative aux Cookies"
    },
    services: {
      title: "Tout ce dont vous avez besoin pour développer votre inventaire",
      subtitle: "Du premier échantillon à la distribution mondiale, nous gérons toute la chaîne d'approvisionnement.",
      items: [
        { title: "Sourcing de Produits", desc: "Nous trouvons des usines fiables qui correspondent à vos exigences de qualité et de prix." },
        { title: "Négociation de Prix", desc: "Nos experts locaux négocient avec les fournisseurs pour vous obtenir les prix directs d'usine les plus compétitifs." },
        { title: "Inspection Qualité", desc: "Nous effectuons des audits d'usine rigoureux et des inspections avant expédition pour nous assurer que chaque unité est parfaite." },
        { title: "Expédition & Logistique", desc: "Du fret maritime à l'express aérien, nous gérons toutes les douanes et la livraison à votre entrepôt dans le monde entier." },
        { title: "Branding & Étiquetage", desc: "Emballage personnalisé, étiquetage privé et support de marque pour vous aider à construire votre propre marque." }
      ],
      cta: "Voir tous les services",
      ready: "Prêt à trouver votre prochain best-seller ?",
      start: "Commencer le Sourcing Maintenant"
    },
    how: {
      title: "Processus simple en 4 étapes",
      subtitle: "Nous rendons l'importation de Chine aussi facile que de commander auprès d'un fournisseur local.",
      steps: [
        { title: "Dites-nous votre produit", desc: "Envoyez-nous vos besoins, photos ou liens. Nous analyserons vos besoins immédiatement." },
        { title: "Nous trouvons des fournisseurs", desc: "Nous sélectionnons les 3-5 meilleures usines et vous fournissons une comparaison de prix détaillée." },
        { title: "Approuvez les échantillons", desc: "Nous regroupons les échantillons de différentes usines et vous les envoyons pour approbation finale." },
        { title: "Production & Expédition", desc: "Nous supervisons la production, effectuons des contrôles qualité et gérons tout le processus d'expédition." }
      ]
    },
    testimonials: {
      title: "Approuvé par des entrepreneurs du monde entier",
      subtitle: "Rejoignez plus de 200 entreprises qui sourcent plus intelligemment avec Vera.",
      items: [
        { name: "Mark T.", role: "Vendeur Amazon FBA", content: "Vera m'a fait économiser 30 % sur le coût de mon produit et a trouvé une usine que la recherche Alibaba ne pouvait pas trouver. Son inspection de la qualité est de premier ordre." },
        { name: "Sarah J.", role: "Propriétaire de boutique Shopify", content: "J'avais peur d'être victime d'une arnaque. Vera a visité l'usine, m'a envoyé des vidéos et a tout géré. Maintenant, j'ai mes propres produits de marque !" },
        { name: "David L.", role: "Propriétaire de petite entreprise", content: "La communication est excellente. Je reçois des mises à jour à chaque étape. Vera Sourcing est désormais mon partenaire permanent en Chine." }
      ]
    },
    faq: {
      title: "Questions Fréquemment Posées",
      items: [
        { q: "Quelle est votre quantité minimale de commande (MOQ) ?", a: "Le MOQ dépend du type de produit. Généralement, nous travaillons avec des commandes à partir de 1 000 $ ou 500 unités." },
        { q: "Combien de temps prend l'expédition ?", a: "L'express aérien prend 5-7 jours, le fret aérien 10-15 jours et le fret maritime 30-45 jours." },
        { q: "Pouvez-vous aider à la personnalisation du produit ?", a: "Oui ! Nous nous spécialisons dans les services de marque privée et OEM." },
        { q: "Inspectez-vous personnellement la qualité ?", a: "Absolument. Nous effectuons une inspection à 100 % ou un échantillonnage AQL selon vos besoins." }
      ]
    },
    intake: {
      title: "Formulaire de Demande de Produit",
      subtitle: "Dites-nous ce que vous recherchez afin que nous puissions commencer le sourcing immédiatement.",
      quantity: "Quantité",
      target_price: "Prix Cible (USD)",
      shipping_country: "Pays d'Expédition",
      requirements: "Exigences Particulières",
      submit: "Envoyer les Détails",
      placeholder_product: "ex. Chaise Ergonomique",
      placeholder_quantity: "ex. 500",
      placeholder_price: "ex. $15.00",
      placeholder_country: "ex. France",
      placeholder_requirements: "Décrivez le branding, les matériaux ou les caractéristiques spéciales...",
      whatsapp_message: "Salut Vera ! Je suis intéressé par le sourcing :\nProduit : {product}\nQuantité : {quantity}\nPrix Cible : {price}\nPays d'Expédition : {country}\nExigences : {requirements}"
    },
    success: {
      title: "Merci pour votre achat !",
      subtitle: "Votre paiement a été effectué avec succès. Vous allez maintenant être redirigé vers WhatsApp pour finaliser les détails de votre produit avec Vera.",
      cta: "Continuer vers WhatsApp",
      whatsapp_message: "Salut Vera, je viens de terminer mon paiement et je suis prêt à commencer le sourcing !"
    },
    floating_whatsapp: {
      label: "Discuter avec Vera"
    },
    about_vera: {
      title: "Rencontrez Vera",
      subtitle: "Votre Partenaire de Confiance en Chine",
      bio: "Basée au cœur du centre manufacturier de la Chine, Vera a passé plus d'une décennie à établir des relations avec des usines de premier plan. Sa mission est de rendre le sourcing mondial accessible, transparent et sans stress pour les entreprises de toutes tailles.",
      mission: "Notre Mission",
      mission_text: "Combler le fossé entre la vision internationale et l'excellence manufacturière chinoise.",
      experience: "Plus de 10 Ans d'Expérience",
      experience_text: "Connaissance approfondie des opérations d'usine, des normes de qualité et de la logistique d'exportation.",
      stats_clients: "Clients Servis",
      stats_factories: "Usines Vérifiées",
      role: "Fondatrice et Agent Principal"
    },
    logistics: {
      title: "Solutions Logistiques Mondiales",
      subtitle: "Simplifié",
      description: "Nous transportons vos produits de l'usine à la porte de votre entrepôt, partout dans le monde.",
      sea: "Fret Maritime",
      sea_desc: "Rentable pour les gros volumes. Options de conteneur complet (FCL) ou de groupage (LCL).",
      air: "Fret Aérien",
      air_desc: "Livraison rapide pour les stocks de grande valeur ou urgents. 5-10 jours dans le monde entier.",
      express: "Courrier Express",
      express_desc: "Livraison porte-à-porte via DHL, FedEx ou UPS. Parfait pour les échantillons et les petits lots.",
      customs: "Dédouanement",
      customs_desc: "Nous gérons tous les documents, droits et taxes pour assurer un processus d'importation fluide.",
      warehousing: "Entreposage Gratuit",
      warehousing_desc: "Nous offrons jusqu'à 30 jours de stockage gratuit dans notre entrepôt de Yiwu pour regrouper vos commandes de plusieurs fournisseurs."
    },
    engineering: {
      title: "Ingénierie et Prototypage",
      subtitle: "Du Concept à la Réalité",
      description: "Nous ne nous contentons pas de trouver des usines ; nous vous aidons à construire de meilleurs produits. Notre équipe d'ingénierie vous assiste dans la conception CAO, le choix des matériaux et le prototypage fonctionnel.",
      items: [
        { title: "Conception CAO", desc: "Modélisation 2D et 3D professionnelle pour garantir que votre produit est prêt pour la production de masse." },
        { title: "Prototypage", desc: "Impression 3D rapide et échantillons CNC pour tester la forme et la fonction avant de s'engager dans l'outillage." },
        { title: "Gestion de l'Outillage", desc: "Nous supervisons la création de moules et de matrices, garantissant précision et longévité." }
      ]
    },
    ip_protection: {
      title: "Protection de la PI et Éthique",
      subtitle: "Vos Idées sont en Sécurité avec Nous",
      description: "La protection de votre propriété intellectuelle est notre priorité absolue. Nous mettons en œuvre des accords de confidentialité stricts et ne travaillons qu'avec des usines éthiques et auditées.",
      items: [
        { title: "Accords de Confidentialité Stricts", desc: "Accords de non-divulgation juridiquement contraignants avec chaque usine que nous sélectionnons." },
        { title: "Support aux Brevets", desc: "Conseils sur l'enregistrement de vos marques et brevets en Chine." },
        { title: "Sourcing Éthique", desc: "Nous veillons au respect des pratiques de travail équitables et des normes environnementales." }
      ]
    },
    industries: {
      title: "Secteurs que Nous Servons",
      subtitle: "Expertise dans Toutes les Catégories",
      items: [
        { title: "Électronique", desc: "Technologies grand public, PCBA et appareils domestiques intelligents." },
        { title: "Jouets et Jeux", desc: "Jouets en peluche, en plastique et éducatifs répondant aux normes de sécurité mondiales." },
        { title: "Maison et Cuisine", desc: "Meubles, ustensiles de cuisine et articles de décoration intérieure." },
        { title: "Plein Air et Sports", desc: "Matériel de camping, équipement de fitness et articles de sport." },
        { title: "Produits Promotionnels", desc: "Marchandises personnalisées pour les événements et le marketing." },
        { title: "Amazon FBA", desc: "Préparation spécialisée, étiquetage et logistique directe à l'entrepôt." },
        { title: "E-commerce", desc: "Photographie, vidéographie et design graphique pour les vendeurs en ligne." }
      ]
    },
    amazon_fba: {
      title: "Services de Préparation Amazon FBA",
      subtitle: "Directement à l'Entrepôt Amazon",
      description: "Nous aidons les vendeurs Amazon à se développer en gérant le travail de préparation fastidieux. Nous nous assurons que vos produits répondent à toutes les exigences d'Amazon avant de quitter la Chine.",
      items: [
        { title: "Étiquetage FNSKU", desc: "Nous appliquons des codes-barres conformes à Amazon sur chaque unité." },
        { title: "Regroupement & Kitting", desc: "Combinez plusieurs produits en un seul ensemble ou lot." },
        { title: "Avertissement de Suffocation", desc: "Appliquez les étiquettes d'avertissement requises sur les sacs en polyéthylène." },
        { title: "Expédition Directe", desc: "Expédiez directement aux entrepôts FBA dans le monde entier par mer ou par air." }
      ]
    },
    ecommerce_support: {
      title: "Support E-commerce",
      subtitle: "Des Visuels qui Vendent",
      description: "Un contenu de haute qualité est la clé du succès du commerce électronique. Nous fournissons des services de studio professionnels pour faire ressortir vos produits.",
      items: [
        { title: "Photographie de Produit", desc: "Photos sur fond blanc et mises en situation pour vos fiches produits." },
        { title: "Vidéographie de Produit", desc: "Vidéos courtes et attrayantes pour les réseaux sociaux et les pages produits." },
        { title: "Design Graphique", desc: "Conception d'emballages personnalisés et création d'infographies." }
      ]
    }
  },
  de: {
    nav: {
      home: "Startseite",
      services: "Dienstleistungen",
      about: "Über uns",
      pricing: "Preise",
      contact: "Kontakt",
      quote: "Angebot anfordern",
      amazon_fba: "Amazon FBA",
      ecommerce: "E-Commerce"
    },
    hero: {
      tag: "Sitz in China • Lokale Expertise",
      title: "Smarter Sourcing aus China",
      subtitle: "— Ohne Stress",
      description: "Wir finden vertrauenswürdige Fabriken, verhandeln die besten Preise und kümmern uns um Qualitätskontrolle und Versand für Sie.",
      cta_quote: "Gratis Angebot",
      cta_whatsapp: "WhatsApp Chat"
    },
    why: {
      title: "Warum mit Vera arbeiten?",
      subtitle: "Wir eliminieren die Risiken beim Import aus China und bieten Ihnen Sicherheit und bessere Margen.",
      reasons: [
        { title: "Sitz in China", desc: "Wir sind vor Ort. Wir besuchen Fabriken persönlich, um Betrug zu vermeiden." },
        { title: "Direkte Verbindungen", desc: "Sparen Sie sich Zwischenhändler auf Alibaba. Wir arbeiten direkt mit Herstellern." },
        { title: "Transparente Preise", desc: "Keine versteckten Gebühren. Klare Aufschlüsselung der Produkt- und Versandkosten." },
        { title: "Schnelle Kommunikation", desc: "Fließender Support. Wir überbrücken die Sprach- und Kulturbarriere." }
      ]
    },
    pricing: {
      title: "Transparente Preise",
      subtitle: "Keine versteckten Provisionen. Wählen Sie den Plan, der zu Ihrem Unternehmen passt.",
      plans: {
        basic: "Basis",
        basic_desc: "Perfekt für Anfänger, die eine einzelne Produktidee testen.",
        basic_features: [
          "Sourcing von 3-5 Fabriken",
          "Preisvergleichsbericht",
          "Basis-Fabriküberprüfung",
          "E-Mail-Support"
        ],
        standard: "Standard",
        standard_desc: "Unser beliebtester Plan für die Skalierung von E-Commerce-Marken.",
        standard_features: [
          "Alles in Basis enthalten",
          "Professionelle Preisverhandlung",
          "Musterkonsolidierung",
          "1x Qualitätsprüfung vor Ort",
          "WhatsApp-Prioritätssupport"
        ],
        premium: "Premium",
        premium_desc: "Vollständiges Lieferkettenmanagement für etablierte Unternehmen.",
        premium_features: [
          "Alles in Standard enthalten",
          "Logistik- und Zollabwicklung",
          "Private Labeling & Branding",
          "Unbegrenzte Inspektionen",
          "Dedizierter Account Manager"
        ],
        per_project: "/Projekt",
        popular: "Beliebtest",
        choose: "Wählen"
      }
    },
    contact: {
      title: "Bereit für Sourcing aus China?",
      subtitle: "Kontaktieren Sie Vera heute für eine kostenlose Beratung. Lassen Sie uns Ihre Marke aufbauen.",
      form_title: "Nachricht senden",
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      product: "Produktinteresse",
      message: "Nachricht",
      submit: "Anfrage senden",
      placeholder_name: "Max Mustermann",
      placeholder_email: "max@beispiel.de",
      placeholder_product: "z.B. Heimdeko, Elektronik",
      placeholder_message: "Erzählen Sie uns von Ihrem Projekt...",
      whatsapp_message: "Hallo Vera! Ich bin {name} ({email}). Ich interessiere mich für {product}.\nNachricht: {message}"
    },
    footer: {
      rights: "Alle Rechte vorbehalten.",
      privacy: "Datenschutzrichtlinie",
      terms: "Nutzungsbedingungen",
      cookies: "Cookie-Richtlinie"
    },
    services: {
      title: "Alles, was Sie brauchen, um Ihren Lagerbestand zu skalieren",
      subtitle: "Vom ersten Muster bis zum weltweiten Vertrieb übernehmen wir die gesamte Lieferkette.",
      items: [
        { title: "Produkt-Sourcing", desc: "Wir finden zuverlässige Fabriken, die Ihren Qualitäts- und Preisanforderungen entsprechen." },
        { title: "Preisverhandlung", desc: "Unsere lokalen Experten verhandeln mit Lieferanten, um Ihnen die wettbewerbsfähigsten Preise direkt ab Werk zu sichern." },
        { title: "Qualitätsprüfung", desc: "Wir führen strenge Fabrikaudits und Inspektionen vor dem Versand durch, um sicherzustellen, dass jede Einheit perfekt ist." },
        { title: "Versand & Logistik", desc: "Vom Seefracht- bis zum Luft-Express übernehmen wir alle Zollformalitäten und die Lieferung an Ihr Lager weltweit." },
        { title: "Branding & Etikettierung", desc: "Individuelle Verpackung, Private Labeling und Branding-Unterstützung, um Ihnen beim Aufbau Ihrer eigenen Marke zu helfen." }
      ],
      cta: "Alle Dienstleistungen ansehen",
      ready: "Bereit, Ihren nächsten Bestseller zu finden?",
      start: "Jetzt Sourcing starten"
    },
    how: {
      title: "Einfacher 4-Stufen-Prozess",
      subtitle: "Wir machen den Import aus China so einfach wie die Bestellung bei einem lokalen Lieferanten.",
      steps: [
        { title: "Nennen Sie uns Ihr Produkt", desc: "Senden Sie uns Ihre Anforderungen, Fotos oder Links. Wir analysieren Ihren Bedarf sofort." },
        { title: "Wir finden Lieferanten", desc: "Wir stellen die besten 3-5 Fabriken in die engere Auswahl und erstellen einen detaillierten Preisvergleich." },
        { title: "Muster freigeben", desc: "Wir konsolidieren Muster aus verschiedenen Fabriken und senden sie Ihnen zur endgültigen Genehmigung zu." },
        { title: "Produktion & Versand", desc: "Wir überwachen die Produktion, führen Qualitätsprüfungen durch und wickeln den gesamten Versandprozess ab." }
      ]
    },
    testimonials: {
      title: "Vertraut von Unternehmern weltweit",
      subtitle: "Schließen Sie sich über 200 Unternehmen an, die mit Vera smarter sourcen.",
      items: [
        { name: "Mark T.", role: "Amazon FBA Verkäufer", content: "Vera hat mir 30 % meiner Produktkosten gespart und eine Fabrik gefunden, die die Alibaba-Suche nicht finden konnte. Ihre Qualitätsprüfung ist erstklassig." },
        { name: "Sarah J.", role: "Shopify-Shop-Besitzer", content: "Ich hatte schreckliche Angst, betrogen zu werden. Vera besuchte die Fabrik, schickte mir Videos und erledigte alles. Jetzt habe ich meine eigenen Markenprodukte!" },
        { name: "David L.", role: "Kleinunternehmer", content: "Die Kommunikation ist ausgezeichnet. Ich erhalte bei jedem Schritt Updates. Vera Sourcing ist jetzt mein fester Partner in China." }
      ]
    },
    faq: {
      title: "Häufig gestellte Fragen",
      items: [
        { q: "Was ist Ihre Mindestbestellmenge (MOQ)?", a: "Die MOQ hängt von der Produktart ab. Im Allgemeinen arbeiten wir mit Bestellungen ab 1.000 $ oder 500 Einheiten." },
        { q: "Wie lange dauert der Versand?", a: "Luft-Express dauert 5-7 Tage, Luftfracht 10-15 Tage und Seefracht 30-45 Tage." },
        { q: "Können Sie bei der Produktanpassung helfen?", a: "Ja! Wir sind auf Private Labeling und OEM-Dienstleistungen spezialisiert." },
        { q: "Prüfen Sie die Qualität persönlich?", a: "Absolut. Wir führen eine 100%ige Inspektion oder AQL-Stichproben durch, je nach Ihren Anforderungen." }
      ]
    },
    intake: {
      title: "Produktanfrageformular",
      subtitle: "Sagen Sie uns, was Sie suchen, damit wir sofort mit dem Sourcing beginnen können.",
      quantity: "Menge",
      target_price: "Zielpreis (USD)",
      shipping_country: "Lieferland",
      requirements: "Besondere Anforderungen",
      submit: "Details absenden",
      placeholder_product: "z.B. Ergonomischer Stuhl",
      placeholder_quantity: "z.B. 500",
      placeholder_price: "z.B. $15.00",
      placeholder_country: "z.B. Deutschland",
      placeholder_requirements: "Beschreiben Sie Branding, Materialien oder besondere Merkmale...",
      whatsapp_message: "Hallo Vera! Ich bin am Sourcing interessiert:\nProdukt: {product}\nAnzahl: {quantity}\nZielpreis: {price}\nVersandland: {country}\nAnforderungen: {requirements}"
    },
    success: {
      title: "Vielen Dank für Ihren Kauf!",
      subtitle: "Ihre Zahlung war erfolgreich. Sie werden nun zu WhatsApp weitergeleitet, um Ihre Produktdetails mit Vera zu finalisieren.",
      cta: "Weiter zu WhatsApp",
      whatsapp_message: "Hallo Vera, ich habe gerade meine Zahlung abgeschlossen und bin bereit für das Sourcing!"
    },
    floating_whatsapp: {
      label: "Mit Vera chatten"
    },
    about_vera: {
      title: "Treffen Sie Vera",
      subtitle: "Ihr vertrauenswürdiger Partner in China",
      bio: "Im Herzen des chinesischen Fertigungszentrums ansässig, hat Vera über ein Jahrzehnt damit verbracht, Beziehungen zu erstklassigen Fabriken aufzubauen. Ihre Mission ist es, globales Sourcing für Unternehmen jeder Größe zugänglich, transparent und stressfrei zu machen.",
      mission: "Unsere Mission",
      mission_text: "Die Lücke zwischen internationaler Vision und chinesischer Fertigungsexzellenz zu schließen.",
      experience: "10+ Jahre Erfahrung",
      experience_text: "Tiefgehende Kenntnisse über Fabrikabläufe, Qualitätsstandards und Exportlogistik.",
      stats_clients: "Betreute Kunden",
      stats_factories: "Geprüfte Fabriken",
      role: "Gründerin & Lead Agent"
    },
    logistics: {
      title: "Globale Logistiklösungen",
      subtitle: "Vereinfacht",
      description: "Wir bringen Ihre Produkte vom Fabrikgelände bis zu Ihrer Lagertür, überall auf der Welt.",
      sea: "Seefracht",
      sea_desc: "Kosteneffizient für große Volumina. Optionen für Vollcontainer (FCL) oder Beiladung (LCL).",
      air: "Luftfracht",
      air_desc: "Schnelle Lieferung für hochwertige oder zeitkritische Bestände. 5-10 Tage weltweit.",
      express: "Express-Kurier",
      express_desc: "Tür-zu-Tür-Lieferung über DHL, FedEx oder UPS. Perfekt für Muster und kleine Chargen.",
      customs: "Zollabwicklung",
      customs_desc: "Wir erledigen alle Formalitäten, Zölle und Steuern, um einen reibungslosen Importprozess zu gewährleisten.",
      warehousing: "Kostenlose Lagerung",
      warehousing_desc: "Wir bieten bis zu 30 Tage kostenlose Lagerung in unserem Lager in Yiwu an, um Ihre Bestellungen von mehreren Lieferanten zu konsolidieren."
    },
    engineering: {
      title: "Engineering & Prototyping",
      subtitle: "Vom Konzept zur Realität",
      description: "Wir finden nicht nur Fabriken; wir helfen Ihnen, bessere Produkte zu bauen. Unser Engineering-Team unterstützt Sie bei CAD-Designs, Materialauswahl und funktionalem Prototyping.",
      items: [
        { title: "CAD-Design", desc: "Professionelle 2D- und 3D-Modellierung, um sicherzustellen, dass Ihr Produkt bereit für die Massenproduktion ist." },
        { title: "Prototyping", desc: "Schneller 3D-Druck und CNC-Muster, um Form und Funktion zu testen, bevor Sie in Werkzeuge investieren." },
        { title: "Werkzeugmanagement", desc: "Wir überwachen die Erstellung von Formen und Matrizen und gewährleisten Präzision und Langlebigkeit." }
      ]
    },
    ip_protection: {
      title: "IP-Schutz & Ethik",
      subtitle: "Ihre Ideen sind bei uns sicher",
      description: "Der Schutz Ihres geistigen Eigentums ist unsere oberste Priorität. Wir setzen strenge Geheimhaltungsvereinbarungen um und arbeiten nur mit ethischen, geprüften Fabriken zusammen.",
      items: [
        { title: "Strenge NDAs", desc: "Rechtlich bindende Geheimhaltungsvereinbarungen mit jeder von uns geprüften Fabrik." },
        { title: "Patent-Unterstützung", desc: "Beratung bei der Registrierung Ihrer Marken und Patente in China." },
        { title: "Ethisches Sourcing", desc: "Wir stellen sicher, dass faire Arbeitspraktiken und Umweltstandards eingehalten werden." }
      ]
    },
    industries: {
      title: "Branchen, die wir bedienen",
      subtitle: "Expertise über Kategorien hinweg",
      items: [
        { title: "Elektronik", desc: "Unterhaltungselektronik, PCBA und Smart-Home-Geräte." },
        { title: "Spielzeug & Spiele", desc: "Plüsch-, Kunststoff- und Lernspielzeug, das globale Sicherheitsstandards erfüllt." },
        { title: "Haus & Küche", desc: "Möbel, Küchenutensilien und Dekorationsartikel." },
        { title: "Outdoor & Sport", desc: "Campingausrüstung, Fitnessgeräte und Sportartikel." },
        { title: "Werbeartikel", desc: "Individuell gebrandete Artikel für Events und Marketing." },
        { title: "Amazon FBA", desc: "Spezialisierte Vorbereitung, Etikettierung und Logistik direkt zum Lager." },
        { title: "E-Commerce", desc: "Fotografie, Videografie und Grafikdesign für Online-Verkäufer." }
      ]
    },
    amazon_fba: {
      title: "Amazon FBA Vorbereitungsservice",
      subtitle: "Direkt zum Amazon Lager",
      description: "Wir helfen Amazon-Verkäufern bei der Skalierung, indem wir die mühsame Vorbereitungsarbeit übernehmen. Wir stellen sicher, dass Ihre Produkte alle Amazon-Anforderungen erfüllen, bevor sie China verlassen.",
      items: [
        { title: "FNSKU Etikettierung", desc: "Wir bringen Amazon-konforme Barcodes auf jeder Einheit an." },
        { title: "Bündelung & Kitting", desc: "Kombinieren Sie mehrere Produkte zu einem einzigen Set oder Bündel." },
        { title: "Erstickungswarnung", desc: "Bringen Sie die erforderlichen Warnetiketten auf Polybeuteln an." },
        { title: "Direktversand", desc: "Versand direkt an FBA-Lager weltweit per See- oder Luftfracht." }
      ]
    },
    ecommerce_support: {
      title: "E-Commerce Unterstützung",
      subtitle: "Visuals, die verkaufen",
      description: "Hochwertige Inhalte sind der Schlüssel zum Erfolg im E-Commerce. Wir bieten professionelle Studio-Dienstleistungen an, damit Ihre Produkte auffallen.",
      items: [
        { title: "Produktfotografie", desc: "Weißer Hintergrund und Lifestyle-Aufnahmen für Ihre Angebote." },
        { title: "Produktvideografie", desc: "Kurze, ansprechende Videos für soziale Medien und Produktseiten." },
        { title: "Grafikdesign", desc: "Individuelles Verpackungsdesign und Erstellung von Infografiken." }
      ]
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      about: "عن فيرا",
      pricing: "الأسعار",
      contact: "اتصل بنا",
      quote: "احصل على عرض سعر",
      amazon_fba: "أمازون FBA",
      ecommerce: "تجارة إلكترونية"
    },
    hero: {
      tag: "مقرنا في الصين • خبرة محلية",
      title: "استورد بذكاء من الصين",
      subtitle: "— بدون ضغوط",
      description: "نجد لك مصانع موثوقة، نفاوض على أفضل الأسعار، ونتولى فحص الجودة والشحن نيابة عنك. نحن عينك وأذنك في الصين.",
      cta_quote: "عرض سعر مجاني",
      cta_whatsapp: "تحدث عبر واتساب"
    },
    why: {
      title: "لماذا تعمل مع فيرا؟",
      subtitle: "نحن نزيل مخاطر الاستيراد من الصين، مما يمنحك راحة البال وهوامش ربح أفضل.",
      reasons: [
        { title: "مقرنا في الصين", desc: "نحن متواجدون على أرض الواقع. نزور المصانع شخصياً لتجنب عمليات الاحتيال." },
        { title: "علاقات مباشرة", desc: "تجاوز الوسطاء في علي بابا. نحن نعمل مباشرة مع المصنعين للحصول على أفضل الأسعار." },
        { title: "أسعار شفافة", desc: "لا توجد رسوم خفية. نقدم تفاصيل واضحة لتكاليف المنتج والشحن ورسوم الخدمة." },
        { title: "تواصل سريع", desc: "دعم باللغة الإنجليزية بطلاقة. نحن نسد الفجوة اللغوية والثقافية لضمان تلبية متطلباتك." }
      ]
    },
    pricing: {
      title: "أسعار شفافة",
      subtitle: "لا توجد عمولات خفية. اختر الخطة التي تناسب مرحلة عملك.",
      plans: {
        basic: "أساسي",
        basic_desc: "مثالي للمبتدئين الذين يختبرون فكرة منتج واحد.",
        basic_features: [
          "البحث في 3-5 مصانع",
          "تقرير مقارنة الأسعار",
          "التحقق الأساسي من المصنع",
          "دعم عبر البريد الإلكتروني"
        ],
        standard: "قياسي",
        standard_desc: "خطتنا الأكثر شعبية لتوسيع العلامات التجارية للتجارة الإلكترونية.",
        standard_features: [
          "كل ما في الخطة الأساسية",
          "تفاوض مهني على الأسعار",
          "تجميع العينات",
          "فحص جودة واحد في الموقع",
          "دعم ذو أولوية عبر واتساب"
        ],
        premium: "مميز",
        premium_desc: "إدارة كاملة لسلسلة التوريد للشركات القائمة.",
        premium_features: [
          "كل ما في الخطة القياسية",
          "إدارة اللوجستيات والجمارك",
          "العلامة التجارية والملصقات الخاصة",
          "عمليات تفتيش غير محدودة",
          "مدير حساب مخصص"
        ],
        per_project: "/للمشروع",
        popular: "الأكثر طلباً",
        choose: "اختر"
      }
    },
    contact: {
      title: "هل أنت مستعد لبدء الاستيراد من الصين؟",
      subtitle: "اتصل بفيرا اليوم للحصول على استشارة مجانية. لنبني علامتك التجارية معاً.",
      form_title: "أرسل رسالة",
      name: "الاسم الكامل",
      email: "البريد الإلكتروني",
      product: "المنتج المطلوب",
      message: "الرسالة",
      submit: "إرسال الطلب",
      placeholder_name: "أحمد محمد",
      placeholder_email: "ahmed@example.com",
      placeholder_product: "مثال: ديكور منزلي، إلكترونيات",
      placeholder_message: "أخبرنا عن مشروعك...",
      whatsapp_message: "مرحباً فيرا! أنا {name} ({email}). أنا مهتم بـ {product}.\nالرسالة: {message}"
    },
    footer: {
      rights: "جميع الحقوق محفوظة.",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      cookies: "سياسة ملفات الارتباط"
    },
    services: {
      title: "كل ما تحتاجه لتوسيع مخزونك",
      subtitle: "من العينة الأولى إلى التوزيع العالمي، نتولى إدارة سلسلة التوريد بالكامل.",
      items: [
        { title: "البحث عن المنتجات", desc: "نجد مصانع موثوقة تطابق متطلبات الجودة والسعر الخاصة بك." },
        { title: "التفاوض على الأسعار", desc: "يتفاوض خبراؤنا المحليون مع الموردين للحصول على أفضل الأسعار التنافسية مباشرة من المصنع." },
        { title: "فحص الجودة", desc: "نقوم بإجراء عمليات تدقيق صارمة للمصانع وعمليات تفتيش قبل الشحن لضمان جودة كل وحدة." },
        { title: "الشحن والخدمات اللوجستية", desc: "من الشحن البحري إلى الشحن الجوي السريع، نتولى جميع الإجراءات الجمركية والتسليم إلى مستودعك في جميع أنحاء العالم." },
        { title: "العلامة التجارية والتعبئة", desc: "تغليف مخصص، وضع علامات خاصة، ودعم العلامة التجارية لمساعدتك في بناء علامتك التجارية الخاصة." }
      ],
      cta: "عرض جميع الخدمات",
      ready: "هل أنت مستعد للعثور على منتجك الأكثر مبيعاً القادم؟",
      start: "ابدأ البحث عن الموردين الآن"
    },
    how: {
      title: "عملية بسيطة من 4 خطوات",
      subtitle: "نجعل الاستيراد من الصين سهلاً مثل الطلب من مورد محلي.",
      steps: [
        { title: "أخبرنا بمنتجك", desc: "أرسل لنا متطلباتك أو صوراً أو روابط. سنقوم بتحليل احتياجاتك على الفور." },
        { title: "نجد الموردين", desc: "نختار أفضل 3-5 مصانع ونقدم لك مقارنة تفصيلية للأسعار." },
        { title: "الموافقة على العينات", desc: "نقوم بتجميع العينات من مصانع مختلفة وشحنها إليك للموافقة النهائية." },
        { title: "الإنتاج والشحن", desc: "نشرف على الإنتاج، ونجري فحوصات الجودة، ونتولى عملية الشحن بالكامل." }
      ]
    },
    testimonials: {
      title: "موثوق من قبل رواد الأعمال في جميع أنحاء العالم",
      subtitle: "انضم إلى أكثر من 200 شركة تستورد بذكاء مع فيرا.",
      items: [
        { name: "مارك ت.", role: "بائع أمازون FBA", content: "وفرت لي فيرا 30% من تكلفة منتجي ووجدت مصنعاً لم يستطع بحث علي بابا العثور عليه. فحص الجودة لديها ممتاز." },
        { name: "سارة ج.", role: "صاحبة متجر شوبيفاي", content: "كنت مرعوبة من التعرض للاحتيال. زارت فيرا المصنع، وأرسلت لي مقاطع فيديو، وتولت كل شيء. الآن لدي منتجاتي الخاصة!" },
        { name: "ديفيد ل.", role: "صاحب عمل صغير", content: "التواصل ممتاز. أحصل على تحديثات في كل خطوة. فيرا سورسينج هي الآن شريكي الدائم في الصين." }
      ]
    },
    faq: {
      title: "الأسئلة الشائعة",
      items: [
        { q: "ما هو الحد الأدنى لكمية الطلب (MOQ)؟", a: "يعتمد الحد الأدنى للطلب على نوع المنتج. بشكل عام، نعمل مع الطلبات التي تبدأ من 1000 دولار أو 500 وحدة." },
        { q: "كم يستغرق الشحن؟", a: "يستغرق الشحن الجوي السريع 5-7 أيام، والشحن الجوي 10-15 يوماً، والشحن البحري 30-45 يوماً." },
        { q: "هل يمكنك المساعدة في تخصيص المنتج؟", a: "نعم! نحن متخصصون في خدمات العلامات التجارية الخاصة وتصنيع المعدات الأصلية (OEM)." },
        { q: "هل تفحصين الجودة بنفسك؟", a: "بالتأكيد. نقوم بإجراء فحص بنسبة 100% أو أخذ عينات AQL حسب متطلباتك." }
      ]
    },
    intake: {
      title: "نموذج الاستفسار عن المنتج",
      subtitle: "أخبرنا بما تبحث عنه حتى نتمكن من البدء في التوريد على الفور.",
      quantity: "الكمية",
      target_price: "السعر المستهدف (USD)",
      shipping_country: "بلد الشحن",
      requirements: "متطلبات خاصة",
      submit: "إرسال التفاصيل",
      placeholder_product: "مثال: كرسي مريح",
      placeholder_quantity: "مثال: 500",
      placeholder_price: "مثال: $15.00",
      placeholder_country: "مثال: السعودية",
      placeholder_requirements: "صف العلامة التجارية أو المواد أو الميزات الخاصة...",
      whatsapp_message: "مرحباً فيرا! أنا مهتم بالتوريد:\nالمنتج: {product}\nالكمية: {quantity}\nالسعر المستهدف: {price}\nبلد الشحن: {country}\nالمتطلبات: {requirements}"
    },
    success: {
      title: "شكراً لشرائك!",
      subtitle: "تمت عملية الدفع بنجاح. سيتم توجيهك الآن إلى واتساب لإنهاء تفاصيل منتجك مع فيرا.",
      cta: "المتابعة إلى واتساب",
      whatsapp_message: "مرحباً فيرا، لقد أكملت عملية الدفع وأنا مستعد لبدء التوريد!"
    },
    floating_whatsapp: {
      label: "تحدث مع فيرا"
    },
    about_vera: {
      title: "تعرف على فيرا",
      subtitle: "شريكك الموثوق في الصين",
      bio: "تقيم فيرا في قلب مركز التصنيع في الصين، وقد أمضت أكثر من عقد من الزمان في بناء علاقات مع مصانع من الدرجة الأولى. مهمتها هي جعل التوريد العالمي متاحاً وشفافاً وخالياً من الضغوط للشركات من جميع الأحجام.",
      mission: "مهمتنا",
      mission_text: "سد الفجوة بين الرؤية الدولية والتميز في التصنيع الصيني.",
      experience: "أكثر من 10 سنوات من الخبرة",
      experience_text: "معرفة عميقة بعمليات المصانع ومعايير الجودة ولوجستيات التصدير.",
      stats_clients: "عملاء تم خدمتهم",
      stats_factories: "مصانع تم فحصها",
      role: "المؤسس والوكيل الرئيسي",
      alt_founder: "فيرا - المؤسس"
    },
    logistics: {
      title: "حلول اللوجستيات العالمية",
      subtitle: "مبسطة",
      description: "ننقل منتجاتك من أرض المصنع إلى باب مستودعك، في أي مكان في العالم.",
      sea: "الشحن البحري",
      sea_desc: "فعال من حيث التكلفة للكميات الكبيرة. خيارات حاوية كاملة (FCL) أو أقل من حاوية (LCL).",
      air: "الشحن الجوي",
      air_desc: "تسليم سريع للمخزون عالي القيمة أو الحساس للوقت. 5-10 أيام حول العالم.",
      express: "البريد السريع",
      express_desc: "تسليم من الباب إلى الباب عبر DHL أو FedEx أو UPS. مثالي للعينات والدفعات الصغيرة.",
      customs: "التخليص الجمركي",
      customs_desc: "نتولى جميع الأوراق والرسوم والضرائب لضمان عملية استيراد سلسة.",
      warehousing: "تخزين مجاني",
      warehousing_desc: "نوفر ما يصل إلى 30 يومًا من التخزين المجاني في مستودعنا في ييوو لتوحيد طلباتك من موردين متعددين."
    },
    engineering: {
      title: "الهندسة والنماذج الأولية",
      subtitle: "من المفهوم إلى الواقع",
      description: "نحن لا نجد المصانع فحسب؛ بل نساعدك في بناء منتجات أفضل. يساعد فريقنا الهندسي في تصاميم CAD واختيار المواد والنماذج الأولية الوظيفية.",
      items: [
        { title: "تصميم CAD", desc: "نمذجة احترافية ثنائية وثلاثية الأبعاد لضمان جاهزية منتجك للإنتاج الضخم." },
        { title: "النماذج الأولية", desc: "طباعة ثلاثية الأبعاد سريعة وعينات CNC لاختبار الشكل والوظيفة قبل البدء في التصنيع." },
        { title: "إدارة الأدوات", desc: "نشرف على إنشاء القوالب والقوالب، مما يضمن الدقة وطول العمر." }
      ]
    },
    ip_protection: {
      title: "حماية الملكية الفكرية والأخلاقيات",
      subtitle: "أفكارك في أمان معنا",
      description: "حماية ملكيتك الفكرية هي أولويتنا القصوى. نحن نطبق اتفاقيات عدم إفشاء صارمة ونعمل فقط مع مصانع أخلاقية ومدققة.",
      items: [
        { title: "اتفاقيات عدم إفشاء صارمة", desc: "اتفاقيات عدم إفشاء ملزمة قانوناً مع كل مصنع نقوم بفحصه." },
        { title: "دعم براءات الاختراع", desc: "إرشادات حول تسجيل علاماتك التجارية وبراءات اختراعك في الصين." },
        { title: "التوريد الأخلاقي", desc: "نحن نضمن تلبية ممارسات العمل العادلة والمعايير البيئية." }
      ]
    },
    industries: {
      title: "الصناعات التي نخدمها",
      subtitle: "خبرة عبر الفئات",
      items: [
        { title: "الإلكترونيات", desc: "التكنولوجيا الاستهلاكية، PCBA، وأجهزة المنزل الذكي." },
        { title: "الألعاب والترفيه", desc: "ألعاب قطنية وبلاستيكية وتعليمية تلبي معايير السلامة العالمية." },
        { title: "المنزل والمطبخ", desc: "الأثاث وأدوات المطبخ وعناصر الديكور المنزلي." },
        { title: "الرياضة والهواء الطلق", desc: "معدات التخييم وأدوات اللياقة البدنية والسلع الرياضية." },
        { title: "المنتجات الترويجية", desc: "سلع مخصصة للعلامات التجارية للفعاليات والتسويق." },
        { title: "أمازون FBA", desc: "تجهيز متخصص، وضع ملصقات، ولوجستيات مباشرة إلى المستودع." },
        { title: "تجارة إلكترونية", desc: "تصوير فوتوغرافي وفيديو وتصميم جرافيك للبائعين عبر الإنترنت." }
      ]
    },
    amazon_fba: {
      title: "خدمات تجهيز أمازون FBA",
      subtitle: "مباشرة إلى مستودعات أمازون",
      description: "نساعد بائعي أمازون على التوسع من خلال تولي أعمال التجهيز المرهقة. نضمن أن منتجاتك تلبي جميع متطلبات أمازون قبل مغادرتها الصين.",
      items: [
        { title: "تسمية FNSKU", desc: "نضع الرموز الشريطية المتوافقة مع أمازون على كل وحدة." },
        { title: "التجميع والتجهيز", desc: "دمج منتجات متعددة في مجموعة واحدة أو حزمة." },
        { title: "تحذير الاختناق", desc: "وضع ملصقات التحذير المطلوبة على الأكياس البلاستيكية." },
        { title: "الشحن المباشر", desc: "الشحن مباشرة إلى مستودعات FBA في جميع أنحاء العالم عبر البحر أو الجو." }
      ]
    },
    ecommerce_support: {
      title: "دعم التجارة الإلكترونية",
      subtitle: "مرئيات تزيد المبيعات",
      description: "المحتوى عالي الجودة هو مفتاح النجاح في التجارة الإلكترونية. نحن نقدم خدمات استوديو احترافية لجعل منتجاتك تبرز.",
      items: [
        { title: "تصوير المنتجات", desc: "لقطات بخلفية بيضاء ولقطات نمط حياة لقوائم منتجاتك." },
        { title: "تصوير فيديو للمنتجات", desc: "فيديوهات قصيرة وجذابة لوسائل التواصل الاجتماعي وصفحات المنتجات." },
        { title: "التصميم الجرافيكي", desc: "تصميم تغليف مخصص وإنشاء رسوم بيانية (إنفوجرافيك)." }
      ]
    }
  }
};

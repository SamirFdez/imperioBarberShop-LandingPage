import { productImages } from "@/assets/products";
import { hairChangesImages } from "@/assets/hairChanges";
import logo from "@/assets/ui/logo.png";

export const wsMessage = encodeURIComponent(
  "Hola, estoy interesado en adquirir un servicio."
);

export const googleReview = "https://www.google.com/search?hl=es&gl&q=Barber%C3%ADa:+IMPERIOdesign+BarberShop,+Autop.+Cnel+Rafael+Tom%C3%A1s+Fern%C3%A1ndez+Dom%C3%ADnguez,+Santo+Domingo+Este,+Rep%C3%BAblica+Dominicana&ludocid=9485790762474906938&lsig=AB86z5UKScX1V-DVzRG5zapItUqJ&hl=es&gl=419#lrd=0x8eaf870034f3213d:0x83a44c70caffa53a,1"

export const siteData = {
  name: "Imperio Barber Shop",
  tagline: "Te Mostramos Tu Estilo",
  description: "Cortes modernos, atención personalizada y resultados que hablan por sí solos.",
  address: "Plaza Erick, Aut. San Isidro, Santo Domingo Este",
  phone: "+1 (829) 603-0780",
  email: "imperiodesignbarbershop@gmail.com",
  social: {
    facebook: "https://www.facebook.com/imperiodesignbarbershop",
    instagram: "https://www.instagram.com/imperiodesignbarbershop/",
    tiktok: "https://www.tiktok.com/@Imperiodesignbarbershop",
    whatsapp: `https://wa.me/18296030780?text=${wsMessage}`,
  },
};

export const dataClient = [
  {
    title: "Clientes Mensuales",
    target: "130",
    suffix: "+"
  },
  {
    title: "Satisfacción de Clientes",
    target: "96",
    suffix: "%"
  },
  {
    title: "Miembros Activos",
    target: "50",
    suffix: "+"
  },
]

export const socialLinks = [
  { name: "facebook", icon: "ri-facebook-fill", label: "Facebook" },
  { name: "instagram", icon: "ri-instagram-fill", label: "Instagram" },
  { name: "tiktok", icon: "ri-tiktok-fill", label: "Tiktok" },
  { name: "whatsapp", icon: "ri-whatsapp-fill", label: "Whatsapp" },
];

export const contactInfo = [
  {
    icon: "ri-map-pin-line",
    title: "Dirección",
    content: siteData.address,
  },
  {
    icon: "ri-phone-line",
    title: "Teléfono",
    content: siteData.phone,
  },
  {
    icon: "ri-mail-line",
    title: "Email",
    content: siteData.email,
  },
  {
    icon: "ri-time-line",
    title: "Horario",
    content: ["Lunes a Jueves: 8 AM - 8 PM", "Viernes y Domingo: 8 AM - 5 PM", "Sábado no laboramos"],
  },
];

export const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "" },
  { name: "Membresía", href: "/pricing" },
  { name: "Nosotros", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

export const features = [
  {
    title: "Atención sin largas esperas",
    description: "Agenda tu cita fácilmente y disfruta de un servicio rápido y puntual, adaptado a tu horario.",
    icon: "ri-time-line",
  },
  {
    title: "Peluqueros Expertos",
    description: "Nuestro equipo está compuesto por profesionales certificados, siempre al día con las últimas tendencias y técnicas.",
    icon: "ri-star-smile-fill",
  },
  {
    title: "Productos de Alta Calidad",
    description: "Trabajamos con productos profesionales que cuidan tu piel y cabello.",
    icon: "ri-diamond-fill",
  },
  {
    title: "Cortes Personalizados",
    description: "Desde cortes clásicos hasta looks modernos, diseñamos el estilo que mejor se adapta a ti.",
    icon: "ri-scissors-2-fill",
  },
  {
    title: "Higiene y Seguridad",
    description: "Herramientas esterilizadas y protocolos de limpieza para tu total tranquilidad.",
    icon: "ri-shield-check-fill",
  },
  {
    title: "Ambiente Cómodo y Agradable",
    description: "Disfruta de un espacio acogedor donde te sentirás relajado y bien atendido desde que llegas.",
    icon: "ri-service-fill",
  },
];

export const classes = [
  {
    name: "HIIT Training",
    description: "High-intensity interval training for maximum calorie burn",
    detailedDescription: "Push your limits with our high-intensity interval training. This class alternates between intense bursts of activity and fixed periods of rest, maximizing calorie burn and improving cardiovascular fitness. Perfect for those looking to torch calories and build endurance.",
    duration: "45 min",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Burn up to 600 calories", "Improve cardiovascular health", "Build endurance", "Time-efficient workout"],
    trainer: "Mike Chen",
    whatToExpect: "Dynamic movements, short rest periods, high energy atmosphere",
  },
  {
    name: "Yoga & Flexibility",
    description: "Improve flexibility, balance, and mental wellness",
    detailedDescription: "Find your inner peace while improving flexibility and strength. Our yoga classes combine traditional poses with modern techniques to enhance balance, reduce stress, and increase mobility. Suitable for all levels, from beginners to advanced practitioners.",
    duration: "60 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=600&fit=crop&q=80",
    benefits: ["Increase flexibility", "Reduce stress", "Improve balance", "Enhance mental clarity"],
    trainer: "Sarah Johnson",
    whatToExpect: "Gentle stretches, breathing exercises, meditation, peaceful environment",
  },
  {
    name: "Strength Training",
    description: "Build muscle and increase strength with guided workouts",
    detailedDescription: "Build lean muscle and increase your strength with our comprehensive strength training program. Our expert trainers guide you through proper form and technique using free weights, machines, and bodyweight exercises. Perfect for building a strong, toned physique.",
    duration: "60 min",
    difficulty: "Intermediate",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    benefits: ["Build muscle mass", "Increase strength", "Improve bone density", "Boost metabolism"],
    trainer: "John Smith",
    whatToExpect: "Progressive weight training, form correction, personalized guidance",
  },
  {
    name: "Cardio Blast",
    description: "Heart-pumping cardio session to boost your endurance",
    detailedDescription: "Get your heart pumping with our high-energy cardio class. Combining various cardio exercises including running, jumping, and dance movements, this class will boost your endurance, improve heart health, and help you shed those extra pounds.",
    duration: "45 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&q=80",
    benefits: ["Improve heart health", "Burn calories", "Boost endurance", "Increase energy levels"],
    trainer: "Mike Chen",
    whatToExpect: "Energetic music, varied movements, supportive group atmosphere",
  },
  {
    name: "Pilates",
    description: "Core strengthening and body alignment exercises",
    detailedDescription: "Strengthen your core and improve your posture with our Pilates classes. Focus on controlled movements that target deep core muscles, improve alignment, and enhance overall body awareness. Great for rehabilitation and building long, lean muscles.",
    duration: "50 min",
    difficulty: "All Levels",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&q=80",
    benefits: ["Strengthen core", "Improve posture", "Enhance flexibility", "Reduce back pain"],
    trainer: "Sarah Johnson",
    whatToExpect: "Controlled movements, focus on form, mind-body connection",
  },
  {
    name: "CrossFit",
    description: "Functional movements performed at high intensity",
    detailedDescription: "Experience the ultimate functional fitness challenge with our CrossFit classes. Combining weightlifting, gymnastics, and cardio, each workout is different and designed to push you to new limits. Build strength, endurance, and mental toughness.",
    duration: "60 min",
    difficulty: "Advanced",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    benefits: ["Build functional strength", "Improve all-around fitness", "Challenge yourself", "Join a community"],
    trainer: "John Smith",
    whatToExpect: "Varied workouts, high intensity, supportive community, measurable progress",
  },
];

export const pricingPlans = [
  {
    name: "VIP",
    price: "RD$ 1,000",
    period: "/mes",
    features: [
      "Tarjeta de presentación Vip",
      "Una reservación cada 15 días",
      "Un 5% de descuento en productos de peluquería",
    ],
    popular: false,
  },
  {
    name: "PRO",
    price: "RD$ 2,000",
    period: "/mes",
    features: [
      "Tarjeta de presentación Pro",
      "Una reservación cada semana",
      "Un 10% de descuento en productos de peluquería",
      "Horario extendido"
    ],
    popular: true,
  },
  {
    name: "ELITE",
    price: "RD$ 4,000",
    period: "/mes",
    features: [
      "Tarjeta de presentación Elite",
      "Dos reservaciones cada semana",
      "Un 15% de descuento en productos de peluquería",
      "Horario extendido",
      "Servicio a domicilio"
    ],
    popular: false,
  },
];

export const comparingPlans = [
  {
    benefit: "Una reservación cada 15 días",
    apply: [true, false, false]
  },
  {
    benefit: "Una reservación cada semana",
    apply: [false, true, false]
  },
  {
    benefit: "Dos reservaciones cada semana",
    apply: [false, false, true]
  },
  {
    benefit: "Tarjeta de presentación",
    apply: [true, true, true]
  },
  {
    benefit: "Descuentos en productos de peluquería",
    apply: ['5%', '10%', '15%']
  },
  {
    benefit: "Horario extendido",
    apply: [false, true, true]
  },
  {
    benefit: "Servicio a domicilio",
    apply: [false, false, true]
  },
]

export const testimonials = [
  {
    name: "Julissa Fernández",
    role: "Miembro",
    content: "Llevo más de 5 años ultizando sus servicios, son excelentes jóvenes, el ambiente es muy sano, Recomendado 100%.",
    rating: 5,
  },
  {
    name: "Genesis Reyes",
    role: "Cliente",
    content: "Una atención 1A de verdad que un ambiente confiable, los chicos supera decentes.. 100% recomendada.",
    rating: 5,
  },
  {
    name: "Domingo Javier",
    role: "Miembro",
    content: "Llevo ya un buen tiempo visitando la barbería y puedo decir que es un excelente ambiente. Los muchachos están bien enfocados en el servicio y atenciones.",
    rating: 5,
  },
];

export const products = [
  {
    title: "Máquina de recortar",
    description: "Versátil y práctica para el cuidado personal de rostro y cuerpo",
    image: productImages.maquinaRecortar,
  },
  {
    title: "Crema para afeitar",
    description: "Suaviza la piel y facilita un afeitado cómodo y sin irritaciones",
    image: productImages.cremaAfeitar,
  },
  {
    title: "Cera para peinar",
    description: "Aporta fijación y textura, dejando el cabello más firme y controlado",
    image: productImages.ceraPeinar,
  },
  {
    title: "Gel",
    description: "Fijación duradera con acabado limpio y control total del peinado",
    image: productImages.gelPeinar,
  },
  {
    title: "Shampoo",
    description: "Limpia y revitaliza el cabello, dejándolo fresco y saludable",
    image: productImages.shampoo,
  },
];

export const faqs = [
  {
    question: "¿Necesito cita previa?",
    answer: "No, no se necesita cita previa. Atendemos sin cita por orden de llegada pero dando prioridad a los miembros que tienen citas previas.",
  },
  {
    question: "¿Qué servicios ofrecen?",
    answer: "- Corte de cabello para todas las edades.\n - Corte femenino.\n - Todo tipo de Fade.\n - Corte a tijera.\n - Arreglo de barba y afeitado profesional.\n\nTodos nuestros servicios incluyen asesoría de estilo.",
  },
  {
    question: "¿Cuánto dura un corte?",
    answer: "Un corte estándar toma entre 30 y 45 minutos, dependiendo del servicio elegido.",
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo y transferencias a diferentes entidades bancarias.",
  },
  {
    question: "¿Cuál es el horario laboral?",
    answer: "- Lunes a Jueves de 8 AM - 8 PM. \n - Viernes y Domingo de 8 AM - 5 PM. \n - Sábados no laborables.",
  },
  {
    question: "¿Ofrecen membresías?",
    answer: "Sí. Nuestras membresías incluyen precios preferenciales en productos, prioridad en citas y beneficios exclusivos.",
  },
  {
    question: "¿Tienen parqueo disponible?",
    answer: "Sí, contamos con el parqueo de la plaza para la comodidad de nuestros clientes.",
  },
];

export const faqsPricing = [
  {
    question: "¿Puedo cancelar mi membresía en cualquier momento?",
    answer: "Sí, puedes cancelar tu membresía cuando lo desees con días de aviso previo."
  },
  {
    question: "¿Qué pasa si no pago mi membresía a tiempo?",
    answer: "Las membresías se gestionan de forma mensual. Si el pago no se realiza a tiempo, la membresía se suspende automáticamente hasta que el pago sea regularizado."
  },
  {
    question: "¿Los barberos están incluidos en la membresía?",
    answer: "Sí. Todas nuestras membresías incluyen atención con el barbero de tu preferencia, según disponibilidad."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos efectivo y transferencias a diferentes entidades bancarias.",
  }
]

export const classSchedule = [
  { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
  { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
  { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
  { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
  { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
];

export const styleChannge = [
  {
    barber: "Dixon Peña",
    hairCut: "Aquí va el corte de pelo realizado",
    beforeImage: hairChangesImages.after1,
    afterImage: hairChangesImages.before1,
  },
  {
    barber: "Emmanuel Peña",
    hairCut: "Aquí va el corte de pelo realizado",
    beforeImage: hairChangesImages.after2,
    afterImage: hairChangesImages.before2,
  },
  {
    barber: "Dixon Peña",
    hairCut: "Aquí va el corte de pelo realizado",
    beforeImage: hairChangesImages.after3,
    afterImage: hairChangesImages.before3,
  },
];

export const fullSchedule = {
  monday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  tuesday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  wednesday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  thursday: [
    { time: "6:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "8:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "6:00 PM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "7:00 PM", class: "Strength Training", trainer: "John Smith" },
  ],
  friday: [
    { time: "6:00 AM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "7:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "8:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "12:00 PM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "5:00 PM", class: "HIIT Training", trainer: "Mike Chen" },
    { time: "6:00 PM", class: "CrossFit", trainer: "John Smith" },
    { time: "7:00 PM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
  ],
  saturday: [
    { time: "8:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "9:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
    { time: "10:00 AM", class: "Strength Training", trainer: "John Smith" },
    { time: "11:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
  ],
  sunday: [
    { time: "9:00 AM", class: "Yoga & Flexibility", trainer: "Sarah Johnson" },
    { time: "10:00 AM", class: "Pilates", trainer: "Sarah Johnson" },
    { time: "11:00 AM", class: "Cardio Blast", trainer: "Mike Chen" },
  ],
};

export const trainers = [
  {
    name: "Dixon Peña",
    role: "Administrador & Barbero",
    // specialization: "Strength Training & Nutrition",
    experience: "15+ años",
    bio: "Aquí va una breve descripción...",
    image: logo,
    certifications: ["Corte", "Fade", "Cejas", "Barba", "Diseños"],
  },
  {
    name: "Emmanuel Peña",
    role: "Barbero",
    experience: "8+ años",
    bio: "Aquí va una breve descripción...",
    image: logo,
    certifications: ["Corte", "Fade", "Cejas", "Barba"],
  },
  {
    name: "Samir La Para",
    role: "Barbero",
    experience: "1 año",
    bio: "Aquí va una breve descripción...",
    image: logo,
    certifications: ["Corte", "Cejas", "Barba"],
  },
  {
    name: "Misael",
    role: "Recepcionista",
    experience: "1 año",
    bio: "Aquí va una breve descripción...",
    image: logo,
    certifications: ["Cajero", "Community Manager"],
  },
];

export const ourValues = [
  {
    value: "Excelencia",
    description: "Excelencia en cada corte, cuidando cada detalle para resaltar tu estilo.",
    icon: "ri-scissors-2-line",
  },
  {
    value: "Experiencia",
    description: "Más que un corte, una experiencia cómoda y personalizada.",
    icon: "ri-star-fill",
  },
  {
    value: "Confianza",
    description: "Servicio honesto y consistente para que siempre regreses con seguridad.",
    icon: "ri-hand-heart-line",
  }
]

export const history = [
  {
    year: "2009",
    title: "Founded",
    description: "FitZone Gym was founded with a vision to create an inclusive fitness community where everyone feels welcome.",
  },
  {
    year: "2012",
    title: "First Expansion",
    description: "Expanded facilities to include a dedicated group class studio and added 20+ new pieces of equipment.",
  },
  {
    year: "2015",
    title: "24/7 Access",
    description: "Introduced 24/7 access for Premium and Elite members, making fitness accessible around the clock.",
  },
  {
    year: "2018",
    title: "500 Members Milestone",
    description: "Reached 500 active members and expanded our trainer team to 20 certified professionals.",
  },
  {
    year: "2020",
    title: "Digital Integration",
    description: "Launched online class booking and virtual training options to adapt to changing needs.",
  },
  {
    year: "2024",
    title: "Award Winner",
    description: "Recognized as 'Best Gym 2024' by the local fitness community, celebrating 15 years of excellence.",
  },
];

export const paymentOptions = {
  methods: ["Credit/Debit Cards", "Bank Transfer", "PayPal", "Apple Pay", "Google Pay"],
  plans: [
    { type: "Monthly", description: "Pay month-to-month with no long-term commitment" },
    { type: "Annual", description: "Save 15% with annual payment - best value!" },
    { type: "Family Plan", description: "Special rates for families - contact us for details" },
  ],
  guarantee: "7-day money-back guarantee on all memberships",
  trial: "Free 7-day trial available for new members",
};


import telasImg from "@/img/telas.jpg";
import uniformImg from "@/img/unifor.jpg";
import rrImg from "@/img/rr.png";
import telaRrImg from "@/img/tela-rr.png";
import bomberImg from "@/img/bomber.jpeg";
import bomber2Img from "@/img/bomber-.jpg";
import forroImg from "@/img/forro.jpeg";
import forro2Img from "@/img/forro.jpg";

export interface Product {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  mainUse: string;
  features: string[];
  imageUrl: string;
  applicationImage: string;
  weight: string;
  width: string;
  composition: string;
  colors: { name: string; hex: string }[];
  metersPerGarment: number; // approximate meters needed per garment
}

export const PRODUCTS: Product[] = [
  {
    id: "nova-antifluido",
    name: "Nova Antifluido",
    subtitle: "Protección total y confort para el sector salud",
    description: "Tela de acabado tecnológico con barrera protectora que repele líquidos y salpicaduras accidentales. Su composición garantiza una excelente transpirabilidad y durabilidad ante lavados industriales frecuentes.",
    mainUse: "Uniformes médicos, ropa hospitalaria, mandiles, scrubs y gorros quirúrgicos.",
    features: [
      "Acabado 100% Antifluido certificado",
      "No se decolora con el cloro ni lavados intensos",
      "Textura suave al tacto y caída elegante",
      "Fácil planchado y secado rápido"
    ],
    imageUrl: telasImg, // medical scrubs / blue fabric
    applicationImage: uniformImg,
    weight: "160 g/m²",
    width: "1.60 metros",
    composition: "100% Poliéster de Alta Tecnología",
    colors: [
      { name: "Verde Quirúrgico", hex: "#046A38" },
      { name: "Azul Marino", hex: "#002060" },
      { name: "Celeste Médico", hex: "#418FDE" },
      { name: "Vino Tinto", hex: "#58111A" },
      { name: "Blanco Óptico", hex: "#FFFFFF" },
      { name: "Gris Pizarra", hex: "#53565A" }
    ],
    metersPerGarment: 1.8 // 1.8m per scrub suit
  },
  {
    id: "taslan-corrugado",
    name: "Taslan Corrugado",
    subtitle: "Textura arrugada distintiva para ropa de verano",
    description: "Reconocido por su particular aspecto texturizado y ligeramente arrugado ('corrugado'). Es una tela ultraligera, fresca y de secado extremadamente rápido, ideal para confecciones de playa y moda urbana de verano.",
    mainUse: "Shorts playeros, bermudas, ropa de baño, pantalonetas y casacas ligeras de verano.",
    features: [
      "Efecto corrugado permanente de fábrica",
      "Secado ultrarrápido al contacto con agua",
      "Resistente a la arena y sal marina",
      "Colores neón y pasteles de alta fijación"
    ],
    imageUrl: rrImg,
    applicationImage: telaRrImg, // beach shorts
    weight: "115 g/m²",
    width: "1.45 metros",
    composition: "100% Nailon / Poliéster Texturizado",
    colors: [
      { name: "Naranja Flúor", hex: "#FF6700" },
      { name: "Amarillo Limón", hex: "#E8FA00" },
      { name: "Turquesa Playa", hex: "#00B4D8" },
      { name: "Fucsia Neón", hex: "#FF007F" },
      { name: "Negro Intenso", hex: "#111111" }
    ],
    metersPerGarment: 0.8 // 0.8m per beach short
  },
  {
    id: "bomber",
    name: "Tela Bomber",
    subtitle: "La barrera definitiva contra el viento y la lluvia",
    description: "Tejido de trama muy cerrada y recubrimiento especial impermeable. Su estructura compacta bloquea las ráfagas de viento y evita el paso del agua sin perder flexibilidad, haciéndola la estrella para prendas outdoor.",
    mainUse: "Casacas cortaviento, impermeables, ponchos para lluvia y ropa outdoor.",
    features: [
      "Alta impermeabilidad y resistencia al agua",
      "Barrera efectiva 100% cortaviento",
      "Gran resistencia a la fricción y desgarro",
      "Superficie semimate de acabado premium"
    ],
    imageUrl: bomberImg,
    applicationImage: bomber2Img, // waterproof clothing
    weight: "140 g/m²",
    width: "1.50 metros",
    composition: "Poliéster recubierto con PU (Poliuretano)",
    colors: [
      { name: "Verde Militar", hex: "#4A5335" },
      { name: "Azul Rey", hex: "#003893" },
      { name: "Negro Noche", hex: "#0A0A0A" },
      { name: "Gris Plata", hex: "#B0B7BD" },
      { name: "Rojo Fuego", hex: "#CC0000" }
    ],
    metersPerGarment: 2.0 // 2.0m per windbreaker
  },
  {
    id: "taslan-con-forro",
    name: "Taslan con Forro",
    subtitle: "Estructura, cuerpo y durabilidad para promociones",
    description: "Una de las telas más solicitadas en el emporio de Gamarra para la confección de casacas conmemorativas y de graduación. Combina la resistencia externa del Taslan con un reverso o forro preparado para dar abrigo y excelente estructura.",
    mainUse: "Casacas de promociones de colegios, uniformes institucionales y buzos deportivos.",
    features: [
      "Excelente caída y cuerpo para bordados de promociones",
      "Mayor durabilidad ante el uso rudo escolar",
      "Protección térmica moderada",
      "Fácil confección y combinación de cortes de color"
    ],
    imageUrl: forroImg,
    applicationImage: forro2Img, // promotional jackets
    weight: "185 g/m²",
    width: "1.50 metros",
    composition: "100% Fibra Sintética Reforzada",
    colors: [
      { name: "Azul Colegio", hex: "#1B365D" },
      { name: "Guinda Graduación", hex: "#6A1B29" },
      { name: "Verde Bosque", hex: "#1B4D3E" },
      { name: "Gris Oxford", hex: "#363A40" },
      { name: "Amarillo Oro", hex: "#FFC72C" }
    ],
    metersPerGarment: 2.2 // 2.2m per school jacket
  }
];

export const COMPANY_STATS = [
  { value: "+15 Años", label: "Abasteciendo en Gamarra" },
  { value: "+500,000", label: "Metros de Tela Vendidos" },
  { value: "100%", label: "Calidad Antifluido Garantizada" },
  { value: "24/48h", label: "Despachos a Nivel Nacional" }
];

export const FAQS = [
  {
    question: "¿Dónde se encuentra ubicada la tienda física de Rivertop?",
    answer: "Nos encontramos en el corazón comercial textil del Perú: Gamarra, La Victoria (Lima). Contamos con un amplio almacén y sala de ventas donde podrás tocar y evaluar el metraje de todas nuestras telas."
  },
  {
    question: "¿Venden por rollo cerrado o también por metros sueltos?",
    answer: "Atendemos a todo nivel de confeccionistas. Vendemos desde 1 metro para muestras hasta rollos cerrados (piezas completas de aprox. 100 metros) con precios especiales por mayor."
  },
  {
    question: "¿Las telas antifluido pierden su propiedad con las lavadas?",
    answer: "Nuestras telas Nova Antifluido cuentan con tecnología de hilado termofijado. Soportan lavados continuos manteniendo su capacidad repelente por un largo ciclo de vida útil."
  },
  {
    question: "¿Realizan envíos a provincias?",
    answer: "¡Sí! Despachamos diariamente a todas las agencias de transporte terrestre y aéreo en La Victoria para que tu mercadería llegue segura a cualquier departamento del Perú."
  }
];

export const REVIEWS = [
  {
    name: "Carlos Mendoza",
    company: "Confecciones Médicas CM",
    text: "Compramos la tela Nova Antifluido para licitaciones de uniformes de enfermería y los médicos están fascinados. Excelente caída y no pasa nada de líquidos.",
    rating: 5,
    location: "Lima"
  },
  {
    name: "Ana Lucía Rivas",
    company: "Summer Vibes Perú",
    text: "El Taslan Corrugado de Rivertop es el mejor de Gamarra. Mis clientes aman los shorts playeros porque secan en minutos y los colores flúor no destiñen con el sol.",
    rating: 5,
    location: "Piura"
  },
  {
    name: "Jorge Huamán",
    company: "Creaciones Escolares JH",
    text: "Para la campaña de casacas de promoción de colegios siempre elijo el Taslan con forro. Tiene buen cuerpo para hacer los bordados del año y los escudos escolares.",
    rating: 5,
    location: "Arequipa"
  }
];

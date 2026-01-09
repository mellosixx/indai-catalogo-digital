import queijoMinas from "@/assets/products/queijo-minas.jpg";
import queijoCoalho from "@/assets/products/queijo-coalho.jpg";
import ricota from "@/assets/products/ricota.jpg";
import doceDeLeite from "@/assets/products/doce-de-leite.jpg";
import manteiga from "@/assets/products/manteiga.jpg";
import requeijao from "@/assets/products/requeijao.jpg";
import goiabada from "@/assets/products/goiabada.jpg";
import nata from "@/assets/products/nata.jpg";

export type Category = "queijos" | "doces" | "manteigas" | "outros";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
}

export const categories: { id: Category; name: string }[] = [
  { id: "queijos", name: "Queijos" },
  { id: "doces", name: "Doces" },
  { id: "manteigas", name: "Manteigas" },
  { id: "outros", name: "Outros" },
];

export const products: Product[] = [
  {
    id: "queijo-minas-1",
    name: "Queijo Minas Frescal",
    description: "Queijo fresco e leve, perfeito para o café da manhã. Produzido com leite fresco de alta qualidade.",
    price: 18.90,
    image: queijoMinas,
    category: "queijos",
  },
  {
    id: "queijo-coalho-1",
    name: "Queijo Coalho",
    description: "Ideal para assar na churrasqueira ou frigideira. Sabor inconfundível e textura perfeita.",
    price: 24.90,
    image: queijoCoalho,
    category: "queijos",
  },
  {
    id: "ricota-1",
    name: "Ricota Fresca",
    description: "Ricota cremosa e suave, excelente para receitas doces e salgadas.",
    price: 15.90,
    image: ricota,
    category: "queijos",
  },
  {
    id: "doce-leite-1",
    name: "Doce de Leite Cremoso",
    description: "Doce de leite artesanal, feito com leite fresco e açúcar. Cremoso e irresistível.",
    price: 22.90,
    image: doceDeLeite,
    category: "doces",
  },
  {
    id: "goiabada-1",
    name: "Goiabada Cascão",
    description: "Goiabada tradicional, perfeita para acompanhar queijos ou comer pura.",
    price: 16.90,
    image: goiabada,
    category: "doces",
  },
  {
    id: "manteiga-1",
    name: "Manteiga de Primeira",
    description: "Manteiga pura, sem conservantes. Sabor autêntico e textura cremosa.",
    price: 19.90,
    image: manteiga,
    category: "manteigas",
  },
  {
    id: "requeijao-1",
    name: "Requeijão Cremoso",
    description: "Requeijão artesanal ultra cremoso. Perfeito para passar no pão ou usar em receitas.",
    price: 14.90,
    image: requeijao,
    category: "outros",
  },
  {
    id: "nata-1",
    name: "Nata Fresca",
    description: "Nata fresca e encorpada, ideal para bolos, cafés e receitas especiais.",
    price: 12.90,
    image: nata,
    category: "outros",
  },
];

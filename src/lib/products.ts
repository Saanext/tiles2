export type Product = {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  aiHint: string;
};

export const productCategories = [
  "Enamel Mosaic Tiles",
  "Glass Mosaic Mural",
  "Glass Mosaic Tiles",
  "Glass Tiles",
  "Hexagonal Tiles",
  "Imported Marble Mosaic",
  "Metal Mosaic Tiles",
  "Mirror Tiles",
  "Mop Tiles",
  "New Arrivals",
  "Porcelain / Ceramic / Vitrified Mosaic Tiles",
  "Stone Mosaic Tiles",
  "Subway Tiles",
  "Swimming Pool Mosaic Tiles",
  "Wooden Flooring Ceramic Tiles",
];

const newImageUrl = "https://images.unsplash.com/photo-1660029761445-49d108930691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxtb3NhaWMlMjB0aWxlc3xlbnwwfHx8fDE3NTA4NzEwODh8MA&ixlib=rb-4.1.0&q=80&w=1080";
const newAiHint = "blue enamel tile";

export const products: Product[] = [
  { id: 1, name: "Azure Enamel Tile", category: "Enamel Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 2, name: "Veridian Grove Mural", category: "Glass Mosaic Mural", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 3, name: "Crystal Clear Mosaic", category: "Glass Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 4, name: "Aqua Marine Glass", category: "Glass Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 5, name: "Honeycomb Hex Tile", category: "Hexagonal Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 6, name: "Carrara Marble Mosaic", category: "Imported Marble Mosaic", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 7, name: "Brushed Steel Tile", category: "Metal Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 8, name: "Antique Mirror Tile", category: "Mirror Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 9, name: "Pearl Shell Mop", category: "Mop Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 10, name: "Modern Wave Tile", category: "New Arrivals", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 11, name: "Terracotta Porcelain", category: "Porcelain / Ceramic / Vitrified Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 12, name: "River Stone Mosaic", category: "Stone Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 13, name: "Classic White Subway", category: "Subway Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 14, name: "Ocean Blue Pool", category: "Swimming Pool Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 15, name: "Oak Wood Ceramic", category: "Wooden Flooring Ceramic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 16, name: "Emerald Enamel", category: "Enamel Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 17, name: "Sunset Mural", category: "Glass Mosaic Mural", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 18, name: "Smoky Glass Mosaic", category: "Glass Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 19, name: "Black Hex Tile", category: "Hexagonal Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 20, name: "Calacatta Marble", category: "Imported Marble Mosaic", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 21, name: "Bronze Metal Tile", category: "Metal Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 22, name: "Urban Slate Tile", category: "Stone Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
  { id: 23, name: "Turquoise Pool Tile", category: "Swimming Pool Mosaic Tiles", imageUrl: newImageUrl, aiHint: newAiHint },
];

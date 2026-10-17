
export interface MenuItem {
  id: string;
  name: string;
  price: string;
}

export interface MenuSection {
  title: string;
  gujaratiTitle: string;
  items: MenuItem[];
  color: string;
}

export interface RecommendationRequest {
  mood: string;
  preference: string;
}

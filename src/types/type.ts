export type Category = {
  _id: string;
  categoryName: string;
  name: string;
  isActive: boolean;
};

export type CategoryResponse = {
  success: boolean;
  count: number;
  message: string;
  data: Category[];
};

export type CategoriesSectionProps = {
  selectedCategory: string;
  handleCategoryChange: (categoryId: string) => void;
};

export interface FeaturedEventsSectionProps {
  selectedCategory: string;
}

export interface Event {
  _id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  organizer: string;
  banner: string;
  status: string;
  categoryId: string;
  categoryName: string;
  price?: string | number;
}

export interface EventsResponse {
  success: boolean;
  message: string;
  pagination: {
    totalRecords: number;
    currentPage: number;
    totalPages: number;
    perPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
  data: Event[];
}
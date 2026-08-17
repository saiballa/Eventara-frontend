// Landing page Categories Section props
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

// Landing page Featured Section props
export interface FeaturedEventsSectionProps {
  selectedCategory?: string;
}

// Event page Railscards Section props
export interface RailEventsSectionProps {
  selectedCategory: string;
}

// Events page props
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

//AuthModal Props type
export interface AuthModalPropsType{
  isOpen:boolean;
  initialTab:string;
}

export type AuthTab = "login" | "signup";

export interface SignupUserResponse{
  success: boolean;
  message: string;
  data:{
    id:string;
    name:string;
    email:string;
    role:string;
  }
}

export interface LoginUserResponse{
  success: boolean;
  message: string;
  data:{
    user:{
      id:string;
    name:string;
    email:string;
    role:string;
    },
    accessToken:string;
    refreshToken:string;
  }
}

// Auth state
export type UserRole = "user";

export interface AuthState {
  isAuthenticated: boolean;
  email: string | null;
  role: UserRole | null;
}

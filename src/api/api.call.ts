import { api } from "./axiosInstance";
import { EventsResponse,Event,Category,CategoryResponse,SignupUserResponse,LoginUserResponse } from "@/types/type";
import type { SignupUserValidationType,LoginUserValidationType } from "@/schema/authSchema";

export const getEvents = async (): Promise<Event[]> => {
  const response = await api.get<EventsResponse>(
    "/api/v1/event/all-events"
  );

  return response?.data?.data;
};

export const getCategories = async (): Promise<Category[]> => {
    const response = await api.get<CategoryResponse>("/api/v1/category/active-categories");

    return response?.data?.data;
  
};

export const getEventsByCategories = async (
  selectedCategory?: string
): Promise<Event[]> => {
  const url =
    !selectedCategory || selectedCategory === "all"
      ? "/api/v1/event/all-events"
      : `/api/v1/event/events/category/${selectedCategory}`;

  const response = await api.get<EventsResponse>(url);

  return response?.data?.data;
};

export const signupUser = async (userData: SignupUserValidationType):Promise<SignupUserResponse> => {
  const SignupResponse = await api.post("/api/v1/auth/register",userData);

  return SignupResponse?.data;
};

export const loginUser = async (data: LoginUserValidationType):Promise<LoginUserResponse> => {
   const LoginResponse = await api.post("/api/v1/auth/login",data);

  return LoginResponse?.data;
};

export const getProfile = async () => {
  const response = await api.get("/api/v1/auth/profile");

  return response.data;
};
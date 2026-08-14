import { api } from "./axiosInstance";
import { EventsResponse,Event,Category,CategoryResponse } from "@/types/type";

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

export const getEventsByCategories = async (selectedCategory: string): Promise<Event[]> => {
    const url =
      selectedCategory === "all"
        ? "/api/v1/event/all-events"
        : `/api/v1/event/events/category/${selectedCategory}`;

    const response = await api.get<EventsResponse>(url);

    return response?.data?.data;
};
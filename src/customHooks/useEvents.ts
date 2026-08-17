import { useQuery } from "@tanstack/react-query";
import { getEventsByCategories } from "@/api/api.call";

export const useEvents = (selectedCategory?: string) => {
  return useQuery({
    queryKey: ["events", selectedCategory],
    queryFn: () => getEventsByCategories(selectedCategory),
  });
};
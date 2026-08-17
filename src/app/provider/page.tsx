"use client";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {Store} from "../../redux/store/store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={Store}>
      <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
    </Provider>
  );
}
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "@/redux/store/store";
import { restoreAuth } from "@/redux/slices/authSlice";

export default function AuthInitializer() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const email = localStorage.getItem("email");
    const role = localStorage.getItem("role");

    if (email && role) {
      dispatch(
        restoreAuth({
          email,
          role:"user",
        })
      );
    }
  }, [dispatch]);

  return null;
}
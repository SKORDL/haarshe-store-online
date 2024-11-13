"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface User {
  email: string;
}

interface StoredUser {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => string | null;
  signup: (email: string, password: string) => string | null;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

const USERS_STORAGE_KEY = "eco_shop_users";
const CURRENT_USER_KEY = "eco_shop_current_user";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Load stored users or initialize empty array
  const getStoredUsers = (): StoredUser[] => {
    const users = localStorage.getItem(USERS_STORAGE_KEY);
    return users ? JSON.parse(users) : [];
  };

  const signup = (email: string, password: string): string | null => {
    const users = getStoredUsers();

    // Check if user already exists
    if (users.some((u) => u.email === email)) {
      return "Email already registered";
    }

    // Add new user
    const newUser = { email, password };
    users.push(newUser);
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));

    // Log user in after signup
    setUser({ email });
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ email }));
    return null;
  };

  const login = (email: string, password: string): string | null => {
    const users = getStoredUsers();
    const user = users.find((u) => u.email === email);

    if (!user) {
      return "User not found";
    }

    if (user.password !== password) {
      return "Invalid password";
    }

    setUser({ email });
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify({ email }));
    return null;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(CURRENT_USER_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

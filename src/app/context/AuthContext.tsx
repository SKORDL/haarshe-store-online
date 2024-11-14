"use client";

import { createContext, ReactNode, useState, useContext } from "react";
import { usersClient } from "@/sanity/lib/usersClient";
import { groq } from "next-sanity";

interface User {
  _id: string;
  email: string;
  username: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<string | null>;
  signup: (
    email: string,
    password: string,
    username: string
  ) => Promise<string | null>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const signup = async (email: string, password: string, username: string) => {
    try {
      // Check if user already exists by email
      const existingUserByEmail = await usersClient.fetch(
        groq`*[_type == "user" && email == $email][0]`,
        { email }
      );

      if (existingUserByEmail) {
        return "Email already registered";
      }

      // Check if username is taken
      const existingUserByUsername = await usersClient.fetch(
        groq`*[_type == "user" && username == $username][0]`,
        { username }
      );

      if (existingUserByUsername) {
        return "Username already taken";
      }

      // Create new user document
      const newUser = await usersClient.create({
        _type: "user",
        email,
        username,
        password, // Note: In production, password should be hashed
        createdAt: new Date().toISOString(),
      });

      if (!newUser._id) {
        throw new Error("Failed to create user");
      }

      // Set user state without password
      setUser({
        _id: newUser._id,
        email: newUser.email,
        username: newUser.username,
      });

      return null;
    } catch (error) {
      console.error("Signup error:", error);
      return "Error signing up. Please try again.";
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // Fetch user by email
      const foundUser = await usersClient.fetch(
        groq`*[_type == "user" && email == $email][0]{
          _id,
          email,
          username,
          password
        }`,
        { email }
      );

      if (!foundUser) {
        return "User not found";
      }

      if (foundUser.password !== password) {
        // In production, use proper password comparison
        return "Invalid password";
      }

      // Set user state without password
      setUser({
        _id: foundUser._id,
        email: foundUser.email,
        username: foundUser.username,
      });

      return null;
    } catch (error) {
      console.error("Login error:", error);
      return "Error logging in. Please try again.";
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

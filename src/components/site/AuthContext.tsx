import React, { createContext, useContext, useState, useEffect } from "react";

export interface User {
  name: string;
  email: string;
  phone: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  activeModal: "login" | "signup" | null;
  setActiveModal: (modal: "login" | "signup" | null) => void;
  login: (email: string) => Promise<{ success: boolean; error?: string }>;
  signup: (name: string, email: string, phone: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Local client-side fallback store in case server/Vercel functions are offline during development
const getLocalUsers = (): Record<string, User> => {
  const users = localStorage.getItem("lumiere_registered_users");
  return users ? JSON.parse(users) : {};
};

const saveLocalUser = (user: User) => {
  const users = getLocalUsers();
  users[user.email.toLowerCase()] = user;
  localStorage.setItem("lumiere_registered_users", JSON.stringify(users));
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState<"login" | "signup" | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("lumiere_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("lumiere_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string) => {
    const lowerEmail = email.toLowerCase();
    try {
      const response = await fetch("/api/auth?action=login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      if (!response.ok) {
        throw new Error("Server returned HTTP error");
      }
      
      const data = await response.json();
      if (data.success) {
        setUser(data.user);
        localStorage.setItem("lumiere_user", JSON.stringify(data.user));
        setActiveModal(null);
        return { success: true };
      } else {
        return { success: false, error: data.error || "Login failed" };
      }
    } catch (err) {
      console.warn("Vite dev proxy or server is offline, falling back to local emulator database lookup.", err);
      // Client-side fallback check
      const localUsers = getLocalUsers();
      if (localUsers[lowerEmail]) {
        const foundUser = localUsers[lowerEmail];
        setUser(foundUser);
        localStorage.setItem("lumiere_user", JSON.stringify(foundUser));
        setActiveModal(null);
        return { success: true };
      }
      // If the email is not registered in the emulated database, return error!
      return { success: false, error: "Email not registered. Please sign up first." };
    }
  };

  const signup = async (name: string, email: string, phone: string) => {
    const newUser: User = { name, email, phone };
    try {
      const response = await fetch("/api/auth?action=signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      
      if (!response.ok) {
        throw new Error("Server returned HTTP error");
      }

      const data = await response.json();
      if (data.success) {
        setUser(data.user);
        localStorage.setItem("lumiere_user", JSON.stringify(data.user));
        setActiveModal(null);
        return { success: true };
      } else {
        return { success: false, error: data.error || "Signup failed" };
      }
    } catch (err) {
      console.warn("Vite dev proxy or server is offline, falling back to local emulator signup.", err);
      // Client-side fallback saving
      saveLocalUser(newUser);
      setUser(newUser);
      localStorage.setItem("lumiere_user", JSON.stringify(newUser));
      setActiveModal(null);
      return { success: true };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("lumiere_user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        activeModal,
        setActiveModal,
        login,
        signup,
        logout,
      }}
    >
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

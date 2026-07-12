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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeModal, setActiveModal] = useState<"login" | "signup" | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("lumiere_user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch {

        localStorage.removeItem("lumiere_user");
      }
    }
    setLoading(false);
  }, []);

  const login = async (email: string) => {
    try {
      const response = await fetch("/api/auth?action=login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        return { success: false, error: data.error || "Login failed." };
      }
      
      if (data.success) {
        setUser(data.user);
        localStorage.setItem("lumiere_user", JSON.stringify(data.user));
        if (data.sessionToken) {
          localStorage.setItem("lumiere_session", data.sessionToken);
        }
        return { success: true };
      } else {
        return { success: false, error: data.error || "Login failed" };
      }
    } catch (err: any) {
      const rawMsg = (err?.message || err?.toString() || "");
      if (rawMsg.toLowerCase().includes("already exist") || rawMsg.toLowerCase().includes("already exists")) {
        return { success: false, error: "Account already exists" };
      }

      console.error("Login error:", err);
      return { success: false, error: "Failed to connect to the authentication server." };
    }
  };

  const signup = async (name: string, email: string, phone: string) => {
    try {
      const response = await fetch("/api/auth?action=signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone }),
      });
      
      const data = await response.json();

      if (!response.ok) {
        return { success: false, error: data.error || "Signup failed." };
      }

      if (data.success) {
        setUser(data.user);
        localStorage.setItem("lumiere_user", JSON.stringify(data.user));
        if (data.sessionToken) {
          localStorage.setItem("lumiere_session", data.sessionToken);
        }
        return { success: true };
      } else {
        return { success: false, error: data.error || "Signup failed" };
      }
    } catch (err: any) {
      const rawMsg = (err?.message || err?.toString() || "");
      if (rawMsg.toLowerCase().includes("already exist") || rawMsg.toLowerCase().includes("already exists")) {
        return { success: false, error: "Account already exists" };
      }

      console.error("Signup error:", err);
      return { success: false, error: "Failed to connect to the authentication server." };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("lumiere_user");
    localStorage.removeItem("lumiere_session");
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

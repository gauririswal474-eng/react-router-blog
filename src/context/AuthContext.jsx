import { createContext, useContext, useState } from "react";

// Very small demo "auth": users are kept in localStorage (no backend).
// NOTE: storing passwords in localStorage is only OK for a learning project.
const USERS_KEY = "blog_users";
const SESSION_KEY = "blog_session";

function read(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // storage can be blocked, the app still works for the current visit
  }
}

function remove(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    // ignore
  }
}

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => read(SESSION_KEY, null));

  const signup = ({ name, email, password }) => {
    const cleanEmail = email.trim().toLowerCase();
    const users = read(USERS_KEY, []);

    if (users.some((u) => u.email === cleanEmail)) {
      return { ok: false, error: "An account with this email already exists." };
    }

    users.push({ name: name.trim(), email: cleanEmail, password });
    write(USERS_KEY, users);

    const session = { name: name.trim(), email: cleanEmail };
    write(SESSION_KEY, session);
    setUser(session);
    return { ok: true };
  };

  const login = ({ email, password }) => {
    const cleanEmail = email.trim().toLowerCase();
    const found = read(USERS_KEY, []).find(
      (u) => u.email === cleanEmail && u.password === password
    );

    if (!found) {
      return { ok: false, error: "Invalid email or password." };
    }

    const session = { name: found.name, email: found.email };
    write(SESSION_KEY, session);
    setUser(session);
    return { ok: true };
  };

  const logout = () => {
    remove(SESSION_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return context;
}

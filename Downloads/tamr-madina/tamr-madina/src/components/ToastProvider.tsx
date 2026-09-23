import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";

type ToastContextValue = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [message, setMessage] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMessage(msg);
    timeoutRef.current = setTimeout(() => setMessage(null), 2600);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        aria-live="polite"
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4"
      >
        {message && (
          <div
            role="status"
            className="animate-toastIn pointer-events-auto rounded-sm bg-olive px-6 py-3 text-sm
              tracking-wide text-cream shadow-soft"
          >
            {message}
          </div>
        )}
      </div>
    </ToastContext.Provider>
  );
}

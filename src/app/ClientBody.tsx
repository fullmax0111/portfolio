"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return <div className="antialiased min-h-screen">{children}</div>;
}

"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      style={
        {
          // "--normal-bg": "var(--popover)",
          "--normal-bg": "#EE2B69",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "color": "black"
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

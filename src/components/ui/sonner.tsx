"use client"

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Toaster as Sonner, type ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      position="bottom-right"
      gap={8}
      icons={{
        success: (
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15 text-emerald-400">
            <CircleCheckIcon className="size-3.5" />
          </span>
        ),
        info: (
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/15 text-blue-400">
            <InfoIcon className="size-3.5" />
          </span>
        ),
        warning: (
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/15 text-amber-400">
            <TriangleAlertIcon className="size-3.5" />
          </span>
        ),
        error: (
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-red-500/15 text-red-400">
            <OctagonXIcon className="size-3.5" />
          </span>
        ),
        loading: (
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white/60">
            <Loader2Icon className="size-3.5 animate-spin" />
          </span>
        ),
      }}
      toastOptions={{
        classNames: {
          toast:
            "group/toast !bg-neutral-900/80 !backdrop-blur-xl !border !border-white/10 !text-white !shadow-2xl !shadow-black/40 !rounded-2xl !px-4 !py-3.5 !gap-3 !font-sans",
          title: "!text-sm !font-semibold !text-white/90",
          description: "!text-xs !text-white/50 !leading-relaxed",
          actionButton:
            "!bg-white/10 hover:!bg-white/20 !text-white/80 !text-xs !font-medium !rounded-lg !px-3 !py-1.5 !border-0 !transition-colors",
          cancelButton:
            "!bg-transparent hover:!bg-white/5 !text-white/40 hover:!text-white/60 !text-xs !rounded-lg !px-3 !py-1.5 !border-0 !transition-colors",
          closeButton:
            "!bg-white/5 hover:!bg-white/10 !border !border-white/10 !text-white/40 hover:!text-white/70 !rounded-lg !transition-colors",
          success: "!border-emerald-500/20",
          info: "!border-blue-500/20",
          warning: "!border-amber-500/20",
          error: "!border-red-500/20",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }

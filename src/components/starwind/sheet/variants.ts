import { tv } from "tailwind-variants";

export const sheetBackdrop = tv({
  base: [
    "fixed inset-0 top-0 left-0 z-50 hidden h-screen w-screen bg-black/80",
    "sheet-backdrop-motion",
  ],
});

export const sheetContent = tv({
  base: [
    "bg-background fixed z-50 flex-col gap-4 shadow-lg open:flex",
    "sheet-popup-motion",
  ],
  variants: {
    side: {
      right: [
        "inset-y-0 right-0 left-auto h-full max-h-[100dvh] w-3/4 border-l sm:max-w-sm",
      ],
      left: [
        "inset-y-0 right-auto left-0 h-full max-h-[100dvh] w-3/4 border-r sm:max-w-sm",
      ],
      top: [
        "inset-x-0 top-0 bottom-auto h-auto w-full max-w-screen border-b",
      ],
      bottom: [
        "inset-x-0 top-auto bottom-0 h-auto w-full max-w-screen border-t",
      ],
    },
  },
  defaultVariants: {
    side: "right",
  },
});

export const sheetCloseButton = tv({
  base: [
    "absolute top-4 right-4 rounded-xs [&>svg]:opacity-70 hover:[&>svg]:opacity-100",
    "focus-visible:ring-outline/50 transition-none outline-none focus-visible:ring-3",
  ],
});

export const sheetDescription = tv({
  base: [
    "text-muted-foreground text-sm",
  ],
});

export const sheetFooter = tv({
  base: [
    "mt-auto flex flex-col gap-2 p-4",
  ],
});

export const sheetHeader = tv({
  base: [
    "flex flex-col gap-1.5 p-4",
  ],
});

export const sheetTitle = tv({
  base: [
    "text-foreground font-heading font-semibold",
  ],
});

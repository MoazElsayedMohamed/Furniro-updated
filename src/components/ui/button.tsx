import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center  gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground w-full rounded-lg shadow outline-none hover:bg-primary/90",
        destructive:
          "border border-black py-4 w-full rounded-2xl justify-center capitalize max-sm:text-sm ",
        secondary:
          "bg-secondary hover:bg-primary hover:text-white md:text-xl font-normal py-4 outline-none cursor-pointer rounded-md justify-center ",
        outline:
          "border border-primary px-20 py-3 max-md:px-12 max-md:py-2 font-semibold rounded-none text-primary hover:bg-primary hover:text-white justify-center",
        third:
          "bg-secondary hover:bg-primary hover:text-white sm:text-sm font-normal py-2 px-3 outline-none cursor-pointer rounded-md justify-center max-sm:text-xs",
        outline2:
          "border border-gray-200 rounded-md w-1/2 py-4 px-1 justify-between max-sm:text-sm",
        ghost:
          "bg-primary text-white md:text-xl font-normal py-4 outline-none cursor-pointer",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        xs: "h-4 rounded-md px-2 py-3 text-sm",
        sm: "h-8 rounded-md px-4 py-6 text-base w-auto ",
        base: "text-lg max-md:text-base",
        md: "h-10 rounded-md text-2xl",
        lg: "font-normal text-lg py-3.5 text-white max-sm:py-1.5 max-sm:text-base",
        cardSize: "",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

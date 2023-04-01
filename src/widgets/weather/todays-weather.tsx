import { Icons } from "@/components/common/icons";
import { Separator } from "@/components/ui/separator";
import { formatDate, getWeekDay } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const todaysWeatherVariants = cva(
  "rounded-lg p-4 relative disabled:pointer-events-none group transition-all duration-300 ease-in-out dark:hover:bg-theme-700  disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-theme-100 dark:bg-theme-800 hover:bg-theme-200 ",
        outline:
          "bg-transparent border border-theme-200  hover:bg-theme-300  dark:border-theme-700 ",
        solid: "bg-theme-900 hover:bg-theme-700 dark:bg-theme-50 ",
      },
      size: {
        default: "min-w-[600px] w-full flex justify-between items-center",
        small: "grid w-64 place-items-start",
      },
      animate: {
        default: "hover:scale-[1.02]  hover:drop-shadow-lg",
        off: "",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
      animate: "default",
    },
  }
);

export interface TodaysWeatherProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof todaysWeatherVariants> {}

export const TodaysWeather = React.forwardRef<
  HTMLButtonElement,
  TodaysWeatherProps
>(({ className, variant, size, animate, ...props }, ref) => {
  const isSolid = variant === "solid";
  const isSmall = size === "small";

  return (
    <button
      ref={ref}
      {...props}
      className={cn(
        "",
        todaysWeatherVariants({ variant, size, animate, className })
      )}
    >
      <div className={cn(!isSmall && "flex gap-x-4  items-end")}>
        <div className="text-left">
          <p
            className={cn(
              isSolid &&
                "text-theme-400 dark:text-theme-500 dark:group-hover:text-theme-400"
            )}
          >
            {isSmall ? "Kerala" : "Sunny"}
          </p>
          <h1
            className={cn(
              "my-2",
              isSolid &&
                "text-theme-50 dark:text-theme-900 dark:group-hover:text-theme-100"
            )}
          >
            27&#8451;
          </h1>
          <Separator
            className={cn(
              "h-[.5] mb-2 bg-theme-400 dark:bg-theme-500 dark:group-hover:bg-theme-400",
              !isSmall && "hidden"
            )}
          />
          <p
            className={cn(
              isSolid &&
                "text-theme-400 dark:text-theme-500 dark:group-hover:text-theme-400"
            )}
          >
            {getWeekDay(Date.now())}
          </p>
        </div>
        <Separator
          orientation="vertical"
          className={cn(
            "h-20",
            isSolid &&
              "bg-theme-400 dark:bg-theme-500 dark:group-hover:bg-theme-400",
            isSmall && "hidden"
          )}
        />
        <div className={cn(isSmall && "hidden")}>
          <p
            className={cn(
              isSolid &&
                "text-theme-400 dark:text-theme-500 dark:group-hover:text-theme-400"
            )}
          >
            {formatDate(Date.now())}
          </p>
          <p
            className={cn(
              "flex items-center gap-x-2 mt-2",
              isSolid &&
                "text-theme-400 dark:text-theme-500 dark:group-hover:text-theme-400"
            )}
          >
            <Icons.location className="w-5 h-5" /> Kerala
          </p>
        </div>
      </div>
      <div
        className={cn(
          "mr-10",
          isSolid &&
            "text-theme-400 dark:text-theme-500 dark:group-hover:text-theme-400",
          isSmall && "absolute right-4 top-4 mr-0"
        )}
      >
        <Icons.sun className={cn("w-10 h-10", isSmall && "w-6 h-6")} />
      </div>
    </button>
  );
});

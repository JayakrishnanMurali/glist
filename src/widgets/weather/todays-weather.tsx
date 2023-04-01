import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatDate, getWeekDay } from "@/lib/helpers";
import { cn } from "@/lib/utils";

export const TodaysWeather = () => {
  return (
    <div
      className={cn(
        buttonVariants({ size: "xl", variant: "subtle" }),
        "rounded-lg p-4 flex justify-between items-center  animate-scale-up"
      )}
    >
      <div className="flex gap-x-4 items-end">
        <div>
          <p>Sunny</p>
          <h1 className="my-2">27&#8451;</h1>
          <p>{getWeekDay(Date.now())}</p>
        </div>
        <Separator orientation="vertical" className="h-20" />
        <div>
          <p>{formatDate(Date.now())}</p>
          <p className="flex items-center gap-x-2 mt-2">
            <Icons.location className="w-5 h-5" /> Kerala
          </p>
        </div>
      </div>
      <div className="mr-10">
        <Icons.sun className="w-10 h-10 " />
      </div>
    </div>
  );
};

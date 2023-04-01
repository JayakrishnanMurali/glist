import { TodaysWeather } from "@/widgets/weather/todays-weather";
import React from "react";

export const Widgets = () => {
  return (
    <div className="grid gap-4">
      <TodaysWeather variant="outline" size="small" />
      <TodaysWeather variant="solid" size="small" />
      <TodaysWeather variant="default" size="small" />
      <TodaysWeather variant="outline" />
      <TodaysWeather variant="solid" />
      <TodaysWeather variant="default" />
      <TodaysWeather variant="default" disabled />
      <TodaysWeather variant="default" size="small" disabled />
    </div>
  );
};

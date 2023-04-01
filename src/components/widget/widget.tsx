import { _layout } from "@/config/data";
import { TodaysWeather } from "@/widgets/weather/todays-weather";
import React from "react";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

export const Widgets = () => {
  const breakpoints = { "2xl": 1536, xl: 1280, lg: 1024, md: 768, sm: 640 };
  const cols = { "2xl": 3, xl: 3, lg: 3, md: 3, sm: 1 };
  return (
    <ResponsiveGridLayout
      compactType="vertical"
      cols={cols}
      breakpoints={breakpoints}
      rowHeight={150}
      width={970}
      layouts={_layout}
      // className="w-96"
    >
      <TodaysWeather key="weather1" variant="outline" size="small" />
      <TodaysWeather key="weather2" variant="solid" size="small" />
      <TodaysWeather key="weather3" variant="default" size="small" />
      <TodaysWeather key="weather4" variant="outline" />
      <TodaysWeather key="weather5" variant="solid" />
      <TodaysWeather key="weather6" variant="default" />
    </ResponsiveGridLayout>
  );
};

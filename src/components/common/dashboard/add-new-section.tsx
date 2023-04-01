import { Icons } from "../icons";
import { Button } from "@/components/ui/button";
import React from "react";

export const AddNewSection = () => {
  return (
    <Button variant="subtle" className="justify-start">
      <Icons.add className="mr-2" />
      Add Section
    </Button>
  );
};

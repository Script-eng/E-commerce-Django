
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

import { cn } from "@/lib/utils";
const baseLabelStyles = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

const Label = React.forwardRef(
  
  ({ className, ...props }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      
      className={cn(baseLabelStyles, className)} // Simplified if not using CVA variants
      {...props}
    />
  )
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
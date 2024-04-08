import * as React from "react";
import {
    Tooltip as TooltipCon,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface TooltipProps {
    children?: ReactNode;
    text?: string;
    direction?: "top" | "bottom" | "left" | "right";
}

export function Tooltip({ children, text, direction = "bottom" }: TooltipProps) {
    return (
        <TooltipProvider>
            <TooltipCon>
                <TooltipTrigger asChild>
                    <div className="relative">{children}</div>
                </TooltipTrigger>
                <TooltipContent side={direction}>
                    <div className="capitalize bg-white flex items-center justify-center px-3 py-2 _border" style={{ borderRadius: '5px' }}>
                        <p className="text-sm">{text}</p>
                    </div>
                </TooltipContent>
            </TooltipCon>
        </TooltipProvider>
    );
}

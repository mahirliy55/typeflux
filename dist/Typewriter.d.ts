import { default as React } from 'react';

export interface TypewriterProps {
    text: string | string[];
    speed?: number;
    delay?: number;
    loop?: boolean;
    cursor?: boolean;
    cursorChar?: string;
    className?: string;
}
export declare const Typewriter: React.FC<TypewriterProps>;

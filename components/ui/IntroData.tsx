import { ReactNode, useRef, useLayoutEffect, useCallback } from 'react';

const IntroData = ({ children }: { children: ReactNode }) => {
    const textRef = useRef<HTMLParagraphElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Function to update the height
    const updateHeight = useCallback(() => {
        if (textRef.current && containerRef.current) {
            const textHeight = textRef.current.offsetHeight;
            containerRef.current.style.setProperty(
                "--intro-text-height",
                `${textHeight}px`
            );
        }
    }, []);

    // Update height when children change or component mounts
    useLayoutEffect(() => {
        updateHeight();
        
        // Also update on window resize in case text wraps differently
        const handleResize = () => {
            updateHeight();
        };
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [children, updateHeight]);

    return (
        <div
            ref={containerRef}
            className="flex p-2 gap-3 items-start w-full dark:group-hover:text-white transition-colors duration-200"
        >
            <div className="relative flex-shrink-0 pt-1">
                <div
                    className="bg-border dark:bg-border w-px md:w-0.5 group-hover:bg-white transition-colors duration-200"
                    style={{
                        height: "var(--intro-text-height, 32px)",
                        minHeight: 32,
                        borderRadius: 2,
                    }}
                />
            </div>
            <p
                ref={textRef}
                className="text-sm text-muted-foreground group-hover:text-black dark:group-hover:text-white leading-relaxed w-full transition-colors duration-200"
                style={{
                    lineHeight: "1.6",
                }}
            >
                {children}
            </p>
        </div>
    );
};

export default IntroData;
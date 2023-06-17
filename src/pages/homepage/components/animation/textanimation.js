import { useEffect, useRef } from 'react';

function HeroText() {
    const typedTextRef = useRef(null);
    const cursorRef = useRef(null);

    const textArray = ['SPAIN', 'ITALY', 'CHINA', 'MONACO', 'JAPAN', 'POLEN'];
    const typingDelay = 100;
    const erasingDelay = 80;
    const newTextDelay = 1500; // Delay between current and next text
    let textArrayIndex = 0;
    let charIndex = 0;

    useEffect(() => {
        const typedText = typedTextRef.current;
        const cursor = cursorRef.current;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursor.classList.contains('typing')) {
                    cursor.classList.add('typing');
                }
                typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursor.classList.remove('typing');
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursor.classList.contains('typing')) {
                    cursor.classList.add('typing');
                }
                typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                cursor.classList.remove('typing');
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) {
                    textArrayIndex = 0;
                }
                setTimeout(type, typingDelay + 1100);
            }
        }

        // Initiate the effect on mount
        if (textArray.length) {
            setTimeout(type, newTextDelay + 250);
        }

        // Clean up effect
        return () => {
            clearTimeout();
        };
    }, []);

    return (
        <div className="">
            <h1 className="font-heading text-5xl font-bold text-bluegreen md:text-8xl">
                <span ref={typedTextRef} className="typed-text"></span>
                <span ref={cursorRef} className="cursor">
                    &nbsp;
                </span>
            </h1>
        </div>
    );
}

export default HeroText;

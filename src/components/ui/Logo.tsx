import { useEffect, useState } from "react";
import logo from "@/assets/logo-01.svg";

export default function Logo() {

    const texts = ["Fast", "Reliable", "Delivery"];
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const interval = setTimeout(() => {
            if(!isDeleting) {

                if(charIndex === texts[wordIndex].length) {

                    if(wordIndex !== texts.length - 1) {
                        setIsDeleting(true);
                    }
                } else {
                    setCharIndex(prev => prev + 1);
                }
            }
            else {
                // texts[wordIndex].slice(0, charIndex);

                if(charIndex === 0) {
                    setIsDeleting(false);
                    setWordIndex(prev => prev + 1);
                } else {
                    setCharIndex(prev => prev - 1);
                }
            }
        }, 100);

        return () => clearTimeout(interval); 

    }, [charIndex , isDeleting, wordIndex]);

    return (
        <>
            <img className="w-2/5" src={logo} alt="Logo" />
            <span className="w-3/5">Car<mark>{texts[wordIndex].slice(0, charIndex)}</mark><span className="cursor">|</span></span>
        </>
    );
}

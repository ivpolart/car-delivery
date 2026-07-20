import { useEffect, useState } from "react";
import logo from "@/assets/logo-01.svg";

export default function Logo() {
    const message = "Delivery";
    const [text, setText] = useState("");

    useEffect(() => {
        let index = 0;
        let isDeleting = false;

        const interval = setInterval(() => {
            if (!isDeleting) {
                index++;
                setText(message.slice(0, index));

                if (index === message.length) {
                    isDeleting = true;
                }
            } else {
                index--;
                setText(message.slice(0, index));

                if (index === 0) {
                    isDeleting = false;
                }
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <img src={logo} alt="Logo" />
            <div>Car{text}<span className="cursor">|</span></div>
        </>
    );
}

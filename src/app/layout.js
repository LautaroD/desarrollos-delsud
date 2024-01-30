import localFont from "next/font/local";
import Script from "next/script";
import { Navbar, Footer } from "@/components";
import ChatbotContainer from "@/components/chatbot/Chatbot";

import "./globals.css";
import "../styles/global.scss";
import "../styles/slider.scss";
import "../styles/slider_original.scss";
import "../styles/chatbot.scss";
import "animate.css";

export const neueHassDisplay = localFont({
    preload: true,
    src: [
        {
            path: "../../public/font/NeueHaasDisplay-Bold.woff2",
            weight: "bold",
            style: "normal",
        },
        {
            path: "../../public/font/NeueHaasDisplay-BoldItalic.woff2",
            weight: "bold",
            style: "italic",
        },
        {
            path: "../../public/font/NeueHaasDisplay-Light.woff2",
            weight: "300",
            style: "normal",
        },
        {
            path: "../../public/font/NeueHaasDisplay-LightItalic.woff2",
            weight: "300",
            style: "italic",
        },
        {
            path: "../../public/font/NeueHaasDisplay-Medium.woff2",
            weight: "normal",
            style: "normal",
        },
        {
            path: "../../public/font/NeueHaasDisplay-MediumItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/font/NeueHaasDisplay-Roman.woff2",
            weight: "500",
            style: "normal",
        },
        {
            path: "../../public/font/NeueHaasDisplay-RomanItalic.woff2",
            weight: "500",
            style: "italic",
        },
        {
            path: "../../public/font/NeueHaasDisplay-Thin.woff2",
            weight: "100",
            style: "normal",
        },
        {
            path: "../../public/font/NeueHaasDisplay-ThinItalic.woff2",
            weight: "100",
            style: "italic",
        },
    ],
});

export default function RootLayout({ children }) {
    return (
        <html lang='es' className={neueHassDisplay.className}>
            <Script id='google-tag-manager' strategy='afterInteractive'>
                {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KTQ52MD');`}
            </Script>
            <body>
                <iframe
                    src='https://www.googletagmanager.com/ns.html?id=GTM-KTQ52MD'
                    height='0'
                    width='0'
                    style={{ display: "none", visibility: "hidden" }}
                ></iframe>
                <Navbar />
                {children}
                <ChatbotContainer />
                <Footer />
            </body>
        </html>
    );
}

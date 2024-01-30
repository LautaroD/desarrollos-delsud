import Image from "next/image";
import style from "./ButtonChatbot.module.scss";
import { useWindowSize } from "@/utils/hooks";
import { button_chatbot } from "../../../public/images";

const ButtonChatbot = ({ open, setOpen }) => {
    const size = useWindowSize();

    if (open && size.width < 1390) return null;
    return (
        <>
            <div
                className={`${style.home} animate__animated animate__pulse animate__infinite`}
                id='chatbot-conversion'
                onClick={() => setOpen(true)}
            >
                <Image src={button_chatbot} alt='Chateá con Juli' />
            </div>
        </>
    );
};

export default ButtonChatbot;

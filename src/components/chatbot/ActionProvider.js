import React from "react";
// import { createClientMessage } from "react-chatbot-kit";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const optionTerrenos = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const botMessage = createChatBotMessage("Te dejo a continuación todas las zonas en las cuales tenemos terrenos disponibles.", {
            widget: "loteosLinks",
        });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };
    const moreTerrenos = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const botMessage = createChatBotMessage("Contamos con terrenos disponibles en las siguientes zonas", {
            widget: "loteosLinks",
        });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const formasDePago = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const textInnerHtml = (
            <>
                Además, también disponemos de una herramienta financiera llamada <b> Plan D </b>
                con la cual podés abonar el 50% del lote y comenzar a disfrutarlo de forma inmediata. ¡Vos decidís cómo pagar el resto!
            </>
        );

        const botMessage = createChatBotMessage(
            "Contamos con un método de financiación personalizado en donde se acuerda el anticipo, la cantidad de cuotas y el valor de las mismas con uno de nuestros representantes de venta."
        );

        const botMessage2 = createChatBotMessage(textInnerHtml, { delay: 1000, widget: "optionReturn" });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage, botMessage2],
        }));
    };

    const contacto = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const linkToWhatsapp = (
            <>
                Podés contactarte con nosotros escribiéndonos un Whatsapp al
                <span>
                    <a
                        style={{ display: "flex", alignItems: "center", color: "blue" }}
                        href='https://bit.ly/3Z7pApP'
                        target='_blank'
                        rel='noreferrer'
                    >
                        221-5079256
                        <svg width='15px' height='15px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                            <g id='Interface / External_Link'>
                                <path
                                    id='Vector'
                                    d='M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11'
                                    stroke='blue'
                                    strokeWidth='2'
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                />
                            </g>
                        </svg>
                    </a>
                </span>
            </>
        );

        const botMessage = createChatBotMessage(linkToWhatsapp, { widget: "optionReturn" });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const detailTerreno = (e, id) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";

        const botMessage2 = createChatBotMessage(
            <>
                <span>Los servicios con los que cuenta este barrio semi-cerrado son:</span>
                <ul style={{ paddingLeft: "15px" }}>
                    <li>Electricidad</li>
                    <li>Cerco perimetral</li>
                    <li>Portón de ingreso</li>
                    <li>Calles de tosca y calcáreo</li>
                </ul>
            </>,
            { widget: "OptionReturnTerrenos", delay: 4700 }
        );

        if (id === 1) {
            const desarrollo = (
                <>
                    <span>
                        El barrio “Los Fresnos” se encuentra ubicado en la localidad de Arturo Seguí, a 40 minutos de la ciudad de La Plata.
                        El desarrollo consta de 265 lotes de 250 m².
                    </span>
                </>
            );
            const botMessage = createChatBotMessage(desarrollo);
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, botMessage2],
            }));
        }
        if (id === 2) {
            const botMessage = createChatBotMessage(
                <>
                    <span>
                        El barrio “La Escondida” se encuentra ubicado en la localidad de Los Hornos, a 20 minutos de la ciudad de La Plata.
                        El desarrollo consta de 302 lotes con medidas que van desde los 252 hasta los 616 m².
                    </span>
                    <br />
                </>
            );
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, botMessage2],
            }));
        }
        if (id === 3) {
            const botMessage = createChatBotMessage(
                <>
                    <span>
                        El barrio “Las Victorias” se encuentra ubicado en la localidad de Abasto, a 30 minutos de la ciudad de La Plata. El
                        desarrollo consta de 72 lotes de 251 m².
                    </span>
                    <br />
                </>
            );

            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, botMessage2],
            }));
        }
        if (id === 4) {
            const desarrollo2 = createChatBotMessage(
                <>
                    <span>Los servicios con los que cuenta este barrio semi-cerrado son:</span>
                    <ul style={{ paddingLeft: "15px" }}>
                        <li>Agua potable</li>
                        <li>Cerco perimetral</li>
                        <li>Portón de ingreso</li>
                        <li>Electricidad subterránea</li>
                        <li>Calles de tosca y calcáreo</li>
                    </ul>
                </>,
                { widget: "OptionReturnTerrenos", delay: 4200 }
            );
            const botMessage = createChatBotMessage(
                <>
                    <span>
                        El barrio “La Campiña” se encuentra ubicado en la localidad de Etcheverry, a 30 minutos de la ciudad de La Plata. El
                        desarrollo consta de 166 lotes con medidas que van desde los 280 hasta los 450 m².
                    </span>
                    <br />
                </>
            );
            setState((prev) => ({
                ...prev,
                messages: [...prev.messages, botMessage, desarrollo2],
            }));
        }
    };

    const returnMenu = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";
        const botMessage = createChatBotMessage("¿Te puedo ayudar en algo más?", { widget: "loteosOptions" });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const returnMenuTerrenos = (e) => {
        e.target.style.color = "#e8e9ed";
        e.target.style.backgroundColor = "#003A70";
        const botMessage = createChatBotMessage("¿Te puedo ayudar en algo más?", { widget: "detailTerrenos" });

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    const noAnswer = () => {
        const botMessage = createChatBotMessage("Lo siento, no tengo esa información.");

        setState((prev) => ({
            ...prev,
            messages: [...prev.messages, botMessage],
        }));
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    actions: {
                        optionTerrenos,
                        formasDePago,
                        contacto,
                        noAnswer,
                        detailTerreno,
                        returnMenu,
                        returnMenuTerrenos,
                        moreTerrenos,
                    },
                });
            })}
        </div>
    );
};

export default ActionProvider;

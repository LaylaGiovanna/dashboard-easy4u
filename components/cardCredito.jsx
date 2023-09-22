import React from "react";
import Image from "next/image";

const CardCreditos = (props) => {
    return (
        <>
            <div className="flex flex-col min-w-card-home-1 min-h-card-home-1 rounded-3xl  border-gray shadow-shadow-button bg-white">
                {/* Div interna do card 1 */}
                <div className="flex flex-col p-6 gap-12 text-text">
                    {/* Div dos textos */}
                    <div className="gap-4">
                        <span className="text-3xl">{props.title}</span>

                        <div className="flex justify-between">
                            <div className="pl-0 justify-start">
                                <span className="text-text-light">{props.subtitle}</span>
                            </div>
                            <div className="flex pr-0 justify-end ">
                                <button className="text-text-green">{props.button}</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-4 justify-center space-x-4">
                        <div className="flex px-10 items-center justify-between shadow-shadow-button font-semibold rounded-3xl w-button-card-1 h-24">
                            <Image className="h-fit" src={props.src} alt={props.alt} height={props.height} width={props.width} />
                            <span className="h-fit">{props.titleButton}</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CardCreditos;




import React from "react";
import Image from "next/image";

const CardProdutos = (props) => {
    return (
        <>
            <div className="flex flex-col min-w-card-home-1 min-h-card-home-1 rounded-3xl shadow-shadow-button bg-white">
                {/* Div interna do card 1 */}
                <div className="flex flex-col p-6 gap-8 text-text h-full">
                    {/* Div dos textos */}
                    <div className="gap-4">
                        <span className="text-3xl">{props.title}</span>

                        <div className="flex justify-between">
                            <div className="pl-0 justify-start">
                                <span className="text-text-light">{props.subtitle}</span>
                            </div>
                            <div className="flex pr-0 justify-end ">
                                <button className="text-text-green">{props.titleButton}</button>
                            </div>
                        </div>
                    </div>

                    <div className="flex  gap-x-3 justify-around items-center h-44 ">
                        <div className="flex flex-col items-center w-24 justify-around h-full">
                            <div>
                                <Image className="rounded-lg shadow-2xl" src={props.src} alt={props.alt} height={116} width={103}  />
                            </div>
                            <div className="">{props.titleProduto}</div>
                        </div>

                        <div className="flex flex-col items-center w-24 justify-around h-full">
                            <div>
                                <Image className="rounded-lg shadow-2xl" src={props.src} alt={props.alt} height={116} width={103}  />
                            </div>
                            <div className="">{props.titleProduto}</div>
                        </div>

                        <div className="flex flex-col items-center w-24 justify-around h-full">
                            <div>
                                <Image className="rounded-lg shadow-2xl" src={props.src} alt={props.alt} height={116} width={103}  />
                            </div>
                            <div className="">{props.titleProduto}</div>
                        </div>

                        <div className="flex flex-col items-center w-24 justify-around h-full">
                            <div>
                                <Image className="rounded-lg shadow-2xl" src={props.src} alt={props.alt} height={116} width={103}  />
                            </div>
                            <div className="">{props.titleProduto}</div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CardProdutos;
import React from "react";
import { useState } from "react";
import Image from "next/image";

const CardCreditos = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

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
                        </div>
                    </div>

                    <div onClick={openModal} className="flex gap-4 justify-center space-x-4">
                        <div className="flex px-10 items-center justify-between shadow-shadow-button font-semibold rounded-3xl w-button-card-1 h-24">
                            <Image className="h-fit" src={props.src} alt={props.alt} height={props.height} width={props.width} />
                            <span className="h-fit">{props.titleButton}</span>
                        </div>

                    </div>
                    {isOpen && (
                        <div className="bg-gradient fixed inset-0 flex items-center justify-center z-50">
                            <div className="grid modal-container rounded-lg p-4 w-[680px] h-fit bg-white">
                                <div className=" modal-content  p-4 rounded-xl">
                                    <h2 className="text-xl font-bold my-4">Adicionar créditos para usuários</h2>
                                    <form className="fle flex-col justify-between">
                                        <div>
                                            <label className="" htmlFor="campo">Email do usuário</label>
                                            <div className="pt-1">
                                                <input
                                                    type="text"
                                                    placeholder="Email"
                                                    id="email"
                                                    className="border rounded-lg border-gray p-2 mb-4 w-full"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="campo">Quanto deseja enviar?</label>
                                            <div className="pt-1">
                                                <input
                                                    type="text"
                                                    placeholder="R$"
                                                    id="dinheiro"
                                                    className="border rounded-lg border-gray p-2 mb-4 w-full"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex justify-end h-16 gap-4 ">
                                            <button
                                                onClick={closeModal}
                                                className="border text-text h-11 py-2 px-4 rounded ">
                                                Cancelar
                                            </button>
                                            <button

                                                type="submit"
                                                className="bg-primary border-text border h-11 text-white py-2 px-4 rounded">
                                                Confirmar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </>
    );
};

export default CardCreditos;




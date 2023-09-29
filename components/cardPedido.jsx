import React from "react";
import Image from "next/image";

const CardProdutos = (props) => {
    return (
        <>
            <div className="flex justify-center flex-col text-center text-text">
                <span className="text-3xl ">Pedido</span>
                <span className="text-base">de</span>
                <div className="flex items-center justify-center w-72">
                    <div className=" break-all">

                        <p className=" text-base">{props.email}</p>
                    </div>
                </div>
            </div>
            <div className="grid-cols-2  grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/4 bg-grayMedium text-text">
                <div className="flex  justify-between pb-4">
                    <div className="">
                        <div> R$40,00</div>
                        <div> R$40,00</div>
                    </div>
                    <div className="">
                        <div>1x</div>
                        <div>1x</div>
                    </div>
                </div>

                <div className="flex items-center justify-end ">
                    Total R$80,00
                </div>
            </div>
        </>
    );
};

export default CardProdutos;
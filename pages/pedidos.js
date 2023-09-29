import React from "react";
import Layout from "../components/Layout";
import CardProdutos from "../components/cardPedido"

export default function Pedidos() {
  return (
    <Layout>
      <div className='grid justify-around p-14 flex-col h-full text-white bg-bubble-gum'>
        <div className="grid grid-cols-3 gap-10 justify-around overflow-auto bg-blue h-full">

          <div className="flex flex-col items-center justify-center rounded-lg shadow-shadow-button  w-80 h-72 bg-white ">
            {/* <CardProdutos email="matheus.siqueira100@gmail.com" products="coxinha"/> */}
            <div className="flex justify-center flex-col text-center text-text">
              <span className="text-3xl ">Pedido</span>
              <span className="text-base">de</span>
              <div className="flex items-center justify-center w-72">
                <div className=" break-all">

                  <p className=" text-base">matheus.siqueira100@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="grid-cols-3   grid-rows-2 gap-4 mt-4 rounded-lg p-5 w-3/4 h-2/4 bg-grayMedium text-text">
              <div className="flex  justify-between pb-4">
                <div className="">
                  <div> Coxinha</div>
                  <div> Coxinha</div>
                </div>
                
                <div className="">
                  <div>1x</div>
                  <div>1x</div>
                </div>
              </div>

              <div className="flex items-end justify-end bg-pink">
                Total R$80,00 
              </div>
            </div>
          </div>
          {/* <div className="flex justify-center flex-col text-center text-text">
              <span className="text-3xl ">Pedido</span>
              <span className="text-base">de</span>
              <div className="flex items-center justify-center w-72">
                <div className=" break-all">

                  <p className=" text-base">matheus.siqueira100@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="mt-4 flex rounded-lg p-5 w-3/4 h-2/4 bg-grayMedium text-text">
              oi layla voce esta programando um card
            </div> */}

          {/* <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div>
          <div className="w-80 h-72 bg-midnight">
            teste card
          </div> */}

        </div>
      </div>
    </Layout>
  )
};

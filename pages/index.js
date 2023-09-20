import Layout from "../components/Layout";
import DinheiroIcon from "../components/icons/images/iconDinheiro.jpg";
import ImagemPao from "../components/icons/images/imagemPao.png";
import ImagemFruta from "../components/icons/images/imagemFruta.png";
import Image from "next/image";
import { IconTriangleInvertedFilled, IconTriangleInverted, } from "@tabler/icons-react";
import React from "react";
import ListOrder from "../components/listPedidos";
import ImagePerfil1 from "../components/icons/images/foto-perfil-1.png"
import ImagePerfil2 from "../components/icons/images/foto-perfil-2.png"
import ImagePerfil3 from "../components/icons/images/foto-perfil-3.png"


export default function Home() {

  return <Layout>
    <div className="grid grid-cols-2  items-center h-full">

      {/* Div coluna 1 */}
      <div class="flex flex-col justify-around p-12 items-center h-full">
        {/* Card 1 - card de créditos */}
        <div className="flex flex-col min-w-card-home-1 min-h-card-home-1 rounded-3xl  border-gray shadow-shadow-button bg-white">
          {/* Div interna do card 1 */}
          <div className="flex flex-col p-6 gap-12 text-text">
            {/* Div dos textos */}
            <div className="gap-4">
              <span className="text-3xl">Crédito</span>

              <div className="flex justify-between">
                <div className="pl-0 justify-start">
                  <span className="text-text-light">Adicione créditos ao seus usuários</span>
                </div>
                <div className="flex pr-0 justify-end ">
                  <button className="text-text-green">Verificar</button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center space-x-4">
              <div className="flex px-10 items-center justify-between shadow-shadow-button font-semibold rounded-3xl w-button-card-1 h-24">
                <Image className="h-fit" src={DinheiroIcon} alt='Icone de dinheiro' height={80} width={68} />
                <span className="h-fit">Créditos da Cantina</span>
              </div>
            </div>

          </div>
        </div>

        {/* Card 2 - card de produtos */}
        <div className="flex flex-col min-w-card-home-1 min-h-card-home-1 rounded-3xl shadow-shadow-button bg-white">
          {/* Div interna do card 1 */}
          <div className="flex flex-col p-6 gap-8 text-text h-full">
            {/* Div dos textos */}
            <div className="gap-4">
              <span className="text-3xl">Produtos</span>

              <div className="flex justify-between">
                <div className="pl-0 justify-start">
                  <span className="text-text-light">Adicione os produtos disponíveis</span>
                </div>
                <div className="flex pr-0 justify-end ">
                  <button className="text-text-green">Verificar</button>
                </div>
              </div>
            </div>

            <div className="flex  gap-x-3 justify-around items-center h-44 ">
              <div className="flex flex-col items-center w-24 justify-around h-full">
                <div>
                  <Image className="rounded-lg shadow-2xl" src={ImagemPao} alt='Icone de dinheiro' height={116} width={103} />
                </div>
                <div className="">Bread</div>
              </div>

              <div className="flex flex-col items-center w-24 justify-around h-full">
                <div>
                  <Image className="rounded-lg shadow-2xl" src={ImagemFruta} alt='Icone de dinheiro' height={116} width={103} />
                </div>
                <div className="">Vegetables</div>
              </div>

              <div className="flex flex-col items-center w-24 justify-around h-full">
                <div>
                  <Image className="rounded-lg shadow-2xl" src={ImagemPao} alt='Icone de dinheiro' height={116} width={103} />
                </div>
                <div className="">Fruits</div>
              </div>

              <div className="flex flex-col items-center w-24 justify-around h-full">
                <div>
                  <Image className="rounded-lg shadow-2xl" src={ImagemFruta} alt='Icone de dinheiro' height={116} width={103} />
                </div>
                <div className="">Dessert</div>
              </div>
            </div>

          </div>
        </div>

      </div>


      {/* Div coluna 2 */}
      <div class="flex flex-col p-12 justify-around items-center h-full  ">
        {/* Card Pedidos */}
        <div className=" relative flex flex-col min-w-card-home-1 h-[770px] overflow-auto rounded-3xl shadow-shadow-button  bg-white">
          {/* Div interna do card  */}
          <div className="flex flex-col p-6 gap-12 text-text">
            {/* Div dos textos */}
            <div className="pt-2 gap-4 ">
              <div className="flex justify-between items-center gap-4">
                <div className="flex gap-3 items-center">
                  <div className=" h-3 w-3 bg-blue rounded-full"></div>
                  <span className="text-3xl">Pedidos</span>
                </div>

                <div className="top-0 flex items-center gap-3  justify-end ">
                  <button className="text-text-green">Verificar</button>
                  <div className="flex items-center justify-center h-7 w-7 bg-redTransparent rounded-full">
                    <IconTriangleInvertedFilled class="icon-triangle" size={13} color="red" />
                  </div>
                </div>
              </div>
            </div>

            {/* div dos valores ganhos no dia */}
            <div className="flex items-center pl-5 gap-8 h-9">
              <div className="">$1.400</div>

              <div className="flex items-center border-gray text-gray pl-5 border-l-2 h-9">Hoje</div>
            </div>

            {/* div da lista de quem comprou */}
            <div className="flex flex-col gap-6 sticky">
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil2} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil3} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil2} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil3} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
              <ListOrder src={ImagePerfil1} name="teste" order="w6t873467846" price="20,00" />
            </div>

          </div>
        </div>
      </div>
    </div>
  </Layout>;
}

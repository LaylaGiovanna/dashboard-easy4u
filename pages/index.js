import Layout from "../components/Layout";

export default function Home() {
  return <Layout>
    <div className="grid grid-cols-2  items-center bg-pink h-full">

      {/* Div principal coluna 1 */}
      <div class="flex flex-col p-12 items-center bg-purple h-full">
        {/* Card 1 - card de créditos */}
        <div className="flex flex-col min-w-card-home-1 min-h-card-home-1 rounded-3xl shadow-shadow-button bg-white">
          {/* Div interna do card 1 */}
          <div className="flex flex-col p-6 gap-12 text-text">
            {/* Div dos textos */}
            <div className="gap-4">
              <span className="text-3xl">Crédito</span>

              <div className="flex space-x-40">
                <span className="text-text-light">Adicione seus créditos</span>
                <button className="text-text-green">Verificar</button>
              </div>
            </div>

            <div className="flex gap-4 ">
              {/* <Image></Image> */}
              <button className="shadow-shadow-button rounded-3xl w-button-card-1 h-24">Créditos da Cantina</button>
            </div>

          </div>
        </div>

      </div>

      {/* Div principal coluna 2 */}
      <div class="flex flex-col p-12 items-center bg-blue h-full ">
        02
      </div>
    </div>
  </Layout>;
}

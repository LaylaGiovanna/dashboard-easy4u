import React from 'react'
import { useState } from 'react'
import Layout from '../components/Layout'
import TableColaborador from "../components/tablesProdutosColaboradores";


export default function Colaborador() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Layout>
        <div className='flex flex-col h-full bg-second'>
          <div className='flex items-center justify-center pb-6 h-1/4'>
            <div className='flex h-4/5 w-4/5 items-end '>
              <button onClick={openModal} className='h-11 w-80 rounded-md bg-primary'>
                Cadastrar colaborador
              </button>

              {isOpen && (
                <div className="bg-gradient fixed inset-0 flex items-center justify-center z-50">
                  <div className="modal-container w-[750px] h-[450px] bg-tahiti">
                    <div className="modal-content bg-blue p-4">
                      <h2 className="text-xl font-bold mb-4 bg-pink">Meu Modal</h2>
                      <form>
                        <label htmlFor="campo">Campo:</label>
                        <input
                          type="text"
                          id="campo"
                          className="border border-gray-400 p-2 mb-4 w-full"
                        />
                        <button
                          type="submit"
                          className="bg-midnight border-2 text-white py-2 px-4 rounded"
                        >
                          Enviar
                        </button>
                      </form>
                      <button
                        onClick={closeModal}
                        className="bg-red border-2 text-white py-2 px-4 rounded mt-4"
                      >
                        Fechar Modal
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className='flex items-center justify-center h-full '>
            <TableColaborador Type="tableColaborador" />

          </div>
        </div>
      </Layout>
    </>

  )
};


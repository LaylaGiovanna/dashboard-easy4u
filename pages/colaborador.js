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
                  <div className="grid modal-container rounded-lg p-4 w-[680px] h-fit text-text bg-white">
                    <div className=" modal-content  p-4 rounded-xl">
                      <h2 className="text-xl font-bold my-4">Cadastrar novo colaborador</h2>
                      <form className="fle flex-col justify-between">
                        <div>
                          <label className="" htmlFor="campo">Nome do colaborador</label>
                          <div className="pt-1">
                            <input
                              type="text"
                              placeholder="Nome do colaborador"
                              id="email"
                              className="border rounded-lg border-gray p-2 mb-4 w-full"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="campo">Email do colaborador</label>
                          <div className="pt-1">
                            <input
                              type="text"
                              placeholder="Email do colaborador"
                              id="dinheiro"
                              className="border rounded-lg border-gray p-2 mb-4 w-full"
                            />
                          </div>
                        </div>

                        <div className='mb-5'>
                          <label htmlFor="campo">Tipo do colaborador</label>
                          <div className="pt-1">
                            <div class="relative inline-flex h-11 w-2/5">
                              <select class="appearance-none bg-white border border-gray rounded-md min-w-full pl-3 pr-10  py-2 focus:outline-none focus:ring focus:border-blue-500 sm:text-sm">
                                <option>Tipo 1</option>
                                <option>Tipo 2</option>
                                <option>Tipo 3</option>
                                <option>Tipo 4</option>
                              </select>
                              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              </div>
                            </div>
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

          <div className='flex items-center justify-center h-full '>
            <TableColaborador Type="tableColaborador" />

          </div>
        </div>
      </Layout>
    </>

  )
};


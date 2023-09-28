import React from 'react'
import Layout from '../components/Layout'
import TableColaborador from "../components/tablesProdutosColaboradores";


export default function Colaborador() {
  return (
    <Layout>
      <div className='flex flex-col h-full '>
        <div className='flex items-center justify-center pb-6 h-1/4'>
          <div className='flex h-4/5 w-4/5 items-end '>
            <button className='h-11 w-80 rounded-md bg-primary'>
              Cadastrar colaborador
            </button>

  
          </div>
        </div>

        <div className='flex items-center justify-center h-full '>
          <TableColaborador Type="tableColaborador" />

        </div>
      </div>
    </Layout>
  )
};


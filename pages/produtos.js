import React from 'react'
import Layout from '../components/Layout'
import { IconEdit } from '@tabler/icons-react';
import { IconTrash } from '@tabler/icons-react';
import TableProdutos from "../components/tableProdutos";

const produtos = () => {
  

  return (
    <Layout>
      <div className='flex flex-col h-full '>
        <div className='flex items-center justify-center pb-6 h-1/4'>
          <div className='flex h-4/5 w-4/5 items-end '>
            <button className='h-11 w-80 rounded-md bg-primary'>Cadastrar produto</button>
          </div>
        </div>

        <div className='flex items-center justify-center h-full '>
          <TableProdutos Type="tableProdutos"/>
        </div>
      </div>
    </Layout>
  )
}

export default produtos
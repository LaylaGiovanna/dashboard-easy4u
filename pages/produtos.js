import React from 'react'
import Layout from '../components/Layout'

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
          <div className='flex justify-center  items-center h-4/5 w-4/5 pl-16 pr-16 rounded-lg shadow-shadow-button bg-white text-text '>
            <div className='flex  justify-center h-5/6 w-full bg-white text-text'>
              {/* div da tabela */}
              <div className='w-full flex items-center justify-center'>

                <div class=" w-full h-4/5 relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
                    <thead className="overflow-auto text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr className='sticky top-0 bg-primary text-white'>
                        <th scope="col" className=" px-6 py-3">
                          Foto
                        </th>
                        <th scope="col" className="px-6 py-3">
                          ID Produto
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Nome
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Preço
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Disponibilidade
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Edições
                          <span className="sr-only">&#xea98;</span>
                          <span className="sr-only">&#xeb41;;</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className=" text-sm font-medium dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4 ">
                          Silver
                        </td>
                        <td className="px-6 py-4">
                          Laptop
                        </td>
                        <td className="px-6 py-4">
                          $2999
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className="  dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                          White
                        </td>
                        <td className="px-6 py-4">
                          Laptop PC
                        </td>
                        <td className="px-6 py-4">
                          $1999
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                      <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                          Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                          Black
                        </td>
                        <td className="px-6 py-4">
                          Accessories
                        </td>
                        <td className="px-6 py-4">
                          $99
                        </td>
                        <td className="px-6 py-4 text-right">
                          <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default produtos
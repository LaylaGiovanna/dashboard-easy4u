import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useMemo, } from "react";
import { FaHamburger } from 'react-icons/fa';
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  LogoutIcon,
  UsersIcon,
  VideosIcon,
  // HamburguerIcon,
} from "./icons";


// essas são as rotas a partir dos icons de menu
const menuItems = [
  { id: 1, label: "Menu", icon: HomeIcon, link: "/" },
  { id: 2, label: "Produtos", icon: ArticleIcon, link: "/produtos" },
  { id: 3, label: "Pedidos", icon: UsersIcon, link: "/pedidos" },
  { id: 4, label: "Horário", icon: VideosIcon, link: "/horario" },
  { id: 5, label: "Verificar QrCode", icon: VideosIcon, link: "/qrCode" },
];

const Sidebar = () => {
      //[ estado inicial, estado final ] 
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  // serve para definir o tamanho da sidebar, w-80 é a largura inicial
  // e w-20 a largura quando clicado
  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      ["w-80"]: !toggleCollapse,
      ["w-20"]: toggleCollapse,
    }
  );

   // serve para rotacionar o icon da abertura e fechamento da sidebar
  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu) => {
    return classNames(
      "flex items-center cursor-pointer hover:bg-light-lighter rounded w-full overflow-hidden whitespace-nowrap",
      {
        ["bg-light-lighter"]: activeMenu.id === menu.id,
      }
    );
  };

  // serve para mostrar o icone apenas quando o mouse passar em cima da sidebar
  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  // serve para abrir e fechar a aba lateral
  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative ">
          <div className="flex items-center pl-1 gap-4 " >
            {/* LogoIcon é o icone criado para uso no video */}
            {/* esse bloco de código serve para esconder o icone de seta */}
            <LogoIcon />

            {/* <span
              className={classNames("mt-2 text-lg font-medium text-text", {
                hidden: toggleCollapse,
              })}
            >
              Logo
            </span> */}
          </div>
          {/* essas linhas do button servem para dizer 
            que pode ser fechado e aberto novamente */}
          {isCollapsible && (
            <button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </button>
            
          )}
        </div>

        <div className="flex flex-col items-start mt-40 ">
          {menuItems.map(({ icon: Icon, ...menu }) => {
            const classes = getNavItemClasses(menu);
            return (
              <div className={classes}>
                <Link href={menu.link}>
                  <a className="flex py-4 px-3 items-center w-full h-full">
                    <div style={{ width: "2.5rem" }}>
                      <Icon />
                    </div>
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}
                      </span>
                    )}
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>

      <div className={`${getNavItemClasses({})} px-3 py-4`}>
        <div style={{ width: "2.5rem" }}>
          <LogoutIcon />
        </div>
        {!toggleCollapse && (
          <span className={classNames("text-md font-medium text-text-light")}>
            Logout
          </span>
        )}
      </div>
    </div>
  );
};

export default Sidebar;

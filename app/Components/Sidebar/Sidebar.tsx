"use client";
import React from 'react'
import styled from 'styled-components';
import { useGlobalState } from '@/app/Context/globalProvider';
import Image from 'next/image';
import menu from "@/app/Utils/menu";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
  const { theme } = useGlobalState();
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (link: string) => {
    router.push(link);
  };

  return (
    <SidebarStyled theme={theme}>
      <div className="profile">
        <div className="profile-overlay"></div>
        <div className="image">
          <Image width={70} height={70} src='/avatar.png' alt='Profile'/>
        </div>
        <h1>
          <span>John</span>
          <span>Doe</span>
        </h1>
      </div>
      <ul className="nav-items">
        {menu.map((item) => {
          return <li className={`nav-item`} onClick={() => { handleClick(item.link) }}>
            {item.icon}
            <Link href={item.link}>
              {item.title}
            </Link>
          </li>;
        })}
      </ul>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius: 1rem;
`;

export default Sidebar
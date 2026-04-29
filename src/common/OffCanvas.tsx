"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import menu_data from '@/data/menu-data';


const OffCanvas = ({ setMenuOpen, menuOpen }: any) => {
  const [navTitle, setNavTitle] = useState("");
  const [navTitle2, setNavTitle2] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };
  //openMobileMenu
  const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };
  return (
    <>
      <div className={`lonyo-menu-wrapper ${menuOpen ? 'lonyo-body-visible' : ''}`}>
        <div className="lonyo-menu-area text-center">
          <div className="lonyo-menu-mobile-top">
            <div className="mobile-logo">
              <Link href="/">
                <img src="assets/images/logo/logo-dark.svg" alt="logo" />
              </Link>
            </div>
            <button className="lonyo-menu-toggle mobile" onClick={() => setMenuOpen(false)}>
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="lonyo-mobile-menu">
            <ul>
              {menu_data.map((item, i) => (
                <li key={i} className={`${item.has_dropdown ? 'menu-item-has-children lonyo-item-has-children' : ''} ${navTitle === item.title ? "lonyo-active" : ""}`}>
                  <Link href={item.link} onClick={() => openMobileMenu(item.title)}>
                    {item.title}
                    {item.has_dropdown && <span className="lonyo-mean-expand"></span>}
                  </Link>
                  {item.has_dropdown && (
                    <ul className="sub-menu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                      {item.sub_menus?.map((sub_item, index) => (
                        <li key={index} className={`menu-item-has-children lonyo-item-has-children ${navTitle2 === sub_item.title ? "lonyo-active" : ""}`}>
                          <Link href={sub_item.link} onClick={() => openMobileMenu2(sub_item.title)}>
                            {sub_item.title}
                            {sub_item.inner_submenu && <span className="lonyo-mean-expand"></span>}
                          </Link>
                          {sub_item.inner_submenu &&
                            <ul className="sub-menu lonyo-submenu" style={{ display: navTitle2 === sub_item.title ? "block" : "none", }}>
                              {sub_item.sub_menu?.map((inner_sub_item, inner_index) => (
                                <li key={inner_index}>
                                  <Link href={inner_sub_item.link}>{inner_sub_item.title}</Link>
                                </li>
                              ))}
                            </ul>
                          }
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="lonyo-mobile-menu-btn">
            <Link className="lonyo-default-btn sm-size" href="/contact-us" data-text="Get in Touch"><span className="btn-wraper">Get in Touch</span></Link>
            <Link className="lonyo-default-btn sm-size" href="/contact-us" data-text="Get in Touch"><span className="btn-wraper">Get in Touch</span></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
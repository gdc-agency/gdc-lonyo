"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import OffCanvas from '@/common/OffCanvas';
import menu_data from '@/data/menu-data';
import useSticky from '@/hooks/use-sticky';

const HeaderOne = ({ style_2, style_3, toggle_color }: any) => {

  const [menuOpen, setMenuOpen] = useState(false);
	const { sticky } = useSticky()


  return (
    <>
      <header className={`${sticky ? "sticky-menu" : ""} site-header  ${style_2 ? "bg-heading lonyo-header-section" : style_3 ? 'lonyo-header-section3' : "lonyo-header-section light-bg"} `} id="sticky-menu">
        <div className="container">
          <div className="row gx-3 align-items-center justify-content-between">
            <div className="col-8 col-sm-auto ">
              <div className="header-logo1 ">
                <Link href="/">
                  {style_2 ?
                    <img src="/assets/images/logo/logo-white.svg" alt="logo" />
                    :
                    <img src="/assets/images/logo/logo-dark.svg" alt="logo" />
                  }
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="lonyo-main-menu-item">
                <nav className="main-menu menu-style1 d-none d-lg-block menu-left">
                  <ul>
                    {menu_data.map((item, i) => (
                      <li key={i} className={`${item.has_dropdown ? 'menu-item-has-children' : ''}`}>
                        <Link href={item.link} className={`${style_2 ? 'light-color' : ''}`}>{item.title}</Link>
                        {item.has_dropdown &&
                          <ul className="sub-menu">
                            {item?.sub_menus?.map((sub_item, index) => (
                              <li key={index} className={`${sub_item.inner_submenu ? 'menu-item-has-children' : ''}`}>
                                <Link href={sub_item.link} className={`${sub_item.inner_submenu ? 'no-border' : ''}`}>
                                  {sub_item.title}
                                </Link>
                                {sub_item.inner_submenu &&
                                  <ul className="sub-menu">
                                    {sub_item.sub_menu?.map((inner_item, inner_index) => (
                                      <li key={inner_index}>
                                        <Link href={inner_item.link}>{inner_item.title}</Link>
                                      </li>                                      
                                    ))} 
                                  </ul>
                                }
                              </li>

                            ))}
                          </ul>
                        }
                      </li>
                    ))} 
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-auto d-flex align-items-center">
              <div className="lonyo-header-info-wraper2">
                <div className={`lonyo-header-info-content ${style_2 ? 'content2' : ''}`}>
                  <ul>
                    <li><Link href="/sign-in">Log in</Link></li>
                  </ul>
                </div>
                <Link className={`lonyo-default-btn lonyo-header-btn ${style_2 ? 'btn2' : ''}`} href="/contact-us">Book a demo</Link>
              </div>
              <div className="lonyo-header-menu">
                <nav className="navbar site-navbar justify-content-between">
                  <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className={`lonyo-menu-toggle d-inline-block d-lg-none ${toggle_color ? 'white-color' : ''}`}>
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>

      </header>
      <OffCanvas setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
    </>
  );
};

export default HeaderOne;

// menu data 
const menu_data = [
  {
    id: 1,
    title: "Demo",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/", title: "Home 01", inner_submenu: false, },
      { link: "/home-2", title: "Home 02", inner_submenu: false, },
      { link: "/home-3", title: "Home 03", inner_submenu: false, },
    ],
  },
  {
    id: 2,
    title: "Pages",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      {
        link: "/about-us",
        title: "About Us",
        inner_submenu: false,
      },
      {
        link: "/pricing",
        title: "Pricing",
        inner_submenu: false,
      },
      {
        link: "#",
        title: "Integratios",
        inner_submenu: true,
        sub_menu: [
          { link: "/integration", title: "Integratios" },
          { link: "/single-integration", title: "Integratios Details" },
        ]
      },
      {
        link: "#",
        title: "Team",
        inner_submenu: true,
        sub_menu: [
          { link: "/team", title: "Team" },
          { link: "/single-team", title: "Team Details" },
        ]
      },
      {
        link: "#",
        title: "Service",
        inner_submenu: true,
        sub_menu: [
          { link: "/service", title: "Service" },
          { link: "/single-service", title: "Service Details" },
        ]
      },
      {
        link: "#",
        title: "Career",
        inner_submenu: true,
        sub_menu: [
          { link: "/career", title: "Career" },
          { link: "/single-career", title: "Career Details" },
        ]
      },
      {
        link: "#",
        title: "Utility",
        inner_submenu: true,
        sub_menu: [
          { link: "/faq", title: "Faq" },
          { link: "/404", title: "errors 404" },
          { link: "/cooming-soon", title: "Cooming Soon" },
        ]
      },
      {
        link: "#",
        title: "Accounts",
        inner_submenu: true,
        sub_menu: [
          { link: "/sign-up", title: "Sign Up" },
          { link: "/sign-in", title: "Sign In" },
          { link: "/reset-password", title: "Reset Password" },
        ]
      },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/portfolio", title: "Portfolio", inner_submenu: false, },
      { link: "/single-portfolio", title: "Portfolio Details", inner_submenu: false, },
    ],
  },
  {
    id: 4,
    title: "Blog",
    link: "#",
    has_dropdown: true,
    sub_menus: [
      { link: "/blog", title: "Blog", inner_submenu: false, },
      { link: "/single-blog", title: "Blog Details", inner_submenu: false, },
    ],
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact-us",
    has_dropdown: false,
  },
];
export default menu_data;

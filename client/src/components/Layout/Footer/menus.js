const stackOverflow = {
  menuCategory: 'STACK OVERFLOW',
  to: '/',
  subMenus: [
    {
      title: 'Questions',
      to: '/',
    },
    {
      title: 'Help',
      to: '/questions',
    },
  ],
};

const products = {
  menuCategory: 'PRODUCTS',
  to: '/',
  subMenus: [
    {
      title: 'Teams',
      to: '/questions',
    },
    {
      title: 'Advertising',
      to: '/questions',
    },
    {
      title: 'Collectives',
      to: '/questions',
    },
    {
      title: 'Talent',
      to: '/questions',
    },
  ],
};

const company = {
  menuCategory: 'COMPANY',
  to: '/questions',
  subMenus: [
    {
      title: 'About',
      to: '/questions',
    },
    {
      title: 'Press',
      to: '/questions',
    },
    {
      title: 'Work Here',
      to: '/',
    },
    {
      title: 'Legal',
      to: '/',
    },
    {
      title: 'Privacy Policy',
      to: '/',
    },
    {
      title: 'Terms of Service',
      to: '/',
    },
    {
      title: 'Contact Us',
      to: '/',
    },
    {
      title: 'Cookie Settings',
      to: '/',
    },
    {
      title: 'Cookie Policy',
      to: '/',
    },
  ],
};

const stackExchangeNetwork = {
  menuCategory: 'STACK EXCHANGE NETWORK',
  to: '/',
  subMenus: [
    {
      title: 'Technology',
      to: '/',
    },
    {
      title: 'Culture & recreation',
      to: '/',
    },
    {
      title: 'Life & arts',
      to: '/',
    },
    {
      title: 'Science',
      to: '/',
    },
    {
      title: 'Professional',
      to: '/',
    },
    {
      title: 'Business',
      to: '/',
    },
    {
      title: 'API',
      className: 'API',
      to: '/',
    },
    {
      title: 'Data',
      to: '/',
    },
  ],
};

const menus = [stackOverflow, products, company, stackExchangeNetwork];

export default menus;

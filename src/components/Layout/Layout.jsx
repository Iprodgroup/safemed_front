import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children, country, main }) {
  return (
    <div className="layout">
      <Header country={country} number={main.number} email={main.email}/>
        <main>{children}</main>
      <Footer country={country} number={main.number} email={main.email} address={main.address}/>
    </div>
  );
}

export default Layout;
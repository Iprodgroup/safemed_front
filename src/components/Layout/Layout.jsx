import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

function Layout({ children, country }) {
  return (
    <div className="layout">
      <Header country={country}/>
        <main>{children}</main>
      <Footer country={country} />
    </div>
  );
}

export default Layout;
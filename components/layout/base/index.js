import React from 'react';
import { Navbar, Footer } from '@components/ui';

const BaseLayout = ({ children }) => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <Navbar />

        <div className="fit">{children}</div>
      </div>

      <Footer />
    </div>
  );
};

export default BaseLayout;

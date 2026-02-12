import React from 'react';
import type { ReactNode } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import s from './layout.module.scss'
import './global.scss'

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={s.layout}>
        <Header />
        <main className={s.main}>
            {children}
        </main>
        <Footer />
    </div>
  );
};

export default MainLayout;
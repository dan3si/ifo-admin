import React, { useContext } from 'react';
import { Header } from 'components/HeaderModule';
import { Footer } from 'components/FooterModule';
import { AuthContext } from 'global/AuthContext';

export const MainPage = ({ history }: any) => {
  const { checkAuth } = useContext(AuthContext);

  checkAuth(history);

  return (
    <>
      <Header />
      <Footer />
    </>
  );
}

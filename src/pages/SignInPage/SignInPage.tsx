import React from 'react';
import { Header } from 'components/HeaderModule';
import { Footer } from 'components/FooterModule';
import { SignIn } from 'components/SignInModule';

export const SignInPage = () => {
  return (
    <>
      <Header />
      <SignIn />
      <Footer />
    </>
  );
}

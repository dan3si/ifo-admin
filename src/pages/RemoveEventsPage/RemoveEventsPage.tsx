import React from 'react';
import { Header } from 'components/HeaderModule';
import { RemoveEvents } from 'components/RemoveEventsModule';
import { Footer } from 'components/FooterModule';

export const RemoveEventsPage = () => {
  return (
    <>
      <Header />
      <RemoveEvents />
      <Footer />
    </>
  );
}

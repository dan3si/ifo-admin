import React from 'react';
import { Header } from 'components/HeaderModule';
import { AddEvents } from 'components/AddEventsModule';
import { Footer } from 'components/FooterModule';

export const AddEventsPage = () => {
  return (
    <>
      <Header />
      <AddEvents />
      <Footer />
    </>
  );
}

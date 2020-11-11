const scrollToBlock = (id: string) => {
  setTimeout(() => {
    const item: any = document.querySelector(`#${id}`);

    if (item) {
      window.scrollTo(0, item.offsetTop);
    }
  }, 0);
};

export default scrollToBlock;

export const modalBackgroundVariants = {
  initial: { backgroundColor: 'rgba(0,0,0,0)' },
  animate: { backgroundColor: 'rgba(0,0,0,0.3)' },
  exit: { backgroundColor: 'rgba(0,0,0,0)' },
};

export const bookContainerVariants = {
  in: {
    transition: {
      staggerChildren: 0.3,
    },
  },
  show: {
    transition: {
      duration: 0.3,
      staggerChildren: 0.3,
    },
  },
};

export const wellItemVariants = {
  in: {
    y: -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

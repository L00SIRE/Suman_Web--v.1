export const spring = {
  type: 'spring',
  stiffness: 90,
  damping: 18,
  mass: 0.9,
}

export const softSpring = {
  type: 'spring',
  stiffness: 70,
  damping: 20,
  mass: 1,
}

export const stagger = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.12,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: softSpring,
    },
  },
}

export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: softSpring,
}

const curry = (fn) => {
  const curried = (...args) =>
    fn.length <= args.length
      ? fn(...args)
      : (...more) => curried(...args, ...more);
  return curried;
};

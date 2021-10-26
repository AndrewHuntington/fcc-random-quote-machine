function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { sleep };

// // Example usage
// async function funkyFunc() {
//   // do something
//   await sleep(1000);
//   // do something else
// }

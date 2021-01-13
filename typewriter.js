const typeWriter = function(sentence) {
  let time = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 75;
  };
  setTimeout(() => {
    console.log();
  }, time);
};
typeWriter("lets see this sentence get written");
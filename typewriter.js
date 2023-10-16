/**
 * Simulates a typewriter effect by printing each character of the given text with a delay.
 *
 * @param {string} text - The text to be animated.
 */

const typeWriter = (text) => {
  // Loop through each character with a delay
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      process.stdout.write(text[i]);

      // If it's the last character, add a newline
      if (i === text.length - 1) {
        console.log();
      }
    }, i * 50); // 50ms delay between characters
  }
}

const sentence = "hello there from lighthouse labs";

typeWriter(sentence)
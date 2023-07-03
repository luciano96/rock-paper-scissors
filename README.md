# Rock, Paper, Scissors game

The idea for this project came from the [**Frontend Mentor**](https://www.frontendmentor.io/) website.

## Table of Contents

- [Overview](#overview)
  - [Links](#links)
- [Built with](#built-with)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)

## Overview

Users should be able to, play Rock, Paper, Scissors against the computer and see what is their score.

### Links

- Live Site URL: [TBD](http://random.cat)

### Built with

- [T3-Stack](https://create.t3.gg/)

### What I learned

The main thing I learned from this challenge was to add rippling effect to a span. I also played around with a hook to choose the computer move using several `setTimeout` functions

The animatino in question:

```css
.ripple-span {
  content: "";
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid hsl(217, 16%, 45%);
  background-color: hsl(217, 16%, 45%);
  pointer-events: none;
  animation: rippleEffect 3s linear infinite;
  animation-delay: calc(0.5s * var(--ripple-delay));
  z-index: -1;
}

@keyframes rippleEffect {
  0% {
    width: 0;
    height: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
}
```

```ts
const useRandomGameKey = (callback: (housePicked: MoveType) => void) => {
  const [gameKey, setGameKey] = useState<MoveType | null>(null);

  useEffect(() => {
    let sceneTimer: NodeJS.Timeout;
    const timer = setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * Moves.length);
      const randomKey = Moves[randomIndex] ?? "paper";
      setGameKey(randomKey);

      sceneTimer = setTimeout(() => {
        callback(randomKey);
      }, 1500);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearTimeout(sceneTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return gameKey;
};
```

### Continued development

Things that are still missing:

- make the website responsive for mobile
- add cypress tests to project

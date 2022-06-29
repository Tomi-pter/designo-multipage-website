import styled from "styled-components";
import { motion } from "framer-motion";

const Loading = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);

  .typewriter h1 {
    color: var(--white);
    font-family: "JostMedium";
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: 0.15em solid var(--peach); /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */
    letter-spacing: 0.15em; /* Adjust as needed */
    animation: typing 1.5s steps(14, end), blink-caret 0.5s step-end infinite;
    animation-delay: 350ms;
  }

  /* The typing effect */
  @keyframes typing {
    from {
      width: 0;
      opacity: 0;
    }
    to {
      width: 100%;
      opacity: 1;
    }
    1% {
    }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: var(--peach);
    }
  }
`;

export const backdropVariant = {
  initial: {
    opacity: 0,
    y: "-100vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

function Loader() {
  return (
    <Loading
      variants={backdropVariant}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="typewriter">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          DESIGNO
        </motion.h1>
      </div>
    </Loading>
  );
}

export default Loader;

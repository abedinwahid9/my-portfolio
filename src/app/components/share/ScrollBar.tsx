"use client";

import { useScroll, motion } from "framer-motion";

const ScrollBar = () => {
  // Track the scroll progress of the entire window
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress, // Bind progress to scaleX for horizontal animation
          transformOrigin: "0 0", // Start from the left
          position: "fixed", // Ensure the progress bar stays at the top
          top: 0,
          left: 0,
          height: "5px", // Height of the progress bar
          width: "100%", // Full-width bar
          backgroundColor: "#ff0088",
          zIndex: 10, // Ensure it overlays content
        }}
      />
      <Content />
    </>
  );
};

/**
 * ==============   Content Component   ================
 */

function Content() {
  return (
    <article
      style={{ maxWidth: "800px", margin: "0 auto", padding: "150px 20px" }}
    >
      <h1>Scroll to see the progress bar in action</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam. Fringilla quam urna. Cras turpis elit, euismod eget ligula
        quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
        Aliquam eleifend nunc a luctus porta.
      </p>
      <h2>Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla.
      </p>
      <p>
        Scroll to fill the content and observe how the progress bar moves as you
        scroll down and up.
      </p>
      <h2>Another Section</h2>
      <p>
        Donec ut volutpat ante, ut suscipit leo. Vestibulum bibendum at erat sit
        amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam. Fringilla quam urna. Cras turpis elit, euismod eget ligula
        quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
        Aliquam eleifend nunc a luctus porta.
      </p>
      <h2>Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla.
      </p>
      <p>
        Scroll to fill the content and observe how the progress bar moves as you
        scroll down and up.
      </p>
      <h2>Another Section</h2>
      <p>
        Donec ut volutpat ante, ut suscipit leo. Vestibulum bibendum at erat sit
        amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam. Fringilla quam urna. Cras turpis elit, euismod eget ligula
        quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
        Aliquam eleifend nunc a luctus porta.
      </p>
      <h2>Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla.
      </p>
      <p>
        Scroll to fill the content and observe how the progress bar moves as you
        scroll down and up.
      </p>
      <h2>Another Section</h2>
      <p>
        Donec ut volutpat ante, ut suscipit leo. Vestibulum bibendum at erat sit
        amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam. Fringilla quam urna. Cras turpis elit, euismod eget ligula
        quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
        Aliquam eleifend nunc a luctus porta.
      </p>
      <h2>Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla.
      </p>
      <p>
        Scroll to fill the content and observe how the progress bar moves as you
        scroll down and up.
      </p>
      <h2>Another Section</h2>
      <p>
        Donec ut volutpat ante, ut suscipit leo. Vestibulum bibendum at erat sit
        amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam. Fringilla quam urna. Cras turpis elit, euismod eget ligula
        quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
        Aliquam eleifend nunc a luctus porta.
      </p>
      <h2>Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla.
      </p>
      <p>
        Scroll to fill the content and observe how the progress bar moves as you
        scroll down and up.
      </p>
      <h2>Another Section</h2>
      <p>
        Donec ut volutpat ante, ut suscipit leo. Vestibulum bibendum at erat sit
        amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
        rhoncus quam. Fringilla quam urna. Cras turpis elit, euismod eget ligula
        quis, imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
        Aliquam eleifend nunc a luctus porta.
      </p>
      <h2>Sub-header</h2>
      <p>
        Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
        aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat sem,
        sit amet tempor nulla.
      </p>
      <p>
        Scroll to fill the content and observe how the progress bar moves as you
        scroll down and up.
      </p>
      <h2>Another Section</h2>
      <p>
        Donec ut volutpat ante, ut suscipit leo. Vestibulum bibendum at erat sit
        amet pulvinar. Pellentesque pharetra leo vitae tristique rutrum.
      </p>
    </article>
  );
}

export default ScrollBar;

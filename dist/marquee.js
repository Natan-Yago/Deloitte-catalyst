const initGSAPMarquees = () => {
  // Helper function to clone marquee items
  const cloneMarqueeItems = (marquee) => {
    const itemsWrapper = marquee.querySelector("div");
    const items = itemsWrapper.cloneNode(true);
    marquee.appendChild(items);
  };

  // Helper function to create smooth infinite scroll
  const createSmoothScroll = (marquee, direction = 1) => {
    const itemsWrapper = marquee.querySelector("div");
    const items = itemsWrapper.children;
    const totalWidth = Array.from(items).reduce(
      (acc, item) => acc + item.offsetWidth + 32,
      0
    ); // 32px for gap-8

    // Reset position
    gsap.set(marquee, { x: direction === 1 ? 0 : -totalWidth });

    // Create timeline
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(marquee, {
      x: direction === 1 ? -totalWidth : 0,
      duration: totalWidth / 50, // Adjust speed by changing divisor
      ease: "none",
    });

    return tl;
  };

  // Setup marquees
  const setupMarquee = (selector, direction) => {
    const marquee = document.querySelector(selector);
    if (!marquee) return null;

    cloneMarqueeItems(marquee);
    return createSmoothScroll(marquee, direction);
  };

  // Initialize both marquees
  const ltrTimeline = setupMarquee(".gsap-ltr-marquee", 1);
  const rtlTimeline = setupMarquee(".gsap-rtl-marquee", -1);

  // Pause on hover functionality
  const handleMarqueeHover = (timeline, isPaused) => {
    if (!timeline) return;

    gsap.to(timeline, {
      timeScale: isPaused ? 0 : 1,
      duration: 0.5,
    });
  };

  // Add hover listeners
  const marquees = [
    { el: ".gsap-ltr-marquee", tl: ltrTimeline },
    { el: ".gsap-rtl-marquee", tl: rtlTimeline },
  ];

  marquees.forEach(({ el, tl }) => {
    const marquee = document.querySelector(el);
    if (marquee && tl) {
      marquee.addEventListener("mouseenter", () =>
        handleMarqueeHover(tl, true)
      );
      marquee.addEventListener("mouseleave", () =>
        handleMarqueeHover(tl, false)
      );

      // Optional: Pause on touch for mobile devices
      marquee.addEventListener("touchstart", () =>
        handleMarqueeHover(tl, true)
      );
      marquee.addEventListener("touchend", () => handleMarqueeHover(tl, false));
    }
  });

  // Optional: Pause animations when page is not visible
  document.addEventListener("visibilitychange", () => {
    const isPaused = document.hidden;
    marquees.forEach(({ tl }) => {
      if (tl) handleMarqueeHover(tl, isPaused);
    });
  });
};

// Initialize on page load
window.addEventListener("load", initGSAPMarquees);

// Optional: Reinitialize on window resize for responsive behavior
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(initGSAPMarquees, 250);
});

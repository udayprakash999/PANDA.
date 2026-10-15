gsap.registerPlugin(ScrollTrigger);

gsap.from(".card", {
  y: 20,
  opacity: 0,
  scale: 0.9,
  duration: 0.5,
  stagger: 0.5,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".type",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".habitat-card", {
  y: 60,
  opacity: 0,
  duration: 0.7,
  stagger: 0.5,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".habitat-cards",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});
gsap.from(".funfacts-card", {
  y: 80,
  rotation: 3,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".f-cards",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
});

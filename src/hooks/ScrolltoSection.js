
export const ScrolltoSection = (section) => {
    const [scrollY, setScrollY] = useState(0);
  const [scrollRef, setScrollRef] = useRef(null);
  
    const element = document.getElementById(section);
    if (element) {
      const scrollY = element.offsetTop - 50;
      setScrollY(scrollY);
      scrollRef.current.scrollTo({
        top: scrollY,
        behavior: "smooth",
      });
    }
  };

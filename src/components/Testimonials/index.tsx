import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Item from "./Item";
import type { ItemProps } from "./type";
import { mockTestimonials } from "./data";

import styles from "./styles.module.css";

const Testimonials = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  const [currentItem, setCurrentItem] = useState(1);
  const lengthOfItems = items.length > 2 ? items.length - 2 : items.length;
  const [translateX, setTranslateX] = useState(0);

  const itemRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const [itemWidth, setItemWidth] = useState(0);
  const [gapBetween, setGapBetween] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (itemRef.current && wrapperRef.current) {
        const width = itemRef.current.getBoundingClientRect().width;
        const gap = parseFloat(getComputedStyle(wrapperRef.current).gap || "0");
        setItemWidth(width);
        setGapBetween(gap);
        setTranslateX(-1 * (width + gap));
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [items]);

  useEffect(() => {
    setItems(mockTestimonials); // init
  }, []);

  const handleNext = () => {
    // const next = (currentItem + 1) % items.length;
    // setCurrentItem(next)
    // setTranslateX(-(next * (itemWidth + gapBetween)))
    let next = currentItem + 1; // move right
    if (next > lengthOfItems) {
      // if we reached last buffer (index N+1), immediately jump to first real item
      next = 1;
      setTranslateX(-(1 * (itemWidth + gapBetween))); // instant jump
    } else {
      setTranslateX(-(next * (itemWidth + gapBetween)));
    }
    setCurrentItem(next);
  };

  const handlePrev = () => {
    // const prev = (currentItem - 1 + items.length) % items.length;
    // setCurrentItem(prev)
    // setTranslateX(-(prev * (itemWidth + gapBetween)));
    let prev = currentItem - 1; // move left
    if (prev <= 0) {
      // if we reached first buffer (index 0), jump to last real
      prev = lengthOfItems;
      setTranslateX(-(lengthOfItems * (itemWidth + gapBetween))); // instant jump
    } else {
      setTranslateX(-(prev * (itemWidth + gapBetween)));
    }
    setCurrentItem(prev);
  };

  const handleAnimationComplete = () => {
    if (currentItem === 0) {
      // jumped to first buffer → last real
      setCurrentItem(lengthOfItems);
      setTranslateX(-(lengthOfItems * (itemWidth + gapBetween)));
    } else if (currentItem === lengthOfItems + 1) {
      // jumped to last buffer → first real
      setCurrentItem(1);
      setTranslateX(-(1 * (itemWidth + gapBetween)));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.layout_top}>
        <div className={styles.title}>What Our Customers Say</div>
        <div className={styles.btn_container}>
          <button onClick={handlePrev} className={styles.btn}>
            <ArrowLeft strokeWidth={1} size={48} className={styles.icon} />
          </button>
          {/* 
            <div className={styles.display}>
                {currentItem}
            </div> 
          */}
          <button onClick={handleNext} className={styles.btn}>
            <ArrowRight strokeWidth={1} size={48} className={styles.icon} />
          </button>
        </div>
      </div>

      <div className={styles.layout_bottom}>
        <motion.div
          className={styles.slider_wrapper}
          ref={wrapperRef}
          animate={{ x: translateX }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
          }}
          onAnimationComplete={handleAnimationComplete}
        >
          {items.map((item, index) => (
            <Item
              key={index}
              itemRef={index === 0 ? itemRef : null}
              data={item}
              isActive={index === currentItem}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;

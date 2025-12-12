import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import type { HistoryItem } from "./type";
import { mockHistoryItems } from "./data";
import Achievements from "../Achievements";
import Profile from "../Profile";
import Item from "./Item";

import style from "./style.module.css";
const History = () => {
  const [items, setItems] = useState<HistoryItem[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 25,
  });
  const scaleY = useTransform(smoothProgress, (v) => v);
  useEffect(() => {
    setItems(mockHistoryItems);
  }, []);

  return (
    <div ref={scrollRef} className={style.component_container}>
      <div className={style.placeholder_container}>
        <Profile />
      </div>
      <div className={style.main_container}>
        <div className={style.main_title}>Our History</div>
        <motion.div
          className={style.history_line}
          style={{ scaleY, transformOrigin: "top" }}
          aria-hidden
        />
        <div className={style.items_container}>
          {items.map((data, idx) => (
            <Item data={data} key={idx} idx={idx} rootRef={scrollRef} />
          ))}
        </div>
      </div>
      <div className={style.placeholder_container}>
        <Achievements />
      </div>
    </div>
  );
};

export default History;

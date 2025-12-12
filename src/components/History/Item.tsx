import type { HistoryItem } from "./type";
import { motion } from "motion/react";
import style from "./style.module.css";

const Item = ({
  data,
  idx,
  rootRef,
}: {
  data: HistoryItem;
  idx: number;
  rootRef?: React.RefObject<HTMLElement | null>;
}) => {
  const indexVariants = {
    hidden: {
      backgroundColor: "#f0ece4",
      border: "1px solid #24211b20",
      color: "#24211b20",
    },
    visible: {
      backgroundColor: "hsl(35, 65%, 35%)",
      border: "1px solid hsl(35, 65%, 35%)",
      color: "hsl(30, 20%, 92%)",
    },
  };
  return (
    <motion.div className={style.item_wrapper}>
      <div className={style.item_index}>
        <motion.span
          variants={indexVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {idx}
        </motion.span>
      </div>
      <motion.div
        initial={{ opacity: 0.3 }}
        whileInView={{ opacity: 1 }}
        viewport={{
          root: rootRef,
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.6,
          ease: "easeIn",
        }}
        className={style.content_container}
      >
        <div className={style.item_title}>{data.title}</div>
        <div className={style.item_desc}>{data.desc}</div>
      </motion.div>
    </motion.div>
  );
};

export default Item;

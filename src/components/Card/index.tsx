import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import Item from "./Item";
import type { ItemProps } from "./types";
import { motion } from "motion/react";

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Card = () => {
  const [items, setItems] = useState<ItemProps[]>([]);
  useEffect(() => {
    setItems([
      {
        title: "Chase",
      },
      {
        title: "Chase",
      },
      {
        title: "Chase",
      },
      {
        title: "Chase",
      },
      {
        title: "Chase",
      },
      {
        title: "Chase",
      },
    ]); //items init
  }, []);
  return (
    <div className={styles.card}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className={styles.card_title}
      >
        Our Partners & Dealers
      </motion.div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="visible"
        className={styles.container}
      >
        {items.map((item, index) => (
          <Item key={index} data={item} idx={index} />
        ))}
      </motion.div>
    </div>
  );
};

export default Card;

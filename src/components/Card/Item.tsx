import type { ItemProps } from "./types.ts"
import styles from "./styles.module.css";
import { motion } from "motion/react"


const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
        opacity: 1, scale: 1,
        transition: { delay: i * 0.2, duration: 0.5 }
    })
}
const Item = ({ data, idx }: { data: ItemProps, idx: number }) => {
    return (
        <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={idx}
            transition={{
                opacity: { ease: "easeIn", duration: 1 },
                scale: { ease: "easeOut", duration: 0.6 }
            }}
            className={styles.item}
        >
            <div className={styles.item_title}>
                {data.title}
            </div>
            {data.imgURL && <img className={styles.logo} src={data.imgURL} alt={data.title} />}
        </motion.div>
    )
}

export default Item
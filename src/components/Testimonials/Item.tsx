import type { ItemProps } from "./type"
import styles from "./styles.module.css";
import { motion } from "motion/react";

const Item = ({ data, itemRef, isActive }: { data: ItemProps, isActive: boolean, itemRef?: React.Ref<HTMLDivElement> }) => {
    return (
        <motion.div
            ref={itemRef}
            className={styles.item}
            animate={{
                filter: isActive ? "blur(0px)" : "blur(3px)",
                scale: isActive ? 1 : 0.95,
                opacity: isActive ? 1 : 0.7,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <div className={styles.text_container}>
                <div className={styles.item_title}>
                    {data.title}
                </div>
                <div className={styles.item_desc}>
                    {`"${data.description}"`}
                </div>
            </div>
            <div className={styles.author_container}>
                {data.avatarURL && <img src={data.avatarURL} className={styles.avatar} />}
                <div className={styles.author_content_container}>
                    <div className={styles.author_name}>
                        {data.authorName}
                    </div>
                    <div className={styles.location}>
                        {data.location}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Item
import style from "./style.module.css";
import type { Category } from "./type";
import { Link } from "react-router-dom";
export const CategoryItem = ({ category }: { category: Category }) => {
  return (
    <>
      <Link to="/products">
        <div className={style.category_item}>
          <img src={category.url} alt={category.name} />
          <div className={style.item_content}>
            <h3>{category.name}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </Link>
    </>
  );
};

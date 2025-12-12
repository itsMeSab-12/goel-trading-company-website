import style from "./style.module.css";
import { mockCategories } from "./data";
import type { Category } from "./type";
import { CategoryItem } from "./Item";

const Categories = () => {
  const categories: Category[] = [...mockCategories];
  return (
    <div className={style.component_container}>
      <div className={style.page_title}>Our Products</div>
      <ul className={style.categories_container}>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;

import style from "./style.module.css";
import type { Product } from "./type";
import { stringDown } from "../../utils";
const Item = ({ data }: { data: Product }) => {
  return (
    <>
      <li
        key={data.id}
        className={style.product}
        data-id={data.id}
        data-name={stringDown(data.name)}
      >
        {/* <img src={product.img} alt={product.name} /> */}
        <div className={style.product_title}>
          {data.name}
          <span className={style.product_price}>{data.price}$</span>
        </div>
        <div className={style.product_content}>
          <span className={style.product_desc}>{data.desc}</span>
        </div>
      </li>
    </>
  );
};

export default Item;

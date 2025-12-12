import { useMemo, useState } from "react";
import style from "./style.module.css";
import { mockCategories, mockProducts } from "./data";
import { clsx } from "clsx";
import { stringUp } from "../../utils";
import ProductItem from "./Item";
import type { Category, Product } from "./type";

// const Products = () => {
//     const categories = [{ id: "0", name: "all" }, ...mockCategories];
//     const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
//     const [products, setProducts] = useState<Product[]>([]);
//     const itemsPerPage = 9;
//     const [pages, setPages] = useState<Product[][]>([]);
//     const [pageIdx, setPageIdx] = useState(0);

//     const paginateProducts = (products: Product[], count: number) => {

//         const pages: Product[][] = [];
//         for (let i = 0; i < products.length;) {
//             const page: Product[] = [];
//             for (let j = 0; j < count; j++) {
//                 if (products[i])
//                     page.push(products[i])
//                 i++;
//             }
//             pages.push(page);
//         }

//         return pages;
//     }
//     const categoryHandler = (e: React.MouseEvent<HTMLLIElement>) => {
//         const id = e.currentTarget.dataset.id;
//         if (id) {
//             const select = categories.find((category) => id === category.id)
//             if (select) {
//                 setSelectedCategory(select)
//                 if (select.id !== "0")
//                     setProducts(mockProducts.filter((product) => product.categoryId === id))
//                 else
//                     setProducts(mockProducts);

//             }
//         }
//     }
//     const nextPageHandler = () => { }
//     const prevPageHandler = () => { }
//     useEffect(() => {
//         setPages(paginateProducts(mockProducts, itemsPerPage))
//     }, [])

//     useEffect(() => {
//         const getCurrentPage = (idx: number) => {
//             if (Array.isArray(pages) && pages.length != 0)
//                 return pages[idx]
//             return []
//         }
//         setProducts(getCurrentPage(pageIdx))
//     }, [pageIdx, pages])
//     return (
//         <div className={style.page_container}>
//             <div className={style.page_title}>
//                 Products
//             </div>
//             <ul className={style.categories_container}>
//                 {categories.map((category) => {
//                     return (
//                         <li
//                             className={clsx(style.category, {
//                                 [style.active]: selectedCategory.id === category.id,
//                             })}
//                             data-id={category.id}
//                             key={category.id}
//                             onClick={categoryHandler}
//                         >
//                             {stringUp(category.name)}
//                         </li>
//                     )
//                 })}
//             </ul>
//             <ul className={style.products_container}>
//                 {

//                     products.map((product) => {
//                         return (
//                             <li
//                                 className={style.product}
//                                 data-id={product.id}
//                                 key={product.id}
//                                 data-name={stringDown(product.name)}
//                             >
//                                 {/* <img src="" alt="" /> */}
//                                 <div className={style.product_title}>
//                                     {product.name}
//                                     <span className={style.product_price}>
//                                         {product.price}$
//                                     </span>
//                                 </div>
//                                 <div>
//                                     <span className={style.product_desc}>
//                                         {product.desc}
//                                     </span>
//                                 </div>
//                             </li>
//                         )
//                     })

//                 }
//             </ul>
//             <div className={style.btns_container}>
//                 <div className={style.nav_btn} onClick={prevPageHandler}>
//                     prev
//                 </div>
//                 <span className={style.page_count}>
//                     {pageIdx + 1}/{pages.length}
//                 </span>
//                 <div className={style.nav_btn} onClick={nextPageHandler}>
//                     next
//                 </div>
//             </div>
//         </div>
//     )
// }

const Products = () => {
  const categories: Category[] = [{ id: "0", name: "all" }, ...mockCategories];

  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("0");
  const [pageIdx, setPageIdx] = useState<number>(0);

  const itemsPerPage = 9;

  // Filter products based on selected category
  const filteredProducts = useMemo(() => {
    return selectedCategoryId === "0"
      ? mockProducts
      : mockProducts.filter((p) => p.categoryId === selectedCategoryId);
  }, [selectedCategoryId]);

  // Paginate filtered products
  const pages = useMemo(() => {
    const result: Product[][] = [];
    for (let i = 0; i < filteredProducts.length; i += itemsPerPage) {
      result.push(filteredProducts.slice(i, i + itemsPerPage));
    }
    return result;
  }, [filteredProducts]);

  // Current page products
  const currentProducts = pages[pageIdx] || [];

  // Handlers
  const handleCategoryClick = (id: string) => {
    setSelectedCategoryId(id);
    setPageIdx(0); // reset pagination on category change
  };

  const nextPage = () =>
    setPageIdx((prev) => Math.min(prev + 1, pages.length - 1));
  const prevPage = () => setPageIdx((prev) => Math.max(prev - 1, 0));

  return (
    <div className={style.page_container}>
      <div className={style.page_title}>Products</div>

      {/* Categories */}
      <ul className={style.categories_container}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={clsx(style.category, {
              [style.active]: selectedCategoryId === category.id,
            })}
            onClick={() => handleCategoryClick(category.id)}
          >
            {stringUp(category.name)}
          </li>
        ))}
      </ul>

      {/* Products */}
      <ul className={style.products_container}>
        {currentProducts.map((product) => (
          <ProductItem data={product} />
        ))}
      </ul>

      {/* Pagination */}
      <div className={style.btns_container}>
        <div
          className={clsx(pageIdx > 0 ? style.btn_active : style.btn_inactive)}
          onClick={prevPage}
        >
          prev
        </div>
        <span className={style.page_count}>
          {pageIdx + 1}/{pages.length}
        </span>
        <div
          className={clsx(
            pageIdx < pages.length - 1 ? style.btn_active : style.btn_inactive
          )}
          onClick={nextPage}
        >
          next
        </div>
      </div>
    </div>
  );
};

export default Products;

import styles from '../../../../styles/Brands.module.css';

import axios from 'axios';
import Link from 'next/link';

import Layout from '../../../../components/Layout';

const groupBrandsByLetter = (brands) => {
  const grouped = {};

  brands.forEach((brand) => {
    const letter = brand.title.charAt(0).toUpperCase(); // Первая буква в верхнем регистре
    if (!grouped[letter]) {
      grouped[letter] = []; // Если ещё нет такой группы, создаем её
    }
    grouped[letter].push(brand); // Добавляем бренд в соответствующую группу
  });

  // Преобразуем объект в массив для использования в компоненте
  return Object.keys(grouped).map((letter) => ({
    letter,
    brands: grouped[letter],
  }));
};

const Product = ({ country, brands, slug }) => {
  const data = groupBrandsByLetter(brands);

  return (
    <Layout country={country}>
      <div className='container my-10'>
        <ul className={styles.list}>
          {data.map((brandGroup) => (
            <li key={brandGroup.letter} className={styles.item}>
              <b className={styles.letter}>{brandGroup.letter}</b>
              <ul className={styles.links}>
                {brandGroup.brands.map((brand) => (
                  <li key={brand.id}>
                    <Link
                      href={{
                        pathname: `/${country}/catalog/${slug}`,
                        query: { brands: brand.id },
                      }}
                    >
                      {brand.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const response = await axios.get(
    'https://admin.safemedsupply.com/api/brands/' + params.slug
  );
  return {
    props: {
      brands: response.data,
      slug: params.slug,
    },
  };
}

export default Product;

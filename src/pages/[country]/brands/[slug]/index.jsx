import styles from '../../../../styles/Brands.module.css';

import axios from 'axios';
import Link from 'next/link';

import Layout from '../../../../components/Layout';
import useGroupByLetter from '../../../../hooks/useGroupByLetter';

const Product = ({ country, brands, slug, main }) => {
  const data = useGroupByLetter(brands);

  return (
    <Layout country={country} main={main}>
      <link rel="canonical" href={`https://safemedsupply.com/${country}/brands/${slug}/`} />
      <div className='container my-10'>
        <ul className={styles.list}>
          {data.map((group) => (
            <li key={group.letter} className={styles.item}>
              <b className={styles.letter}>{group.letter}</b>
              <ul className={styles.links}>
                {group.arr.map((brand) => (
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

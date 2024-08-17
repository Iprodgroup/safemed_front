import styles from '../../../../styles/Brands.module.css';

import axios from 'axios';
import Link from 'next/link';

import Layout from '../../../../components/Layout';
import useGroupByLetter from '../../../../hooks/useGroupByLetter';

const CategoriesPage = ({ country, categories, slug }) => {
  const data = useGroupByLetter(categories);

  return (
    <Layout country={country}>
      <div className='container my-10'>
        <ul className={styles.list}>
          {data.map((group) => (
            <li key={group.letter} className={styles.item}>
              <b className={styles.letter}>{group.letter}</b>
              <ul className={styles.links}>
                {group.arr.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={{
                        pathname: `/${country}/catalog/${slug}`,
                        query: { categories: category.id },
                      }}
                    >
                      {category.title}
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
    'https://admin.safemedsupply.com/api/categories/' + params.slug
  );
  return {
    props: {
      categories: response.data,
      slug: params.slug,
    },
  };
}

export default CategoriesPage;

// import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
// import { getPrismicClient } from '../services/prismic';

import { RiCalendar2Fill, RiUser6Line } from 'react-icons/ri';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

// interface Post {
//   uid?: string;
//   first_publication_date: string | null;
//   data: {
//     title: string;
//     subtitle: string;
//     author: string;
//   };
// }

// interface PostPagination {
//   next_page: string;
//   results: Post[];
// }

// interface HomeProps {
//   postsPagination: PostPagination;
// }

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Spacetraveling</title>
      </Head>
      <div className={commonStyles.container}>
        <div className={commonStyles.containerContent}>
          <div className={styles.cardPost}>
            <h2>Como utilizar Hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida.</p>
            <div className={commonStyles.detailsPost}>
              <span>
                <RiCalendar2Fill size={18} /> 15 Mar 2021
              </span>
              <span>
                <RiUser6Line size={18} />
                Everton Pinheiro
              </span>
            </div>
          </div>

          <div className={styles.cardPost}>
            <h2>Como utilizar Hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida. </p>
            <div className={commonStyles.detailsPost}>
              <span>
                <RiCalendar2Fill size={18} /> 15 Mar 2021
              </span>
              <span>
                <RiUser6Line size={18} />
                Everton Pinheiro
              </span>
            </div>
          </div>

          <div className={styles.cardPost}>
            <h2>Como utilizar Hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida. </p>
            <div className={commonStyles.detailsPost}>
              <span>
                <RiCalendar2Fill size={18} /> 15 Mar 2021
              </span>
              <span>
                <RiUser6Line size={18} />
                Everton Pinheiro
              </span>
            </div>
          </div>

          <div className={styles.cardPost}>
            <h2>Como utilizar Hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida. </p>
            <div className={commonStyles.detailsPost}>
              <span>
                <RiCalendar2Fill size={18} /> 15 Mar 2021
              </span>
              <span>
                <RiUser6Line size={18} />
                Everton Pinheiro
              </span>
            </div>
          </div>

          <div className={styles.cardPost}>
            <h2>Como utilizar Hooks</h2>
            <p>Pensando em sincronização em vez de ciclos de vida. </p>
            <div className={commonStyles.detailsPost}>
              <span>
                <RiCalendar2Fill size={18} /> 15 Mar 2021
              </span>
              <span>
                <RiUser6Line size={18} />
                Everton Pinheiro
              </span>
            </div>
          </div>

          <Link href="https">
            <a className={styles.loadingNewPosts}>Carregar mais posts</a>
          </Link>
        </div>
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };

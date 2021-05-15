import { GetStaticPaths, GetStaticProps } from 'next';

import { RiCalendar2Fill, RiUser6Line } from 'react-icons/ri';
import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post() {
  return (
    <>
      <img src="/banner.png" alt="banner" className={styles.bannerPost} />
      <div className={commonStyles.container}>
        <div className={commonStyles.containerContent}>
          <div className={styles.postContent}>
            <h1>Criando um app CRA do zero</h1>
            <div className={commonStyles.detailsPost}>
              <span>
                <RiCalendar2Fill size={18} /> 15 Mar 2021
              </span>
              <span>
                <RiUser6Line size={18} />
                Everton Pinheiro
              </span>
            </div>
            <div className={styles.textPost}>
              <h2>Proin et varius</h2>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque a pellentesque ex. Maecenas tincidunt est et tortor
                euismod, ac cursus ipsum pharetra. Aenean neque tortor, pharetra
                eu mattis ultrices, sollicitudin eu arcu. Etiam odio augue,
                tempor non leo et, egestas efficitur ante. Etiam sagittis, nibh
                et elementum maximus, sem enim tincidunt lectus, sit amet
                dapibus mi velit aliquam magna. Donec blandit elit ac ligula
                pharetra varius. Integer ut est eget velit porttitor posuere.
                Integer ac augue id justo fringilla volutpat quis a tellus. Duis
                lacinia risus vel eros porttitor mattis. Nunc pulvinar nibh et
                dui scelerisque, a vehicula risus rhoncus. Vivamus facilisis
                nibh ornare varius fermentum. Integer pulvinar ligula vitae
                laoreet tempor. Vivamus at scelerisque enim. Donec sollicitudin
                maximus diam, eu rutrum nisi hendrerit vitae. Aliquam sit amet
                auctor metus. Aenean vehicula enim at libero consequat
                consequat. Curabitur porttitor accumsan dolor id venenatis. Nam
                quis volutpat leo, ut molestie nulla. Vivamus tincidunt aliquam
                libero, vel blandit tellus commodo quis. Nulla facilisi. Ut sem
                lorem, tristique id felis ac, lacinia molestie enim. Vestibulum
                placerat nec elit et sodales. Nam vel cursus metus.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   // const posts = await prismic.query();

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   // const response = await prismic.getByUID();

//   // TODO
// };

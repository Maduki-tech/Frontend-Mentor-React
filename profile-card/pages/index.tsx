import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.user}></div>
        <div className={styles.text}>
          David Schlueter <span>23</span>
        </div>
        <div className={styles.stats}>
          <div>
            80k <br />
            Follower
          </div>
          <div>
            80k <br />
            Follower
          </div>
          <div>
            80k <br />
            Follower
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

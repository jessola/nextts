import Link from 'next/link';

import '../styles/globals.css';
import styles from '../styles/App.module.css';

interface Props {
  Component: React.FC;
}

const App: React.FC<Props> = ({ Component }) => {
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
      </nav>
      <Component />
    </>
  );
};

export default App;

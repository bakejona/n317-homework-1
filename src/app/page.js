/*import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}*/
function Home() {
  return (
    <div>
      <nav style={{ display: 'flex', justifyContent: 'space-evenly', backgroundColor: '#f0f0f0', padding: '1rem' }}>
        <a href="#" style={{ textDecoration: 'none', color: '#333', marginRight: '20px' }}>Link 1</a>
        <a href="#" style={{ textDecoration: 'none', color: '#333', marginRight: '20px' }}>Link 2</a>
        <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Link 3</a>
      </nav>

      {/* Main content - product section */}
      <main style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {/* Product 1 */}
        <div style={{ width: '25%', margin: '20px', backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px' }}>
          <img src="https://via.placeholder.com/150" alt="Product Image" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h2 style={{ marginTop: 0, color: 'black' }}>Product 1</h2>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'black'}}>$49.99</p>
        </div>
        {/* Product 2 */}
        <div style={{ width: '25%', margin: '20px', backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px' }}>
          <img src="https://via.placeholder.com/150" alt="Product Image" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h2 style={{ marginTop: 0, color: 'black' }}>Product 2</h2>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'black'}}>$19.99</p>
        </div>
        {/* Product 3 */}
        <div style={{ width: '25%', margin: '20px', backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px' }}>
          <img src="https://via.placeholder.com/150" alt="Product Image" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h2 style={{ marginTop: 0, color: 'black' }}>Product 3</h2>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'black'}}>$24.99</p>
        </div>
        {/* Product 4 */}
        <div style={{ width: '25%', margin: '20px', backgroundColor: '#fff', border: '1px solid #ddd', padding: '20px' }}>
          <img src="https://via.placeholder.com/150" alt="Product Image" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
          <h2 style={{ marginTop: 0, color: 'black' }}>Product 4</h2>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'black'}}>$11.99</p>
        </div>
      </main>
    </div>
  );
}

export default Home;

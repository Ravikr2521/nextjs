import Link from "next/link";
import styles from './navbar.module.css'

const links = [
  { id: 1, title: "Home", url: "/" },
  { id: 2, title: "About", url: "/about" },
  { id: 3, title: "Contact", url: "/contact" },
  { id: 4, title: "Portfilio", url: "/portfolio" },
  { id: 5, title: "Dashboard", url: "/dashboard" },
];

const Navbar = () => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo </Link>
      <div className={styles.links}>
      {links.map((item, index) => {
        return (
          <Link key={index} href={item.url}  className={styles.innerLink}>
            {item.title}
          </Link>
        );
      })}
      <button className={styles.logout} > Logout
        
        
      </button>
      </div>
    </div>
  );
};

export default Navbar;

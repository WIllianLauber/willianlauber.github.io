import Link from 'next/link';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-blue">
    <Link href="/">
      <a className="navbar-brand">Willian A. Lauber</a>
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <menu className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link">Portfólio</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/articles">
            <a className="nav-link">Artigos</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">Sobre</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link">Informações de contato</a>
          </Link>
        </li>
      </ul>
    </menu>
  </nav>
);

export default Navbar;

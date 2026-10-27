import { profile } from '../data/profile.js';
import './Footer.css';

function Footer({ t }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© 2026 {profile.name}</p>
        <p className="footer__meta">{t.builtWith}</p>
      </div>
    </footer>
  );
}

export default Footer;

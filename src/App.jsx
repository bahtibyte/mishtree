import LinkCard from "./components/LinkCard";
import links from "./data/links";
import "./styles/app.css";

function App() {
  return (
    <div className="app">
      <div className="app__signature" aria-hidden="true">mishelle</div>
      <header className="app__logo">
        <img src="/images/logo.svg" alt="Logo" />
      </header>
      <main className="app__main">
        <ul className="link-list" role="list">
          {links.map((link, index) => (
            <li key={index}>
              {link.url ? (
                <LinkCard
                  title={link.title}
                  url={link.url}
                  image={link.image}
                  event_name={link.event_name}
                />
              ) : (
                <article
                  className="link-card link-card--static"
                  aria-label={link.title}
                >
                  <img
                    className="link-card__image"
                    src={link.image}
                    alt={link.title}
                  />
                  <span className="link-card__overlay" aria-hidden="true" />
                  <span className="link-card__title">{link.title}</span>
                </article>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

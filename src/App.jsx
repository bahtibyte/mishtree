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
              <LinkCard
                title={link.title}
                url={link.url}
                image={link.image}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;

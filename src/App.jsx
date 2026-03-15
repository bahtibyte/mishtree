import LinkCard from "./components/LinkCard";
import links from "./data/links";
import "./styles/app.css";

function App() {
  return (
    <>
      <div className="app">
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
      <div className="app__signature" aria-hidden="true">Michelle</div>
    </>
  );
}

export default App;

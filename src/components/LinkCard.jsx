function LinkCard({ title, url, image, event_name }) {
  const handleClick = () => {
    if (window.gtag && event_name) {
      window.gtag("event", event_name);
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      className="link-card"
      onClick={handleClick}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <img className="link-card__image" src={image} alt={title} />

      <span className="link-card__overlay" aria-hidden="true" />

      <span className="link-card__title">{title}</span>
    </article>
  );
}

export default LinkCard;

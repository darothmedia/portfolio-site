import recents from "./recents";
import highlights from "./highlights"

const showcaseUtil = modules => (
  modules.map((module, i) => (
    <a href={module.url} target='_blank' rel="noreferrer" key={i}>
      <div className="wrapper" id='modwrapper'>
        <img src={module.img} alt={module.title} />
        <div className="module" id={i} >
          <h4>{module.title.toUpperCase()}</h4>
          <p>{module.description}</p>
        </div>
      </div>
    </a>
  ))
)

export const SplashShowcase = () => (
  <section className="wrapper" id='showcase'>
    {showcaseUtil(recents)}
  </section>
)

export const AboutShowCase = () => (
  <section className="wrapper" id='showcase'>
    <h2>{"Highlighted Work"}</h2>
    <div id='aboutshowcase'>
      {showcaseUtil(highlights)}
    </div>
  </section>
)
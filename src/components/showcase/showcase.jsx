import modules from "./modules";

const showcaseUtil = modules => (
  modules.map((module, i) => (
    <a href={module.url} target='_blank' key={i}>
      <div className="module" id={i} >
        <img src={module.img} alt={module.title} />
        <h3>{module.title}</h3>
        <p>{module.description}</p>
      </div>
    </a>
  ))
)

const Showcase = () => (
  <section className="wrapper" id='showcase'>
    <h3>Recent Work</h3>
    {showcaseUtil(modules)}
  </section>
)

export default Showcase
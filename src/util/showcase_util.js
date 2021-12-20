const showcaseUtil = modules => {
  modules.map((module, i) => (
    <a href={module.url}>
      <div className="module" id='i' key='i'>
        <img src={module.img} alt={module.title} />
        <h3>{module.title}</h3>
        <p>{module.description}</p>
      </div>
    </a>
  ))
}
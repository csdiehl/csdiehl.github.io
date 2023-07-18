import ProjectTile from "./ProjectTile"
import "./Projects.css"
import { useState, forwardRef } from "react"
import LazyLoad from "react-lazy-load"

const projectList = [
  {
    name: "AP Wildfire Tracker",
    link: "https://interactives.ap.org/ap-wildfire-tracker/?sort=acres",
    imageLink: "./fire-tracker-screenshot.png",
    languages: ["React.js"],
    tag: ["Data Visualization", "Web Development", "Data Journalism"],
    description: "",
  },
  {
    name: "Climate and Disease",
    link: "https://projects.apnews.com/features/2023/climate-change-disease-animals-warming-earth/index.html",
    imageLink: "./grist-disease.png",
    languages: ["React.js"],
    tag: ["Data Visualization", "Web Development", "Data Journalism"],
    description: "",
  }
  {
    name: "Ski resorts are embracing a new role: climate activist",
    link: "https://apnews.com/article/climate-change-activism-ski-industry-028d83e19543db5d7633ea83932bdde3",
    imageLink: "/skiing.png",
    languages: ["React.js"],
    tag: ["Data Visualization", "Web Development", "Data Journalism"],
    description: "",
  },
  {
    name: "Wildfire Risk Maps",
    link: "https://apnews.com/article/wildfires-forest-thinning-community-risk-biden-9d77309cb9e7520069b3c575d850aadc",
    imageLink: "./wildfire.png",
    languages: ["React.js"],
    tag: [
      "Data Visualization",
      "Web Development",
      "Data Journalism",
      "Geospatial Analysis",
    ],
    description: "",
  },
  {
    name: "AP 2022 Climate Photography Showcase",
    link: "https://apnews.com/article/2022-climate-change-photos-3d0d1a338bf8995048bddae11ad17eb2",
    imageLink: "./climate.png",
    languages: ["React.js"],
    tag: ["Web Development"],
    description: "",
  },
  {
    name: "Death and Regrowth on the Great Barrier Reef",
    link: "https://apnews.com/article/Death-regrowth-on-Great-Barrier-Reef-081570270011",
    imageLink: "./GBR.png",
    languages: ["React.js", "Python"],
    tag: [
      "Web Development",
      "Geospatial Analysis",
      "Data Visualization",
      "Data Journalism",
    ],
    description: "",
  },
  {
    name: "Transit Segment Priority Finder",
    link: "https://ibi-group.github.io/mbta-transit-priority-finder/",
    imageLink: "/mbta_tool.PNG",
    languages: ["React.js", "Python"],
    tag: ["Data Visualization", "Geospatial Analysis"],
    description:
      "Allows agency to filter and select stop-to-stop bus segments for transit priority measures such as bus-only lanes. Users can adjust the weights as needed to calculate a new weighted average score based on their priorities.",
  },
  {
    name: "WMATA Dashboard",
    link: "https://github.com/csdiehl/smart-card-data-dashboard#readme",
    imageLink: "/WMATA_web_app.png",
    languages: ["Javascript", "Python"],
    tag: ["Data Visualization", "Geospatial Analysis"],
    description:
      "Interactive dashboard to visualize smart card data for Washington D.C. Metropolitan Transit Authority",
    otherImages: [
      "/wmata_1.png",
      "/wmata_2.png",
      "/wmata_3.png",
      "/wmata_4.png",
    ],
  },
  {
    name: "Spotify Reccomendation Engine",
    link: "https://csdiehl.github.io/spotify-reccomendation-engine/",
    imageLink: "/spotify_app.png",
    languages: ["React.js"],
    tag: ["Front-end Development", "Data Visualization"],
    description:
      "Allows users to connect Spotify accounts and receive music reccomendations using the Spotify Web API",
  },
  {
    name: "Protests Visualization",
    link: "https://observablehq.com/@csdiehl/protests-analysis",
    imageLink: "/protests.png",
    languages: ["React.js"],
    tag: ["Data Visualization", "Data Journalism"],
    description:
      "Interactive, Javascript-based data visualization of recent protests in the United States",
  },
  {
    name: "Transit System Dashboard",
    link: "https://cse512-21s.github.io/FP-Transit_System/",
    imageLink: "/orcaviz.png",
    languages: ["React.js"],
    tag: ["Data Visualization", "Geospatial Analysis"],
    description:
      "Dashboard for visualizing smart card data showing passenger journeys on Sound Transit in the Puget Sound region",
  },
  {
    name: "Type Cast",
    link: "https://csdiehl.github.io/type_scale/",
    imageLink: "/type_scale.png",
    languages: ["Javascript", "HTML5 / CSS"],
    tag: ["Front-end Development"],
    description:
      "Javascript application that creates a type heirarchy for use in documents and web design",
  },
  {
    name: "Outdoor Access Score",
    link: "https://rpubs.com/csdiehl/outdoor-access",
    imageLink: "/outdoor_access.png",
    languages: ["Python", "R"],
    tag: ["Data Visualization", "Geospatial Analysis"],
  },
  {
    name: "Transit Smart Card Clustering",
    link: "https://rpubs.com/csdiehl/transit-clusters",
    imageLink: "/clusters.png",
    languages: ["Python", "R"],
    tag: ["Data Visualization", "Geospatial Analysis"],
  },
  {
    name: "Mobility in a Pandemic",
    link: "",
    imageLink: "/covid_mobility.jpg",
    languages: ["Python", "R"],
    tag: ["Data Visualization", "UI / UX Design"],
  },
  {
    name: "Early Retirement Calculator",
    link: "https://csdiehl.github.io/early-retirement-calculator/",
    imageLink: "/fire_calculator.png",
    languages: ["React.js", "HTML5 / CSS"],
    tag: ["Front-end Development"],
  },
  {
    name: "Visualizing Police Use of Force",
    link: "",
    imageLink: "/police_force.jpg",
    languages: ["Python", "R"],
    tag: ["Data Visualization", "UI / UX Design"],
  },
]

const Projects = forwardRef((props, ref) => {
  const [filters, setFilters] = useState({
    type: "All Types",
    language: "All Languages",
  })

  const handleSelect = (event) => {
    const value = event.target.value
    const name = event.target.name
    setFilters({ ...filters, [name]: value })
  }

  const projectsTypeFiltered =
    filters.type === "All Types"
      ? projectList
      : projectList.filter((p) => p.tag.includes(filters.type))

  const projectData =
    filters.language === "All Languages"
      ? projectsTypeFiltered
      : projectsTypeFiltered.filter((p) =>
          p.languages.includes(filters.language)
        )

  const tiles = projectData.map((p) => (
    <ProjectTile
      key={Math.random()}
      tag={p.tag}
      title={p.name}
      link={p.link}
      image={p.imageLink}
      languageTag={p.languages}
    />
  ))

  const types = [
    "All Types",
    "Front-end Development",
    "Data Visualization",
    "Geospatial Analysis",
    "Data Journalism",
    "UI / UX Design",
  ]

  return (
    <div className="fade-in" ref={ref}>
      <div className="project-header">
        <div>
          <div className="types-buttons">
            {types.map((t) => (
              <button
                className={
                  filters.type === t
                    ? "select-button select-button-clicked"
                    : "select-button"
                }
                key={t}
                onClick={handleSelect}
                value={t}
                name="type"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <LazyLoad>
          <div className="tileContainer">{tiles}</div>
        </LazyLoad>
      </div>
    </div>
  )
})

export default Projects
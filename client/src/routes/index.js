// import Anime from "../screens/Anime"
import BlogDetail from "../pages/BlogDetail"
import SectionPage from "../pages/SectionPage/SectionPage"
import Home from "../pages/Home"
import SearchResultPage from "../pages/SearchResultPage"
import Editor from "../pages/Editor"
// import AnimeDetail from "../screens/AnimeDetail"
// import Login from "../screens/Login/Login"
// import AnimeTop from "../screens/AnimeTop"
// import MangaTop from "../screens/MangaTop"
// import ComingSoon from "../screens/ComingSoon"
// import Forum from "../screens/Forum"
// import Character from "../screens/Character"
// import Manga from "../screens/Manga"
// import MangaDetail from "../screens/MangaDetail"
// import PostDetail from "../screens/PostDetail"
// import Profile from "../screens/Profile"
const PATHS = {
  WORLD: "/world",
  CORONAVIRUS: "/world/coronavirus-outbreak",
  AMERICA: "/world/americas",
  EUROPE: "/world/europe-news",
  ASIA: "/world/asia",
  AUSTRALIA: "/australia-news",
  AFRICA: "/world/africa",
  MIDDLE_EAST: "/world/middleeast",
  US: "/us-news",
  UK: "/uk-news",

  SPORT: "/sport",
  FOOTBALL: "/football",
  CRICKET: "/sport/cricket",
  RUGBY: "/sport/rugby-union",
  TENNIS: "/sport/tennis",
  CYCLING: "/sport/cycling",
  F1: "/sport/formulaone",
  GOFT: "/sport/golf",
  US_SPORT: "/sport/us-sport",

  CULTURE: "/culture",
  BOOKS: "/books",
  MUSIC: "/music",
  CLASSICAL: "/music/classical-music-and-opera",
  TV_RADIO: "/tv-and-radio",
  ART_DESIGN: "/artanddesign",
  FILM: "/film",
  GAMES: "/games",
  STAGE: "/stage",
  FASHION: "/fashion",
  FOOD: "/food",

  LIFESTYLE: "/lifeandstyle",
  RECIPES: "/tone/recipes",

  HEALTH_FITNESS: "/lifeandstyle/health-and-wellbeing",

  WOMEN: "/lifeandstyle/women",
  MEN: "/lifeandstyle/men",
  FAMILY: "/lifeandstyle/family",

  TRAVEL: "/travel",
  UK_TRAVEL: "/uk/travel",
  EUROPE_TRAVEL: "/travel/europe",
  USA_TRAVEL: "/travel/usa",

  BLOG: "/blog",
  SEARCH: "/search",
  SIGNUP: "/signup",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  PROFILE: "/profile",
  NOTIFICATIONS: "/notifications",
  SETTINGS: "/settings",
  LOGOUT: "/logout"
}

const EXTRA_PATH = {
  ABOUT: "/about",
  ANIMALS_FARMED: "/animals-farmed",
  BETTER_BUSINESS: "/better-business",
  BUSINESS: "/business",
  BUSINESS_TO_BUSINESS: "/business-to-business",
  CARDIFF: "/cardiff",
  CHILDREN_BOOK: "/childrens-books-site",
  CITIES: "/cities",
  OPINION: "/commentisfree",
  COMMUNITY: "/community",
  CROSSWORDS: "/crosswords",
  CULTURE_NETWORK: "/culture-network",
  Culture_professionals_network: "/culture-professionals-network",
  EDINBURGH: "/edinburgh",
  EDUCATION: "/education",
  GUARDIAN_ENTERPRISE_NETWORK: "/enterprise-network",
  ENVIRONMENT: "/environment",
  EXTRA: "/extra",
  GLOBAL_DEVELOPMENT: "/global-development",
  GUARDIAN_GOVERNMENT_COMPUTING: "/government-computing-network",
  GUARDIAN_FOUNDATION: "/guardian-foundation",
  GUARDIAN_PROFESSIONAL: "/guardian-professional",
  HEALTHCARE_NETWORK: "/healthcare-network",
  Higher_Education_Network: "/higher-education-network",
  Housing_Network: "/housing-network",
  Inequality: "/inequality",
  Info: "/info",
  Jobs: "/jobsadvice",
  Katine: "/katine",
  LAW: "law",
  LEEDS: "/leeds",
  LOCAL: "/local",
  Local_Leaders_Network: "/local-government-network",
  MEDIA: "/media",
  MEDIA_NETWORK: "/media-network",
  MEMBERSHIP: "/membership",
  MONEY: "/money",
  NEWS: "/news",
  POLITICS: "/politics",
  Public_Leaders_Network: "/public-leader-network",
  SCIENCE: "/science",
  Guardian_Small_Business_Network: "/small-business-network",
  Social_Care_Network: "/social-care-network",
  Social_Enterprise_Network: "/social-enterprise-network",
  SOCIETY: "/society",
  Society_Professionals: "/society-professionals",
  Teacher_Network: "/teacher-network",
  TECHNOLOGY: "/technology",
  WEATHER: "/weather",
  From_The_Observer: "/theobserver",
  From_The_Guardian: "/theguardian",
  Guardian_Holiday_Offers: "/travel/offers",
  Women_in_Leadership: "/women-in-leadership",
  Working_in_development: "/working-in-development",
  Voluntary_Sector_Network: "/voluntary-sector-network"
}

const routes = [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    exact: true,
    path: PATHS.WORLD,
    component: SectionPage
  },

  {
    exact: true,
    path: PATHS.SEARCH,
    component: SearchResultPage
  },
  {
    exact: true,
    path: `${PATHS.WORLD}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.CORONAVIRUS,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.AMERICA,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.ASIA,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.EUROPE,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.AUSTRALIA,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.AFRICA,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.MIDDLE_EAST,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.US,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.UK,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.US}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: `${PATHS.UK}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.SPORT,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.FOOTBALL,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.FOOTBALL}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: `${PATHS.SPORT}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.CRICKET,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.RUGBY,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.TENNIS,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.CYCLING,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.F1,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.GOFT,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.US_SPORT,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.CULTURE,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.CULTURE}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.BOOKS,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.BOOKS}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.MUSIC,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.MUSIC}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.CLASSICAL,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.TV_RADIO,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.TV_RADIO}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.ART_DESIGN,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.ART_DESIGN}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.FILM,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.FILM}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.GAMES,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.GAMES}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.STAGE,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.STAGE}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.FASHION,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.FASHION}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.FOOD,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.FOOD}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.LIFESTYLE,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.LIFESTYLE}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.RECIPES,
    component: SectionPage
  },

  {
    exact: true,
    path: PATHS.HEALTH_FITNESS,
    component: SectionPage
  },

  {
    exact: true,
    path: PATHS.WOMEN,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.MEN,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.FAMILY,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.TRAVEL,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.TRAVEL}/:year/:month/:day/:id`,
    component: BlogDetail
  },
  {
    exact: true,
    path: PATHS.UK_TRAVEL,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.EUROPE_TRAVEL,
    component: SectionPage
  },
  {
    exact: true,
    path: PATHS.USA_TRAVEL,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.BLOG}/overview`,
    component: SectionPage
  },
  {
    exact: true,
    path: `${PATHS.BLOG}/editor/new`,
    component: Editor
  }
]

export { routes, PATHS, EXTRA_PATH }

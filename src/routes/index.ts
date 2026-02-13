import { AboutPage } from "../pages/AboutPage";
import { CardsPage } from "../pages/CardsPage";
import { MainPage } from "../pages/MainPage";

export const routes = [
    {
        name: "Главная страница",
        url: '/',
        component: MainPage,
    },
    {
        name: "О нас",
        url: '/about',
        component: AboutPage,
    },
    {
        name: "Карточки",
        url: '/cards',
        component: CardsPage,
    },
]
import pages from "../pages";

const routes = [
    { path: "/", name: "home", Component: pages.Home },
    { path: "/posts", name: "posts", Component: pages.Posts },
    { path: "/posts/:slug", name: "article", Component: pages.SinglePost },
    { path: "/login", name: "Login", Component: pages.Login },
    { path: "/register", name: "Register", Component: pages.Registrasi },
    { path: "/*", name: "not found", Component: pages.NotFound },
];

export default routes;

interface RouteObject {
    [key: string]: string;
}

export const HOME_PAGE_ROUTES: Readonly<RouteObject> = Object.freeze({
    ABOUT_US: '/about',
    CONTACT: '/contact',
    LOGIN_SIGNUP: '/login',
    HOME: '/',
    COURSES: '/courses'
});
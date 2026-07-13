export const ROUTES = {
  HOME: "/",
};
export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];

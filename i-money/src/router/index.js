import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";
//Auth Guards
const requireAuth = (to, from, next) => {
    const user = projectAuth.currentUser;
    console.log("Before enter router: ", user);
    if (!user) {
        next({ name: "Login" });
    } else {
        next();
    }
};
const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import(/* webpackChunkName: "Home"  Lazy loading*/ "../views/index.vue"),
        meta: {
            text: "Trần Đức Hiếu",
            leading: true,
            isShowFooter: true,
        },
    },
    {
        path: "/login",
        name: "Login",
        meta: {
            layout: "auth"
        },
        component: () => import(/* webpackChunkName: "Login"  Lazy loading*/ "../views/login.vue")
    },
    {
        path: "/register",
        name: "Register",
        meta: {
            layout: "auth"
        },
        component: () => import(/* webpackChunkName: "Register"  Lazy loading*/ "../views/register.vue")
    },
    {
        path: "/logout",
        name: "Logout",
        component: () => import(/* webpackChunkName: "Logout"  Lazy loading*/ "../views/logout.vue")
    },
    {
        path: "/profile",
        name: "Profile",
        meta: {
            text: "Profile",
            leading: false,
            isShowFooter: true,
        },
        component: () => import(/* webpackChunkName: "Profile"  Lazy loading*/ "../views/profile.vue"),
        beforeEnter: requireAuth,
    },
    {
        path: "/report",
        name: "Report",
        meta: {
            text: "Report",
            leading: false,
            isShowFooter: true,
        },
        component: () => import(/* webpackChunkName: "Report"  Lazy loading*/ "../views/report.vue")
    },
    {
        path: "/budget",
        name: "Budget",
        meta: {
            text: "Budget",
            leading: false,
            isShowFooter: true,
        },
        component: () => import(/* webpackChunkName: "Report"  Lazy loading*/ "../views/budget.vue"),
    },
    {
        path: "/new-transactions",
        name: "NewTransactions",
        meta: {
            text: "NewTransactions",
            leading: false,
            isShowFooter: true,
        },
        component: () => import(/* webpackChunkName: "NewTransactions"  Lazy loading*/ "../views/new-transactions.vue"),

    },
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
export default router;
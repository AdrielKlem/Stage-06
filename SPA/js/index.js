import { Router } from "./router.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/about", "/pages/about.html")
router.add("/contact", "/pages/contact.html")
router.add("/404", "/pages/404.html")

router.handle();
window.onpopstate = () => router.handle();
window.route = () => router.route() /*

const links = document.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", router.route.bind(router));
});
*/
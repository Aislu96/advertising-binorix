import "./js/common.js";
import "./assets/css/main.css";
import "./assets/scss/main.scss";


if (process.env.NODE_ENV !== "production") {
  // eslint-disable-next-line no-inner-declarations
  async function load() {
    let resize_info = await import("./smart-gread-layer/smart-gread-layer");
    resize_info.default();
  }

  load();
}

import Alpine from "alpinejs";
import persist from "@alpinejs/persist";

Alpine.plugin(persist);

Alpine.store("favorites", {
  index: {},
  items: Alpine.$persist([]).as("favorites"),

  async init() {
    this.index = await fetch("/index.json").then((r) => r.json());
  },

  is(id) {
    return this.items.includes(id);
  },

  toggle(id) {
    if (this.items.includes(id)) {
      this.items = this.items.filter((fav) => fav !== id);
    } else {
      this.items.push(id);
    }
  },
});
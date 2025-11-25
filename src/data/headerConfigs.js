export const headerConfigs = {
  home: {
    menu: [
      { title: "Про нас", id: "about", type: "anchor" },
      { title: "Готелі", id: "booking", type: "anchor" },
      { title: "Ресторани", id: "restaurants", type: "anchor" },
      { title: "Контакти", id: "contacts", type: "anchor" },
    ],
    buttonText: "Бронювання",
    buttonColor: "var(--color-olivia)",
    textColor: "var(--color-dark)",
    buttonHover: "var(--color-button--hoover)",
    textHover: "var(--color-dark)",
    buttonAction: { type: "anchor", id: "booking" },
  },

  monoHotel: {
    menu: [
      { title: "Головна", id: "/", type: "route" },
      { title: "Номери", id: "rooms", type: "anchor" },
      { title: "Ресторан Mono", id: "restaurants", type: "anchor" },
      { title: "Контакти", id: "contacts", type: "anchor" },
    ],
    buttonText: "Обрати номер",
    buttonColor: "#312826",
    textColor: "var(--color-beige)",
    buttonHover: "#554A40",
    textHover: "var(--color-beige)",
    buttonAction: { type: "anchor", id: "rooms" },
  },

  centralHotel: {
    menu: [
      { title: "Головна", id: "/", type: "route" },
      { title: "Номери", id: "rooms", type: "anchor" },
      { title: "Ресторан Central", id: "restaurants", type: "anchor" },
      { title: "Контакти", id: "contacts", type: "anchor" },
    ],
    buttonText: "Обрати номер",
    buttonColor: "#4C2A4B",
    textColor: "#fff",
    buttonHover: "#897D86",
    textHover: "#fff",
    buttonAction: { type: "anchor", id: "rooms" },
  },

  conditions: {
    menu: [
      { title: "Умови проживання", id: "conditions", type: "anchor" },
      { title: "Контакти", id: "contacts", type: "anchor" },
    ],
    buttonText: "На головну",
    buttonColor: "#312826",
    textColor: "var(--color-beige)",
    buttonHover: "#554A40",
    textHover: "var(--color-beige)",
    buttonAction: { type: "route", id: "/" },
  },

  about: {
    menu: [
      { title: "Наші заклади", id: "about", type: "anchor" },
      { title: "Контакти", id: "contacts", type: "anchor" },
    ],
    buttonText: "На головну",
    buttonColor: "var(--color-olivia)",
    textColor: "var(--color-dark)",
    buttonHover: "var(--color-button--hoover)",
    textHover: "var(--color-dark)",
    buttonAction: { type: "route", id: "/" },
  },

  restaurantMono: {
    menu: [
      { title: "Головна", id: "/", type: "route" },
      { title: "Меню ресторану", id: "restaurant", type: "anchor" },
    ],
    buttonText: "Забронювати столик",
    buttonColor: "#343120",
    textColor: "var(--color-beige)",
    buttonHover: "#514D33",
    textHover: "var(--color-beige)",
    buttonAction: { type: "anchor", id: "restaurant" },
  },

  restaurantFortissimo: {
    menu: [
      { title: "Головна", id: "/", type: "route" },
      { title: "Меню ресторану", id: "restaurant", type: "anchor" },
    ],
    buttonText: "Забронювати столик",
    buttonColor: "#191919",
    textColor: "#DA3738",
    buttonHover: "#DA3738",
    textHover: "#fff", // контраст
    buttonAction: { type: "anchor", id: "restaurant" },
  },
};

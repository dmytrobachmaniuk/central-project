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
    buttonColor: "var(--color-mono-dark)",
    textColor: "var(--color-beige)",
    buttonHover: "var(--color-mono-brown)",
    textHover: "var(--color-beige)",
    buttonAction: { type: "anchor", id: "rooms" },
  },

  centralHotel: {
    menu: [
      { title: "Головна", id: "/", type: "route" },
      { title: "Номери", id: "rooms", type: "anchor" },
      { title: "Ресторан Fortissimo", id: "restaurants", type: "anchor" },
      { title: "Контакти", id: "contacts", type: "anchor" },
    ],
    buttonText: "Обрати номер",
    buttonColor: "#4C2A4B",
    textColor: "var(--color-white)",
    buttonHover: "#897D86",
    textHover: "var(--color-white)",
    buttonAction: { type: "anchor", id: "rooms" },
  },

  conditions: {
    menu: [
      { title: "Умови проживання", id: "conditions", type: "anchor" },
      { title: "Контакти", id: "contacts", type: "anchor" },
    ],
    buttonText: "На головну",
    buttonColor: "var(--color-mono-dark)",
    textColor: "var(--color-beige)",
    buttonHover: "var(--color-mono-brown)",
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
      { title: "Меню ресторану", id: "menu", type: "anchor" },
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
      { title: "Меню ресторану", id: "menu", type: "anchor" },
    ],
    buttonText: "Забронювати столик",
    buttonColor: "var(--color-fortissimo-black-bg)",
    textColor: "var(--color-fortissimo-red)",
    buttonHover: "var(--color-fortissimo-red)",
    textHover: "var(--color-white)",
    buttonAction: { type: "anchor", id: "restaurant" },
  },
};

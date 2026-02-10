export const headerConfigs = {
  home: {
    menu: [
      { titleKey: "homePage.about", id: "about", type: "anchor" },
      { titleKey: "homePage.hotels", id: "booking", type: "anchor" },
      { titleKey: "homePage.restaurants", id: "restaurants", type: "anchor" },
      { titleKey: "homePage.contacts", id: "contacts", type: "anchor" },
    ],
    buttonTextKey: "homePage.button",
    buttonColor: "var(--color-olivia)",
    textColor: "var(--color-dark)",
    buttonHover: "var(--color-button--hoover)",
    textHover: "var(--color-dark)",
    buttonAction: { type: "anchor", id: "booking" },
  },

  monoHotel: {
    menu: [
      { titleKey: "centralHotelPage.home", id: "/", type: "route" },
      { titleKey: "centralHotelPage.call", id: "rooms", type: "anchor" },
      { titleKey: "monoHotelPage.restaurant", id: "restaurants", type: "anchor" },
      { titleKey: "centralHotelPage.contacts", id: "contacts", type: "anchor" },
    ],
    buttonTextKey: "centralHotelPage.book",
    buttonColor: "var(--color-mono-dark)",
    textColor: "var(--color-beige)",
    buttonHover: "var(--color-mono-brown)",
    textHover: "var(--color-beige)",
    buttonAction: { type: "anchor", id: "rooms" },
  },

  centralHotel: {
    menu: [
      { titleKey: "centralHotelPage.home", id: "/", type: "route" },
      { titleKey: "centralHotelPage.call", id: "rooms", type: "anchor" },
      { titleKey: "centralHotelPage.restaurant", id: "restaurants", type: "anchor" },
      { titleKey: "centralHotelPage.contacts", id: "contacts", type: "anchor" },
    ],
    buttonTextKey: "centralHotelPage.book",
    buttonColor: "#4C2A4B",
    textColor: "var(--color-white)",
    buttonHover: "#897D86",
    textHover: "var(--color-white)",
    buttonAction: { type: "anchor", id: "rooms" },
  },

  conditions: {
    menu: [
      { titleKey: "conditionsPage.terms", id: "conditions", type: "anchor" },
      { titleKey: "conditionsPage.contacts", id: "contacts", type: "anchor" },
    ],
    buttonTextKey: "conditionsPage.home",
    buttonColor: "var(--color-mono-dark)",
    textColor: "var(--color-beige)",
    buttonHover: "var(--color-mono-brown)",
    textHover: "var(--color-beige)",
    buttonAction: { type: "route", id: "/" },
  },

  about: {
    menu: [
      { titleKey: "aboutPage.about", id: "about", type: "anchor" },
      { titleKey: "aboutPage.contacts", id: "contacts", type: "anchor" },
    ],
    buttonTextKey: "aboutPage.button",
    buttonColor: "var(--color-olivia)",
    textColor: "var(--color-dark)",
    buttonHover: "var(--color-button--hoover)",
    textHover: "var(--color-dark)",
    buttonAction: { type: "route", id: "/" },
  },

  restaurantMono: {
    menu: [
      { titleKey: "fortissimoRestaurantPage.home", id: "/", type: "route" },
      { titleKey: "fortissimoRestaurantPage.menu", id: "menu", type: "anchor" },
    ],
    buttonTextKey: "fortissimoRestaurantPage.book",
    buttonColor: "#343120",
    textColor: "var(--color-beige)",
    buttonHover: "#514D33",
    textHover: "var(--color-beige)",
    buttonAction: { type: "anchor", id: "restaurant" },
  },

  restaurantFortissimo: {
    menu: [
      { titleKey: "fortissimoRestaurantPage.home", id: "/", type: "route" },
      { titleKey: "fortissimoRestaurantPage.menu", id: "menu", type: "anchor" },
    ],
    buttonTextKey: "fortissimoRestaurantPage.book",
    buttonColor: "var(--color-fortissimo-black-bg)",
    textColor: "var(--color-fortissimo-red)",
    buttonHover: "var(--color-fortissimo-red)",
    textHover: "var(--color-white)",
    buttonAction: { type: "anchor", id: "restaurant" },
  },
};
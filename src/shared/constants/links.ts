export enum LINKS {
  BEAUTIFUL_NUMBERS = 'https://volnamobile.ru/numbers/',
  VOLNA_SALE = 'https://volnamobile.ru/sale/',
  ESIM = 'https://volnamobile.ru/esim/',
  PERSONAL_CABINET = 'https://lk-new.volnamobile.ru/',
  VK = 'https://vk.com/volnamobile',
  YOUTUBE = 'https://www.youtube.com/channel/UCBE0ytesPsF1BAbiRqMYTJw',
  TELEGRAM = 'https://t.me/Volnamobile_bot',
  DZEN = 'https://dzen.ru/volna_techno',
  APP_STORE = 'https://redirect.appmetrica.yandex.com/serve/316104190839494864',
  GOOGLE_PLAY = 'https://redirect.appmetrica.yandex.com/serve/1180795317767977724',
  RU_STORE = 'https://redirect.appmetrica.yandex.com/serve/1180923242865509178',
}

export const PathLabels = {
  main: 'Главная',
  services: { root: 'Услуги', all: 'Все услуги' },
  tariff: { 
    root: 'Мобильная связь', 
    all: 'Все тарифы', 
    doIt: 'Сделай сам',  
    sunbathe: 'Загорай',  
    start: 'Стартуй',  
    fly: 'Летай',  
    can: 'Могу себе позволить',  
    archive: 'Архив', 
  },
};

export const Path = {
  main: '/',
  services: {
    root: '/services',
    popular: '/services/popular',
    mobile: '/services/mobile',
    internet: '/services/internet',
    fast: '/services/fast',
    special: '/services/special',
  },
  tariff: {
    root: 'tariff',
    doIt: '/tariff/doIt',
    sunbathe: '/tariff/sunbathe',
    start: '/tariff/start',
    fly: '/tariff/fly',
    can: '/tariff/can',
    archive: '/tariff/archive'
  },
  search: 'search',
  news: 'news',
  tariffServices: 'tariff-services/activation',
  faq: {
    root: '/faq',
    common: '/faq/common',
    mobileInternet: '/faq/mobile-internet',
    roaming: '/faq/roaming',
    user: '/faq/user',
    payment: '/faq/payment',
    newUser: '/faq/new-user',
    dials: '/faq/dials',
  },
  replenishment: {
    root: '/replenishment',
  },
};

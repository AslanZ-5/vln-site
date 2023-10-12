import { TARIFFS, SERVICES_NAME, SERVICES, PILLS } from '@/modules/services/constants';

export const mockData = {
  globalSearchData: [
    'Как пополнить счет?',
    'Как попасть на сайт Волна Sale?',
    'Как попросить помощи у службы поддержки?',
    'Как попросить Катю о помощи?',
  ],
  tariffs: Object.values(TARIFFS),
};

interface ServicesCardsMockItem {
  title: string;
  price: string;
  per?: string;
  tariff: string[];
  tab: string[];
  filter: string[];
}

export const servicesCardsMock: ServicesCardsMockItem[] = [
  {
    title: 'Дополнительный пакет интернета 5 Гб',
    price: '55',
    per: ' ',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Дополнительный пакет интернета 15 Гб',
    price: '80',
    per: ' ',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Дополнительный пакет интернета 25 Гб',
    price: '125',
    per: ' ',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Безлимитные мессенджеры в поездках по России',
    price: '250',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
  {
    title: 'Безлимитный YouTube',
    price: '130',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START, TARIFFS.YOURSELF, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
  {
    title: 'Безлимитный интернет на день с раздачей',
    price: '40',
    per: '/сут.',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
  {
    title: 'Пакет 200 мин. по Крыму и Краснодарскому краю',
    price: '90',
    per: ' ',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.MINUTS],
  },
  {
    title: 'Пакет 400 мин. по Крыму и Краснодарскому краю',
    price: '130',
    per: ' ',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.MINUTS],
  },
  {
    title: 'Безлимитные звонки по Крыму и Краснодарскому краю',
    price: '4',
    per: '/сут.',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.MINUTS, PILLS.UNLIMITED],
  },
  {
    title: 'Умная ТВ-приставка SberBox',
    price: '150',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
  },
  {
    title: 'Усилитель Wi-Fi сигнала',
    price: '150',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
  },
  {
    title: 'Статический IP',
    price: '150',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
  },
  {
    title: 'Viju',
    price: '180',
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
  },
  {
    title: 'Пакет интернета 1 Гб',
    price: '50',
    per: ' ',
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Пакет интернета 2 Гб',
    price: '100',
    per: ' ',
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Пакет интернета 5 Гб',
    price: '200',
    per: ' ',
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Пакет интернета 10 Гб',
    price: '300',
    per: ' ',
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Автопродление пакета интернета 1 Гб',
    price: '55',
    per: ' ',
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Автопродление пакета интернета 2 Гб',
    price: '100',
    per: ' ',
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Автопродление пакета интернета 5 Гб',
    price: '200',
    per: ' ',
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Автопродление пакета интернета 10 Гб',
    price: '300',
    per: ' ',
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: '3 в 1',
    price: '75',
    tariff: [TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
  {
    title: 'Безлимитный интернет на день',
    price: '30',
    per: '/сут.',
    tariff: [TARIFFS.START, TARIFFS.YOURSELF, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
];

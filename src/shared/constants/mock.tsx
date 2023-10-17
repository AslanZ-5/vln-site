import { TARIFFS, SERVICES_NAME, SERVICES, PILLS } from '@/modules/services/constants';
import tariffCarouselStyles from '@/widgets/tariffs/tariffs-carousel/tariffs-carousel.module.scss';
import { EmailIcon, GlobeIcon, PhoneMiniIcon } from '../assets/svg';

export const mockData = {
  globalSearchData: [
    'Как пополнить счет?',
    'Как попасть на сайт Волна Sale?',
    'Как попросить помощи у службы поддержки?',
    'Как попросить Катю о помощи?',
  ],
  faqData: [
    {
      Q: 'Как дела?',
      A: 'Нормально',
    },
    {
      Q: 'Как дела?',
      A: 'Нормально',
    },
    {
      Q: 'Как дела?',
      A: 'Нормально',
    },
    {
      Q: 'Как дела?',
      A: 'Нормально',
    },
    {
      Q: 'Как дела?',
      A: 'Нормально',
    },
    {
      Q: 'Как дела?',
      A: 'Нормально',
    },
  ],
  tariffs: Object.values(TARIFFS),
};

enum PRICE_TITLE {
  SUBSCRIPTION = 'Абонплата',
  CONNECTION = 'Стоимость подключения',
}

export interface ServicesCardsMockItem {
  title: string;
  price: string;
  period: string | undefined;
  priceTitle: PRICE_TITLE;
  tariff: string[];
  tab: string[];
  filter: string[];
}

export const servicesCardsMock: ServicesCardsMockItem[] = [
  {
    title: 'Дополнительный пакет интернета 5\u00A0Гб',
    price: '55',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Дополнительный пакет интернета 15\u00A0Гб',
    price: '80',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Дополнительный пакет интернета 25\u00A0Гб',
    price: '125',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Безлимитные мессенджеры в поездках по России',
    price: '250',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
  {
    title: 'Безлимитный YouTube',
    price: '130',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START, TARIFFS.YOURSELF, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
  {
    title: 'Безлимитный интернет на день с раздачей',
    price: '40',
    period: '/сут.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
  {
    title: 'Пакет 200\u00A0мин. по Крыму и Краснодарскому краю',
    price: '90',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.MINUTS],
  },
  {
    title: 'Пакет 400\u00A0мин. по Крыму и Краснодарскому краю',
    price: '130',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.MINUTS],
  },
  {
    title: 'Безлимитные звонки по Крыму и Краснодарскому краю',
    price: '4',
    period: '/сут.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.MINUTS, PILLS.UNLIMITED],
  },
  {
    title: 'Умная ТВ-приставка SberBox',
    price: '150',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
  },
  {
    title: 'Усилитель Wi-Fi сигнала',
    price: '150',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
  },
  {
    title: 'Статический IP',
    price: '150',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
  },
  {
    title: 'Viju',
    price: '180',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
  },
  {
    title: 'Пакет интернета 1\u00A0Гб',
    price: '50',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Пакет интернета 2\u00A0Гб',
    price: '100',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Пакет интернета 5\u00A0Гб',
    price: '200',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Пакет интернета 10\u00A0Гб',
    price: '300',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Автопродление пакета интернета 1\u00A0Гб',
    price: '55',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Автопродление пакета интернета 2\u00A0Гб',
    price: '100',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Автопродление пакета интернета 5\u00A0Гб',
    price: '200',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: 'Автопродление пакета интернета 10\u00A0Гб',
    price: '300',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
  },
  {
    title: '3 в 1',
    price: '75',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
  {
    title: 'Безлимитный интернет на день',
    price: '30',
    period: '/сут.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.START, TARIFFS.YOURSELF, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
  },
];

export const tariffCardsMock = {
  mobileTariffs: [
    {
      id: 1,
      backgroundImage: '/assets/img/tariff-banners/banner-5.png',
      title: 'Сделай сам',
      newPrice: 'от 400',
      options: [
        {
          icon: <PhoneMiniIcon
            className={tariffCarouselStyles.phoneIcon}
            style={{ overflow: 'visible' }}
          />,
          value: <span style={{ whiteSpace: 'nowrap' }}>0 – ∞</span>,
          text: 'мин по Крыму и Краснодарскому краю',
        },
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: '0 – 500',
          text: 'мин по России',
        },
        {
          icon: <GlobeIcon />,
          value: '0 – ∞',
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: '0, 50, 100, 500 шт.',
          text: 'SMS',
        },
      ],
    },
    {
      id: 2,
      backgroundImage: '/assets/img/tariff-banners/banner-2.png',
      title: 'Загорай',
      newPrice: 650,
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: '∞',
          text: 'мин внутри сети',
        },
        {
          icon: <GlobeIcon />,
          value: '∞',
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: '∞',
          text: 'SMS внутри сети',
        },
      ],
    },
    {
      id: 3,
      backgroundImage: '/assets/img/tariff-banners/banner-3.png',
      title: 'Стартуй',
      newPrice: 300,
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: '∞',
          text: 'мин внутри сети',
        },
        {
          icon: <GlobeIcon />,
          value: 10,
          text: 'Гб',
        },
        {
          icon: <EmailIcon/>,
          value: '∞',
          text: 'SMS внутри сети',
        },
        {
          icon: <PhoneMiniIcon
            className={tariffCarouselStyles.phoneIcon}
            style={{ overflow: 'visible' }}
          />,
          value: <span style={{ whiteSpace: 'nowrap' }}>300</span>,
          text: 'мин на операторов Крыма и Краснодарского края',
        },
        {
          icon: <EmailIcon
            style={{ overflow: 'visible' }}
          />,
          value: <span style={{ whiteSpace: 'nowrap' }}>150</span>,
          text: 'SMS на операторов Крыма и Краснодарского края',
        },
      ],
    },
    {
      id: 4,
      backgroundImage: '/assets/img/tariff-banners/banner-4.png',
      title: 'Могу себе позволить',
      newPrice: 1000,
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: 1000,
          text: 'мин по России',
        },
        {
          icon: <GlobeIcon />,
          value: '∞',
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: 1000,
          text: 'SMS по России',
        },
      ],
    },
    {
      id: 5,
      backgroundImage: '/assets/img/tariff-banners/banner-3.png',
      title: 'Ветер',
      newPrice: 300,
      options: [
        {
          icon: <GlobeIcon />,
          value: '20 - ∞',
          text: 'Гб',
        },
      ],
    },
    {
      id: 6,
      backgroundImage: '/assets/img/tariff-banners/banner-3.png',
      title: 'Летай',
      newPrice: 500,
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: '∞',
          text: 'мин внутри сети',
        },
        {
          icon: <GlobeIcon />,
          value: '∞',
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: '∞',
          text: 'SMS внутри сети',
        },
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: 500,
          text: 'мин для материковых операторов',
        },
        {
          icon: <EmailIcon />,
          value: 500,
          text: 'SMS для материковых операторов',
        },
      ],
    }
  ],
  homeInternetTariffs: [
    {
      id: 1,
      backgroundImage: '/assets/img/tariff-banners/banner-2.png',
      title: 'Лето',
      oldPrice: 650,
      newPrice: 150,
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: '200 Мбит/с',
        discount: 76
      },  
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: 300,
          text: 'мин по Крыму',
        },
        {
          icon: <GlobeIcon />,
          value: 10,
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: 150,
          text: 'SMS',
        },
      ],
    },
    {
      id: 2,
      backgroundImage: '/assets/img/tariff-banners/banner-2.png',
      title: 'Больше лета',
      oldPrice: 950,
      newPrice: 150,
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: '500 Мбит/с',
        discount: 84
      },  
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: 500,
          text: 'мин по России',
        },
        {
          icon: <GlobeIcon />,
          value: '∞',
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: 500,
          text: 'SMS',
        },
      ],
    },
    {
      id: 3,
      backgroundImage: '/assets/img/tariff-banners/banner-3.png',
      title: 'Лето круглый год',
      oldPrice: 1450,
      newPrice: 150,
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: '1 Гбит/с',
        discount: 90
      },  
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: 1000,
          text: 'мин по России',
        },
        {
          icon: <GlobeIcon />,
          value: '∞',
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: 1000,
          text: 'SMS',
        },
      ],
    },
    {
      id: 4,
      backgroundImage: '/assets/img/tariff-banners/banner-2.png',
      title: 'Лето',
      oldPrice: 650,
      newPrice: 150,
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: '200 Мбит/с',
        discount: 76
      },  
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: 300,
          text: 'мин по Крыму',
        },
        {
          icon: <GlobeIcon />,
          value: 10,
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: 150,
          text: 'SMS',
        },
      ],
    },
    {
      id: 5,
      backgroundImage: '/assets/img/tariff-banners/banner-2.png',
      title: 'Больше лета',
      oldPrice: 950,
      newPrice: 150,
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: '500 Мбит/с',
        discount: 84
      },  
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: 500,
          text: 'мин по России',
        },
        {
          icon: <GlobeIcon />,
          value: '∞',
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: 500,
          text: 'SMS',
        },
      ],
    },
    {
      id: 6,
      backgroundImage: '/assets/img/tariff-banners/banner-3.png',
      title: 'Лето круглый год',
      oldPrice: 1450,
      newPrice: 150,
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: '1 Гбит/с',
        discount: 90
      },  
      options: [
        {
          icon: <PhoneMiniIcon className={tariffCarouselStyles.phoneIcon} />,
          value: 1000,
          text: 'мин по России',
        },
        {
          icon: <GlobeIcon />,
          value: '∞',
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: 1000,
          text: 'SMS',
        },
      ],
    }
  ],
};

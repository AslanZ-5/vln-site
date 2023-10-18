import { TARIFFS, SERVICES_NAME, SERVICES, PILLS } from '@/modules/services/constants';
import tariffCarouselStyles from '@/widgets/tariffs/tariffs-carousel/tariffs-carousel.module.scss';
import { EmailIcon, GlobeIcon, PhoneMiniIcon } from '../assets/svg';
import {ICONS} from '@/modules/services/service-info-modal/service-info-modal.mock';

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
  priceTitle?: PRICE_TITLE;
  tariff: string[];
  tab: string[];
  filter: string[];
  area?: string;
  connectCode?: string;
  disconnectCode?: string;
  tariffs?: TariffsTypes[];
  optionInformation?: OptionInformationTypes[];
}

export interface TariffsTypes {
  id: number,
  tariff: string,
  path: string,
}

export interface OptionInformationTypes {
  id: number,
  label: string,
  description:  OptionDescTypes[],
  prise: any,
}

export interface OptionDescTypes {
  apps: string,
  icons: OpionIconTypes[]
}

export interface OpionIconTypes {
  id: number,
  icon: any
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
    area: 'По всей России',
    connectCode: '*516#',
    disconnectCode: '*516#',
    tariffs: [
      {
        id: 1,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный объем интернет-трафика без ограничения по скорости',
        description: [],
        prise: '5 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '55 ₽',
      },
    ]
  },
  {
    title: 'Дополнительный пакет интернета 15\u00A0Гб',
    price: '80',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*516#',
    disconnectCode: '*516#',
    tariffs: [
      {
        id: 1,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный объем интернет-трафика без ограничения по скорости',
        description: [],
        prise: '15 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '80 ₽',
      },
    ]
  },
  {
    title: 'Дополнительный пакет интернета 25\u00A0Гб',
    price: '125',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*516#',
    disconnectCode: '*516#',
    tariffs: [
      {
        id: 1,
        tariff: 'Стартуй',
        path: 'start'
      },
      {
        id: 2,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 3,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный объем интернет-трафика без ограничения по скорости',
        description: [],
        prise: '25 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '125 ₽',
      },
    ]
  },
  {
    title: 'Безлимитные мессенджеры в поездках по России',
    price: '250',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
    area: 'По всей России',
    connectCode: '*412#',
    disconnectCode: '*412#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Сделай сам',
        path: 'doIt'
      },
      {
        id: 3,
        tariff: 'Стартуй',
        path: 'start'
      },
      {
        id: 4,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 5,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Безлимитные мессенджеры',
        description: [
          {
            apps: '',
            icons: [
              { id: 1, icon: ICONS.SKYPE},
              { id: 2, icon: ICONS.TELEGRAM},
              { id: 3, icon: ICONS.VIBER },
              { id: 4, icon: ICONS.WA}
            ]
          }
        ],
        prise: ICONS.LOOP,
      },
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '250 ₽ в месяц',
      },
    ]
  },
  {
    title: 'Безлимитный YouTube',
    price: '130',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START, TARIFFS.YOURSELF, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
    area: 'По всей России',
    connectCode: '*518#',
    disconnectCode: '*518#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Сделай сам',
        path: 'doIt'
      },
      {
        id: 3,
        tariff: 'Стартуй',
        path: 'start'
      },
      {
        id: 4,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 5,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Неограниченный доступ к видеохостингу YouTube.',
        description: [
          {
            apps: '',
            icons: []
          },
        ],
        prise: ICONS.LOOP,
      },
      {
        id: 4,
        label: 'Безлимитный доступ на видеохостинг предоставляется при соблюдении следующих условий: с момента списание абонентской платы прошло не более 30 дней, с момента списания ежесуточной платы опции «Жара» (тариф «Солнце») прошло не более 24 часов.',
        description: [],
        prise: '',
      },
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '130 ₽ в месяц',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]
  },
  {
    title: 'Безлимитный интернет на день с раздачей',
    price: '40',
    period: '/сут.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
    area: 'По всей России',
    connectCode: '*510*1#',
    disconnectCode: '*510*2#',
    tariffs: [
      {
        id: 1,
        tariff: 'Стартуй',
        path: 'start'
      },
      {
        id: 2,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 3,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Неограниченный по объему трафика доступ в интернет с момента подключения и до 23:59 оплаченных суток.',
        description: [
          {
            apps: 'Услуга действует постоянно после подключения и до момента пока абонент ее не отключит.',
            icons: []
          },
        ],
        prise: ICONS.LOOP,
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '40 ₽ в сутки',
      },
    ]
  },
  {
    title: 'Пакет 200\u00A0мин. по Крыму и Краснодарскому краю',
    price: '90',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.MINUTS],
    area: 'Крым и Краснодарский край',
    connectCode: '*508#',
    disconnectCode: '*508#',
    tariffs: [
      {
        id: 1,
        tariff: 'Стартуй',
        path: 'start'
      },
      {
        id: 2,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 3,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Ежемесячно предоставляется 200 мин.',
        description: [
          {
            apps: 'На номера операторов Республики Крым, г. Севастополь и Краснодарского края.',
            icons: []
          }
        ],
        prise: '200 мин.',
      },
      {
        id: 4,
        label: 'Звонки на номера операторов Республики Крым, г. Севастополь и Краснодарского края не тарифицируется, ежемесячный/ежесуточный пакет минут при звонках по указанным направлениям не расходуется.',
        description: [],
        prise: '',
      },
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '90 ₽ в месяц',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]
  },
  {
    title: 'Пакет 400\u00A0мин. по Крыму и Краснодарскому краю',
    price: '130',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.MINUTS],
    area: 'Крым и Краснодарский край',
    connectCode: '*509#',
    disconnectCode: '*509#',
    tariffs: [
      {
        id: 1,
        tariff: 'Стартуй',
        path: 'start'
      },
      {
        id: 2,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 3,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Ежемесячно предоставляется 400 мин.',
        description: [
          {
            apps: 'На номера операторов Республики Крым, г. Севастополь и Краснодарского края.',
            icons: []
          }
        ],
        prise: '400 мин.',
      },
      {
        id: 4,
        label: 'Звонки на номера операторов Республики Крым, г. Севастополь и Краснодарского края не тарифицируется, ежемесячный/ежесуточный пакет минут при звонках по указанным направлениям не расходуется.',
        description: [],
        prise: '',
      },
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '130 ₽ в месяц',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]
  },
  {
    title: 'Безлимитные звонки по Крыму и Краснодарскому краю',
    price: '4',
    period: '/сут.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.MINUTS, PILLS.UNLIMITED],
    area: 'Крым и Краснодарский край',
    connectCode: '*408*1#',
    disconnectCode: '*408*2#',
    tariffs: [
      {
        id: 1,
        tariff: 'Стартуй',
        path: 'start'
      },
      {
        id: 2,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 3,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Возможность осуществлять звонки на номера операторов Республики Крым, г. Севастополя и Краснодарского края без ограничений по количеству.',
        description: [
          {
            apps: 'Ежемесячный/ежесуточный пакет минут, предоставляемый согласно условиям, используемого абонентом тарифного плана, при звонках по указанным направлениям не расходуется.',
            icons: []
          },
        ],
        prise: ICONS.LOOP,
      },
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '4 ₽ в сутки',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]
  },
  {
    title: 'Умная ТВ-приставка SberBox',
    price: '150',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
    area: 'По всей России',
    connectCode: '',
    disconnectCode: '',  
    tariffs: [],
    optionInformation: [
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '150 ₽ в месяц',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]
  },
  {
    title: 'Усилитель Wi-Fi сигнала',
    price: '150',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
    area: 'По всей России',
    connectCode: '',
    disconnectCode: '',
    tariffs: [],
    optionInformation: [
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '150 ₽ в месяц',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]
  },
  {
    title: 'Статический IP',
    price: '150',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
    area: 'По всей России',
    connectCode: '',
    disconnectCode: '',
    tariffs: [],
    optionInformation: [
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '150 ₽ в месяц',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]
  },
  {
    title: 'Viju',
    price: '180',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.AFFORD, TARIFFS.FLY, TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.INTERNET]],
    filter: [PILLS.SERVICE],
    area: 'По всей России',
    connectCode: '*625#',
    disconnectCode: '*625#',
    tariffs: [
      {
        id: 1,
        tariff: 'Стартуй',
        path: 'start'
      },
      {
        id: 2,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 3,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Подписка VIJU',
        description: [
          {
            apps: 'Громкие премьеры и эксклюзивы ведущих мировых киностудий, а также любимые телеканалы TV1000, ViP Premiere, Viasat Sport, Viasat History и другие.',
            icons: [ ]
          },
        ],
        prise: ICONS.LOOP,
      },
      {
        id: 2,
        label: 'Последующие подключения',
        description: [],
        prise: '180 ₽ в месяц',
      },
      {
        id: 3,
        label: 'Первое подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]},
  {
    title: 'Пакет интернета 1\u00A0Гб',
    price: '50',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*502#',
    disconnectCode: '*502#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Стартуй',
        path: 'start'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный объем интернет-трафика без ограничения по скорости',
        description: [],
        prise: '1 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '50 ₽',
      },
    ]
  },
  {
    title: 'Пакет интернета 2\u00A0Гб',
    price: '100',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*502#',
    disconnectCode: '*502#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Стартуй',
        path: 'start'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный объем интернет-трафика без ограничения по скорости',
        description: [],
        prise: '2 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '100 ₽',
      },
    ]
  },
  {
    title: 'Пакет интернета 5\u00A0Гб',
    price: '200',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*502#',
    disconnectCode: '*502#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Стартуй',
        path: 'start'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный объем интернет-трафика без ограничения по скорости',
        description: [],
        prise: '5 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '200 ₽',
      },
    ]
  },
  {
    title: 'Пакет интернета 10\u00A0Гб',
    price: '300',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*502#',
    disconnectCode: '*502#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Стартуй',
        path: 'start'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный объем интернет-трафика без ограничения по скорости',
        description: [],
        prise: '10 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '300 ₽',
      },
    ]
  },
  {
    title: 'Автопродление пакета интернета 1\u00A0Гб',
    price: '55',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*505#',
    disconnectCode: '*505#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Стартуй',
        path: 'start'
      },
    ],
     optionInformation: [
      {
        id: 1,
        label: 'Дополнительный пакет интернета',
        description: [{
          apps: 'При исчерпании ежемесячного пакета интернет-трафика',
          icons: []
        }],
        prise: '1 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '55 ₽',
      },
    ]
  },
  {
    title: 'Автопродление пакета интернета 2\u00A0Гб',
    price: '100',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*505#',
    disconnectCode: '*505#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Стартуй',
        path: 'start'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный пакет интернета',
        description: [{
          apps: 'Ппри исчерпании ежемесячного пакета интернет-трафика',
          icons: []
        }],
        prise: '2 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '100 ₽',
      },
    ]
  },
  {
    title: 'Автопродление пакета интернета 5\u00A0Гб',
    price: '200',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*505#',
    disconnectCode: '*505#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Стартуй',
        path: 'start'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный пакет интернета',
        description: [{
          apps: 'При исчерпании ежемесячного пакета интернет-трафика',
          icons: []
        }],
        prise: '5 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '200 ₽',
      },
    ]
  },
  {
    title: 'Автопродление пакета интернета 10\u00A0Гб',
    price: '300',
    period: undefined,
    priceTitle: PRICE_TITLE.CONNECTION,
    tariff: [TARIFFS.START, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET],
    area: 'По всей России',
    connectCode: '*505#',
    disconnectCode: '*505#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Стартуй',
        path: 'start'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Дополнительный пакет интернета',
        description: [{
          apps: 'При исчерпании ежемесячного пакета интернет-трафика',
          icons: []
        }],
        prise: '10 Гб',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: '300 ₽',
      },
    ]
  },
  {
    title: '3 в 1',
    price: '75',
    period: '/мес.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.START],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
    area: 'По всей России',
    connectCode: '*515*1# ',
    disconnectCode: '*515*2# ',
    tariffs: [
      {
        id: 1,
        tariff: 'Стартуй',
        path: 'start',
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Опция «3-в-1»',
        description: [
          {
            apps: 'социальные сети',
            icons: [
              { id: 1, icon: ICONS.VK },
              { id: 2, icon: ICONS.OK }
            ]
          },
          {
            apps: 'карты',
            icons: [
              { id: 1, icon: ICONS.MAPS },
              { id: 2, icon: ICONS.NAVIGATOR },
              { id: 3, icon: ICONS.GIS}
            ]
          },
          {
            apps: 'мессенджеры',
            icons: [
              { id: 1, icon: ICONS.SKYPE},
              { id: 2, icon: ICONS.TELEGRAM},
              { id: 3, icon: ICONS.VIBER },
              { id: 4, icon: ICONS.WA}
            ]
          }
        ],
        prise: ICONS.LOOP,
      },
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '75 ₽ в месяц',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]
  },
  {
    title: 'Безлимитный интернет на день',
    price: '30',
    period: '/сут.',
    priceTitle: PRICE_TITLE.SUBSCRIPTION,
    tariff: [TARIFFS.START, TARIFFS.YOURSELF, TARIFFS.WIND],
    tab: [SERVICES_NAME[SERVICES.MOBILE], SERVICES_NAME[SERVICES.POPULAR]],
    filter: [PILLS.INTERNET, PILLS.UNLIMITED],
    area: 'По всей России',
    connectCode: '*509*1#',
    disconnectCode: '*509*2#',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
        path: 'fly'
      },
      {
        id: 2,
        tariff: 'Сделай сам',
        path: 'doIt'
      },
      {
        id: 3,
        tariff: 'Стартуй',
        path: 'start'
      },
      {
        id: 4,
        tariff: 'Летай',
        path: 'fly'
      },
      {
        id: 5,
        tariff: 'Могу себе позволить',
        path: 'can'
      },
    ],
    optionInformation: [
      {
        id: 1,
        label: 'Неограниченный по объему трафика доступ в интернет с момента подключения и до 23:59 оплаченных суток.',
        description: [
          {
            apps: 'На время действия опции «Безлимитный интернет на день» неизрасходованный интернет-трафик по тарифу либо интернет-опции также не доступен для раздачи.',
            icons: []
          },
        ],
        prise: ICONS.LOOP,
      },
      {
        id: 2,
        label: 'Абонплата',
        description: [],
        prise: '30 ₽ в сутки',
      },
      {
        id: 3,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ]
  },
  {
    title: 'SIM-карта с онлайн-активацией',
    price: '',
    period: undefined,
    tariff: [TARIFFS.All],
    tab: [SERVICES_NAME[SERVICES.MOBILE]],
    filter: [PILLS.ROAMING, PILLS.TECHNICAL, PILLS.SPECIAL, PILLS.SERVICE],
    area: '',
    connectCode: '',
    disconnectCode: '',
    tariffs: [],
    optionInformation: []
  },
];

export const tariffCardsMock = {
  mobileTariffs: [
    {
      id: 1,
      backgroundImage: '/assets/img/tariff-banners/banner-5.png',
      title: 'Сделай сам',
      newPrice: 'от 400',
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: 'До 1 Гбит/с',
        discount: 30
      },  
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
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: 'До 1 Гбит/с',
        discount: 30
      },  
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
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: 'До 1 Гбит/с',
        discount: 30
      },  
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
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: 'До 1 Гбит/с',
        discount: 30
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
          text: 'SMS по России',
        },
      ],
    },
    {
      id: 5,
      backgroundImage: '/assets/img/tariff-banners/banner-3.png',
      title: 'Ветер',
      newPrice: 300,
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: 'До 1 Гбит/с',
        discount: 30
      },  
      options: [
        {
          icon: <PhoneMiniIcon
            className={tariffCarouselStyles.phoneIcon}
            style={{ overflow: 'visible' }}
          />,
          value: <span style={{ whiteSpace: 'nowrap' }}>от 3 руб./мин.</span>,
          text: 'по Крыму / России',
        },
        {
          icon: <GlobeIcon />,
          value: '20 - ∞',
          text: 'Гб',
        },
        {
          icon: <EmailIcon />,
          value: '3 руб./SMS',
          text: 'по России',
        }
      ],
    },
    {
      id: 6,
      backgroundImage: '/assets/img/tariff-banners/banner-3.png',
      title: 'Летай',
      newPrice: 500,
      additionalInfo: {
        title: 'Домашний интернет',
        subtitle: 'До 1 Гбит/с',
        discount: 30
      },  
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

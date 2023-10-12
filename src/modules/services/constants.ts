import { Path } from '@/shared/constants/links';

enum SERVICES {
  POPULAR,
  MOBILE,
  INTERNET,
  FAST,
  SPECIAL,
}

const SERVICES_PATHNAME = {
  [SERVICES.POPULAR]: Path.services.popular,
  [SERVICES.MOBILE]: Path.services.mobile,
  [SERVICES.INTERNET]: Path.services.internet,
  [SERVICES.FAST]: Path.services.fast,
  [SERVICES.SPECIAL]: Path.services.special,
} as const;

const SERVICES_LABELS = {
  [SERVICES.POPULAR]: 'Самые популярные',
  [SERVICES.MOBILE]: 'Мобильная связь',
  [SERVICES.INTERNET]: 'Домашний интернет',
  [SERVICES.FAST]: 'Быстрые команды',
  [SERVICES.SPECIAL]: 'Специальные возможности',
} as const;

const SERVICES_DESCRIPTION = {
  [SERVICES.POPULAR]: 'Выбирайте самые популярные услуги и экономьте по-максимуму!',
  [SERVICES.MOBILE]: 'Безлимитные звонки по Крыму и Краснодару, до 100 Гб трафика!',
  [SERVICES.INTERNET]: 'Проверьте возможность подключения и наслаждайтесь скоростью и стабильностью!',
  [SERVICES.FAST]: 'Используйте USSD запросы для активации наиболее популярных опций!',
  [SERVICES.SPECIAL]: 'Особые возможности для особенно дорогих людей!',
} as const;

const SERVICES_NAME = {
  [SERVICES.POPULAR]: 'popular',
  [SERVICES.MOBILE]: 'mobile',
  [SERVICES.INTERNET]: 'internet',
  [SERVICES.FAST]: 'fast',
  [SERVICES.SPECIAL]: 'special',
} as const;

const SERVICES_CONSTANTS = [
  {
    id: SERVICES.POPULAR,
    path: SERVICES_PATHNAME[SERVICES.POPULAR],
    label: SERVICES_LABELS[SERVICES.POPULAR],
    description: SERVICES_DESCRIPTION[SERVICES.POPULAR],
    name: SERVICES_NAME[SERVICES.POPULAR],
  },
  {
    id: SERVICES.MOBILE,
    path: SERVICES_PATHNAME[SERVICES.MOBILE],
    label: SERVICES_LABELS[SERVICES.MOBILE],
    description: SERVICES_DESCRIPTION[SERVICES.MOBILE],
    name: SERVICES_NAME[SERVICES.MOBILE],
  },
  {
    id: SERVICES.INTERNET,
    path: SERVICES_PATHNAME[SERVICES.INTERNET],
    label: SERVICES_LABELS[SERVICES.INTERNET],
    description: SERVICES_DESCRIPTION[SERVICES.INTERNET],
    name: SERVICES_NAME[SERVICES.INTERNET],
  },
  {
    id: SERVICES.FAST,
    path: SERVICES_PATHNAME[SERVICES.FAST],
    label: SERVICES_LABELS[SERVICES.FAST],
    description: SERVICES_DESCRIPTION[SERVICES.FAST],
    name: SERVICES_NAME[SERVICES.FAST],
  },
  {
    id: SERVICES.SPECIAL,
    path: SERVICES_PATHNAME[SERVICES.SPECIAL],
    label: SERVICES_LABELS[SERVICES.SPECIAL],
    description: SERVICES_DESCRIPTION[SERVICES.SPECIAL],
    name: SERVICES_NAME[SERVICES.SPECIAL],
  },
];

const PILLS = {
  INTERNET: 'Пакеты интернета',
  MINUTS: 'Пакеты минут',
  UNLIMITED: 'Безлимиты',
  ROAMING: 'Роуминг',
  SERVICE: 'Сервисные',
  SPECIAL: 'Специальные',
  TECHNICAL: 'Технические',
};

const TARIFFS = {
  All: 'Все тарифы',
  AFFORD: 'Могу себе позволить',
  FLY: 'Летай',
  START: 'Стартуй',
  YOURSELF: 'Сделай сам!',
  WIND: 'Ветер',
};

export {
  SERVICES,
  SERVICES_PATHNAME,
  SERVICES_LABELS,
  SERVICES_DESCRIPTION,
  SERVICES_NAME,
  SERVICES_CONSTANTS,
  PILLS,
  TARIFFS,
};

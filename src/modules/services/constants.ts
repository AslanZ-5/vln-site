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
    name: SERVICES_NAME[SERVICES.POPULAR],
  },
  {
    id: SERVICES.MOBILE,
    path: SERVICES_PATHNAME[SERVICES.MOBILE],
    label: SERVICES_LABELS[SERVICES.MOBILE],
    name: SERVICES_NAME[SERVICES.MOBILE],
  },
  {
    id: SERVICES.INTERNET,
    path: SERVICES_PATHNAME[SERVICES.INTERNET],
    label: SERVICES_LABELS[SERVICES.INTERNET],
    name: SERVICES_NAME[SERVICES.INTERNET],
  },
  {
    id: SERVICES.FAST,
    path: SERVICES_PATHNAME[SERVICES.FAST],
    label: SERVICES_LABELS[SERVICES.FAST],
    name: SERVICES_NAME[SERVICES.FAST],
  },
  {
    id: SERVICES.SPECIAL,
    path: SERVICES_PATHNAME[SERVICES.SPECIAL],
    label: SERVICES_LABELS[SERVICES.SPECIAL],
    name: SERVICES_NAME[SERVICES.SPECIAL],
  },
];

const PILLS = {
  INTERNET: 'Пакеты интернета',
  MINUTS: 'Пакеты минут',
  UNLIMITED: 'Безлимиты',
  ROAMING: 'Роуминг',
  SERVICE: 'Сервисные',
};

const TARIFFS = {
  All: 'Все тарифы',
  AFFORD: 'Могу себе позволить',
  FLY: 'Летай',
  START: 'Стартуй',
  YOURSELF: 'Сделай сам!',
  WIND: 'Ветер',
};

export { SERVICES, SERVICES_PATHNAME, SERVICES_LABELS, SERVICES_NAME, SERVICES_CONSTANTS, PILLS, TARIFFS };

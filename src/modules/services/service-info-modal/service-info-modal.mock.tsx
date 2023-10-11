import { serviceParamsType } from './service-info-modal.types';
import { ButtonLoop, VkColor, OkColor, YaMapsColor, YaNavigatorColor, GisColor, ViberColor, SkypeColor, WAColor, TelegramColor } from '@/shared/assets/svg';

export const serviceParamsMock: serviceParamsType[] = [
  {
    title: 'Информация об опции',
    optionInformation: [
      {
        id: 1,
        label: 'Опция «3-в-1»',
        description: [
          {
            apps: 'социальные сети',
            icons: [
              { id: 1, icon: <VkColor /> },
              { id: 2, icon: <OkColor /> }
            ]
          },
          {
            apps: 'карты',
            icons: [
              { id: 1, icon: <YaMapsColor /> },
              { id: 2, icon: <YaNavigatorColor /> },
              { id: 3, icon: <GisColor /> }
            ]
          },
          {
            apps: 'мессенджеры',
            icons: [
              { id: 1, icon: <SkypeColor /> },
              { id: 2, icon: <TelegramColor /> },
              { id: 3, icon: <ViberColor /> },
              { id: 4, icon: <WAColor /> }
            ]
          }
        ],
        prise: <ButtonLoop />,
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
    ], connectDisconnect: [], tariffs: [], area: []
  },
  {
    title: 'Как подключить или отключить',
    connectDisconnect: [
      {
        id: 1,
        startInfo: 'Для подключения введите команду на телефоне ',
        endInfo: '  либо через Мобильное приложение',
        code: '* 515 * 1 #',
      },
      {
        id: 2,
        startInfo: 'Для отключения введите команду на телефоне ',
        endInfo: '  либо через Мобильное приложение',
        code: '* 515 * 2 #',
      }
    ], optionInformation: [], tariffs: [], area: []
  },
  {
    title: 'Доступна на тарифах',
    tariffs: [
      {
        id: 1,
        tariff: 'Ветер',
      },
      {
        id: 2,
        tariff: 'Море',
      },
      {
        id: 3,
        tariff: 'Море общения 2019',
      },
      {
        id: 4,
        tariff: 'Космос ',
      },
      {
        id: 5,
        tariff: 'Море общения',
      },
      {
        id: 6,
        tariff: 'Море общения 2021',
      },
    ], connectDisconnect: [], optionInformation: [], area: []
  },
  {
    title: 'Зона действия опции',
    area: [
      {
        id: 1,
        area: 'Республика Крым и г.Севастополь',
      }
    ], connectDisconnect: [], tariffs: [], optionInformation: []
  }

];

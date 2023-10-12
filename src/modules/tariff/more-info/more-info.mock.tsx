import { infoType } from './more-info.types';
import { ButtonLoop, VkColor, OkColor, YaMapsColor, YaNavigatorColor, GisColor, ViberColor, SkypeColor, WAColor, TelegramColor } from '@/shared/assets/svg';

export const moreInfoMock: infoType[] = [
  {
    id: 1,
    title: 'Пакет услуг, включенный в ежемесячную оплату',
    desc: '',
    info: [
      {
        id: 1,
        label: 'SMS',
        description: [{
          apps: 'на номера других операторов Республики Крым, г. Севастополь и Краснодарского края',
          icons: []
        },],
        prise: '100 шт.'
      },
      {
        id: 2,
        label: 'Социальные сети',
        description: [
          {
            apps: 'социальные сети',
            icons: [
              { id: 1, icon: <VkColor /> },
              { id: 2, icon: <OkColor /> }
            ]
          },
        ],
        prise: <ButtonLoop />
      },
      {
        id: 31,
        label: 'Мобильный интернет',
        description: [{
          apps: '',
          icons: []
        },],
        prise: '10 Гб'
      },
    ],
  },
  {
    id: 2,
    title: 'Стоимость пакета сверх услуг',
    desc: '',
    info: [
      {
        id: 1,
        label: 'Мобильный интернет',
        description: [{
          apps: '',
          icons: []
        },],
        prise: '10 Гб'
      },
      {
        id: 2,
        label: 'Мобильный интернет',
        description: [{
          apps: '',
          icons: []
        },],
        prise: '30 Гб'
      },
      {
        id: 35,
        label: 'Звонки',
        description: [{
          apps: '',
          icons: []
        },],
        prise: '300 минут'
      },
    ],
  },
  {
    id: 73,
    title: 'Пакет услуг, включенный в ежемесячную оплату ',
    desc: 'при нахождении в сети «Волна»',
    info: [
      {
        id: 1,
        label: 'Звонки',
        description: [{
          apps: 'на номера «Волна»',
          icons: []
        },],
        prise: <ButtonLoop />,
      },
      {
        id: 2,
        label: 'Звонки',
        description: [{
          apps: 'на номера других операторов Республики Крым, г. Севастополь и Краснодарского края',
          icons: []
        },],
        prise: '300 минут'
      },
      {
        id: 63,
        label: 'Мобильный интернет',
        description: [{
          apps: '',
          icons: []
        },],
        prise: '10 Гб'
      },
      {
        id: 4,
        label: 'SMS на номера «Волна»',
        description: [{
          apps: 'после исчерпания ежемесячного пакета SMS',
          icons: []
        },],
        prise: <ButtonLoop />
      },
      {
        id: 5,
        label: 'SMS',
        description: [{
          apps: 'на номера других операторов Республики Крым, г. Севастополь и Краснодарского края',
          icons: []
        },],
        prise: '150 шт.'
      },
      {
        id: 6,
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
              { id: 53, icon: <GisColor /> }
            ]
          },
          {
            apps: 'мессенджеры',
            icons: [
              { id: 1, icon: <SkypeColor /> },
              { id: 2, icon: <TelegramColor /> },
              { id: 43, icon: <ViberColor /> },
              { id: 4, icon: <WAColor /> }
            ]
          }
        ],
        prise: '150 шт.',
      },

      {
        id: 33,
        label: 'Подключение',
        description: [],
        prise: 'Бесплатно',
      },
    ],
  },
  {
    id: 4,
    title: 'Стоимость ресурсов в поездках по России',
    desc: '',
    info: [
      {
        id: 1,
        label: 'Везде как дома',
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
              { id: 23, icon: <GisColor /> }
            ]
          },
          {
            apps: 'мессенджеры',
            icons: [
              { id: 1, icon: <SkypeColor /> },
              { id: 2, icon: <TelegramColor /> },
              { id: 13, icon: <ViberColor /> },
              { id: 4, icon: <WAColor /> }
            ]
          }
        ],
        prise: '150 шт.',
      },
    ],
  },
  {
    id: 5,
    title: 'Дополнительные услуги',
    desc: '',
    info: [
      {
        id: 1,
        label: 'SMS',
        description: [{
          apps: 'на номера других операторов Республики Крым, г. Севастополь и Краснодарского края',
          icons: []
        },],
        prise: '150 шт.'
      },
      {
        id: 2,
        label: 'Мобильный интернет',
        description: [{
          apps: '',
          icons: []
        },],
        prise: '10 Гб'
      },
    ],
  },

];

import {
  FaqCommon,
  FaqDials,
  FaqMobileInternet,
  FaqNewUser,
  FaqPayment,
  FaqRoaming,
  FaqUser,
} from '@/shared/assets/svg/faq';
import { Path } from '@/shared/constants/links';

export const CARD_CONTENTS = [
  {
    header: {
      icon: <FaqCommon />,
      title: 'Общие вопросы',
    },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: Path.faq.common,
  },
  {
    header: {
      icon: <FaqMobileInternet />,
      title: 'Мобильный интернет',
    },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: Path.faq.mobileInternet,
  },
  {
    header: {
      icon: <FaqRoaming />,
      title: 'Роуминг',
    },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: Path.faq.roaming,
  },
  {
    header: {
      icon: <FaqUser />,
      title: 'Личный кабинет',
    },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: Path.faq.user,
  },
  {
    header: {
      icon: <FaqPayment />,
      title: 'Оплата и баланс',
    },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: Path.faq.payment,
  },
  {
    header: {
      icon: <FaqNewUser />,
      title: 'Новым абонентам',
    },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: Path.faq.newUser,
  },
  {
    header: {
      icon: <FaqDials />,
      title: 'Полезные команды',
    },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: Path.faq.dials,
  },
];

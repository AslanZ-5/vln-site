import {  
  FaqCommon,
  FaqDials,
  FaqMobileInternet,
  FaqNewUser,
  FaqPayment,
  FaqRoaming, 
  FaqUser
} from "@/shared/assets/svg/faq"

export const CARD_CONTENTS = [
  { header: {
    icon: <FaqCommon />,
    title: 'Общие вопросы',
  },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: '/faq/common'
  },
  { header: {
    icon: <FaqMobileInternet />,
    title: 'Мобильный интернет'
  },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: '/faq/mobile-internet'
  },
  { header: {
    icon: <FaqRoaming />,
    title: 'Роуминг'
  },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: '/faq/roaming'
  },
  { header: {
    icon: <FaqUser />,
    title: 'Личный кабинет'
  },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: '/faq/user'
  },
  { header: {
    icon: <FaqPayment />,
    title: 'Оплата и баланс'
  },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: '/faq/payment'
  },
  { header: {
    icon: <FaqNewUser />,
    title: 'Новым абонентам'
  },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: '/faq/new-user'
  },
  { header: {
    icon: <FaqDials />,
    title: 'Полезные команды'
  },
    text: 'Здесь краткое описание того, какие могут быть общие вопросы, чтобы пользователь понял, куда он перейдёт',
    href: '/faq/dials'
  }
]

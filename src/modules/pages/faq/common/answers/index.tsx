import styles from './answers.module.scss';

export const Answer3 = () => {
  return (
    <>
      <div className={styles.answer3Title}>
        Вы можете пополнить баланс следующими способами:
      </div>
      <br/>
      <ul className={styles.answer3List}>
        <li>1&#41; в приложении НаСвязи+</li>
        <li>2&#41; через терминал</li>
        <li>3&#41; банковской картой на сайте <a href='https://payberry.ru/'>https://payberry.ru/</a> в разделе &quot;Мобильная связь&quot; → &quot;Мобильные операторы РФ&quot; → &quot;7Telecom&quot;</li>
        <li>4&#41; приобрести карту пополнения счета в точках продаж</li>
        <li>5&#41; через банк ПСБ и РНКБ</li>
      </ul>
    </>
  )
}

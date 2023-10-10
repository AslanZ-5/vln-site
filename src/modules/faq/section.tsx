import { Accordion } from '@mantine/core';
import classes from './faq-section.module.scss';

type QA = {
  Q: string;
  A: string | JSX.Element;
};

function Section(content: QA[]) {
  const items = content.map((item, i) => {
    return (
      <Accordion.Item key={i} value={i.toString()}>
        <Accordion.Control>{item.Q}</Accordion.Control>
        <Accordion.Panel styles={{ padding: '16px 20px' }}>{item.A}</Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <Accordion classNames={classes} variant='contained' radius={24}>
      {items}
    </Accordion>
  );
}

export default Section;

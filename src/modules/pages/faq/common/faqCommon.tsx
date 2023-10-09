import { Accordion } from '@mantine/core';
import classes from './faq-common.module.scss';
import { COMMON_CONTENTS } from './constants';

const items = COMMON_CONTENTS.map((item, i) => {
  return (
    <Accordion.Item key={i} value={i.toString()}>
      <Accordion.Control>
          {item.Q}
        </Accordion.Control>
      <Accordion.Panel
        styles={{ padding: '16px 20px' }}
      >
        {item.A}
      </Accordion.Panel>
    </Accordion.Item>
  )
})

function FaqCommon() {
  return (
    <Accordion 
      classNames={classes}
      variant='contained'
      radius={24}
    >
      {items}
    </Accordion>
)}

export default FaqCommon;

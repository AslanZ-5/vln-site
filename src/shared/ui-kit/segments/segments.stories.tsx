import { Meta, StoryObj } from '@storybook/react';
import { Segments } from './segments';
import { SegmentList } from './segmentList/segmentList';
import { Segment } from './segment/segment';
import { SegmentPanel } from './segmentPanel/segmentPanel';

const meta = {
  title: 'Example/Segments',
  component: Segments,
} satisfies Meta<typeof Segments>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DemoSegments: Story = {
  args: {
    children: (
      <>
        <SegmentList>
          <Segment value='1' active={true} activateSegment={() => {}}>
            Segment 1
          </Segment>
          <Segment value='2' active={false} activateSegment={() => {}}>
            Segment 2
          </Segment>
          <Segment value='3' active={false} activateSegment={() => {}}>
            Segment 3
          </Segment>
        </SegmentList>

        <SegmentPanel value='1'>Segment 1 content...</SegmentPanel>

        <SegmentPanel value='2'>Segment 2 content...</SegmentPanel>

        <SegmentPanel value='3'>Segment 3 content...</SegmentPanel>
      </>
    ),
  },
};

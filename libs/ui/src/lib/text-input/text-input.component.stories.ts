import { Story, Meta } from '@storybook/angular';

import { TextInputComponent } from './text-input.component';

export default {
  title: 'TextInputComponent',
  component: TextInputComponent,
} as Meta<TextInputComponent>;

const Template: Story<TextInputComponent> = (args: TextInputComponent) => ({
  component: TextInputComponent,
  props: args,
});

export const Primary = Template.bind({
  title: 'Text Input',
});

Primary.args = {};

import { html, TemplateResult } from 'lit';
import '../src/bird-news-company.js';

export default {
  title: 'BirdNewsCompany',
  component: 'bird-news-company',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({
  title,
  backgroundColor = 'white',
}: ArgTypes) => html`
  <bird-news-company
    style="--bird-news-company-background-color: ${backgroundColor}"
    .title=${title}
  ></bird-news-company>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

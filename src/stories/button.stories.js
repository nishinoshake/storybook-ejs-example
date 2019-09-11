import { storiesOf } from '@storybook/html'
import buttonTemplate from '../components/button.ejs'

storiesOf('Button', module)
  .add('with text', () => buttonTemplate({ label: 'Button!' }))
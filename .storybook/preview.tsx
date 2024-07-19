import type { Preview } from '@storybook/react';
import Theme from '../src/styles/Theme';
import React from 'react';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: (story) => <Theme>{story()}</Theme>,
};

export default preview;

import type { StoryObj, Meta } from "@storybook/react";
import { Box, Text, Checkbox, CheckboxProps } from "@thalitagq-ignite-ui/react";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: "flex", alignItems: 'center', gap: "$2" }}
        >
          {Story()}
          <Text size="sm">Accept use terms</Text>
        </Box>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {
};

export const Disabled: StoryObj<CheckboxProps> = {
  args: {
    disabled: true,
  },
};

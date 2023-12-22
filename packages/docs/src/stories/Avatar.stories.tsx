import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@thalitagq-ignite-ui/react";

export default {
  title: "Data Display/Avatar",
  component: Avatar,
  args: {
    src: "https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj",
    alt: "Avatar"
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};


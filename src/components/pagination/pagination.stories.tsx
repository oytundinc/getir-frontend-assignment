import { Meta, Story } from '@storybook/react';
import Pagination, { PaginationOptions, PaginationPage } from './pagination';

export default {
    title: 'components/pagination',
    component: Pagination,
    args: {},
} as Meta;

export const Default: Story<PaginationOptions> = (args) => (
    <PaginationPage {...args} />
);

Default.args = {
    handleChange: () => {},
    options: {
        total: 120,
        selectedPage: 3,
        limit: 5,
        totalPages: 30,
    },
};

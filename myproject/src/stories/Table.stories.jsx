// // Table.stories.js|jsx!ts!tsx

// import React from 'react';

// import { Table } from './Table';
// import { TD } from './TableDataCell';
// import { TR } from './TableRow';

// export default {
//   /* 👇 The title prop is optional.
//   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
//   * to learn how to generate automatic titles
//   */
//   title: 'Custom Table',
//   component: Table,
// };

// const TableStory = ({ data, ...args}) => (
//   <Table {...args}>
//     {data.map((row) => (
//       <TR>
//         {row.map((item) => (
//           <TD>{item}</TD>
//         ))}
//       </TR>
//     ))}
//   </Table>
// );

// export const Numeric = TableStory.bind({});
// Numeric.args = {
//   //👇 This arg is for the story component
//   data: [[1, 2, 3], [4, 5, 6]],
//   //👇 The remaining args get passed to the `Table` component
//   size: 'large',
// };
import React, { useState } from 'react';
import { RichTextEditor } from '@mantine/rte';

export default function App() {
  const [value, setValue] = useState('<p>Hello, world!</p>');

  return <RichTextEditor value={value} onChange={setValue} />;
}

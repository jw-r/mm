import { useState } from 'react';
import { Txt } from './shared/Txt';

function Sidebar() {
  const [selectedCategory, setSelectedCategory] = useState();

  return (
    <div className="w-64 px-10 py-12">
      <Txt typography="h3">카테고리</Txt>
      <div></div>
    </div>
  );
}

export default Sidebar;

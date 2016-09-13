import React from 'react';

export function SidebarMenuItem(props) {
  const { item } = props;

  return (
    <a href={item.link}>
      <li id={item.id} className="selectable">
        {item.name}
      </li>
    </a>
  );
}

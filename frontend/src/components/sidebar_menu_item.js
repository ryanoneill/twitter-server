import React from 'react';

function renderGet(item) {
  const { link } = item;

  return (
    <a href={link.url}>
      <li id={item.id} className="selectable">
        {item.name}
      </li>
    </a>
  );
}

function renderPost(item) {
  const { link } = item;
  const formId = link.url + "-form";

  const onClick = "document.getElementById('" + formId + "').submit()"

  return (
    <form method="post" id={formId} action={link.url}>
      <a href="#" onClick={onClick}>
        <li id={item.id} className="selectable">
          {item.name}
        </li>
      </a>
    </form>
  );
}

export function SidebarMenuItem(props) {
  const { item } = props;
  const { link } = item;

  var result;

  switch (link.method) {
    case "get":
      result = renderGet(item);
      break;
    case "post":
      result = renderPost(item);
      break;
  }

  return result;
}

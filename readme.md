# scoped-style-components

Lightweight [React](https://react.dev/) components for scoping styles natively. CSS-in-JS without the runtime!

## Install

```sh
npm i scoped-style-components
```

## Usage

This package exports two components, [Style](#style) and [StyleLink](#stylelink). Both components wrap their child elements with [display: contents](https://developer.mozilla.org/en-US/docs/Web/CSS/display#contents) in order to provide a scoping root.

### Style

```ts
import Style from "scoped-style-components/Style.js";
```

This component accepts a `css` prop and scopes styles inline by rendering a [style](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style) element and wrapping specified styles in an [@scope](https://developer.mozilla.org/en-US/docs/Web/CSS/@scope) block.

#### Example

```tsx
import Style from "scoped-style-component/Style.js";

function Sidebar() {
  return (
    <Style
      css={`
        > aside {
          width: 200px;
          background-color: var(--color-sidebar);
          padding: var(--spacing-md);
          > ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
            > li {
              padding: var(--spacing-sm) 0;
              cursor: pointer;
            }
          }
        }
      `}
    >
      <aside>
        <ul>
          <li>Inbox</li>
          <li>Sent</li>
          <li>Drafts</li>
          <li>Trash</li>
        </ul>
      </aside>
    </Style>
  );
}
```

### StyleLink

```ts
import StyleLink from "scoped-style-components/StyleLink.js";
```

Similar to [Style](#style), this component instead accepts an `href` prop and renders a [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link) element.

```tsx
import StyleLink from "scoped-style-component/StyleLink.js";

function Sidebar() {
  return (
    <StyleLink href="/sidebar.css">
      <aside>
        <ul>
          <li>Inbox</li>
          <li>Sent</li>
          <li>Drafts</li>
          <li>Trash</li>
        </ul>
      </aside>
    </StyleLink>
  );
}
```

```css
/* sidebar.css */
@scope {
  > aside {
    width: 200px;
    background-color: var(--color-sidebar);
    padding: var(--spacing-md);
    > ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
      > li {
        padding: var(--spacing-sm) 0;
        cursor: pointer;
      }
    }
  }
}
```

## Recommended

For autocompletion and syntax highlighting support in VSCode. Install the [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components) extension as well as [fake-tag](https://github.com/jaydenseric/fake-tag).
The extension will provide syntax highlighting and autocompletion when using the `css` tag as a [tagged template](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates).

#### Example:

```tsx
import css from "fake-tag";
import Style from "scoped-style-components/Style.js";

export default function Link(props: React.ComponentProps<"a">) {
  return (
    <Style
      css={css`
        a {
          color: forestgreen;
        }
      `}
    >
      <a {...props} />
    </Style>
  );
}
```

### License

MIT

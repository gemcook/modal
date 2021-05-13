# [@gemcook/modal](https://modal.storybook.gemcook.com)

---

[![npm version](https://badge.fury.io/js/%40gemcook%2Fmodal.svg)](https://badge.fury.io/js/%40gemcook%2Fmodal)

React Modal Component.

## Installation

```shell
npm install --save @gemcook/modal
```

or

```shell
yarn add @gemcook/modal
```

## Usage

### SCSS

#### Import `@gemcook/modal/lib/styles/index.scss` to your SCSS.

```scss
@import "~@gemcook/modal/lib/styles/index";
```

## Examples

### default

```jsx
<div>
  <Button
    color="pink"
    onClick={() => store.set({ isModal: !store.state.isModal })}
  >
    Open Modal
  </Button>
  <Modal
    isModal={store.state.isModal}
    ModalBody={Welcome}
    handleCloseModal={() => store.set({ isModal: !store.state.isModal })}
  />
</div>
```

## Documentaion

### Props

| **Parameter**    | **Type**                   | **Required** | **Default** | **Description**                               |
| :--------------- | :------------------------- | :----------- | :---------- | :-------------------------------------------- |
| isModal          | boolean                    | true         | undefined   | \-                                            |
| ModalBody        | React.Element              | true         | undefined   | \-                                            |
| handleCloseModal | (isModal: boolean) => void | true         | undefined   | \-                                            |
| size             | enum                       | false        | 'sm'        | Enums: `'xs', 'sm', 'md', 'lg', 'xl', 'full'` |

## License

@gemcook/modal is released under the MIT license.

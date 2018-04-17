# [@gemcook/modal](https://modal.storybook.gemcook.com)

## Demo

* [Storybook](https://modal.storybook.gemcook.com)

# Getting Started

## Installation

```shell
$ npm install --save @gemcook/modal
```

or

```shell
$ yarn add @gemcook/modal
```

## Usage

```jsx
<Modal
  current={store.state.current}
  total={100}
  changePage={current => {
    store.set({ current });
  }}
/>
```

## Documentaion

### Props

### API
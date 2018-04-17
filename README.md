# @gemcook/modal

## Demo

# Getting Started

## Installation

```
$ npm install --save @gemcook/modal
```

or

```
yarn add @gemcook/modal
```

## Usage

```
<React.Fragment>
  <Button
    color="pink"
    onClick={() => store.set({isModal: !store.state.isModal})}>
    Open Modal
  </Button>
  <Modal
    isModal={store.state.isModal}
    ModalBody={Welcome}
    handleCloseModal={() => store.set({isModal: !store.state.isModal})}
  />
</React.Fragment>
```

## Documentaion

### Props

### API

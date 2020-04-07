# React Viewport State
Pass viewport information to your React component(s)
## Usage
```javascript
// MyComponent.js
import React from 'react'
import ViewportContext from "react-viewportstate"

export default ViewportContext((props) => {

    const { screenState: { device, docHeight, docWidth } } = props;

    return (
        <p>
            Your are on a { screenState.device } screen. Width: { docWidth }px Height: { docHeight }px
        </p>
    )
})
```

```javascript
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import MyComponent from "./MyComponent"

ReactDOM.render(
    <MyComponent breakpoint = { 768 } />,
    document.body
);

```

## Props

| name | type  | default | Description |
| ------ | ------ | --- | ----------- | 
| breakpoint  | integer | 768 | Mobile breakpoint width in px  |


## Context
| name | type  | Description |
| ------ | ------ | ----------- | 
| device  | string | Device type "mobile" or "desktop" based on breakpoint |
| docHeight | integer | Document height |
| docWidth   | integer | Document widht |

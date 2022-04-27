# Emotion

Creates css class by including styles in css prop.
It prioritizes css prop style over classname style If conflicted.

## Install

```
npm i @emotion/react
npm i @emotion/styled
```
## Setup css prop

1. Include in tsconfig.json
```
"jsx": "react-jsx",
    "jsxImportSource": "@emotion/react"
```

2. Import in file including comment line
```javascript
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
```
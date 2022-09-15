# Reactの構成についての考察

## Build backends

### Bundles

- webpack
- parcel

### Build time

Comparation with minimal project of both samples, with-parcel and with-webpack-esbuild-loader.

If there is some change done, second build time is again same as first build, so don't seems very useful this reduction of time.

|              | Webpack | Parcel |
|--------------|---------|--------|
| First build  | 1.01    | 2.41   |
| Second build | 1.01    | 0.67   |


### Features

| Feature                                  | Webpack                        | Parcel                                |
|------------------------------------------|--------------------------------|---------------------------------------|
| Zero configuration                       | Available with limited options | Available                             |
| Handling pre-processors and dependencies | Requires configurations        | Does not require configurations       |
| Speed of bundling                        | Webpack is much faster         | Parcel is more fast after first build |
| Customization capabilities               | Highly available               | Very minimal                          |
| Community and Usage                      | High                           | Low                                   |

---

## CSS alternatives

### Bundles

- Pure CSS with css modules
- CSS in Typescript
    - Styled Components
    - Emotion
    - Please add...

### Pure CSS with css modules

##### PROS & CONS

**PROS**

- It's easiest to use.
- CSS Classes names are readable, so It becomes easier to find elements by class names in code.
- CSS rules can conflict, so sometimes It's difficult to include extra css and have to use !important.

**CONS**

- Can't use javascript, so can't have as much customization.
- To organize code, have to create a css file for every component, so project ends with a lot of extra files.

### CSS in Typescript

##### PROS & CONS

**PROS**

- Theme customization becomes easier than pure css, thanks to use javascript as constant variables for colors, breakpoints, etc...
- Becomes easier to create multiple themes for example for toogle between dark and light mode.
- Autogenerated css class names are not readable, so It becomes harder to find elements by class names in code.
- To work with a component, only requires to watch a single file, since It includes javascript and css together.
- Everything becomes a component, so It's easier to read the code.

**CONS**

- It's harder to use, requires to learn the library and UI Frameworks with use js in css also makes components customization harder than pure css.
- Since everything becomes a component, It's harder to change html tag element, for example from `div` to `p`

#### Styled Components

##### Features

- **Automatic critical CSS**: Only load css of commponents rendered in page.
- **No class name bugs**: Unique class names for your styles, no duplication.
- **Easier deletion of CSS**: it can be hard to know whether a class name is used somewhere in your codebase. styled-components makes it obvious, as every bit of styling is tied to a specific component. If the component is unused (which tooling can detect) and gets deleted, all its styles get deleted with it.
- **Simple dynamic styling**: adapting the styling of a component based on its props or a global theme is simple and intuitive without having to manually manage dozens of classes.
- **Painless maintenance**: you never have to hunt across different files to find the styling affecting your component, so maintenance is a piece of cake no matter how big your codebase is.
- **Automatic vendor prefixing**: write your CSS to the current standard and let styled-components handle the rest.

##### PROS & CONS

**PROS**


**CONS**

- It have to create a new component every time we want to change some style or include it as inline styles.

#### Emotion

##### Features

- CSS prop or styled function.

##### PROS & CONS

**PROS**

- It can create components same as styled, but It also offers a css prop to create classnames, so It's more flexible and easy to use.
- The most popular framework of css in js (material UI) is supporting emotion.

**CONS**


---

## State Store

#### Redux vs Mobx vs Recoil

- Mobx is  easier to learn.
- Mobx is easier to use and code becomes more simple, we just need an store with actions and components just use that,
  It doesn't require to include reducers and action types, just call the action method and It works.
- Mobx allow use multiple stores.
- In redux, have to keep state immutable or It will not work, mobx state is mutable so don't have this problem.
- Recoil is very simple, It just work as another hook similar as useState.
- Recoil library size is more lightest.

## Formulary state management

### React-hook-form

Performant, flexible and extensible forms with easy-to-use validation.

- Performance: Minimizes the number of re-renders, minimizes validate computation and faster mounting.
- UX: Striving to provide the best user experience and bringing consistent validation strategies.
- Super Light: React Hook Form is a tiny library without any dependencies.
- Subscription: Subscribe to invidual input state without re-rendering the entire form.

## UI components

### MUI

- Very complete with components for every use case.
- Unstyled version for easy customization.
- Accessible components.
- Purchasing templates for faster development.
- Purchasing Design components by Figma, Adobe XD and Sketch.

---

# Conclusion


| Framework            | React           |
|----------------------|------------     |
| Language             | Typescript      |
| Node package Manager | yarn            |
| Build Bundler        | webpack         |
| CSS Management       | Emotion         |
| State Store          | Recoil          |
| Forms state          | react-hook-form |
| UI components        | MUI             |

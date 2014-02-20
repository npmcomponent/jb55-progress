*This repository is a mirror of the [component](http://component.io) module [jb55/progress](http://github.com/jb55/progress). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/jb55-progress`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# progress

  Simple progress bars
  
  [demo](http://jb55.github.com/progress)

## Unstyled Screenshot

  ![Unstyled](progress-unstyled.png)

## Themes

  - [Bootstrap](https://github.com/jb55/bootstrap-progress)

## Installation

    $ component install jb55/progress

## API

Simply update the style.width attribute on `.bar` to update the bar width.
Animations are handled in css automatically.

### new Progress(el)

Simple utility for changing bar sizes

### Progress#update(percent)

Percent is a number from `0-100`. This is a simple wrapper around style.width
for `.bar` elements.

## License

  MIT

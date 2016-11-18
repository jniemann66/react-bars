`Bars` (component)
==================

Bars : draws a bar graph consisting of a number of bars

Props
-----

### `barBackgroundColor`

type: `string`
defaultValue: `'#cccccc'`


### `barColor`

type: `string`
defaultValue: `'#303030'`


### `barHeight`

height of Bars, in pixels

type: `number`
defaultValue: `42`


### `data` (required)

array of objects representing the props for each individual Bar

type: `array`


### `label`

text displayed inside Bars

type: `string`
defaultValue: `''`


### `makeUppercase`

if true, transform text inside Bars to uppercase

type: `bool`
defaultValue: `false`


### `maxValue`

maximum displayable value (defines scale) eg: use 100 for percentages, or 10 for score out of 10

type: `number`
defaultValue: `100`


### `showValue`

if true, show numerical values after Bars

type: `bool`
defaultValue: `false`


### `suffix`

text to append after each Bar's numerical value (if shown), or after each Bar if numerical value not shown. Can be used to display units eg '%', 'dB', or '/10'

type: `string`
defaultValue: `''`


### `value`

type: `number`
defaultValue: `0`


### `verticalSpacing`

sets margin-bottom for Bars (in pixels), effectively controlling vertical spacing between bars

type: `number`
defaultValue: `46`


`Bar` (component)
=================

Bar : draws a bar as part of a bar graph

Props
-----

### `barBackgroundColor`

type: `string`
defaultValue: `'#cccccc'`


### `barColor`

type: `string`
defaultValue: `'#303030'`


### `barHeight`

height of Bar, in pixels

type: `number`
defaultValue: `42`


### `label`

text displayed inside Bar

type: `string`
defaultValue: `''`


### `makeUppercase`

if true, transform text inside Bar to uppercase

type: `bool`
defaultValue: `false`


### `maxValue`

maximum displayable value (defines scale) eg: use 100 for percentages, or 10 for score out of 10

type: `number`
defaultValue: `100`


### `showValue`

if true, show numerical value after Bar

type: `bool`
defaultValue: `false`


### `suffix`

text to append after Bar's numerical value (if shown), or after Bar if numerical value not shown. Can be used to display units eg '%', 'dB', or '/10'

type: `string`
defaultValue: `''`


### `value`

type: `number`
defaultValue: `0`


### `verticalSpacing`

sets margin-bottom for Bar (in pixels), effectively controlling vertical spacing between bars

type: `number`
defaultValue: `46`



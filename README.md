# tag input (under development)
A jQuery-free tag input control. Instead, it is based on [Vanilla JS](http://vanilla-js.com/).

### Usage
Enable tag input on an `input[type="text"]` element, add `data-input-tag="true"` attribute to the element. 

```html
<input name="ip" data-input-tag="true">
```

To get the value of the element, access it via it's name. 

```js
document.getElementsByName('ip')[0].value;
```

The value is a string of all tags joined by comma.

```js
var value = document.getElementsByName('ip')[0].value; // tag1, tag2, tag3
```

You can customize the separator by specifing `data-input-sep`.

```html
<input name="ip" data-input-tag="true" data-input-sep=";">
<!-- the value will be separated by ';' instead of ',' -->
```

### Styling
Just change the `tag-input.css` with your beloved DOM inspector, enjoy it!

### Contributing

- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT License
Copyright (c) 2013 John Wu <webmaster@leapoahead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
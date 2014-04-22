/**
* @fileOverview This file has functions related to documenting JavaScript.
* @author <a href="mailto:"></a>
* @version 1.0.1
*/

(function(window) {
  /* variables */
  var document = window.document,
      inputs = document.getElementsByTagName('input'),
      tagInputs = [],
      ui = {},
      util = {};

  util.addEventListener = function(el, event, handler) {
    if (!!el.addEventListener) {
      el.addEventListener(event, handler, false);
    }
    else if (!!el.attachEvent) {
      el.attachEvent("on" + event, handler.bind(el));
    }
  };

  ui.hideDOM = function(el) {
    el.style.visibility = "hidden";
  };

  ui.cloneInput = function(el) {
    // do not use deep clone
    var ret = el.cloneNode(false);
    ret.name = "__" + el.name;
    if (!!ret.id) {
      ret.id = "__" + el.id;
    }
    ret.removeAttribute('data-input-tag');
    ui.wrapSpan(ret); // a relative positioned inline wrapper
    return ret;
  };

  ui.wrapSpan = function(el) {
    var span = document.createElement('span');
    span.style.position = "relative";
    span.appendChild(el);
    return span;
  };

  ui.prependSibling = function(el, sib) {
    el.parentNode.insertBefore(sib, el);
  };

  /**
   *  Tag
   *  @constructor
   *  @lends TagInputControl
   */
  function Tag() {

  }

  /**
   *  TagInput
   *  @constructor
   *  @param {object} oriInput The original DOM Object
   *  @lends TagInputControl
   */
  function TagInput(oriInput) {
    this.attach(oriInput);
  }

  TagInput.prototype.attach = function(oriInput) {
    this.oriInput = oriInput; // the original dom
    this.tagInput = ui.cloneInput(this.oriInput); // clone the dom node, rename the `name` and `id` property
    ui.prependSibling(this.oriInput, this.tagInput.parentNode); // add the tagInput's wrapper to DOM tree
    this.tags = []; // array of tag names
    ui.hideDOM(oriInput); // the original dom should be hidden
  };


  // inputs filter
  var i;
  inputs = Array.prototype.slice.call(inputs, 0, inputs.length);
  for (i = 0; i < inputs.length; i ++) {
    if (!!inputs[i].dataset.inputTag &&
      inputs[i].dataset.inputTag === 'true' &&
      !!inputs[i].type &&
      inputs[i].type === 'text' &&
      !!inputs[i].name) {
      tagInputs.push(new TagInput(inputs[i]));
    }
  }


}).call(undefined, window);
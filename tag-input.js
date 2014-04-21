(function(window) {
  /* variables */
  var document = window.document,
      inputs = document.getElementsByTagName('input'),
      tagstore = {},
      correspond = {},
      core = {},
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
    var ret = el.cloneNode(true);
    ret.name = "__" + el.name;
    ret.id = "__" + el.id;
    ret.removeAttribute('data-input-tag');
    return ret;
  };

  core.createNewTag = function() {
    tagstore[this.name].push(this.value);
    this.value;
  };

  core.deleteTag = function() {

  };

  core.process = function(el) {
    util.addEventListener(el, 'blur', core.createNewTag);
    util.addEventListener(el, 'keyup', function(event) {
      if (event.keyCode === 13) {
        // the keyCode of the Enter key is 13
        core.createNewTag.call(this);
      }
      else if (event.keyCode === 46) {
        // the keyCode of the Delete key is 46
        core.deleteTag.call(this);
      }
    });
  };

  core.tagInput = function(el) {
    var parent = el.parentNode,
        elTag = ui.cloneInput(el);
    parent.insertBefore(elTag, el);
    tagstore[el.name] = [];
    correspond[el.name] = el;
    ui.hideDOM(el);
    core.process(elTag);
  };

  // filter inputs
  var i;
  inputs = Array.prototype.slice.call(inputs, 0, inputs.length);
  for (i = 0; i < inputs.length; i ++) {
    if (!!inputs[i].dataset.inputTag &&
      inputs[i].dataset.inputTag === 'true' &&
      !!inputs[i].type &&
      inputs[i].type === 'text' &&
      !!inputs[i].name) {
      core.tagInput(inputs[i]);
    }
  }


}).call(undefined, window);
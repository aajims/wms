"use strict";
var KTAppOptions = {
  "colors": {
    "state": {
      "brand": "#5d78ff",
      "dark": "#282a3c",
      "light": "#ffffff",
      "primary": "#5867dd",
      "success": "#34bfa3",
      "info": "#36a3f7",
      "warning": "#ffb822",
      "danger": "#fd3995"
    },
    "base": {
      "label": ["#c5cbe3", "#a1a8c3", "#3d4465", "#3e4466"],
      "shape": ["#f0f3ff", "#d9dffa", "#afb4d4", "#646c9a"]
    }
  }
};
$.fn.select2.amd.define('select2/data/customAdapter', ['select2/data/array', 'select2/utils'],
  function (ArrayAdapter, Utils) {
    function CustomDataAdapter ($element, options) {
      CustomDataAdapter.__super__.constructor.call(this, $element, options)
    }
    Utils.Extend(CustomDataAdapter, ArrayAdapter)
    CustomDataAdapter.prototype.updateOptions = function (data) {
      this.$element.find('option').remove()
      this.addOptions(this.convertToOptions(data))
    }
    return CustomDataAdapter
  },
)


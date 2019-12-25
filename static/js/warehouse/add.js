// Class definition

const Warehouse = (function () {
  // Private functions
  const addWarehouse = function () {
    // minimum setup
    $('[data-switch=true]').bootstrapSwitch()

    $('.kt-select2').select2({ placeholder: 'Select a country' })
  }

  return {
    // public functions
    init: function () {
      addWarehouse()
    },
  }
}())

jQuery(document).ready(function () {
  Warehouse.init()
})

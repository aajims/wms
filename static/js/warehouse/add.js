// Class definition

const Warehouse = (function () {
  let validator
  // Private functions
  const addWarehouse = function () {
    // minimum setup
    $('[data-switch=true]').bootstrapSwitch()
    $('[data-switch=true]').on('switchChange.bootstrapSwitch', function () {
      validator.element($(this)) // validate element
    })

    $('#country').select2({ placeholder: 'Select a country', allowClear: true })
    $('#country').on('change', function () {
      validator.element($(this)) // validate element
    })

    $('#state').select2({
      placeholder: 'Select a state', allowClear: true, disabled: true,
    })
    $('#state').on('change', function () {
      validator.element($(this)) // validate element
    })

    $('#city').select2({
      placeholder: 'Select a city', allowClear: true, disabled: true,
    })
    $('#city').on('change', function () {
      validator.element($(this)) // validate element
    })

    $('#district').select2({
      placeholder: 'Select a district', allowClear: true, disabled: true,
    })
    $('#district').on('change', function () {
      validator.element($(this)) // validate element
    })

    validator = $('#warehouse_form').validate({
      // define validation rules
      rules: {
        name : { required: true },
        code : { required: true },
        email: {
          required : true,
          email    : true,
          minlength: 10,
        },
        phone: {
          required: true,
          digits  : true,
        },
        capacity   : { required: true },
        pic        : { required: true },
        address    : { required: true },
        country_id : { required: true },
        state_id   : { required: true },
        city_id    : { required: true },
        district_id: { required: true },
        zip_code   : {
          required: true,
          digits  : true,
        },
        location: { required: true },
      },

      // display error alert on form submit
      invalidHandler: function (event, validator) {
        const alert = $('#kt_form_1_msg')
        alert.removeClass('kt--hide').show()
        KTUtil.scrollTop()

        event.preventDefault()
      },

      submitHandler: function (form) {
        // form[0].submit(); // submit the form
        return false
      },
    })
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

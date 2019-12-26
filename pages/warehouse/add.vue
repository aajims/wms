<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="warehouse_form"
        ref="form"
        class="kt-form kt-form--label-right"
      >
        <div
          id="kt_page_portlet"
          class="kt-portlet kt-portlet--last kt-portlet--head-lg kt-portlet--responsive-mobile"
        >
          <div class="kt-portlet__head kt-portlet__head--lg">
            <div class="kt-portlet__head-label">
              <span class="kt-portlet__head-icon">
                <i class="kt-font-brand flaticon-add" />
              </span>
              <h3 class="kt-portlet__head-title">
                Add Warehouse
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/warehouse"
                class="btn btn-clean kt-margin-r-10"
              >
                <i class="la la-arrow-left" />
                <span class="kt-hidden-mobile">Back</span>
              </a>
              <button
                type="submit"
                class="btn btn-brand"
              >
                <i class="la la-check" />
                <span class="kt-hidden-mobile">Save</span>
              </button>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Name <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter warehouse name"
                >
              </div>
              <div class="col-lg-6">
                <label>Code <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  name="code"
                  placeholder="Enter warehouse code"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Email <span style="color:red">*</span></label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                >
              </div>
              <div class="col-lg-6">
                <label>Phone <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  name="phone"
                  placeholder="Enter phone"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Capacity <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  name="capacity"
                  placeholder="Enter warehouse capacity"
                >
              </div>
              <div class="col-lg-6">
                <label>PIC <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  name="pic"
                  placeholder="Enter warehouse pic"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="address">Address <span style="color:red">*</span></label>
                <textarea
                  id="address"
                  class="form-control"
                  rows="3"
                  name="address"
                />
              </div>
              <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  class="form-control"
                  rows="3"
                  name="description"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="country">Country <span style="color:red">*</span></label>
                <select
                  id="country"
                  class="form-control kt-select2"
                  name="country_id"
                >
                  <option />
                  <option value="AK">
                    Alaska
                  </option>
                  <option value="HI">
                    Hawaii
                  </option>
                </select>
                <span class="form-text text-muted" />
              </div>
              <div class="col-lg-6">
                <label for="state">State <span style="color:red">*</span></label>
                <select
                  id="state"
                  class="form-control kt-select2"
                  name="state_id"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a country </span>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="city">City <span style="color:red">*</span></label>
                <select
                  id="city"
                  class="form-control kt-select2"
                  name="city_id"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a state </span>
              </div>
              <div class="col-lg-6">
                <label for="district">District <span style="color:red">*</span></label>
                <select
                  id="district"
                  class="form-control kt-select2"
                  name="district_id"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a city </span>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Postcode <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  name="zip_code"
                  placeholder="Enter postcode"
                >
              </div>
              <div class="col-lg-6">
                <label for="location">Location <span style="color:red">*</span></label>
                <div class="switch-button">
                  <input
                    id="location"
                    name="location"
                    data-switch="true"
                    type="checkbox"
                    data-on-text="Yes"
                    data-off-text="No"
                    data-on-color="brand"
                    data-off-color="danger"
                  >
                  <span class="form-text text-muted" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!-- begin::Scrolltop -->
    <div
      id="kt_scrolltop"
      class="kt-scrolltop"
    >
      <i class="flaticon flaticon-up-arrow-1" />
    </div>
    <!-- end::Scrolltop -->
  </div>
</template>

<script>
export default {
  head   : { script: [{ src: '/js/warehouse/add.js', body: true }] },
  methods: {
    submit () {
      this.$refs.form.submit()
    },
  },
}
</script>

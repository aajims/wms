<template>
  <div class="row">
    <div class="col-lg-12">
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
              type="button"
              class="btn btn-brand"
            >
              <i class="la la-check" />
              <span class="kt-hidden-mobile">Save</span>
            </button>
          </div>
        </div>
        <div class="kt-portlet__body">
          <form class="kt-form kt-form--label-right">
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Name <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter warehouse name"
                >
              </div>
              <div class="col-lg-6">
                <label>Code <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
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
                  placeholder="Enter warehouse capacity"
                >
              </div>
              <div class="col-lg-6">
                <label>PIC <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
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
                />
              </div>
              <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  class="form-control"
                  rows="3"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="country">Country <span style="color:red">*</span></label>
                <select
                  id="kt_select2_1"
                  class="form-control kt-select2"
                  name="param"
                >
                  <option value="AK">
                    Alaska
                  </option>
                  <option value="HI">
                    Hawaii
                  </option>
                </select>
              </div>
              <div class="col-lg-6">
                <label for="state">State <span style="color:red">*</span></label>
                <select
                  id="state"
                  class="form-control kt-select2"
                  name="param"
                >
                  <option />
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="city">City <span style="color:red">*</span></label>
                <select
                  id="city"
                  class="form-control kt-select2"
                  name="param"
                >
                  <option />
                </select>
              </div>
              <div class="col-lg-6">
                <label for="district">District <span style="color:red">*</span></label>
                <select
                  id="district"
                  class="form-control kt-select2"
                  name="param"
                >
                  <option />
                </select>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Postcode <span style="color:red">*</span></label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter postcode"
                >
              </div>
              <div class="col-lg-6">
                <label for="location">Location <span style="color:red">*</span></label>
                <div>
                  <input
                    id="location"
                    data-switch="true"
                    type="checkbox"
                    checked="checked"
                    data-on-text="Yes"
                    data-off-text="No"
                    data-on-color="brand"
                    data-off-color="danger"
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
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
export default { head: { script: [{ src: '/js/warehouse/add.js', body: true }] } }
</script>

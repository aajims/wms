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
              <i class="kt-font-brand flaticon-clipboard" />
            </span>
            <h3 class="kt-portlet__head-title">
              Warehouse Detail
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
          </div>
        </div>
        <div class="kt-portlet__body">
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Name</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Code</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.code"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Email</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.email"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Phone</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.phone"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Capacity</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.capacity"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>PIC</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.pic"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="address">Address</label>
              <textarea
                v-model="$store.state.warehouse.warehouseDetail.result.address"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
            <div class="col-lg-6">
              <label for="description">Description</label>
              <textarea
                v-model="$store.state.warehouse.warehouseDetail.result.description"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="country">Country</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.country_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label for="state">State</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.state_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="city">City</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.city_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label for="district">District</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.district_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Postcode</label>
              <input
                v-model="$store.state.warehouse.warehouseDetail.result.zip_code"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
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
export default {
  async fetch ({ store, params }) {
    await store.dispatch('warehouse/getWarehouseDetail', { idWarehouse: params.id })
  },
}
</script>

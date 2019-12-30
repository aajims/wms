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
              <i class="kt-font-brand flaticon2-user" />
            </span>
            <h3 class="kt-portlet__head-title">
              User Profile
            </h3>
          </div>
        </div>
        <div class="kt-portlet__body">
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Username</label>
              <input
                type="text"
                class="form-control"
                :value="$store.state.user.userProfile.username"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Full Name</label>
              <input
                type="text"
                class="form-control"
                :value="$store.state.user.userProfile.full_name"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Email</label>
              <input
                type="text"
                class="form-control"
                :value="$store.state.user.userProfile.email"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Phone</label>
              <input
                type="text"
                class="form-control"
                :value="$store.state.user.userProfile.phone"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Address</label>
              <textarea
                v-model="$store.state.user.userProfile.address"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
            <div class="col-lg-6">
              <label>Company</label>
              <input
                type="text"
                class="form-control"
                :value="$store.state.user.userProfile.company_name"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Country</label>
              <input
                type="text"
                class="form-control"
                :value="$store.state.user.userProfile.country_name"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>State</label>
              <input
                type="text"
                class="form-control"
                :value="$store.state.user.userProfile.state_name"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>City</label>
              <input
                type="text"
                class="form-control"
                :value="$store.state.user.userProfile.city_name"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>District</label>
              <input
                type="text"
                class="form-control"
                :value="$store.state.user.userProfile.district_name"
                readonly
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch ({ store, params }) {
    await store.dispatch('user/userProfile')
  },
}
</script>

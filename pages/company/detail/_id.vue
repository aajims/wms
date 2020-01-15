<template>
    <div class="row">
    <div class="col-lg-12">
      <form
        id="company_form"
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
                Detail Company
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/company"
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
                <label>Name <span style="color:red">*</span></label>
                <input
                  v-model="company.name"
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter company name"
                >
              </div>
              <div class="col-lg-6">
                <label>Website <span style="color:red">*</span></label>
                <input
                  v-model="company.website"
                  type="text"
                  class="form-control"
                  name="code"
                  placeholder="Enter company Web"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Email <span style="color:red">*</span></label>
                <input
                  v-model="company.email"
                  type="email"
                  class="form-control"
                  placeholder="Enter email"
                >
              </div>
              <div class="col-lg-6">
                <label>Phone <span style="color:red">*</span></label>
                <input
                  v-model="company.phone"
                  type="text"
                  class="form-control"
                  name="phone"
                  placeholder="Enter phone"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label for="address">Address <span style="color:red">*</span></label>
                <textarea
                  id="address"
                  v-model="company.address"
                  class="form-control"
                  rows="3"
                  name="address"
                />
              </div>
              <div class="col-lg-6">
                <label for="description">Description</label>
                <textarea
                  id="description"
                  v-model="company.description"
                  class="form-control"
                  rows="3"
                  name="description"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Country <span style="color:red">*</span></label>
                <input
                  v-model="company.country_name"
                  type="text"
                  class="form-control"
                  name="country"
                  placeholder="Enter country"
                >
              </div>
              <div class="col-lg-6">
                <label>State <span style="color:red">*</span></label>
                <input
                  v-model="company.state_name"
                  type="text"
                  class="form-control"
                  name="state"
                  placeholder="Enter State"
                >
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Created By</label>
                <input
                  v-model="company.created_by_name"
                  type="text"
                  class="form-control"
                  name="capacity"
                  placeholder="Enter Name "
                >
              </div>
              <div class="col-lg-6">
                <label>Status <span style="color:red">*</span></label>
                <input
                  v-model="company.status"
                  type="text"
                  class="form-control"
                  name="pic"
                  placeholder="Enter "
                >
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
        data() {
            return {
                company   : [],
                createdDate: '',
                updatedDate: ''
            }
        },
       async mounted () {
        await this.$store.dispatch('company/getCompanyDetail', { idCompany: this.$route.params.id })
        this.company    = this.$store.getters['company/getCompanyDetail'].result
       }
    }
</script>

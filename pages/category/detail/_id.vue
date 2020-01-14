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
              category Detail
            </h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <a
              href="/category"
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
                v-model="category.name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Code</label>
              <input
                v-model="category.code"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
              <div class="col-lg-6">
              <label for="description">Description</label>
              <textarea
                id="description"
                v-model="category.description"
                class="form-control"
                rows="3"
                readonly
              />
            </div>
            <div class="col-lg-6">
              <label>Status</label>
              <input
                v-model="category.status"
                type="text"
                class="form-control"
                placeholder="Enter Status"
                name="level"
                readonly
              >
            </div>
          </div>
          <!-- <div class="form-group row">
            <div class="col-lg-6">
              <label>Created By</label>
              <input
                v-model="category.created_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Created Date</label>
              <input
                v-model="createdDate"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Updated By</label>
              <input
                v-model="category.updated_by_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>Updated Date</label>
              <input
                v-model="updatedDate"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div> -->
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
        data() {
            return {
                category   : [],
                createdDate: '',
                updatedDate: '',
            }
        },
        async mounted () {
        await this.$store.dispatch('category/getCategoryDetail', { idCategory: this.$route.params.id })
        this.category    = this.$store.getters['category/getCategoryDetail'].result
        this.createdDate = moment(this.category.created_at).format('DD/MM/Y HH:mm:ss')
        this.updatedDate = moment(this.category.updated_at).format('DD/MM/Y HH:mm:ss')
  },
    }
</script>

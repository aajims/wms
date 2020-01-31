<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="category_form"
        ref="form"
        class="kt-form kt-form--label-right"
        @submit.prevent="editCategory()"
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
                Edit Category
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/master/category"
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
                <span class="kt-hidden-mobile">Update</span>
              </button>
            </div>
          </div>
          <div class="kt-portlet__body">
            <div class="form-group row">
              <div class="col-lg-6">
                <label>Code <span style="color:red">*</span></label>mosde
                <input
                  v-model="category.code"
                  type="text"
                  class="form-control"
                  name="code"
                  placeholder="Enter category code"
                >
              </div>
              <div class="col-lg-6">
                <label>Name <span style="color:red">*</span></label>
                <input
                  v-model="category.name"
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter category name"
                >
              </div>
              <div class="col-lg-6">
                <label>Description <span style="color:red">*</span></label>
                <input
                  v-model="category.description"
                  type="text"
                  class="form-control"
                  name="name"
                  placeholder="Enter Description"
                ><input
                  v-model="category.status"
                  type="hidden"
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
  data () {
    return {
      category: {
        name       : null,
        code       : null,
        description: null,
        status     : null,
      },
    }
  },
  async mounted () {
    $('#category_form').validate({
      // define validation rules
      rules: {
        name: { required: true },
        code: { required: true },
      },
    })
    await this.$store.dispatch('category/getCategoryDetail', { idCategory: this.$route.params.id })
    const categoryDetail      = this.$store.getters['category/getCategoryDetail'].result
    this.category.code        =   categoryDetail.code
    this.category.name        =   categoryDetail.name
    this.category.description =  categoryDetail.description
    this.category.status      =   categoryDetail.status
  },
  methods: {
    async editCategory () {
      try {
        this.$nuxt.$loading.start()
        await this.$store.dispatch('category/editCategory', { idCategory: this.$route.params.id, data: this.category })
        const data      = this.$store.getters['category/getEditCategory']
        const parameter = {
          alertClass: 'alert-success',
          message   : `Category ${data.result.name} has been edited`,
        }
        this.$nuxt.$emit('alertShow', parameter)
        this.$nuxt.$loading.finish()
        // eslint-disable-next-line no-undef
        KTUtil.scrollTop()
        setTimeout(function () { window.location.href = '/master/category' }, 3000)
      } catch (error) {
        const parameter = {
          alertClass: 'alert-danger',
          message   : error.message,
        }
        this.$nuxt.$emit('alertShow', parameter)
        this.$nuxt.$loading.finish()
        // eslint-disable-next-line no-undef
        KTUtil.scrollTop()
      }
    },
  },
}
</script>

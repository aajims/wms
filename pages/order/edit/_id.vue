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
              Edit Order
            </h3>
          </div>
          <div class="kt-portlet__head-toolbar">
            <a
              href="/order"
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
              <label>Company Name</label>
              <input
                v-model="order.company_name"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label for="description">Order No</label>
              <input
                id="description"
                v-model="order.order_no"
                class="form-control"
                readonly
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>From</label>
              <input
                v-model="order.from"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>To </label>
              <input
                v-model="order.to"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>ETD</label>
              <input
                v-model="order.etd"
                type="text"
                class="form-control"
                readonly
              >
            </div>
            <div class="col-lg-6">
              <label>ETA </label>
              <input
                v-model="order.eta"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
              <div class="col-lg-6">
                <label>From Warehouse Name</label>
                <input
                    v-model="order.from_warehouse_name"
                    type="text"
                    class="form-control"
                    readonly
                >
              </div>
              <div class="col-lg-6">
               <label>To Warehouse Name</label>
                <input
                    v-model="order.to_warehouse_name"
                    type="text"
                    class="form-control"
                    readonly
                >
            </div>
          </div>
          <div class="form-group row">
              <div class="col-lg-6">
              <label for="description">Order No</label>
              <input
                id="description"
                v-model="order.order_no"
                class="form-control"
                readonly
              />
            </div>
            <div class="col-lg-6">
              <label>Order Date</label>
              <input
                v-model="order.order_date"
                type="text"
                class="form-control"
                readonly
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Created By</label>
              <input
                v-model="order.created_by_name"
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
              <label>Status</label><br>
              <span v-if="order.status===1" class="btn btn-success">Active</span>
              <span v-else class="btn btn-danger">Inactive</span>
            </div>
          </div>
        </div>
        <div class="kt-portlet__body">
            <!--begin: Datatable -->
            <table
                id="order_table"
                class="table table-hover table-checkable"
            >
                <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Product ID</th>
                    <th>Packing ID</th>
                    <th>From Warehouse</th>
                    <th>To Warehouse</th>
                    <th>Batch</th>
                    <th>Qty</th>
                    <th>Net Weight</th>
                    <th>Gross Weight</th>
                    <th>Expired</th>
                    <th>created</th>
                    <th>Status</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="row in datatable" :key="row.id">
                        <td>{{ row.order_id }}</td>
                        <td>{{ row.product_id }}</td>
                        <td>{{ row.product_packing_id }}</td>
                        <td>{{ row.from_warehouse_location_name }}</td>
                        <td>{{ row.to_warehouse_location_name }}</td>
                        <td>{{ row.batch }}</td>
                        <td>{{ row.qty }}</td>
                        <td>{{ row.nett_weight }} /{{ row.nett_weight_type }}</td>
                        <td>{{ row.gross_weight }} /{{ row.gross_weight_type }}</td>
                        <td>{{ expired }}</td>
                        <td>{{ row.created_by_name }}</td>
                        <td v-if="row.status===1">Active</td>
                        <td v-else>Inactive</td>
                    </tr>
                </tbody>
            </table>
            <!--end: Datatable -->
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
                datatable: [],
                order   : [],
                createdDate: '',
                updatedDate: '',
                expired    : ''   
            }
        },
        async mounted () {
        await this.$store.dispatch('order/getOrderDetail', { idOrder: this.$route.params.id })
        this.order    = this.$store.getters['order/getOrderDetail'].result
        this.datatable    = this.$store.getters['order/getOrderDetail'].result.order_detail_response
        this.createdDate = moment(this.order.created_at).format('DD/MM/Y HH:mm:ss')
        this.updatedDate = moment(this.order.updated_at).format('DD/MM/Y HH:mm:ss')
        this.expired = moment(this.datatable.expired_date).format('DD/MM/Y HH:mm:ss')
        }
    }
</script>

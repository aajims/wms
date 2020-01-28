<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="outgoing_form"
        ref="form"
        class="kt-form kt-form--label-right"
         @submit.prevent="addOutgoing()"
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
                Add Job Outgoing 
              </h3>
            </div>
            <div class="kt-portlet__head-toolbar">
              <a
                href="/outgoing/"
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
              <label>Company Name <span style="color:red">*</span></label>
              <select
                  id="company_id"
                  class="form-control kt-select2"
                  name="company"
                >
                  <option />
                </select>
                <input type="hidden" v-model="outgoing.type">
            </div>
            <div class="col-lg-6">
              <label>Order No <span style="color:red">*</span></label>
              <input
                id="order"
                v-model="outgoing.order_no"
                class="form-control"
                name="order"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>ETD <span style="color:red">*</span></label>
              <div class="input-group date">
                <input type="text" name="date_etd" class="form-control" readonly placeholder="Select date & time" id="date_etd" />
                <div class="input-group-append">
                  <span class="input-group-text"><i class="la la-calendar-check-o glyphicon-th"></i></span>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <label>ETA <span style="color:red">*</span></label>
              <div class="input-group date">
                <input type="text" name="date_eta" class="form-control" readonly placeholder="Select date & time" id="date_eta" />
                <div class="input-group-append">
                  <span class="input-group-text"><i class="la la-calendar-check-o glyphicon-th"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Tranport Type <span style="color:red">*</span></label>
              <input
                v-model="outgoing.transport_type"
                type="text"
                class="form-control"
                name="transport"
              ><input type="hidden" v-model="outgoing.flight">
            </div>
            <div class="col-lg-6">
              <label>Transport Number <span style="color:red">*</span></label>
              <input
                v-model="outgoing.transport_number"
                type="text"
                class="form-control"
                name="number"
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-3">
              <label for="country">From Country <span style="color:red">*</span></label>
              <!-- <input
                type="text"
                id="country_from"
                class="form-control"
                name="country_from"
              > -->
                <select
                  id="country_from"
                  class="form-control kt-select2"
                  name="country_from"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a country </span>
            </div>
             <div class="col-lg-3">
              <label>From Warehouse <span style="color:red">*</span></label>
               <select
                  id="warehouse_from"
                  class="form-control"
                  name="warehouse_from"
                >
                  <option />
                </select>
            </div>
            <div class="col-lg-6">
              <label>From</label>
              <input
                  v-model="outgoing.from"
                  type="text"
                  name="from"
                  class="form-control"
                  placeholder="Enter Address "
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="country">To Country <span style="color:red">*</span></label>
                <select
                  id="country_to"
                  class="form-control kt-select2"
                  name="country_to"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a country </span>
            </div>
            <div class="col-lg-6">
              <label>To</label>
              <input
                  v-model="outgoing.to"
                  type="text"
                  name="to"
                  class="form-control"
                  placeholder="Enter Address "
              >
            </div><input type="hidden" v-model="outgoing.to_warehouse_id">
          </div>
          <div class="form-group row">
              <div class="col-lg-6">
                <label>Custom Permit</label>
                <input
                    v-model="outgoing.custom_permit"
                    type="text"
                    name="custom"
                    class="form-control"
                    placeholder="Enter Custom Permit"
                >
              </div>
              <div class="col-lg-6">
               <label>Cargo Insurance</label>
                <input
                    v-model="outgoing.cargo_insurance"
                    type="text"
                    name="cargo"
                    class="form-control"
                    placeholder="Enter Cargo Insurance"
                >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label>Order Date <span style="color:red">*</span></label>
              <div class="input-group date">
                  <input type="text" class="form-control" name="order_date" readonly placeholder="Select date" id="date_order" />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="la la-calendar-check-o"></i>
                    </span>
                  </div>
                </div>
            </div>
            <div class="col-lg-6">
              <label for="description">Description</label>
              <textarea
                id="description"
                name="description"
                v-model="outgoing.description"
                class="form-control"
                rows="3"
                placeholder="Enter Description"
              />
            </div>
          </div>
            <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg" />
            <div class="form-group row">
              <div class="col-lg-3">
                <label>Add Product </label>
                <a
                  href="javascript:;"
                  class="btn btn-bold btn-sm btn-label-brand"
                  style="margin-left: 10px"
                  data-toggle="modal"
                  data-target="#packing_modal"
                  data-backdrop="static"
                  data-keyboard="false"
                >
                  <i class="la la-plus" /> Add
                </a>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-12">
                <!--begin: Datatable -->
                <table
                id="outgoing_table"
                class="table table-hover table-checkable"
            >
                <thead>
                <tr>
                    <th>Product </th>
                    <th>Packing </th>
                    <th>From Warehouse</th>
                    <th>Batch</th>
                    <th>Qty</th>
                    <th>Expired</th>
                    <th>Description</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(row,index) in product_temporary" :key="index">
                        <td>{{ row.product_id }}</td>
                        <td>{{ row.packing }}</td>
                        <td>{{ row.warehouse_name }}</td>
                        <td>{{ row.batch }}</td>
                        <td>{{ row.qty }}</td>
                        <td>{{ row.expired }}</td>
                        <td>{{ row.description }}</td>
                    </tr>
                </tbody>
            </table>
                <!--end: Datatable -->
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
    <!--begin::Modal-->
    <div
      id="packing_modal"
      class="modal fade"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <form
        id="packing_form"
        ref="form"
      >
        <div
          class="modal-dialog modal-lg"
          role="document"
        >
          <div class="modal-content">
            <div class="modal-header">
              <h5
                id="exampleModalLabel"
                class="modal-title"
              >
              Add Product
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div class="modal-body">
              <div class="form-group row">
                <div class="col-lg-4">
                  <label>Product  <span style="color:red">*</span></label>
                   <select
                        id="product"
                        class="form-control kt-select2"
                        name="product_id"
                        >
                        <option />
                    </select>
                      <!-- <input
                      type="text"
                      name="product_id"
                      class="form-control"
                      placeholder="Enter Product ID"
                    > -->
                </div>
                <div class="col-lg-4">
                  <label>Packing  <span style="color:red">*</span></label>
                      <input
                      type="text"
                      name="packing"
                      class="form-control"
                      placeholder="Enter Packing"
                    >
                </div>
                <div class="col-lg-4">
                  <label>Warehouse  <span style="color:red">*</span></label>
                      <select
                          id="warehouse"
                          class="form-control kt-select2"
                          name="warehouse"
                          >
                          <option />
                      </select>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-4">
                  <label>Batch  <span style="color:red">*</span></label>
                    <input
                      type="text"
                      name="batch"
                      class="form-control"
                      placeholder="Enter Batch"
                    >
                </div>
                <div class="col-lg-4">
                  <label>Qty  <span style="color:red">*</span></label>
                      <input
                      type="text"
                      name="qty"
                      class="form-control"
                      placeholder="Enter Qty"
                  >
                </div>
                <div class="col-lg-4">
                  <label>Expired Date<span style="color:red">*</span></label>
                    <div class="input-group date">
                      <input type="text" name="date_exp" class="form-control" readonly placeholder="Select date" id="date_exp" />
                      <div class="input-group-append">
                        <span class="input-group-text">
                          <i class="la la-calendar-check-o"></i>
                        </span>
                      </div>
                    </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-lg-6">
                  <label>Description<span style="color:red">*</span></label>
                    <input
                      type="text"
                      name="desc"
                      class="form-control"
                      placeholder="Enter Description"
                    >
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="addProductTemporary()"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
    <!--end::Modal-->
  </div>
</template>

<script>
import { DIMENSION_TYPE, WEIGHT_TYPE } from '@/utils/constants'
import moment from 'moment'

export default {
  data () {
    return {
       outgoing  : {
          company_id  : null,
          order_no : null,
          type    : 2,
          etd    : null,
          eta    : null,
          order_date    : null,
          transport_type    : null,
          transport_number    : null,
          flight    : '',
          from    : null,
          from_country_id    : null,
          from_warehouse_id    : null,
          to    : null,
          to_country_id    : null,
          to_warehouse_id    : 0,
          custom_permit    : null,
          cargo_insurance    : null,
          description    : null,
          products  : null
      },
      allProduct  : '',
      product_temporary : []
    }
  },
  async mounted () {
    this.getProductTemporary();
     $('#date_etd').datetimepicker({
          todayHighlight: true,
          autoclose: true,
          pickerPosition: 'bottom-left',
          format: 'dd/mm/yyyy hh:ii'
      });
      $('#date_eta').datetimepicker({
          todayHighlight: true,
          autoclose: true,
          pickerPosition: 'bottom-left',
          format: 'dd/mm/yyyy hh:ii'
      });
      $('#date_exp, #date_exp_validate').datepicker({
        rtl: KTUtil.isRTL(),
        todayHighlight: true,
        orientation: "bottom left",
        format : 'dd/mm/yyyy'
      });
      $('#date_order').datepicker({
        rtl: KTUtil.isRTL(),
        todayHighlight: true,
        orientation: "bottom left",
        format : 'dd/mm/yyyy'
      });

        $('#warehouse_from').select2({
        placeholder       : 'Select warehouse',
        minimumInputLength: 1,
        width             : '100%',
        allowClear        : true,
        ajax              : {
            type          : 'GET',
            url           : '/api/warehouse/select',
            cache         : true,
            processResults: function (data) {
            return {
                results: $.map(data.result, function (object) {
                return {
                    id  : object.id,
                    text: object.name,
                }
                }),
            }
            },
        },
        })
        $('#warehouse_from').on('change', function () {
        validator.element($(this))
        })
        $('#warehouse_to').select2({
        placeholder       : 'Select warehouse',
        minimumInputLength: 1,
        width             : '100%',
        allowClear        : true,
        ajax              : {
            type          : 'GET',
            url           : '/api/warehouse/select',
            cache         : true,
            processResults: function (data) {
            return {
                results: $.map(data.result, function (object) {
                return {
                    id  : object.id,
                    text: object.name,
                }
                }),
            }
            },
        },
        })
        $('#warehouse_to').on('change', function () {
        validator.element($(this))
        })

        $('#company_id').select2({
            placeholder       : 'Select company',
            minimumInputLength: 1,
            width             : '100%',
            allowClear        : true,
            ajax              : {
                type          : 'GET',
                url           : '/api/company/select',
                cache         : true,
                processResults: function (data) {
                return {
                    results: $.map(data.result, function (object) {
                    return {
                        id  : object.id,
                        text: object.name,
                    }
                    }),
                }
                },
            },
          })
          $('#company_id').on('change', function () {
          validator.element($(this))
          })

        $('#packing_modal').on('shown.bs.modal', function () {
           $('#warehouse').select2({
            placeholder       : 'Select warehouse',
            minimumInputLength: 1,
            width             : '100%',
            allowClear        : true,
            ajax              : {
                type          : 'GET',
                url           : `/api/location/select?id_warehouse=${$('#warehouse_from').val()}`,
                cache         : true,
                processResults: function (data) {
                return {
                    results: $.map(data.result, function (object) {
                    return {
                        id  : object.id,
                        text: object.name,
                    }
                    }),
                }
                },
            },
            })
            $('#warehouse').on('change', function () {
            validator.element($(this))
            })
            $('#product').select2({
            placeholder       : 'Select product',
            minimumInputLength: 1,
            width             : '100%',
            allowClear        : true,
            ajax              : {
                type          : 'GET',
                url           : `/api/product/select?id_company=${$('#company_id').val()}`,
                cache         : true,
                processResults: function (data) {
                return {
                    results: $.map(data.result, function (object) {
                    return {
                        id  : object.id,
                        text: object.name,
                    }
                    }),
                }
                },
            },
            })
            $('#product').on('change', function () {
            validator.element($(this))
          })
          $('#packing').select2({
            placeholder       : 'Select Packing',
            minimumInputLength: 1,
            width             : '100%',
            allowClear        : true,
            ajax              : {
                type          : 'GET',
                url           : '/api/packing/select',
                cache         : true,
                processResults: function (data) {
                return {
                    results: $.map(data.result, function (object) {
                    return {
                        id  : object.id,
                        text: object.name,
                    }
                    }),
                }
                },
            },
            })
            $('#packing').on('change', function () {
            validator.element($(this))
          })
          $('#dimension_type').select2({
            data: DIMENSION_TYPE, placeholder: 'Select a dimension type', allowClear: true,
          })
          $('#dimension_type').on('change', function () {
            validator.element($(this))
          })

          $('#weight_type').select2({
            data: WEIGHT_TYPE, placeholder: 'Select a weight type', allowClear: true,
          })
          $('#weight_type').on('change', function () {
            validator.element($(this))
          })
           $('#weight_types').select2({
            data: WEIGHT_TYPE, placeholder: 'Select a weight type', allowClear: true,
          })
          $('#weight_types').on('change', function () {
            validator.element($(this))
          })
       })

        // const validator = $('#outgoing_form').validate({
        //     // define validation rules
        //     rules: {
        //         // company                : { required: true },
        //         order                  : { required: true },
        //         // etd                    : { required: true },
        //         // eta                    : { required: true },
        //         order_date             : { required: true },
        //         transport              : { required: true },
        //         number                 : { required: true },
        //         // country_from           : { required: true },
        //         from                   : { required: true },
        //         warehouse_from         : { required: true },
        //         // country_to             : { required: true },
        //         to                     : { required: true },
        //         warehouse_to           : { required: true },
        //         custom                 : { required: true },
        //         cargo                  : { required: true },
        //         description            : { required: true },
        //     },
        //     invalidHandler: function (event, validator) {
        //       // eslint-disable-next-line no-undef
        //       KTUtil.scrollTop()
        //       event.preventDefault()
        //     },
        //     submitHandler: function (form) {
        //       return false
        //     },
        // })
       const customAdapter = $.fn.select2.amd.require('select2/data/customAdapter')

        await this.$store.dispatch('region/getCountries')
        this.countries = this.$store.getters['region/getCountries']
        const app      = this
        $('#country_from').select2({
          placeholder: 'Select a country',
          allowClear : true,
          data       : this.countries,
        })

        $('#country_to').select2({
            placeholder: 'Select a country',
            allowClear : true,
            data       : this.countries,
        })
  },
  methods: {
    async getProductTemporary(){
      let getListProduct = this.$cookies.get(`${process.env.APP_ENV}_productListAdd`);
      let parseProduct = {allProduct:[]}
      console.log(getListProduct)
      if(getListProduct === undefined){
          this.$cookies.set(`${process.env.APP_ENV}_productListAdd`, JSON.stringify(parseProduct))
          this.product_temporary = parseProduct;
      } else {
        this.product_temporary = getListProduct.allProduct
      }
    },
     async addProductTemporary(){
        // console.log($('#warehouse').select2('data'))
        var data = $('#warehouse').select2('data');
          let arrayProduct = [],getListProduct;
          getListProduct = {
            product_id: $("input[name='product_id']").val(),
            packing: $("input[name='packing']").val(),
            warehouse: $("select[name='warehouse']").val(),
            warehouse_name: data[0].text,
            batch: $("input[name='batch']").val(),
            qty: $("input[name='qty']").val(),
            expired: $("input[name='date_exp']").val(),
            description: $("input[name='desc']").val(),
          }
          let getProductCookies  = this.$cookies.get(`${process.env.APP_ENV}_productListAdd`);
          let LisProduct = [];
          LisProduct = getProductCookies.allProduct;
          LisProduct.push(getListProduct)
          if(getProductCookies.allProduct === undefined){
            getProductCookies.allProduct = []
            } else {
            getProductCookies.allProduct = getProductCookies.allProduct
            }
          let parseProduct = {allProduct:LisProduct}
          // console.log('###',parseProduct)
          this.$cookies.set(`${process.env.APP_ENV}_productListAdd`, JSON.stringify(parseProduct), {
            path  : '/',
            maxAge: 60 * 60 * 24 * 7,
          })
          this.getProductTemporary();
          $('#packing_form')[0].reset();
      },
      async addOutgoing(){
        let products;
        let detailProduct = [];
        for (let i = 0; i < this.product_temporary.length; i++) {
          const getdata = this.product_temporary[i];
          products = {product_id:parseInt(getdata.product_id), product_packing_id:parseInt(getdata.packing), from_warehouse_location_id:parseInt(getdata.warehouse), batch:getdata.batch, qty:parseInt(getdata.qty), expired_date:moment(getdata.expired).format("YYYY-MM-DD HH:mm:ss"), description:getdata.description}
          detailProduct.push(products)
        }
        // if ($('#outgoing_form').valid()) {
          // alert('aa')
          this.outgoing.products  = detailProduct;
          this.outgoing.etd  = moment($('#date_etd').val(), 'DD/MM/YYYY HH:mm:ss').format("YYYY-MM-DD HH:mm:ss");
          this.outgoing.order_date  = moment($('#date_order').val(), 'DD/MM/YYYY HH:mm:ss').format("YYYY-MM-DD HH:mm:ss");
          this.outgoing.eta  = moment($('#date_eta').val(), 'DD/MM/YYYY HH:mm:ss').format("YYYY-MM-DD HH:mm:ss");
          this.outgoing.company_id  = parseInt($('#company_id').val())
          this.outgoing.from_country_id  = parseInt($('#country_from').val())
          this.outgoing.to_country_id  = parseInt($('#country_to').val())
          this.outgoing.from_warehouse_id  = parseInt($('#warehouse_from').val())
          console.log(this.outgoing);
          try {
            this.$nuxt.$loading.start()
            await this.$store.dispatch('outgoing/addOutgoing', { data: this.outgoing })
            const data      = this.$store.getters['outgoing/getAddSuccess']
            const parameter = {
              alertClass: 'alert-success',
              message   : `Outgoing ${data.result.order_no} has been added`,
            }
            this.$nuxt.$emit('alertShow', parameter)
            this.$nuxt.$loading.finish()
            // this.$cookies.remove(`${process.env.APP_ENV}_productListAdd`)
            // eslint-disable-next-line no-undef
            KTUtil.scrollTop()
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
        // }
      }
  },
}
</script>
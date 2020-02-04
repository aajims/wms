<template>
  <div class="row">
    <div class="col-lg-12">
      <form
        id="outgoing_form"
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
               <div class="col-lg-4">
                <label>Order No <span style="color:red">*</span></label>
                <input
                  id="order"
                  v-model="outgoing.order_no"
                  class="form-control"
                  name="order"
                />
              </div>
              <div class="col-lg-4">
                <label>Company <span style="color:red">*</span></label>
                <select
                    id="company_id"
                    class="form-control kt-select2"
                    name="company_id"
                  >
                    <option />
                  </select>
                  <input type="hidden" v-model="outgoing.type">
              </div>
              <div class="col-lg-4">
                <label>From Warehouse <span style="color:red">*</span></label>
                <select
                    id="warehouse_from"
                    class="form-control"
                    name="warehouse_from"
                  >
                    <option />
                  </select>
              </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-4">
              <label>ETD <span style="color:red">*</span></label>
              <div class="input-group date">
                <input type="text" name="date_etd" class="form-control" readonly placeholder="Select date & time" id="date_etd" />
                <div class="input-group-append">
                  <span class="input-group-text"><i class="la la-calendar"></i></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <label>ETA <span style="color:red">*</span></label>
              <div class="input-group date">
                <input type="text" name="date_eta" class="form-control" readonly placeholder="Select date & time" id="date_eta" />
                <div class="input-group-append">
                  <span class="input-group-text"><i class="la la-calendar"></i></span>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <label>Shipment Date <span style="color:red">*</span></label>
              <div class="input-group date">
                <input type="text" name="shipment_date" class="form-control" readonly placeholder="Select date & time" id="shipment_date" />
                <div class="input-group-append">
                  <span class="input-group-text"><i class="la la-calendar"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-4">
              <label>Order Date <span style="color:red">*</span></label>
              <div class="input-group date">
                  <input type="text" class="form-control" name="order_date" readonly placeholder="Select date" id="date_order" />
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="la la-calendar"></i>
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
          <div class="form-group row">
            <div class="col-lg-4">
              <label>Tranport Type <span style="color:red">*</span></label>
                <select
                    id="transport_type"
                    class="form-control kt-select2"
                    name="transport_type"
                  >
                    <option />
                </select>
                <span class="form-text text-muted" />
              <input type="hidden" v-model="outgoing.flight">
            </div>
            <div class="col-lg-4">
              <label>Transport Number <span style="color:red">*</span></label>
              <input
                v-model="outgoing.transport_number"
                type="text"
                class="form-control"
                name="transport_number"
                id="transport_number"
              >
            </div>
          </div>
          <div class="form-group row">
            <div class="col-lg-6">
              <label for="country">From Country <span style="color:red">*</span></label>
                <select
                  id="country_from"
                  class="form-control kt-select2"
                  name="country_from"
                >
                  <option />
                </select>
                <span class="form-text text-muted">Please select a country </span>
            </div>
            <div class="col-lg-6">
              <label>From</label>
              <textarea
                  v-model="outgoing.from"
                  type="text"
                  rows="3"
                  name="from"
                  class="form-control"
                  placeholder="Enter Address "
              />
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
              <textarea
                  v-model="outgoing.to"
                  type="text"
                  rows="3"
                  name="to"
                  class="form-control"
                  placeholder="Enter Address "
              />
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
          
            <div class="kt-separator kt-separator--border-dashed kt-separator--space-lg" />
            <div class="form-group row">
              <div class="col-lg-3">
                <label>Add Product </label>
                <a
                  href="javascript:;"
                  class="btn btn-bold btn-sm btn-label-brand"
                  style="margin-left: 10px"
                  @click="openModal()"
                >
                  <i class="la la-plus" /> Add
                </a>
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-12">
                <!--begin: Datatable -->
                <table
                id="product_table"
                class="table table-hover table-checkable"
            >
                <thead>
                <tr>
                    <th>SKU Product </th>
                    <th>Packing </th>
                    <th>Location</th>
                    <th>Batch</th>
                    <th>Qty</th>
                    <th>Expired</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
                </thead>
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
                        id="product_id"
                        class="form-control kt-select2"
                        name="product_id"
                        >
                        <option />
                    </select>
                </div>
                <div class="col-lg-4">
                  <label>Packing  <span style="color:red">*</span></label>
                  <select
                        id="product_packing_id"
                        class="form-control kt-select2"
                        name="product_packing_id"
                        >
                        <option />
                    </select>
                </div>
                <div class="col-lg-4">
                  <label>Location <span style="color:red">*</span></label>
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
                <div class="col-lg-3">
                  <label>Batch  <span style="color:red">*</span></label>
                    <input
                      type="text"
                      name="batch"
                      id="batch"
                      class="form-control"
                      placeholder="Enter Batch"
                    >
                </div>
                <div class="col-lg-3">
                  <label>Qty Max</label>
                  <input
                    id="qty_max"
                    type="text"
                    class="form-control"
                    disabled="disabled"
                  >
                </div>

                <div class="col-lg-3">
                  <label>Qty  <span style="color:red">*</span></label>
                      <input
                      type="text"
                      id="qty"
                      name="qty"
                      class="form-control"
                      placeholder="Enter Qty"
                  >
                </div>
                <div class="col-lg-3">
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
                    <textarea
                      type="text"
                      rows="3"
                      name="desc"
                      id="desc"
                      class="form-control"
                      placeholder="Enter Description"
                    />
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
                type="submit"
                class="btn btn-primary"
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
import { DIMENSION_TYPE, WEIGHT_TYPE, TRANSPORT_TYPE } from '@/utils/constants'
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
          transport_number    : '',
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
      display  : 'none',
      rowIndex : null,
      countries: [],
      datatable           : [],
      productPackingSelect: [],
      productPackingOption: null,
      productPackingId    : null
    }
  },
  async mounted () {
     $('#date_etd, #date_eta').datetimepicker({
          todayHighlight: true,
          autoclose     : true,
          pickerPosition: 'bottom-left',
          todayBtn      : 'linked',
          format        : 'dd/mm/yyyy HH:mm',
          minuteStep    : 1,
      });
      $('#shipment_date, #date_order').datetimepicker({
          todayHighlight: true,
          autoclose     : true,
          pickerPosition: 'bottom-left',
          todayBtn      : 'linked',
          format        : 'dd/mm/yyyy HH:mm',
          minuteStep    : 1,
      });
      $('#date_exp').datepicker({
        todayHighlight: true,
        autoclose     : true,
        pickerPosition: 'bottom-left',
        todayBtn      : 'linked',
        format        : 'dd/mm/yyyy ',
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

          $('#transport_type').select2({
            placeholder: 'Select a transport type',
            allowClear : true,
            data       : TRANSPORT_TYPE,
          })
          $('#transport_type').val(this.outgoing.transport_type).trigger('change')
          $('#transport_type').on('change', function () {
            app.outgoing.transport_type = $(this).val()
          })

          $('#packing_modal').modal({
            backdrop: 'static',
            keyboard: false,
            show    : false,
          })

         $('#product_id').on('change', function () {
            validatorModal.element($(this))
            app.setPackingValue($('#product_id').val())
          })
          $('#product_packing_id').prop('disabled', true)
        $('#packing_modal').on('shown.bs.modal', function () {
          $('#product_id').select2({
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
            app.productPackingOption = $('#product_packing_id').select2({
              placeholder      : 'Select a product packing',
              allowClear       : true,
              dataAdapter      : customAdapter,
              data             : app.productPackingSelect,
              templateSelection: function (data, container) {
                $(data.element).attr('data-packing-name', data.packing_name)
                $(data.element).attr('data-qty-max', data.qty_max)
                return data.text
              },
            })
            $('#product_packing_id').on('change', function () {
              validatorModal.element($(this))
              $('#qty_max').val($('#product_packing_id').find(':selected').data('qty-max'))
            })

           $('#warehouse').select2({
            placeholder       : 'Select Capacity',
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
                    if (object.usage !== object.capacity_max) {
                      return {
                        id           : object.id,
                        text         : `${object.name} - Level ${object.level} (${object.usage} / ${object.capacity})`,
                        location_name: object.name,
                        usage        : object.usage,
                        capacity_max : object.capacity_max,
                      }
                    }
                  }),
                }
               },
            },
            templateSelection: function (data, container) {
              $(data.element).attr('data-location-name', data.location_name)
              $(data.element).attr('data-usage', data.usage)
              $(data.element).attr('data-capacity-max', data.capacity_max)
              return data.text
            },
            })
            $('#warehouse').on('change', function () {
            validatorModal.element($(this))
            })
            $('#packing_modal').on('hidden.bs.modal', function () {
              app.clearForm()
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

        const validator = $('#outgoing_form').validate({
            // define validation rules
            rules: {
                order                  : { required: true },
                etd                    : { required: true },
                eta                    : { required: true },
                order_date             : { required: true },
                transport_type         : { required: true },
                transport_number       : { required: true },
                country_from           : { required: true },
                from                   : { required: true },
                warehouse_from         : { required: true },
                country_to             : { required: true },
                to                     : { required: true },
                company_id             : { required: true },
                custom                 : { required: true },
                cargo                  : { required: true },
                description            : { required: true },
            },
            invalidHandler: function (event, validator) {
              // eslint-disable-next-line no-undef
              KTUtil.scrollTop()
              event.preventDefault()
            },
            submitHandler: function (form) {
              const data = app.datatable.rows().data().toArray()
              if (data.length === 0) {
                // eslint-disable-next-line no-undef
                swal.fire({
                  title             : 'Error!',
                  text              : 'Please add Outgoing product type',
                  type              : 'error',
                  buttonsStyling    : false,
                  confirmButtonClass: 'btn btn-danger',
                })
                return false
              }
              app.addOutgoing(data)
            },
        })
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

    // datatable
    this.datatable = $('#product_table').DataTable({
      responsive: true,
      ordering  : false,
      paging    : false,
      info      : false,
      searching : false,
      columns   : [
        { data: 'product_name' },
        { data: 'packing_name' },
        { data: 'location_name' },
        { data: 'batch' },
        { data: 'qty' },
        { data: 'expired' },
        { data: 'description' },
        { data: 'actions', responsivePriority: -1 },
      ],
      columnDefs: [
        {
          targets  : -3,
          className: 'dt-center',
          render   : function (data, type, full, meta) {
            if (data !== '')
              return moment(data).format('DD/MM/Y')
            else
              return data
          },
        },
        {
          targets: -1,
          render : function (data, type, full, meta) {
            return `<a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Edit">
                      <i class="la la-edit"></i>
                    </a>
                    <a href="javascript:;" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="Delete">
                      <i class="la la-trash"></i>
                    </a>`
          },
        },
      ],
    })

    // delete datatable row
    $('#product_table').on('click', '.la-trash', function () {
      app.datatable.row($(this).parents('tr')).remove().draw()
    })

    // edit datatable row
    $('#product_table').on('click', '.la-edit', function () {
      app.rowIndex         = app.datatable.row($(this).parents('tr')).index()
      const rowData        = app.datatable.row($(this).parents('tr')).data()
      app.productPackingId = rowData.product_packing_id
      $('#product_id').val(rowData.product_id).trigger('change')
      $('#desc').val(rowData.description)
      $('#qty').val(rowData.qty)
      $('#warehouse').val(rowData.from_warehouse_location_id).trigger('change')
      if (rowData.expired !== '')
        $('#date_exp').val(moment(rowData.expired).format('DD/MM/Y'))
      $('#batch').val(rowData.batch)
      $('#packing_modal').modal('show')
    })    
      // validator modal
    const validatorModal = $('#packing_form').validate({
      rules: {
        product_id              : { required: true },
        product_packing_id      : { required: true },
        warehouse               : { required: true },
        batch                   : { required: true },
        qty                     : { required: true, number: true },
      },
      invalidHandler: function (event, validator) {
        event.preventDefault()
      },
      submitHandler: function (form) {
        app.saveProduct()
        return false
      },
    })  
  },
  methods: {
    clearForm () {
      $('#desc').val(null)
      $('#qty_max').val('')
      $('#product').val(null).trigger('change')
      $('#warehouse').val(null).trigger('change')
      $('#product_packing_id').val(null).trigger('change')
      $('#date_exp').val('')
      $('#batch').val('')
      this.productPackingId = null
      this.rowIndex         = null
    },
    openModal () {
      if ($('#company').val() === '' || $('#warehouse_from').val() === '') {
        // eslint-disable-next-line no-undef
        swal.fire({
          title             : 'Warning!',
          text              : 'Please select company and warehouse',
          type              : 'warning',
          buttonsStyling    : false,
          confirmButtonClass: 'btn btn-warning',
        })
        return false
      }
      $('#packing_modal').modal('show')
    },
    async setPackingValue (productId) {
      if (productId) {
        await this.getProductPacking(productId)
        $('#product_packing_id').prop('disabled', false)
        if (this.productPackingId !== null)
          $('#product_packing_id').val(this.productPackingId).trigger('change')
      } else {
        $('#product_packing_id').val(null).trigger('change')
        $('#product_packing_id').prop('disabled', true)
        this.productPackingId = null
      }
    },
    async getProductPacking (idProduct) {
      await this.$store.dispatch('product/getProductDetail', { idProduct: idProduct })
      const productDetail       = this.$store.getters['product/getProductDetail'].result
      let dataTemporary         = Object.assign({})
      this.productPackingSelect = [{ id: '', text: '' }]
      if (productDetail.products_packing !== null) {
        productDetail.products_packing.forEach((value) => {
          dataTemporary = {
            id          : value.id,
            text        : `${value.packing_type_name} / Qty Max: ${value.qty_max}`,
            packing_name: value.packing_type_name,
            qty_max     : value.qty_max,
          }
          this.productPackingSelect.push(dataTemporary)
        })
      }
      this.productPackingOption.data('select2').dataAdapter.updateOptions(this.productPackingSelect)
    },
    saveProduct () {
      const app      = this
      const qtyMax   = parseInt($('#qty_max').val())
      const qty      = parseInt($('#qty').val())
      const totalRow = Math.floor((qty + qtyMax - 1) / qtyMax)
      if (qty > qtyMax) {
        // eslint-disable-next-line no-undef
        swal.fire({
          title             : 'Your Input Not Allow',
          text              : `Quantity is larger than maximum quantity. Product Max ${qtyMax} Qty`,
          type              : 'question',
          buttonsStyling    : false,
          confirmButtonClass: 'btn btn-success',
        }).then(function (result) {
          if (result.value)
            app.execSaveProduct(qtyMax, qty)
        })
        return false
      }
      app.execSaveProduct(qtyMax, qty, totalRow)
    },
    async execSaveProduct (qtyMax, qty, totalRow) {
      let product   = {}
      let qtyPerRow = qtyMax
      for (let i = 0; i < totalRow; i++) {
        if (i !== 0 && i === (totalRow - 1) && (qty % qtyMax) !== 0)
          qtyPerRow = qty % qtyMax
        else if (totalRow === 1)
          qtyPerRow = qty
        product = {
          product_id              : parseInt($('#product_id').val()),
          product_packing_id      : parseInt($('#product_packing_id').val()),
          from_warehouse_location_id: parseInt($('#warehouse').val()),
          product_name            : $('#product_id option:selected').text(),
          packing_name            : $('#product_packing_id').find(':selected').data('packing-name'),
          location_name           : $('#warehouse').find(':selected').data('location-name'),
          expired_date            : $('#date_exp').val() !== '' ? moment($('#date_exp').val(), 'DD/MM/YYYY').format('Y-MM-DD HH:mm:ss') : '',
          qty                     : qtyPerRow,
          batch                   : $('#batch').val(),
          description             : $('#desc').val()
        }
        if (this.rowIndex === null)
          this.datatable.row.add(product).draw()
        else {
          if (i === 0)
            this.datatable.row(this.rowIndex).data(product).draw()
          else
            this.datatable.row.add(product).draw()
        }
      }
      $('#packing_modal').modal('hide')
      },
      setDataPost (data) {
      this.outgoing.company_id = parseInt($('#company_id').val())
      if ($('#date_etd').val() !== '')
        this.outgoing.etd = moment($('#date_etd').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#date_eta').val() !== '')
        this.outgoing.eta = moment($('#date_eta').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#date_order').val() !== '')
        this.outgoing.order_date = moment($('#date_order').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#shipment_date').val() !== '')
        this.outgoing.shipment_date = moment($('#shipment_date').val(), 'DD/MM/YYYY HH:mm').format('Y-MM-DD HH:mm:ss')
      if ($('#country_from').val() !== '')
      this.outgoing.from_country_id = parseInt($('#country_from').val())
      this.outgoing.transport_type = $('#transport_type').val()
      this.outgoing.to_country_id   = parseInt($('#country_to').val())
      this.outgoing.from_warehouse_id = parseInt($('#warehouse_from').val())
      this.outgoing.products        = data
    },
    async addOutgoing (data) {
      if ($('#outgoing_form').valid()) {
        await this.setDataPost(data)
        try {
          this.$nuxt.$loading.start()
          await this.$store.dispatch('outgoing/addOutgoing', { data: this.outgoing })
          const data      = this.$store.getters['outgoing/getAddSuccess']
          const parameter = {
            alertClass: 'alert-success',
            message   : `Job Outgoing ${data.result.order_no} has been added`,
          }
          this.$nuxt.$emit('alertShow', parameter)
          this.$nuxt.$loading.finish()
          // eslint-disable-next-line no-undef
          KTUtil.scrollTop()
          setTimeout(function () { window.location.href = '/outgoing' }, 3000)
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
      }
    },
  },
}
</script>
export const DIMENSION_TYPE = [
  {
    id: 'cm', text: 'cm', long_name: 'centi_mater',
  },
  {
    id: 'in', text: 'inch', long_name: 'inch',
  },
  {
    id: 'm', text: 'm', long_name: 'meter',
  },
  {
    id: 'sqm', text: 'sqm', long_name: 'kilo_meter',
  },
]

export const WEIGHT_TYPE = [
  {
    id: 'mg', text: 'mg', long_name: 'mili_gram',
  },
  {
    id: 'gr', text: 'gr', long_name: 'gram',
  },
  {
    id: 'kg', text: 'kg', long_name: 'kilo_gram',
  },
  {
    id: 'lb', text: 'lb', long_name: 'pound',
  },
  {
    id: 'l', text: 'l', long_name: 'liter',
  },
]

export const PRODUCT_TYPE = [
  { id: 1, text: 'FIFO' },
  { id: 2, text: 'LIFO' },
  { id: 3, text: 'FEFO' },
]

export const PRODUCT_CONDITION = [
  { id: 1, text: 'Good' },
  { id: 2, text: 'Quarantine' },
  { id: 3, text: 'Damaged' },
]

export const STATUS = [
  {
    id: 0, text: 'Inactive', class: 'danger',
  },
  {
    id: 1, text: 'Active', class: 'success',
  },
]

export const JOB_STATUS = [
  {
    id: 3, text: 'Open', class: 'success',
  },
  {
    id: 9, text: 'Cancel', class: 'danger',
  },
  {
    id: 10, text: 'Close', class: 'dark',
  },
]

export const INCOMING_STATUS = [
  {
    id: 3, text: 'Open', class: 'success',
  },
  {
    id: 4, text: 'Block', class: 'warning',
  },
  {
    id: 5, text: 'Stored', class: 'brand',
  },
]

export const TRANSPORT_TYPE = [
  { id: 'air-freight', text: 'Air Freight' },
  { id: 'sea-freight', text: 'Sea Freight' },
  { id: 'truck', text: 'Truck' },
  { id: 'courier', text: 'Courier' },
  { id: 'production', text: 'Production' },
]

export const STATUS_INCATIVE = 0
export const STATUS_ACTIVE = 1
export const STATUS_DELETED = 2
export const STATUS_OPEN = 3
export const STATUS_BLOCK = 4
export const STATUS_STORED = 5
export const STATUS_PICK = 6
export const STATUS_PACK = 7
export const STATUS_READY_SHIPING = 8
export const STATUS_CANCEL = 9
export const STATUS_CLOSE = 10

export const STATUS_INCATIVE_NAME       = 'INACTIVE'
export const STATUS_ACTIVE_NAME         = 'ACTIVE'
export const STATUS_DELETED_NAME        = 'DELETED'
export const STATUS_OPEN_NAME           = 'OPEN'
export const STATUS_BLOCK_NAME          = 'BLOCKED'
export const STATUS_STORED_NAME         = 'STORED'
export const STATUS_PICK_NAME           = 'PICKED'
export const STATUS_PACK_NAME           = 'PACKED'
export const STATUS_READY_SHIPPING_NAME = 'READY FOR SHIP'
export const STATUS_CANCEL_NAME         = 'CANCEL'
export const STATUS_CLOSE_NAME          = 'CLOSE'

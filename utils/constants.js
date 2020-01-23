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

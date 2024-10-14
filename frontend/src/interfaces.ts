export interface IOrder {
  _id?: string
  id: number
  title: string
  subdate: string
  date: string
  productIds: Number[]
  name: string
}
export interface IproductGuarantee {
  start: string
  end: string
}

export interface IproductPrice {
  value: number
  Symbol: string
}
export interface IProduct {
  _id?: string
  id: number
  serialNumber: number
  newness: boolean
  photo: string
  status: string
  title: string
  type: string
  specification: string
  guarantee: IproductGuarantee
  price: IproductPrice[]
  subdate: string
  date: string
  groupTitle: string
  clientName: string
  order: string
  name: string
}

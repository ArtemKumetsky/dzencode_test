export interface IOrder {
  _id?: string
  id: number
  title: string
  subdate: string
  date: string
  productIds: Number[]
  name: string
}
export interface IProduct {
  id: number
  serialNumber: number
  newness: boolean
  photo: string
  status: string
  title: string
  type: string
  specification: string
  guarantee: Number
  price: Number
  date: string
  groupTitle: string
  clientName: string
  order: string
  name: string
  contactPhone: string
}

export interface InteractiveMenuData {
  _id?: string
  id?: number
  serialNumber?: number
  newness?: boolean
  photo?: string
  status?: string
  title?: string
  type?: string
  specification?: string
  guarantee?: number
  price?: number
  subdate?: string
  date?: string
  groupTitle?: string
  clientName?: string
  order?: string
  productIds?: Number[]
  name?: string
}

// ##############################
// *
// * types
// *
// ##############################

// ----- common -----
interface ICommonRespon {
  code: number
  message: string
}

// ----- form respon -----
export interface IFormSchema {
  value: string
  text: string
}

export interface IForms {
  area: IFormSchema[]
  name: IFormSchema[]
  job: IFormSchema[]
  race: IFormSchema[]
}

export type IFormData = ICommonRespon & IForms

// ----- data request & respon -----
export type IParamsName = 'areaCode' | 'jobCode' | 'nameCode' | 'raceCode'

export interface IParams {
  areaCode: string
  jobCode: string[]
  nameCode: string[]
  raceCode: string[]
}

export interface ICounts {
  count: number
  area: string
  value: number
}

export interface IUserSchema {
  id: string
  name: string
  nameSpell: string
  nameCode: string
  job: string
  jobCode: string
  race: string
  raceCode: string
  skill: string
  photo: string
  area: string
  areaCode: string
  YYYYMMDD: string
  HHMMss: string
}

interface IDataRespon {
  data: {
    count: ICounts[]
    user: IUserSchema[]
  }
}

export type IBodyData = ICommonRespon & IDataRespon

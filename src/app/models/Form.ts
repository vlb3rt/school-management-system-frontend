export interface Form {
  title: string,
  fields: Field[]
  formName: string
}

export interface Field {
  name: string,
  type: string,
  value: string,
  title: string
}

export enum FormModeEnum {
  CREATION,
  EDITION
}

export const FormModelLabel: Record<FormModeEnum, string> = {
  [FormModeEnum.CREATION]: 'Créer',
  [FormModeEnum.EDITION]: 'Modifier'
}

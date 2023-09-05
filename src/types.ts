export type ModalStateType = {
  modalImageOrientation: 'landscape' | 'portrait' | 'square',
  modalImageURL: string,
  modalTitle: string,
  modalYear: string,
  modalMedia: string,
  modalDims: string,
  modalPrice: string,
  modalStatement: string,
}

export enum ModalPropertiesMaxWidthType {
  '450px', '500px', '700px'
}
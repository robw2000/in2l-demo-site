import { IDocument, Document } from './document';

interface IWidget extends IDocument {
  name: string;
  price: string;
  availableStock: string;
}
const PROFILE_DOC_TYPE = 'widget';

class Widget extends Document implements IWidget {
  id: string;
  doType: string;
  name: string;
  price: string;
  availableStock: string;

  constructor(data: IWidget) {
    super(data.id, PROFILE_DOC_TYPE);
    this.name = data.name || '';
    this.price = data.price || '';
    this.availableStock = data.availableStock || '';
  }
}

export { IWidget, PROFILE_DOC_TYPE, Widget };

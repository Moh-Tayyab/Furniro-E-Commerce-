
import { category } from '../category'
import { type SchemaTypeDefinition } from 'sanity'
//import { orderType } from '../orderType'
import { product } from '../product'
import { productType } from '../productType'
import { myproduct } from '../myproduct'




export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ product, productType, category, myproduct,]
}

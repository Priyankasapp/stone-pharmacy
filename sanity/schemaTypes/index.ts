import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import { categoryType } from './categoryType'
import { seoType } from './seoType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    categoryType,
    seoType,
    
  ],
}

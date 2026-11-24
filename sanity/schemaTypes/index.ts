import { type SchemaTypeDefinition } from 'sanity'
import { productType } from './productType'
import { categoryType } from './categoryType'
import { seoType } from './seoType'
import { faqType } from './faqType'
import { HealthType } from './healthyType'
import { service } from './service'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    productType,
    categoryType,
    seoType,
    faqType,
    HealthType,
    service
    
  ],
}

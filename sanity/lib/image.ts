import createImageUrlBuilder from '@sanity/image-url'
import type { SanityImageSource } from '@sanity/image-url'
import { dataset, projectId } from '../env'

// 1. Configure the builder
const builder = createImageUrlBuilder({ 
  projectId: projectId || '', 
  dataset: dataset || '' 
})

/**
 * 2. Optimized urlFor function
 * We use 'SanityImageSource' type for proper type safety.
 */
export const urlFor = (source: SanityImageSource) => {
  return builder.image(source)
}
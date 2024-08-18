export type TCategoryType = 'primary' | 'secondary' | 'tertiary'

export type TCategory = {
  name: string
  slug: string
  categoryType: TCategoryType
  thumbnail: string
}

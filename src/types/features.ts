export interface FeatureItem {
  id: number
  kicker: string
  title: string
  desc: string
  bullets: string[]
  media: FeatureMedia
}

export type FeatureMedia =
  | { kind: 'image'; src: string }
  | { kind: 'video'; src: string; poster?: string }

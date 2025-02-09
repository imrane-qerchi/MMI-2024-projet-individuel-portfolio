/**
 * This file was @generated using pocketbase-typegen
 */

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
  Projets = 'projets',
  Users = 'users'
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
  id: RecordIdString
  created: IsoDateString
  updated: IsoDateString
  collectionId: string
  collectionName: Collections
  expand?: T
}

export type AuthSystemFields<T = never> = {
  email: string
  emailVisibility: boolean
  username: string
  verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum ProjetsDomainesOptions {
  'Communication' = 'Communication',
  'Maquettage' = 'Maquettage',
  'Développement' = 'Développement',
  'Design' = 'Design'
}
export type ProjetsRecord = {
  client?: string
  description_contribution?: HTMLString
  description_projet?: HTMLString
  domaines?: ProjetsDomainesOptions[]
  image_couverture?: string
  image_principale?: string
  images?: string[]
  lien?: string
  nom?: string
  sous_titre?: string
}

export type UsersRecord = {
  avatar?: string
  name?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ProjetsResponse<Texpand = unknown> = Required<ProjetsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  projets: ProjetsRecord
  users: UsersRecord
}

export type CollectionResponses = {
  projets: ProjetsResponse
  users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
  collection(idOrName: 'projets'): RecordService<ProjetsResponse>
  collection(idOrName: 'users'): RecordService<UsersResponse>
}

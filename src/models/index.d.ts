import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FolderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type NoteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Folder {
  readonly id: string;
  readonly name?: string | null;
  readonly Notes?: (Note | null)[] | null;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Folder, FolderMetaData>);
  static copyOf(source: Folder, mutator: (draft: MutableModel<Folder, FolderMetaData>) => MutableModel<Folder, FolderMetaData> | void): Folder;
}

export declare class Note {
  readonly id: string;
  readonly content?: string | null;
  readonly name?: string | null;
  readonly folderID: string;
  readonly userID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Note, NoteMetaData>);
  static copyOf(source: Note, mutator: (draft: MutableModel<Note, NoteMetaData>) => MutableModel<Note, NoteMetaData> | void): Note;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly Folders?: (Folder | null)[] | null;
  readonly Notes?: (Note | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}
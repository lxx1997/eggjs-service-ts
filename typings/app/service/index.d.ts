// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportChapters from '../../../app/service/Chapters';
import ExportLogins from '../../../app/service/Logins';
import ExportNovels from '../../../app/service/Novels';
import ExportTest from '../../../app/service/Test';
import ExportUsers from '../../../app/service/Users';

declare module 'egg' {
  interface IService {
    chapters: AutoInstanceType<typeof ExportChapters>;
    logins: AutoInstanceType<typeof ExportLogins>;
    novels: AutoInstanceType<typeof ExportNovels>;
    test: AutoInstanceType<typeof ExportTest>;
    users: AutoInstanceType<typeof ExportUsers>;
  }
}

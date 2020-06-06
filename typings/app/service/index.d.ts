// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportLogins from '../../../app/service/Logins';
import ExportTest from '../../../app/service/Test';
import ExportUsers from '../../../app/service/Users';

declare module 'egg' {
  interface IService {
    logins: AutoInstanceType<typeof ExportLogins>;
    test: AutoInstanceType<typeof ExportTest>;
    users: AutoInstanceType<typeof ExportUsers>;
  }
}

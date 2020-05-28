// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportHome from '../../../app/controller/home';
import ExportLogins from '../../../app/controller/logins';

declare module 'egg' {
  interface IController {
    home: ExportHome;
    logins: ExportLogins;
  }
}

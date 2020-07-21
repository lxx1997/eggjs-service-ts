// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportChapters from '../../../app/controller/chapters';
import ExportHome from '../../../app/controller/home';
import ExportLogins from '../../../app/controller/logins';
import ExportNovels from '../../../app/controller/novels';
import ExportUsers from '../../../app/controller/users';

declare module 'egg' {
  interface IController {
    chapters: ExportChapters;
    home: ExportHome;
    logins: ExportLogins;
    novels: ExportNovels;
    users: ExportUsers;
  }
}

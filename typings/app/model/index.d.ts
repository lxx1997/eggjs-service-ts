// This file is created by egg-ts-helper@1.25.8
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportEicChapter = require('../../../app/model/eic-chapter');
import ExportEicFile = require('../../../app/model/eic-file');
import ExportEicNovel = require('../../../app/model/eic-novel');
import ExportEicUser = require('../../../app/model/eic-user');

declare module 'egg' {
  interface IModel {
    EicChapter: ReturnType<typeof ExportEicChapter>;
    EicFile: ReturnType<typeof ExportEicFile>;
    EicNovel: ReturnType<typeof ExportEicNovel>;
    EicUser: ReturnType<typeof ExportEicUser>;
  }
}

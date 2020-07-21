export default {
  chapterIndex: data => {
    return 'select count(*) as count from `eic-egg`.`eic-chapter` where novel_id = ' + data;
  },
};

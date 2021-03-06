'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getArticles = getArticles;
exports.getUrlById = getUrlById;
var articles = [{
  title: '与国际计划的第三年 - 从“女性儿童IT课程设计”看中国区P3',
  id: '1',
  date: '2017-12-05',
  url: 'https://raw.githubusercontent.com/shinesoleil/blogs/master/p3.md'
}, {
  title: 'ThoughtWorks中国P3口述集（零） – 序',
  id: '2',
  date: '2018-05-17',
  url: 'https://raw.githubusercontent.com/shinesoleil/blogs/master/p3-0.md'

}, {
  title: 'ThoughtWorks中国P3口述集（一） – 边蕤',
  id: '3',
  date: '2018-05-17',
  url: 'https://raw.githubusercontent.com/shinesoleil/blogs/master/p3-1.md'
}, {
  title: 'ThoughtWorks中国P3口述集（二） – 高瑗',
  id: '4',
  date: '2018-05-24',
  url: 'https://raw.githubusercontent.com/shinesoleil/blogs/master/more.md'
}];

function getArticles() {
  return articles;
}

function getUrlById(id) {
  return articles.find(function (item) {
    return item.id === id;
  }).url;
}
//# sourceMappingURL=articles.js.map
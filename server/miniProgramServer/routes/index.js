var express = require('express');
var router = express.Router();
const data = [
  { id: 0, src: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', directorName: '张艺谋', movieName: '张艺谋和它的影', type: '动作 / 犯罪', status: 1, ranking: 20 },
  { id: 1, src: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', directorName: ' 大卫·雷奇', movieName: '速度与激情', type: '动作 / 犯罪', status: 0, ranking: 100 },
  { id: 2, src: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', directorName: '克林特·伊斯特伍德', movieName: '骡子 The Mule ', type: '剧情 / 悬疑 / 惊悚 / 犯罪', status: 0, ranking: 10 },
  { id: 3, src: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', directorName: '饺子', movieName: '哪吒之魔童降世', type: '剧情 / 喜剧 / 动画 / 奇幻', status: 1, ranking: 1000 },
  { id: 4, src: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', directorName: '张艺谋', movieName: '张艺谋和它的影', type: '动作 / 犯罪', status: 1, ranking: 20 },
  { id: 5, src: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', directorName: ' 大卫·雷奇', movieName: '速度与激情', type: '动作 / 犯罪', status: 0, ranking: 100 },
  { id: 6, src: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', directorName: '克林特·伊斯特伍德', movieName: '骡子 The Mule ', type: '剧情 / 悬疑 / 惊悚 / 犯罪', status: 0, ranking: 10 },
  { id: 7, src: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2563780504.webp', directorName: '饺子', movieName: '哪吒之魔童降世', type: '剧情 / 喜剧 / 动画 / 奇幻', status: 1, ranking: 1000 },

  { id: 8, src: '', directorName: '张艺谋', movieName: '张艺谋和它的影', type: '动作 / 犯罪', status: 1, ranking: 20 },
  { id: 9, src: '', directorName: ' 大卫·雷奇', movieName: '速度与激情', type: '动作 / 犯罪', status: 0, ranking: 100 },
  { id: 10, src: '', directorName: '克林特·伊斯特伍德', movieName: '骡子 The Mule ', type: '剧情 / 悬疑 / 惊悚 / 犯罪', status: 0, ranking: 10 },
  { id: 11, src: '', directorName: '饺子', movieName: '哪吒之魔童降世', type: '剧情 / 喜剧 / 动画 / 奇幻', status: 1, ranking: 1000 },

  { id: 12, src: '', directorName: '张艺谋', movieName: '张艺谋和它的影', type: '动作 / 犯罪', status: 1, ranking: 20 },
  { id: 13, src: '', directorName: ' 大卫·雷奇', movieName: '速度与激情', type: '动作 / 犯罪', status: 1, ranking: 100 },
  { id: 14, src: '', directorName: '克林特·伊斯特伍德', movieName: '骡子 The Mule ', type: '剧情 / 悬疑 / 惊悚 / 犯罪', status: 0, ranking: 10 },
  { id: 15, src: '', directorName: '饺子', movieName: '哪吒之魔童降世', type: '剧情 / 喜剧 / 动画 / 奇幻', status: 1, ranking: 1000 },

  { id: 16, src: '', directorName: '张艺谋', movieName: '张艺谋和它的影', type: '动作 / 犯罪', status: 1, ranking: 20 },
  { id: 17, src: '', directorName: ' 大卫·雷奇', movieName: '速度与激情', type: '动作 / 犯罪', status: 0, ranking: 100 },
  { id: 18, src: '', directorName: '克林特·伊斯特伍德', movieName: '骡子 The Mule ', type: '剧情 / 悬疑 / 惊悚 / 犯罪', status: 0, ranking: 10 },
  { id: 19, src: '', directorName: '饺子', movieName: '哪吒之魔童降世', type: '剧情 / 喜剧 / 动画 / 奇幻', status: 1, ranking: 1000 },

  { id: 20, src: '', directorName: '张艺谋', movieName: '张艺谋和它的影', type: '动作 / 犯罪', status: 1, ranking: 20 },
  { id: 21, src: '', directorName: ' 大卫·雷奇', movieName: '速度与激情', type: '动作 / 犯罪', status: 1, ranking: 100 },
  { id: 22, src: '', directorName: '克林特·伊斯特伍德', movieName: '骡子 The Mule ', type: '剧情 / 悬疑 / 惊悚 / 犯罪', status: 0, ranking: 10 },
  { id: 23, src: '', directorName: '饺子', movieName: '哪吒之魔童降世', type: '剧情 / 喜剧 / 动画 / 奇幻', status: 1, ranking: 1000 },
  { id: 24, src: '', directorName: '张艺谋', movieName: '张艺谋和它的影', type: '动作 / 犯罪', status: 0, ranking: 10 },
]
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movieList', function (req, res, next) {
  console.log('req.query',req.query)
  const {type} = req.query;
  let filterData = [];
  switch (type) {
    case 'zzsy':
      filterData = data.filter((item) => item.status);
      break;
    case 'jjsy':
      filterData = data.filter((item) => !item.status);
      break;
    case 'top250':
      filterData = data.filter((item) => item.ranking <= 250);
      break;
    default:
      filterData = data;
      return 

  }
  res.json({ data: filterData });
});

module.exports = router;

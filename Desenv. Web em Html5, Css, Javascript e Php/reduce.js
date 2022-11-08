let videos = [
  {
    id: '321654',
    title: 'PQ sim zequinha',
    views: 35487
  },
  {
    id: '753159',
    title: 'Dragon Ball Z',
    views: 963258
  },
  {
    id: '987654',
    title: 'Brasil 2022',
    views: 1475452
  },
]

let totalViews = videos.reduce((sum, video) => {
  return sum + video.views
}, 20000000000)

console.log(totalViews);
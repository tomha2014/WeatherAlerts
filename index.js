let Parser = require('rss-parser');
let parser = new Parser({
    customFields: {
      feed: ['otherTitle', 'extendedDescription'],
      item: ['cap:polygon','cap:event','cap:effective','cap:expires','cap:status','cap:msgType',
    'cap:category','cap:urgency','cap:severity','cap:certainty','cap:areaDesc'],
    }
  });
 
(async () => {
 
  let feed = await parser.parseURL('https://alerts.weather.gov/cap/ga.php?x=0');
  console.log(feed.title);
 
  feed.items.forEach(item => {
    console.log(item)
  });
 
})();
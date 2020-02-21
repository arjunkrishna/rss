

var urlParam = function(name, w) {
  w = w || window;
  var rx = new RegExp("[&|?]" + name + "=([^&#]+)"),
    val = w.location.search.match(rx);
  return !val ? "" : val[1];
};


function empty(data)
{
  if(typeof(data) == 'number' || typeof(data) == 'boolean')
  {
    return false;
  }
  if(typeof(data) == 'undefined' || data === null)
  {
    return true;
  }
  if(typeof(data.length) != 'undefined')
  {
    return data.length == 0;
  }
  var count = 0;
  for(var i in data)
  {
    if(data.hasOwnProperty(i))
    {
      count ++;
    }
  }
  return count == 0;
}

function getRssFeed(Url, MaxCount)
{  
  $('#divRss').FeedEk({
    FeedUrl:Url,
    MaxCount : MaxCount,
    ShowDesc : true,
    ShowPubDate:false,
    DescCharacterLimit:100,
    TitleLinkTarget:'_blank',    
    });
}

var RssFeedUrl = urlParam("RssFeedUrl");
var MaxCount = urlParam("MaxCount");
if (empty(MaxCount)) {
  MaxCount = 5
}
getRssFeed(RssFeedUrl, MaxCount);
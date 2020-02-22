

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

function getRssFeed(Url, MaxCount, ContentLimit)
{  
  $('#divRss').FeedEk({
    FeedUrl:Url,
    MaxCount : MaxCount,
    ShowDesc : true,
    ShowPubDate:false,
    DescCharacterLimit:ContentLimit,
    TitleLinkTarget:'_blank',        
    });
}

var RssFeedUrl = urlParam("RssFeedUrl");
var MaxCount = urlParam("MaxCount");
var ContentLimit = urlParam("ContentLimit");
if (empty(MaxCount)) {  
  MaxCount = 5
}
if (empty(ContentLimit)) {
  ContentLimit = 100
}
else if (ContentLimit > 1000)
{
  ContentLimit = 1000
}
getRssFeed(RssFeedUrl, MaxCount, ContentLimit);


var urlParam = function(name, w) {
  w = w || window;
  var rx = new RegExp("[&|?]" + name + "=([^&#]+)"),
    val = w.location.search.match(rx);
  return !val ? "" : val[1];
};

function getRssFeed(Url)
{  
  $('#divRss').FeedEk({
    FeedUrl:Url,
    MaxCount : 50,
    ShowDesc : true,
    ShowPubDate:true,
    DescCharacterLimit:100,
    TitleLinkTarget:'_blank',
    DateFormat: 'MM/dd/yyyy',
    DateFormatLang:'en'
    });
}

var RssFeedUrl = urlParam("RssFeedUrl");
getRssFeed(RssFeedUrl);
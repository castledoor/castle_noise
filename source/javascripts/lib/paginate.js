(function(a){a.fn.paginate=function(b){var c=function(l,m){var d={itemsPerPage:10,selector:{next:l.selector+"-next",previous:l.selector+"-previous",pagination:l.selector+"-pagination"},cssClassName:{disabled:"disabled"}};var m=a.extend(d,m);var h=1;var e=1;var i=0;var k=function(){i=l.children().size();e=Math.ceil(i/m.itemsPerPage);if(e>1){a(m.selector.pagination).show();a(m.selector.previous).addClass(m.cssClassName.disabled)}l.children().hide();l.children().slice(0,m.itemsPerPage).show();a(m.selector.previous).click(function(n){n.preventDefault();g()});a(m.selector.next).click(function(n){n.preventDefault();f()});l.show()};var j=function(o){h=o;startPage=(h-1)*m.itemsPerPage;endPage=startPage+m.itemsPerPage;l.children().hide().slice(startPage,endPage).show();var n=m.cssClassName.disabled;a(m.selector.pagination+" a").removeClass(n);if(h<=1){a(m.selector.previous).addClass(n)}else{if(h==e){a(m.selector.next).addClass(n)}}};var f=function(){if(h<e){j(h+1)}};var g=function(){if(h>1){j(h-1)}};k();return this};return new c(this,b)}})(jQuery);
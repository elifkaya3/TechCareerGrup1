
$(document).ready(function () {
  $('.carousel slide').carousel({
    interval: 1200
  })
});

$(document).ready(function () {
  $('dropdown-toggle').dropdown()
});

$(document).ready(function () {
  var arrLang = {
    'tr': {
      '0': 'Anasayfa',
      '1': 'Hakkımızda',
      '2': 'Makaleler',
      '3': 'Portfolyo',
      '4': 'İletişim',
      '5': 'Yazılım Geliştirici',
      '6': ' Bu, ek içeriğe doğal bir giriş olarak aşağıdaki destekleyici metni içeren daha geniş bir karttır. Bu içerik biraz daha uzun.',
      '7': 'Yazılım Geliştirici',
      '8': ' Bu, ek içeriğe doğal bir giriş olarak aşağıdaki destekleyici metni içeren daha geniş bir karttır. Bu içerik biraz daha uzun.',
      '9': 'Yazılım Geliştirici',
      '10': ' Bu, ek içeriğe doğal bir giriş olarak aşağıdaki destekleyici metni içeren daha geniş bir karttır. Bu içerik biraz daha uzun.',
      '11': '2022 @Tüm Hakları Saklıdır'
    },

    'en': {
      '0':'Home',
      '1':'About Us',
      '2':'Articles',
      '3':'Portfolio',
      '4':'Contact',
      '5':'Software Developer',
      '6':'This is a larger card with the supporting text below as a natural introduction to additional content. This content is a little longer.',
      '7':'Software Developer',
      '8':'This is a larger card with the supporting text below as a natural introduction to additional content. This content is a little longer.',
      '9':'Software Developer',
      '10':'This is a larger card with the supporting text below as a natural introduction to additional content. This content is a little longer.',
      '11':'2022 @All Rights Reserved'
    }
  };

  $('.dropdown-item').click(function(){
    localStorage.setItem('dil',JSON.stringify($(this).attr('id')));
    location.reload(); 
  });

  var lang = JSON.parse(localStorage.getItem('dil'));

  if (lang="en") {
    $("#drop_yazı").html("English");
  }
  else{
    $("#drop_yazı").html("Türkçe");
  }

  $('a,p,span,li,button,label,h5').each(function(index,element){
    $(this).text(arrLang[lang][$(this).attr('key')]);
  });
});


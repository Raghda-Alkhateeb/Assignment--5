$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = '../layout/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  })
 
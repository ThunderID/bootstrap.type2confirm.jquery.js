(function ($) {
  module('jQuery.type2confirm');

  test('is type2confirm', function () {
    expect(2);
    strictEqual($.type2confirm(), 'type2confirm.', 'should be type2confirm');
    strictEqual($.type2confirm({punctuation: '!'}), 'type2confirm!', 'should be thoroughly type2confirm');
  });
  
}(jQuery));

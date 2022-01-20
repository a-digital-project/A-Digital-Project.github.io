$('[data-text-over]').mouseenter(function () {
	const obj = $(this);

	obj.text(obj.attr('data-text-over'));
}).mouseleave(function () {
	const obj = $(this);

	obj.text(obj.attr('data-text-default'));
});

$(window).scroll(function() {
	const btn_top = $(".btn-top");
	const top_offset = 56;

	if ($(this).scrollTop() < top_offset && !btn_top.hasClass("invisible"))
		btn_top.addClass("invisible");
	else if ($(this).scrollTop() > top_offset && btn_top.hasClass("invisible"))
		btn_top.removeClass("invisible");
});
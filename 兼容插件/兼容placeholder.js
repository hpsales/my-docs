/*$(function () {
	if (/MSIE\s(\d+)/.test(navigator.userAgent) && navigator.userAgent.match(/MSIE\s(\d+)/)[1] < 10) {
		$('[placeholder]').each(function () {
			var pla = $(this).attr('placeholder');
			$(this).focus(function () {
				if ($(this).val() == pla) {
					$(this).val('');
				}
			}).blur(function () {
				if ($(this).val() == '') {
					$(this).val(pla);
				}
			});
			$(this).trigger('blur');//�˴�����blur�¼�,Ϊ��ҵ�����󡣷�ֹҳ���ϲ�ѯ���ı�����Ҫ���������Ĺؼ���placeholder����
		});
	}
});
*/
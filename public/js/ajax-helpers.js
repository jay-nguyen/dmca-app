(function(){

	var submitAjaxRequest = function(e) {
		var form = $(this);
		var method = form.find('input[name="_method"]').val() || 'POST';

		$.ajax({
			headers: {
			'X-CSRF-Token': form.find('input[name="_token"]').val()
			},
			type: method,
			url: form.prop('action'),
			data: form.serialize(),
			success: function() {
				$.publish('form.submitted', form);
			}
		});

		e.preventDefault();
	};

	$('form[data_remote]').on('submit', submitAjaxRequest);
})();
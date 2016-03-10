window.addEventListener('DOMContentLoaded', () => {

	var hoge = document.getElementById('hoge');
	var fuga = document.getElementById('fuga');

	var sequence = [
		{
			e: hoge,
			p: {
				width: 300,
				height: 300
			},
			o: {
				duration: 500,
				eading  : 'easeInOutCubic'
			}
		},
		{
			e: fuga,
			p: {
				translateX: -50,
				translateY: -100
			},
			o: {
				duration: 500,
				eading  : 'easeOutSine'
			}
		},
		{
			e: hoge,
			p: {
				rotateZ: 90
			},
			o: {
				duration: 500,
				eading  : 'easeOutQuint'
			}
		},
		{
			e: fuga,
			p: {
				height: 300
			},
			o: {
				duration: 500,
				eading  : 'easeInCubic',
				sequenceQueue: false
			}
		}
	]

	Velocity.RunSequence(sequence);

});

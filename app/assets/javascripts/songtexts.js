document.addEventListener( "DOMContentLoaded", function() {
				var popcorn = Popcorn( ".ouraudio" );
				var translations = document.getElementById("translation_0").innerHTML;
				popcorn.footnote({
				start: 8.5,
				end: 10,
				target: "footnote",
				text: translations,
				});
				popcorn.footnote({
				start: 10.5,
				end: 12,
				target: "footnote",
				text: "两只老虎"
				});
				popcorn.footnote({
				start: 12.5,
				end: 14,
				target: "footnote",
				text: "跑得快"
				});
				popcorn.footnote({
				start: 14.5,
				end: 16,
				target: "footnote",
				text: "跑得快"
				});
				popcorn.footnote({
				start: 16.5,
				end: 18,
				target: "footnote",
				text: "ㄧ只没有耳朵"
				});
				popcorn.footnote({
				start: 18.5,
				end: 20,
				target: "footnote",
				text: "ㄧ只没有尾巴"
				});
				popcorn.footnote({
				start: 20.5,
				end: 22,
				target: "footnote",
				text: "真奇怪"
				});
				popcorn.footnote({
				start: 22.5,
				end: 24,
				target: "footnote",
				text: "真奇怪"
				});
				popcorn.footnote({
				start: 24.5,
				end: 26,
				target: "footnote",
				text: "两只老虎",
				});
				popcorn.footnote({
				start: 26.5,
				end: 28,
				target: "footnote",
				text: "两只老虎"
				});
				popcorn.footnote({
				start: 28.5,
				end: 30,
				target: "footnote",
				text: "跑得快"
				});
				popcorn.footnote({
				start: 30.5,
				end: 32,
				target: "footnote",
				text: "跑得快"
				});
				popcorn.footnote({
				start: 32.5,
				end: 34,
				target: "footnote",
				text: "ㄧ只没有耳朵"
				});
				popcorn.footnote({
				start: 34.5,
				end: 36,
				target: "footnote",
				text: "ㄧ只没有尾巴"
				});
				popcorn.footnote({
				start: 36.5,
				end: 38,
				target: "footnote",
				text: "真奇怪"
				});
				popcorn.footnote({
				start: 38.5,
				end: 40,
				target: "footnote",
				text: "真奇怪"
				});
			}, false );
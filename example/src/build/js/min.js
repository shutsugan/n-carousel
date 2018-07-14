"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),e}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Carousel=function(){function n(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};_classCallCheck(this,n),this._element=e,this._options=Object.assign({},{slidesToScroll:1,slidesVisible:1,loop:!1},t),this._container=this._createDivWithClass("carousel__container");var s=Array.from(this._element.children);this._current_item=0,this._move_callbacks=[],this._is_mobile=!1,this._root=this._createDivWithClass("carousel"),this._root.setAttribute("tabindex","0"),this._root.appendChild(this._container),this._element.appendChild(this._root),this._items=s.map(function(e){var t=i._createDivWithClass("carousel__item");return t.appendChild(e),i._container.appendChild(t),t}),this._setStyle(),this._createNavigation(),this._move_callbacks.forEach(function(e){return e(0)}),this._onRisize(),window.addEventListener("resize",function(e){return i._onRisize()}),this._root.addEventListener("keyup",function(e){"ArrowRight"===e.key||"Right"===e.key?i._next():"ArrowLeft"!==e.key&&"Left"!==e.key||i._prev()})}return _createClass(n,[{key:"_setStyle",value:function(){var t=this,i=this._items.length/this.slidesVisible;this._container.style.width=100*i+"%",this._items.forEach(function(e){return e.style.width=100/t.slidesVisible/i+"%"})}},{key:"_createNavigation",value:function(){var t=this,i=this._createDivWithClass("carousel__next"),s=this._createDivWithClass("carousel__prev");i.classList.add("carousel__button"),s.classList.add("carousel__button"),this._root.appendChild(i),this._root.appendChild(s),i.addEventListener("click",function(e){return t._next()}),s.addEventListener("click",function(e){return t._prev()}),!0!==this._options.loop&&this._onMove(function(e){0===e?s.classList.add("carousel__prev--hidden"):s.classList.remove("carousel__prev--hidden"),void 0===t._items[t._current_item+t.slidesVisible]?i.classList.add("carousel__next--hidden"):i.classList.remove("carousel__next--hidden")})}},{key:"_next",value:function(){this._gotoItem(this._current_item+this.slidesToScroll)}},{key:"_prev",value:function(){this._gotoItem(this._current_item-this.slidesToScroll)}},{key:"_gotoItem",value:function(t){if(t<0){if(!this._options.loop)return;t=this._items.length-this.slidesVisible}else if(t>=this._items.length||void 0===this._items[this._current_item+this.slidesVisible]&&t>this._current_item){if(!this._options.loop)return;t=0}var e=-100*t/this._items.length;this._container.style.transform="translate3d("+e+"%, 0, 0)",this._current_item=t,this._move_callbacks.forEach(function(e){return e(t)})}},{key:"_onMove",value:function(e){this._move_callbacks.push(e)}},{key:"_onRisize",value:function(){var t=this,e=window.innerWidth<800;e!==this._is_mobile&&(this._is_mobile=e,this._setStyle(),this._move_callbacks.forEach(function(e){return e(t._current_item)}))}},{key:"_createDivWithClass",value:function(e){var t=document.createElement("div");return t.classList.add(e),t}},{key:"slidesToScroll",get:function(){return this._is_mobile?1:this._options.slidesToScroll}},{key:"slidesVisible",get:function(){return this._is_mobile?1:this._options.slidesVisible}}]),n}();exports.default=Carousel;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsiQ2Fyb3VzZWwiLCJlbGVtZW50IiwiX3RoaXMiLCJ0aGlzIiwib3B0aW9ucyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9lbGVtZW50IiwiX29wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJzbGlkZXNUb1Njcm9sbCIsInNsaWRlc1Zpc2libGUiLCJsb29wIiwiX2NvbnRhaW5lciIsIl9jcmVhdGVEaXZXaXRoQ2xhc3MiLCJjaGlsZHJlbiIsIkFycmF5IiwiZnJvbSIsIl9jdXJyZW50X2l0ZW0iLCJfbW92ZV9jYWxsYmFja3MiLCJfaXNfbW9iaWxlIiwiX3Jvb3QiLCJzZXRBdHRyaWJ1dGUiLCJhcHBlbmRDaGlsZCIsIl9pdGVtcyIsIm1hcCIsImNoaWxkIiwiaXRlbSIsIl9zZXRTdHlsZSIsIl9jcmVhdGVOYXZpZ2F0aW9uIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwiX29uUmlzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwia2V5IiwiX25leHQiLCJfcHJldiIsIl90aGlzMiIsInJhdGlvIiwic3R5bGUiLCJ3aWR0aCIsIl90aGlzMyIsIm5leHRfYnV0dG9uIiwicHJldl9idXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJfb25Nb3ZlIiwiaW5kZXgiLCJyZW1vdmUiLCJfZ290b0l0ZW0iLCJ0cmFuc2xhdGVYIiwidHJhbnNmb3JtIiwicHVzaCIsIl90aGlzNCIsIm1vYmlsZSIsImlubmVyV2lkdGgiLCJjbGFzc05hbWUiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLHdiQUVNQSxvQkFPTCxTQUFBQSxFQUFZQyxHQUF1QixJQUFBQyxFQUFBQyxLQUFkQyxFQUFjLEVBQUFDLFVBQUFDLGFBQUFDLElBQUFGLFVBQUEsR0FBQUEsVUFBQSxHQUFKLEdBQUlHLGdCQUFBTCxLQUFBSCxHQUNsQ0cs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SUFBTUcsR0FBc0IsSUFBVEgsRUFBZWpELEtBQUt3QixPQUFPckIsT0FDOUNILEtBQUthLFdBQVc0QixNQUFNWSxVQUF0QixlQUFpREQsRUFBakQsV0FDQXBELEtBQUtrQixjQUFnQitCLEVBRXJCakQsS0FBS21CLGdCQUFnQlcsUUFBUSxTQUFBQyxHQUFBLE9BQVlBLEVBQVNrQixxQ0FPM0NsQixHQUNQL0IsS0FBS21CLGdCQUFnQm1DLEtBQUt2Qix1Q0FNZixJQUFBd0IsRUFBQXZELEtBQ0x3RCxFQUFTdkIsT0FBT3dCLFdBQWEsSUFDL0JELElBQVd4RCxLQUFLb0IsYUFDbkJwQixLQUFLb0IsV0FBYW9DLEVBQ2xCeEQsS0FBSzRCLFlBQ0w1QixLQUFLbUIsZ0JBQWdCVyxRQUFRLFNBQUFDLEdBQUEsT0FBWUEsRUFBU3dCLEVBQUtyQyw4REFTckN3QyxHQUNuQixJQUFNQyxFQUFNQyxTQUFTQyxjQUFjLE9BR25DLE9BRkFGLEVBQUliLFVBQVVDLElBQUlXLEdBRVhDLHlDQU9QLE9BQU8zRCxLQUFLb0IsV0FBYSxFQUFJcEIsS0FBS08sU0FBU0cscURBTzNDLE9BQU9WLEtBQUtvQixXQUFhLEVBQUlwQixLQUFLTyxTQUFTSSx1Q0FJOUJkIiwiZmlsZSI6Im1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY2xhc3MgQ2Fyb3VzZWwge1xuXHQvKipcblx0ICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCwgdGhlIGVsZW1lbnQgdGhhdCBjb250YWlucyB0aGUgaXRlbXNcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnNsaWRlc1RvU2Nyb2xsPTFdIE51bWJlciBvZiBpdGVtcyB0byBiZSBzbGlkZWRcblx0ICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLnNsaWRlc1Zpc2libGU9MV0gTnVtYmVyIG9mIHZpc2libGUgaXRlbXNcblx0ICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5sb29wPWZhbHNlXSBzaG91bGQgbG9vcCBpbiB0aGUgZW5kIG9mIHRoZSBjYXJvdXNlbC5cblx0ICovXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuXHRcdHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xuXHRcdHRoaXMuX29wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB7XG5cdFx0XHRzbGlkZXNUb1Njcm9sbDogMSxcblx0XHRcdHNsaWRlc1Zpc2libGU6IDEsXG5cdFx0XHRsb29wOiBmYWxzZVxuXHRcdH0sIG9wdGlvbnMpO1xuXG5cdFx0dGhpcy5fY29udGFpbmVyID0gdGhpcy5fY3JlYXRlRGl2V2l0aENsYXNzKCdjYXJvdXNlbF9fY29udGFpbmVyJyk7XG5cdFx0XG5cdFx0Y29uc3QgY2hpbGRyZW4gPSBBcnJheS5mcm9tKHRoaXMuX2VsZW1lbnQuY2hpbGRyZW4pO1xuXG5cdFx0dGhpcy5fY3VycmVudF9pdGVtID0gMDtcblx0XHR0aGlzLl9tb3ZlX2NhbGxiYWNrcyA9IFtdO1xuXHRcdHRoaXMuX2lzX21vYmlsZSA9IGZhbHNlO1xuXG5cdFx0dGhpcy5fcm9vdCA9IHRoaXMuX2NyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWwnKTtcblx0XHR0aGlzLl9yb290LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXHRcdHRoaXMuX3Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5fY29udGFpbmVyKTtcblx0XHRcblx0XHR0aGlzLl9lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX3Jvb3QpO1xuXG5cdFx0dGhpcy5faXRlbXMgPSBjaGlsZHJlbi5tYXAoY2hpbGQgPT4ge1xuXHRcdFx0Y29uc3QgaXRlbSA9IHRoaXMuX2NyZWF0ZURpdldpdGhDbGFzcygnY2Fyb3VzZWxfX2l0ZW0nKTtcblx0XHRcdGl0ZW0uYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXHRcdFx0dGhpcy5fY29udGFpbmVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuXG5cdFx0XHRyZXR1cm4gaXRlbTtcblx0XHR9KTtcblxuXHRcdHRoaXMuX3NldFN0eWxlKCk7XG5cdFx0dGhpcy5fY3JlYXRlTmF2aWdhdGlvbigpO1xuXG5cdFx0dGhpcy5fbW92ZV9jYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjaygwKSk7XG5cdFx0dGhpcy5fb25SaXNpemUoKTtcblxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBldmVudCA9PiB0aGlzLl9vblJpc2l6ZSgpKTtcblx0XHR0aGlzLl9yb290LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZXZlbnQgPT4ge1xuXHRcdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnIHx8IGV2ZW50LmtleSA9PT0gJ1JpZ2h0JykgdGhpcy5fbmV4dCgpO1xuXHRcdFx0ZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyB8fCBldmVudC5rZXkgPT09ICdMZWZ0JykgdGhpcy5fcHJldigpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG4gICAgICogQXBwbHkgdGhlIHJpZ2h0IGRpbWVudGlvbnMgXG4gICAgICogdG8gdGhlIGl0ZW1zIG9mIHRoZSBjYXJvdXNlbC5cblx0ICovXG5cdF9zZXRTdHlsZSgpIHtcblx0XHRjb25zdCByYXRpbyA9IHRoaXMuX2l0ZW1zLmxlbmd0aCAvIHRoaXMuc2xpZGVzVmlzaWJsZTtcblx0XHR0aGlzLl9jb250YWluZXIuc3R5bGUud2lkdGggPSAocmF0aW8gKiAxMDApICsgJyUnO1xuXG5cdFx0dGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uc3R5bGUud2lkdGggPSAoKDEwMCAvIHRoaXMuc2xpZGVzVmlzaWJsZSkgLyByYXRpbykgKyBcIiVcIik7XG5cdH1cblxuXG5cdF9jcmVhdGVOYXZpZ2F0aW9uKCkge1xuXHRcdGNvbnN0IG5leHRfYnV0dG9uID0gdGhpcy5fY3JlYXRlRGl2V2l0aENsYXNzKCdjYXJvdXNlbF9fbmV4dCcpO1xuXHRcdGNvbnN0IHByZXZfYnV0dG9uID0gdGhpcy5fY3JlYXRlRGl2V2l0aENsYXNzKCdjYXJvdXNlbF9fcHJldicpO1xuXG5cdFx0bmV4dF9idXR0b24uY2xhc3NMaXN0LmFkZCgnY2Fyb3VzZWxfX2J1dHRvbicpO1xuXHRcdHByZXZfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19idXR0b24nKTtcblxuXHRcdHRoaXMuX3Jvb3QuYXBwZW5kQ2hpbGQobmV4dF9idXR0b24pO1xuXHRcdHRoaXMuX3Jvb3QuYXBwZW5kQ2hpbGQocHJldl9idXR0b24pO1xuXG5cdFx0bmV4dF9idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLl9uZXh0KCkpO1xuXHRcdHByZXZfYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4gdGhpcy5fcHJldigpKTtcblxuXHRcdGlmICh0aGlzLl9vcHRpb25zLmxvb3AgPT09IHRydWUpIHJldHVybjtcblxuXHRcdHRoaXMuX29uTW92ZShpbmRleCA9PiB7XG5cdFx0XHRpZiAoaW5kZXggPT09IDApIHByZXZfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19wcmV2LS1oaWRkZW4nKTtcblx0XHRcdGVsc2UgcHJldl9idXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnY2Fyb3VzZWxfX3ByZXYtLWhpZGRlbicpO1xuXG5cdFx0XHRpZiAodGhpcy5faXRlbXNbdGhpcy5fY3VycmVudF9pdGVtICsgdGhpcy5zbGlkZXNWaXNpYmxlXSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdG5leHRfYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2Nhcm91c2VsX19uZXh0LS1oaWRkZW4nKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG5leHRfYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2Nhcm91c2VsX19uZXh0LS1oaWRkZW4nKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdF9uZXh0KCkge1xuXHRcdHRoaXMuX2dvdG9JdGVtKHRoaXMuX2N1cnJlbnRfaXRlbSArIHRoaXMuc2xpZGVzVG9TY3JvbGwpO1xuXHR9XG5cblx0X3ByZXYoKSB7XG5cdFx0dGhpcy5fZ290b0l0ZW0odGhpcy5fY3VycmVudF9pdGVtIC0gdGhpcy5zbGlkZXNUb1Njcm9sbCk7XG5cdH1cblxuXHQvKipcbiAgICAgKiBzbGlkZSB0aGUgY2Fyb3VzZWwgdG8gdGhlIHRhcmdldGVkIGl0ZW0uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4XG5cdCAqL1xuXHRfZ290b0l0ZW0oaW5kZXgpIHtcblx0XHRpZiAoaW5kZXggPCAwKSB7XG5cdFx0XHRpZiAoIXRoaXMuX29wdGlvbnMubG9vcCkgcmV0dXJuO1xuXHRcdFx0aW5kZXggPSB0aGlzLl9pdGVtcy5sZW5ndGggLSB0aGlzLnNsaWRlc1Zpc2libGU7XG5cdFx0fSBlbHNlIGlmIChpbmRleCA+PSB0aGlzLl9pdGVtcy5sZW5ndGggfHwgdGhpcy5faXRlbXNbdGhpcy5fY3VycmVudF9pdGVtICsgdGhpcy5zbGlkZXNWaXNpYmxlXSA9PT0gdW5kZWZpbmVkICYmIGluZGV4ID4gdGhpcy5fY3VycmVudF9pdGVtKSAge1xuXHRcdFx0aWYgKCF0aGlzLl9vcHRpb25zLmxvb3ApIHJldHVybjtcblxuXHRcdFx0aW5kZXggPSAwO1xuXHRcdH1cblxuXHRcdGNvbnN0IHRyYW5zbGF0ZVggPSBpbmRleCAqIC0xMDAgLyB0aGlzLl9pdGVtcy5sZW5ndGg7XG5cdFx0dGhpcy5fY29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgke3RyYW5zbGF0ZVh9JSwgMCwgMClgO1xuXHRcdHRoaXMuX2N1cnJlbnRfaXRlbSA9IGluZGV4O1xuXG5cdFx0dGhpcy5fbW92ZV9jYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayhpbmRleCkpO1xuXHR9XG5cblx0LyoqXG4gICAgICogc3RvcmUgY2FsbGJhY2tzIHRvIHVzZSBsYXRlci5cbiAgICAgKiBAcGFyYW0ge2NhbGxiYWNrfSBjYWxsYmNrXG5cdCAqL1xuXHRfb25Nb3ZlKGNhbGxiYWNrKSAge1xuXHRcdHRoaXMuX21vdmVfY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuXHR9XG5cblx0LyoqXG4gICAgICogY2FsbGVkIHdoZW4gcmlzaXplIHRoZSB3aW5kb3cuXG5cdCAqL1xuXHRfb25SaXNpemUoKSB7XG5cdFx0Y29uc3QgbW9iaWxlID0gd2luZG93LmlubmVyV2lkdGggPCA4MDA7XG5cdFx0aWYgKG1vYmlsZSAhPT0gdGhpcy5faXNfbW9iaWxlKSB7XG5cdFx0XHR0aGlzLl9pc19tb2JpbGUgPSBtb2JpbGU7XG5cdFx0XHR0aGlzLl9zZXRTdHlsZSgpO1xuXHRcdFx0dGhpcy5fbW92ZV9jYWxsYmFja3MuZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayh0aGlzLl9jdXJyZW50X2l0ZW0pKTtcblx0XHR9XG5cdH1cblxuXHQvKipcbiAgICAgKiBDcmVhdGUgYW4gZWxlbWVudCB3aXRoIGEgY2xhc3NOYW1lLlxuXHQgKiBAcGFyYW0ge3N0cmluZ30gY2xhc3NOYW1lXG5cdCAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cblx0ICovXG5cdF9jcmVhdGVEaXZXaXRoQ2xhc3MoY2xhc3NOYW1lKSB7XG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcblxuXHRcdHJldHVybiBkaXY7XG5cdH1cblxuXHQvKipcblx0ICogQHJldHVybnMge251bWJlcn0gc3RlcFxuXHQgKi9cblx0Z2V0IHNsaWRlc1RvU2Nyb2xsKCkge1xuXHRcdHJldHVybiB0aGlzLl9pc19tb2JpbGUgPyAxIDogdGhpcy5fb3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfSBzdGVwXG5cdCAqL1xuXHRnZXQgc2xpZGVzVmlzaWJsZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5faXNfbW9iaWxlID8gMSA6IHRoaXMuX29wdGlvbnMuc2xpZGVzVmlzaWJsZTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJvdXNlbDsiXX0=
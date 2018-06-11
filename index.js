var source = null;
function install (Vue, options) {
	source = options;
  
  Vue.prototype.$setVi18nLocal = function (local) {
  	source.locale = local;
    this.$forceUpdate();
  }
  Vue.prototype.t = function (k) {
  	eval("var v = source.messages[source.locale]."+k);
  	return v
  }
}
export default install;
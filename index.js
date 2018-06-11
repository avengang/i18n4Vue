var source = null;
Vi18n.install = function (Vue, options) {
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
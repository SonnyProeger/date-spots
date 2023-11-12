import { useSSRContext, mergeProps, withCtx, renderSlot, computed, watch, onMounted, onUnmounted, createVNode, openBlock, createBlock, useSlots, ref, createTextVNode, unref, Fragment, renderList, toDisplayString, createCommentVNode, watchEffect, withModifiers, nextTick, resolveComponent, withDirectives, vModelCheckbox, vShow, withKeys, reactive, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderSlot, ssrRenderComponent, ssrLooseContain, ssrGetDynamicModelProps, ssrRenderTeleport, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { useForm, usePage, Link, Head, router, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
const _sfc_main$W = {
  __name: "ActionMessage",
  __ssrInlineRender: true,
  props: {
    on: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div style="${ssrRenderStyle(__props.on ? null : { display: "none" })}" class="text-sm text-gray-600">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ActionMessage.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$V = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:col-span-1 flex justify-between" }, _attrs))}><div class="px-4 sm:px-0"><h3 class="text-lg font-medium text-gray-900">`);
  ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
  _push(`</h3><p class="mt-1 text-sm text-gray-600">`);
  ssrRenderSlot(_ctx.$slots, "description", {}, null, _push, _parent);
  _push(`</p></div><div class="px-4 sm:px-0">`);
  ssrRenderSlot(_ctx.$slots, "aside", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SectionTitle.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const SectionTitle = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$U = {
  __name: "ActionSection",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "title")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "description")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="mt-5 md:mt-0 md:col-span-2"><div class="px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ActionSection.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const _sfc_main$T = {
  __name: "Checkbox",
  __ssrInlineRender: true,
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    value: {
      type: String,
      default: null
    }
  },
  emits: ["update:checked"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const props = __props;
    const proxyChecked = computed({
      get() {
        return props.checked;
      },
      set(val) {
        emit("update:checked", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({
        checked: Array.isArray(proxyChecked.value) ? ssrLooseContain(proxyChecked.value, __props.value) : proxyChecked.value,
        type: "checkbox",
        value: __props.value,
        class: "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"
      }, _attrs), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, proxyChecked.value))))}>`);
    };
  }
};
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Checkbox.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const _sfc_main$S = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    watch(() => props.show, () => {
      if (props.show) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = null;
      }
    });
    const close = () => {
      if (props.closeable) {
        emit("close");
      }
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape" && props.show) {
        close();
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = null;
    });
    const maxWidthClass = computed(() => {
      return {
        "sm": "sm:max-w-sm",
        "md": "sm:max-w-md",
        "lg": "sm:max-w-lg",
        "xl": "sm:max-w-xl",
        "2xl": "sm:max-w-2xl"
      }[props.maxWidth];
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        _push2(`<div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50" scroll-region><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="fixed inset-0 transform transition-all"><div class="absolute inset-0 bg-gray-500 opacity-75"></div></div><div style="${ssrRenderStyle(__props.show ? null : { display: "none" })}" class="${ssrRenderClass([maxWidthClass.value, "mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto"])}">`);
        if (__props.show) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
        } else {
          _push2(`<!---->`);
        }
        _push2(`</div></div>`);
      }, "body", false, _parent);
    };
  }
};
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Modal.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const _sfc_main$R = {
  __name: "ConfirmationModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const close = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$S, mergeProps({
        show: __props.show,
        "max-width": __props.maxWidth,
        closeable: __props.closeable,
        onClose: close
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"${_scopeId}><div class="sm:flex sm:items-start"${_scopeId}><div class="mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"${_scopeId}><svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"${_scopeId}></path></svg></div><div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"${_scopeId}><h3 class="text-lg font-medium text-gray-900"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</h3><div class="mt-4 text-sm text-gray-600"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div></div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, [
                createVNode("div", { class: "sm:flex sm:items-start" }, [
                  createVNode("div", { class: "mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10" }, [
                    (openBlock(), createBlock("svg", {
                      class: "h-6 w-6 text-red-600",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                      })
                    ]))
                  ]),
                  createVNode("div", { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left" }, [
                    createVNode("h3", { class: "text-lg font-medium text-gray-900" }, [
                      renderSlot(_ctx.$slots, "title")
                    ]),
                    createVNode("div", { class: "mt-4 text-sm text-gray-600" }, [
                      renderSlot(_ctx.$slots, "content")
                    ])
                  ])
                ])
              ]),
              createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 text-right" }, [
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ConfirmationModal.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const _sfc_main$Q = {
  __name: "DangerButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DangerButton.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const _sfc_main$P = {
  __name: "DialogModal",
  __ssrInlineRender: true,
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: "2xl"
    },
    closeable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const close = () => {
      emit("close");
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$S, mergeProps({
        show: __props.show,
        "max-width": __props.maxWidth,
        closeable: __props.closeable,
        onClose: close
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="px-6 py-4"${_scopeId}><div class="text-lg font-medium text-gray-900"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="mt-4 text-sm text-gray-600"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "content", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div><div class="flex flex-row justify-end px-6 py-4 bg-gray-100 text-right"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "px-6 py-4" }, [
                createVNode("div", { class: "text-lg font-medium text-gray-900" }, [
                  renderSlot(_ctx.$slots, "title")
                ]),
                createVNode("div", { class: "mt-4 text-sm text-gray-600" }, [
                  renderSlot(_ctx.$slots, "content")
                ])
              ]),
              createVNode("div", { class: "flex flex-row justify-end px-6 py-4 bg-gray-100 text-right" }, [
                renderSlot(_ctx.$slots, "footer")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DialogModal.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const _sfc_main$O = {
  __name: "FormSection",
  __ssrInlineRender: true,
  emits: ["submitted"],
  setup(__props) {
    const hasActions = computed(() => !!useSlots().actions);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "md:grid md:grid-cols-3 md:gap-6" }, _attrs))}>`);
      _push(ssrRenderComponent(SectionTitle, null, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "title")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "description", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "description")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`<div class="mt-5 md:mt-0 md:col-span-2"><form><div class="${ssrRenderClass([hasActions.value ? "sm:rounded-tl-md sm:rounded-tr-md" : "sm:rounded-md", "px-4 py-5 bg-white sm:p-6 shadow"])}"><div class="grid grid-cols-6 gap-6">`);
      ssrRenderSlot(_ctx.$slots, "form", {}, null, _push, _parent);
      _push(`</div></div>`);
      if (hasActions.value) {
        _push(`<div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md">`);
        ssrRenderSlot(_ctx.$slots, "actions", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</form></div></div>`);
    };
  }
};
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/FormSection.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const _sfc_main$N = {
  __name: "InputError",
  __ssrInlineRender: true,
  props: {
    message: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: __props.message ? null : { display: "none" }
      }, _attrs))}><p class="text-sm text-red-600">${ssrInterpolate(__props.message)}</p></div>`);
    };
  }
};
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputError.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const _sfc_main$M = {
  __name: "InputLabel",
  __ssrInlineRender: true,
  props: {
    value: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({ class: "block font-medium text-sm text-gray-700" }, _attrs))}>`);
      if (__props.value) {
        _push(`<span>${ssrInterpolate(__props.value)}</span>`);
      } else {
        _push(`<span>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      }
      _push(`</label>`);
    };
  }
};
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/InputLabel.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const _sfc_main$L = {
  __name: "PrimaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "submit"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/PrimaryButton.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const _sfc_main$K = {
  __name: "SecondaryButton",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "button"
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        class: "inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</button>`);
    };
  }
};
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SecondaryButton.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const _sfc_main$J = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "hidden sm:block" }, _attrs))}><div class="py-8"><div class="border-t border-gray-200"></div></div></div>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SectionBorder.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const SectionBorder = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$I = {
  __name: "TextInput",
  __ssrInlineRender: true,
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    const input = ref(null);
    onMounted(() => {
      if (input.value.hasAttribute("autofocus")) {
        input.value.focus();
      }
    });
    __expose({ focus: () => input.value.focus() });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<input${ssrRenderAttrs(mergeProps({
        ref_key: "input",
        ref: input,
        class: "border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm",
        value: __props.modelValue
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/TextInput.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const _sfc_main$H = {
  __name: "ApiTokenManager",
  __ssrInlineRender: true,
  props: {
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array
  },
  setup(__props) {
    const props = __props;
    const createApiTokenForm = useForm({
      name: "",
      permissions: props.defaultPermissions
    });
    const updateApiTokenForm = useForm({
      permissions: []
    });
    const deleteApiTokenForm = useForm({});
    const displayingToken = ref(false);
    const managingPermissionsFor = ref(null);
    const apiTokenBeingDeleted = ref(null);
    const createApiToken = () => {
      createApiTokenForm.post(route("api-tokens.store"), {
        preserveScroll: true,
        onSuccess: () => {
          displayingToken.value = true;
          createApiTokenForm.reset();
        }
      });
    };
    const manageApiTokenPermissions = (token) => {
      updateApiTokenForm.permissions = token.abilities;
      managingPermissionsFor.value = token;
    };
    const updateApiToken = () => {
      updateApiTokenForm.put(route("api-tokens.update", managingPermissionsFor.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => managingPermissionsFor.value = null
      });
    };
    const confirmApiTokenDeletion = (token) => {
      apiTokenBeingDeleted.value = token;
    };
    const deleteApiToken = () => {
      deleteApiTokenForm.delete(route("api-tokens.destroy", apiTokenBeingDeleted.value), {
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => apiTokenBeingDeleted.value = null
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_sfc_main$O, { onSubmitted: createApiToken }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create API Token `);
          } else {
            return [
              createTextVNode(" Create API Token ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API tokens allow third-party services to authenticate with our application on your behalf. `);
          } else {
            return [
              createTextVNode(" API tokens allow third-party services to authenticate with our application on your behalf. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "name",
              modelValue: unref(createApiTokenForm).name,
              "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              message: unref(createApiTokenForm).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (__props.availablePermissions.length > 0) {
              _push2(`<div class="col-span-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$M, {
                for: "permissions",
                value: "Permissions"
              }, null, _parent2, _scopeId));
              _push2(`<div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
              ssrRenderList(__props.availablePermissions, (permission) => {
                _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$T, {
                  checked: unref(createApiTokenForm).permissions,
                  "onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event,
                  value: permission
                }, null, _parent2, _scopeId));
                _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
              });
              _push2(`<!--]--></div></div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$M, {
                  for: "name",
                  value: "Name"
                }),
                createVNode(_sfc_main$I, {
                  id: "name",
                  modelValue: unref(createApiTokenForm).name,
                  "onUpdate:modelValue": ($event) => unref(createApiTokenForm).name = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  autofocus: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$N, {
                  message: unref(createApiTokenForm).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              __props.availablePermissions.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-6"
              }, [
                createVNode(_sfc_main$M, {
                  for: "permissions",
                  value: "Permissions"
                }),
                createVNode("div", { class: "mt-2 grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.availablePermissions, (permission) => {
                    return openBlock(), createBlock("div", { key: permission }, [
                      createVNode("label", { class: "flex items-center" }, [
                        createVNode(_sfc_main$T, {
                          checked: unref(createApiTokenForm).permissions,
                          "onUpdate:checked": ($event) => unref(createApiTokenForm).permissions = $event,
                          value: permission
                        }, null, 8, ["checked", "onUpdate:checked", "value"]),
                        createVNode("span", { class: "ml-2 text-sm text-gray-600" }, toDisplayString(permission), 1)
                      ])
                    ]);
                  }), 128))
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$W, {
              on: unref(createApiTokenForm).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Created. `);
                } else {
                  return [
                    createTextVNode(" Created. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: { "opacity-25": unref(createApiTokenForm).processing },
              disabled: unref(createApiTokenForm).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Create `);
                } else {
                  return [
                    createTextVNode(" Create ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$W, {
                on: unref(createApiTokenForm).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Created. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$L, {
                class: { "opacity-25": unref(createApiTokenForm).processing },
                disabled: unref(createApiTokenForm).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Create ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (__props.tokens.length > 0) {
        _push(`<div>`);
        _push(ssrRenderComponent(SectionBorder, null, null, _parent));
        _push(`<div class="mt-10 sm:mt-0">`);
        _push(ssrRenderComponent(_sfc_main$U, null, {
          title: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Manage API Tokens `);
            } else {
              return [
                createTextVNode(" Manage API Tokens ")
              ];
            }
          }),
          description: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` You may delete any of your existing tokens if they are no longer needed. `);
            } else {
              return [
                createTextVNode(" You may delete any of your existing tokens if they are no longer needed. ")
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.tokens, (token) => {
                _push2(`<div class="flex items-center justify-between"${_scopeId}><div class="break-all"${_scopeId}>${ssrInterpolate(token.name)}</div><div class="flex items-center ml-2"${_scopeId}>`);
                if (token.last_used_ago) {
                  _push2(`<div class="text-sm text-gray-400"${_scopeId}> Last used ${ssrInterpolate(token.last_used_ago)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (__props.availablePermissions.length > 0) {
                  _push2(`<button class="cursor-pointer ml-6 text-sm text-gray-400 underline"${_scopeId}> Permissions </button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<button class="cursor-pointer ml-6 text-sm text-red-500"${_scopeId}> Delete </button></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.tokens, (token) => {
                    return openBlock(), createBlock("div", {
                      key: token.id,
                      class: "flex items-center justify-between"
                    }, [
                      createVNode("div", { class: "break-all" }, toDisplayString(token.name), 1),
                      createVNode("div", { class: "flex items-center ml-2" }, [
                        token.last_used_ago ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "text-sm text-gray-400"
                        }, " Last used " + toDisplayString(token.last_used_ago), 1)) : createCommentVNode("", true),
                        __props.availablePermissions.length > 0 ? (openBlock(), createBlock("button", {
                          key: 1,
                          class: "cursor-pointer ml-6 text-sm text-gray-400 underline",
                          onClick: ($event) => manageApiTokenPermissions(token)
                        }, " Permissions ", 8, ["onClick"])) : createCommentVNode("", true),
                        createVNode("button", {
                          class: "cursor-pointer ml-6 text-sm text-red-500",
                          onClick: ($event) => confirmApiTokenDeletion(token)
                        }, " Delete ", 8, ["onClick"])
                      ])
                    ]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$P, {
        show: displayingToken.value,
        onClose: ($event) => displayingToken.value = false
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API Token `);
          } else {
            return [
              createTextVNode(" API Token ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}> Please copy your new API token. For your security, it won&#39;t be shown again. </div>`);
            if (_ctx.$page.props.jetstream.flash.token) {
              _push2(`<div class="mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"${_scopeId}>${ssrInterpolate(_ctx.$page.props.jetstream.flash.token)}</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", null, " Please copy your new API token. For your security, it won't be shown again. "),
              _ctx.$page.props.jetstream.flash.token ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500 break-all"
              }, toDisplayString(_ctx.$page.props.jetstream.flash.token), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$K, {
              onClick: ($event) => displayingToken.value = false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Close `);
                } else {
                  return [
                    createTextVNode(" Close ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$K, {
                onClick: ($event) => displayingToken.value = false
              }, {
                default: withCtx(() => [
                  createTextVNode(" Close ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$P, {
        show: managingPermissionsFor.value != null,
        onClose: ($event) => managingPermissionsFor.value = null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` API Token Permissions `);
          } else {
            return [
              createTextVNode(" API Token Permissions ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 md:grid-cols-2 gap-4"${_scopeId}><!--[-->`);
            ssrRenderList(__props.availablePermissions, (permission) => {
              _push2(`<div${_scopeId}><label class="flex items-center"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$T, {
                checked: unref(updateApiTokenForm).permissions,
                "onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event,
                value: permission
              }, null, _parent2, _scopeId));
              _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>${ssrInterpolate(permission)}</span></label></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.availablePermissions, (permission) => {
                  return openBlock(), createBlock("div", { key: permission }, [
                    createVNode("label", { class: "flex items-center" }, [
                      createVNode(_sfc_main$T, {
                        checked: unref(updateApiTokenForm).permissions,
                        "onUpdate:checked": ($event) => unref(updateApiTokenForm).permissions = $event,
                        value: permission
                      }, null, 8, ["checked", "onUpdate:checked", "value"]),
                      createVNode("span", { class: "ml-2 text-sm text-gray-600" }, toDisplayString(permission), 1)
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$K, {
              onClick: ($event) => managingPermissionsFor.value = null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: ["ml-3", { "opacity-25": unref(updateApiTokenForm).processing }],
              disabled: unref(updateApiTokenForm).processing,
              onClick: updateApiToken
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$K, {
                onClick: ($event) => managingPermissionsFor.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$L, {
                class: ["ml-3", { "opacity-25": unref(updateApiTokenForm).processing }],
                disabled: unref(updateApiTokenForm).processing,
                onClick: updateApiToken
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$R, {
        show: apiTokenBeingDeleted.value != null,
        onClose: ($event) => apiTokenBeingDeleted.value = null
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete API Token `);
          } else {
            return [
              createTextVNode(" Delete API Token ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Are you sure you would like to delete this API token? `);
          } else {
            return [
              createTextVNode(" Are you sure you would like to delete this API token? ")
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$K, {
              onClick: ($event) => apiTokenBeingDeleted.value = null
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$Q, {
              class: ["ml-3", { "opacity-25": unref(deleteApiTokenForm).processing }],
              disabled: unref(deleteApiTokenForm).processing,
              onClick: deleteApiToken
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete `);
                } else {
                  return [
                    createTextVNode(" Delete ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$K, {
                onClick: ($event) => apiTokenBeingDeleted.value = null
              }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$Q, {
                class: ["ml-3", { "opacity-25": unref(deleteApiTokenForm).processing }],
                disabled: unref(deleteApiTokenForm).processing,
                onClick: deleteApiToken
              }, {
                default: withCtx(() => [
                  createTextVNode(" Delete ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Partials/ApiTokenManager.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$H
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"></path></svg>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationMark.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const ApplicationMark = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$F = {
  __name: "Banner",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    const show = ref(true);
    const style = ref("success");
    const message = ref("");
    watchEffect(async () => {
      var _a, _b;
      style.value = ((_a = page.props.jetstream.flash) == null ? void 0 : _a.bannerStyle) || "success";
      message.value = ((_b = page.props.jetstream.flash) == null ? void 0 : _b.banner) || "";
      show.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (show.value && message.value) {
        _push(`<div class="${ssrRenderClass({ "bg-indigo-500": style.value == "success", "bg-red-700": style.value == "danger" })}"><div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"><div class="flex items-center justify-between flex-wrap"><div class="w-0 flex-1 flex items-center min-w-0"><span class="${ssrRenderClass([{ "bg-indigo-600": style.value == "success", "bg-red-600": style.value == "danger" }, "flex p-2 rounded-lg"])}">`);
        if (style.value == "success") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        if (style.value == "danger") {
          _push(`<svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</span><p class="ml-3 font-medium text-sm text-white truncate">${ssrInterpolate(message.value)}</p></div><div class="shrink-0 sm:ml-3"><button type="button" class="${ssrRenderClass([{ "hover:bg-indigo-600 focus:bg-indigo-600": style.value == "success", "hover:bg-red-600 focus:bg-red-600": style.value == "danger" }, "-mr-1 flex p-2 rounded-md focus:outline-none sm:-mr-2 transition"])}" aria-label="Dismiss"><svg class="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Banner.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const _sfc_main$E = {
  __name: "Dropdown",
  __ssrInlineRender: true,
  props: {
    align: {
      type: String,
      default: "right"
    },
    width: {
      type: String,
      default: "48"
    },
    contentClasses: {
      type: Array,
      default: () => ["py-1", "bg-white"]
    }
  },
  setup(__props) {
    const props = __props;
    let open = ref(false);
    const closeOnEscape = (e) => {
      if (open.value && e.key === "Escape") {
        open.value = false;
      }
    };
    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));
    const widthClass = computed(() => {
      return {
        "48": "w-48"
      }[props.width.toString()];
    });
    const alignmentClasses = computed(() => {
      if (props.align === "left") {
        return "origin-top-left left-0";
      }
      if (props.align === "right") {
        return "origin-top-right right-0";
      }
      return "origin-top";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}><div>`);
      ssrRenderSlot(_ctx.$slots, "trigger", {}, null, _push, _parent);
      _push(`</div><div style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}" class="fixed inset-0 z-40"></div><div style="${ssrRenderStyle([
        unref(open) ? null : { display: "none" },
        { "display": "none" }
      ])}" class="${ssrRenderClass([[widthClass.value, alignmentClasses.value], "absolute z-50 mt-2 rounded-md shadow-lg"])}"><div class="${ssrRenderClass([__props.contentClasses, "rounded-md ring-1 ring-black ring-opacity-5"])}">`);
      ssrRenderSlot(_ctx.$slots, "content", {}, null, _push, _parent);
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Dropdown.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const _sfc_main$D = {
  __name: "DropdownLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    as: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button type="submit" class="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else if (__props.as == "a") {
        _push(`<a${ssrRenderAttr("href", __props.href)} class="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          class: "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DropdownLink.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const _sfc_main$C = {
  __name: "NavLink",
  __ssrInlineRender: true,
  props: {
    href: String,
    active: Boolean
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out" : "inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({
        href: __props.href,
        class: classes.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/NavLink.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const _sfc_main$B = {
  __name: "ResponsiveNavLink",
  __ssrInlineRender: true,
  props: {
    active: Boolean,
    href: String,
    as: String
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => {
      return props.active ? "block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out" : "block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.as == "button") {
        _push(`<button class="${ssrRenderClass([classes.value, "w-full text-left"])}">`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</button>`);
      } else {
        _push(ssrRenderComponent(unref(Link), {
          href: __props.href,
          class: classes.value
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default")
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ResponsiveNavLink.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const _sfc_main$A = {
  __name: "AppLayout",
  __ssrInlineRender: true,
  props: {
    title: String
  },
  setup(__props) {
    const showingNavigationDropdown = ref(false);
    const switchToTeam = (team) => {
      router.put(route("current-team.update"), {
        team_id: team.id
      }, {
        preserveState: false
      });
    };
    const logout = () => {
      router.post(route("logout"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(Head), { title: __props.title }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$F, null, null, _parent));
      _push(`<div class="min-h-screen bg-gray-100"><nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex justify-between h-16"><div class="flex"><div class="shrink-0 flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(ApplicationMark, { class: "block h-9 w-auto" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(ApplicationMark, { class: "block h-9 w-auto" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">`);
      _push(ssrRenderComponent(_sfc_main$C, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="hidden sm:flex sm:items-center sm:ml-6"><div class="ml-3 relative">`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(ssrRenderComponent(_sfc_main$E, {
          align: "right",
          width: "60"
        }, {
          trigger: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.current_team.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"${_scopeId}></path></svg></button></span>`);
            } else {
              return [
                createVNode("span", { class: "inline-flex rounded-md" }, [
                  createVNode("button", {
                    type: "button",
                    class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"
                  }, [
                    createTextVNode(toDisplayString(_ctx.$page.props.auth.user.current_team.name) + " ", 1),
                    (openBlock(), createBlock("svg", {
                      class: "ml-2 -mr-0.5 h-4 w-4",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                      })
                    ]))
                  ])
                ])
              ];
            }
          }),
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-60"${_scopeId}><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Team </div>`);
              _push2(ssrRenderComponent(_sfc_main$D, {
                href: _ctx.route("teams.show", _ctx.$page.props.auth.user.current_team)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Team Settings `);
                  } else {
                    return [
                      createTextVNode(" Team Settings ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (_ctx.$page.props.jetstream.canCreateTeams) {
                _push2(ssrRenderComponent(_sfc_main$D, {
                  href: _ctx.route("teams.create")
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Create New Team `);
                    } else {
                      return [
                        createTextVNode(" Create New Team ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$page.props.auth.user.all_teams.length > 1) {
                _push2(`<!--[--><div class="border-t border-gray-200"${_scopeId}></div><div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Switch Teams </div><!--[-->`);
                ssrRenderList(_ctx.$page.props.auth.user.all_teams, (team) => {
                  _push2(`<form${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$D, { as: "button" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex items-center"${_scopeId2}>`);
                        if (team.id == _ctx.$page.props.auth.user.current_team_id) {
                          _push3(`<svg class="mr-2 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId2}></path></svg>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`<div${_scopeId2}>${ssrInterpolate(team.name)}</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            team.id == _ctx.$page.props.auth.user.current_team_id ? (openBlock(), createBlock("svg", {
                              key: 0,
                              class: "mr-2 h-5 w-5 text-green-400",
                              xmlns: "http://www.w3.org/2000/svg",
                              fill: "none",
                              viewBox: "0 0 24 24",
                              "stroke-width": "1.5",
                              stroke: "currentColor"
                            }, [
                              createVNode("path", {
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              })
                            ])) : createCommentVNode("", true),
                            createVNode("div", null, toDisplayString(team.name), 1)
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</form>`);
                });
                _push2(`<!--]--><!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "w-60" }, [
                  createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Team "),
                  createVNode(_sfc_main$D, {
                    href: _ctx.route("teams.show", _ctx.$page.props.auth.user.current_team)
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Team Settings ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  _ctx.$page.props.jetstream.canCreateTeams ? (openBlock(), createBlock(_sfc_main$D, {
                    key: 0,
                    href: _ctx.route("teams.create")
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Create New Team ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  _ctx.$page.props.auth.user.all_teams.length > 1 ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", { class: "border-t border-gray-200" }),
                    createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Switch Teams "),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.$page.props.auth.user.all_teams, (team) => {
                      return openBlock(), createBlock("form", {
                        key: team.id,
                        onSubmit: withModifiers(($event) => switchToTeam(team), ["prevent"])
                      }, [
                        createVNode(_sfc_main$D, { as: "button" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center" }, [
                              team.id == _ctx.$page.props.auth.user.current_team_id ? (openBlock(), createBlock("svg", {
                                key: 0,
                                class: "mr-2 h-5 w-5 text-green-400",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                "stroke-width": "1.5",
                                stroke: "currentColor"
                              }, [
                                createVNode("path", {
                                  "stroke-linecap": "round",
                                  "stroke-linejoin": "round",
                                  d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                              ])) : createCommentVNode("", true),
                              createVNode("div", null, toDisplayString(team.name), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ], 40, ["onSubmit"]);
                    }), 128))
                  ], 64)) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="ml-3 relative">`);
      _push(ssrRenderComponent(_sfc_main$E, {
        align: "right",
        width: "48"
      }, {
        trigger: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.jetstream.managesProfilePhotos) {
              _push2(`<button class="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"${_scopeId}><img class="h-8 w-8 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}${_scopeId}></button>`);
            } else {
              _push2(`<span class="inline-flex rounded-md"${_scopeId}><button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"${_scopeId}>${ssrInterpolate(_ctx.$page.props.auth.user.name)} <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"${_scopeId}></path></svg></button></span>`);
            }
          } else {
            return [
              _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("button", {
                key: 0,
                class: "flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
              }, [
                createVNode("img", {
                  class: "h-8 w-8 rounded-full object-cover",
                  src: _ctx.$page.props.auth.user.profile_photo_url,
                  alt: _ctx.$page.props.auth.user.name
                }, null, 8, ["src", "alt"])
              ])) : (openBlock(), createBlock("span", {
                key: 1,
                class: "inline-flex rounded-md"
              }, [
                createVNode("button", {
                  type: "button",
                  class: "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"
                }, [
                  createTextVNode(toDisplayString(_ctx.$page.props.auth.user.name) + " ", 1),
                  (openBlock(), createBlock("svg", {
                    class: "ml-2 -mr-0.5 h-4 w-4",
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                    })
                  ]))
                ])
              ]))
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block px-4 py-2 text-xs text-gray-400"${_scopeId}> Manage Account </div>`);
            _push2(ssrRenderComponent(_sfc_main$D, {
              href: _ctx.route("profile.show")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Profile `);
                } else {
                  return [
                    createTextVNode(" Profile ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasApiFeatures) {
              _push2(ssrRenderComponent(_sfc_main$D, {
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` API Tokens `);
                  } else {
                    return [
                      createTextVNode(" API Tokens ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="border-t border-gray-200"${_scopeId}></div><form${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$D, { as: "button" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</form>`);
          } else {
            return [
              createVNode("div", { class: "block px-4 py-2 text-xs text-gray-400" }, " Manage Account "),
              createVNode(_sfc_main$D, {
                href: _ctx.route("profile.show")
              }, {
                default: withCtx(() => [
                  createTextVNode(" Profile ")
                ]),
                _: 1
              }, 8, ["href"]),
              _ctx.$page.props.jetstream.hasApiFeatures ? (openBlock(), createBlock(_sfc_main$D, {
                key: 0,
                href: _ctx.route("api-tokens.index")
              }, {
                default: withCtx(() => [
                  createTextVNode(" API Tokens ")
                ]),
                _: 1
              }, 8, ["href"])) : createCommentVNode("", true),
              createVNode("div", { class: "border-t border-gray-200" }),
              createVNode("form", {
                onSubmit: withModifiers(logout, ["prevent"])
              }, [
                createVNode(_sfc_main$D, { as: "button" }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out ")
                  ]),
                  _: 1
                })
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="-mr-2 flex items-center sm:hidden"><button class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24"><path class="${ssrRenderClass({ "hidden": showingNavigationDropdown.value, "inline-flex": !showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path><path class="${ssrRenderClass({ "hidden": !showingNavigationDropdown.value, "inline-flex": showingNavigationDropdown.value })}" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div></div><div class="${ssrRenderClass([{ "block": showingNavigationDropdown.value, "hidden": !showingNavigationDropdown.value }, "sm:hidden"])}"><div class="pt-2 pb-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$B, {
        href: _ctx.route("dashboard"),
        active: _ctx.route().current("dashboard")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Dashboard `);
          } else {
            return [
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="pt-4 pb-1 border-t border-gray-200"><div class="flex items-center px-4">`);
      if (_ctx.$page.props.jetstream.managesProfilePhotos) {
        _push(`<div class="shrink-0 mr-3"><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", _ctx.$page.props.auth.user.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)}></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div><div class="font-medium text-base text-gray-800">${ssrInterpolate(_ctx.$page.props.auth.user.name)}</div><div class="font-medium text-sm text-gray-500">${ssrInterpolate(_ctx.$page.props.auth.user.email)}</div></div></div><div class="mt-3 space-y-1">`);
      _push(ssrRenderComponent(_sfc_main$B, {
        href: _ctx.route("profile.show"),
        active: _ctx.route().current("profile.show")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile `);
          } else {
            return [
              createTextVNode(" Profile ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.$page.props.jetstream.hasApiFeatures) {
        _push(ssrRenderComponent(_sfc_main$B, {
          href: _ctx.route("api-tokens.index"),
          active: _ctx.route().current("api-tokens.index")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` API Tokens `);
            } else {
              return [
                createTextVNode(" API Tokens ")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<form method="POST">`);
      _push(ssrRenderComponent(_sfc_main$B, { as: "button" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Log Out `);
          } else {
            return [
              createTextVNode(" Log Out ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
      if (_ctx.$page.props.jetstream.hasTeamFeatures) {
        _push(`<!--[--><div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400"> Manage Team </div>`);
        _push(ssrRenderComponent(_sfc_main$B, {
          href: _ctx.route("teams.show", _ctx.$page.props.auth.user.current_team),
          active: _ctx.route().current("teams.show")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Team Settings `);
            } else {
              return [
                createTextVNode(" Team Settings ")
              ];
            }
          }),
          _: 1
        }, _parent));
        if (_ctx.$page.props.jetstream.canCreateTeams) {
          _push(ssrRenderComponent(_sfc_main$B, {
            href: _ctx.route("teams.create"),
            active: _ctx.route().current("teams.create")
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Create New Team `);
              } else {
                return [
                  createTextVNode(" Create New Team ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (_ctx.$page.props.auth.user.all_teams.length > 1) {
          _push(`<!--[--><div class="border-t border-gray-200"></div><div class="block px-4 py-2 text-xs text-gray-400"> Switch Teams </div><!--[-->`);
          ssrRenderList(_ctx.$page.props.auth.user.all_teams, (team) => {
            _push(`<form>`);
            _push(ssrRenderComponent(_sfc_main$B, { as: "button" }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex items-center"${_scopeId}>`);
                  if (team.id == _ctx.$page.props.auth.user.current_team_id) {
                    _push2(`<svg class="mr-2 h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`<div${_scopeId}>${ssrInterpolate(team.name)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      team.id == _ctx.$page.props.auth.user.current_team_id ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "mr-2 h-5 w-5 text-green-400",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                      ])) : createCommentVNode("", true),
                      createVNode("div", null, toDisplayString(team.name), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
            _push(`</form>`);
          });
          _push(`<!--]--><!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></nav>`);
      if (_ctx.$slots.header) {
        _push(`<header class="bg-white shadow"><div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">`);
        ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
        _push(`</div></header>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<main>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div></div>`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/AppLayout.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const _sfc_main$z = {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    tokens: Array,
    availablePermissions: Array,
    defaultPermissions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$A, mergeProps({ title: "API Tokens" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> API Tokens </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " API Tokens ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$H, {
              tokens: __props.tokens,
              "available-permissions": __props.availablePermissions,
              "default-permissions": __props.defaultPermissions
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  createVNode(_sfc_main$H, {
                    tokens: __props.tokens,
                    "available-permissions": __props.availablePermissions,
                    "default-permissions": __props.defaultPermissions
                  }, null, 8, ["tokens", "available-permissions", "default-permissions"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/API/Index.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$z
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100" }, _attrs))}><div>`);
  ssrRenderSlot(_ctx.$slots, "logo", {}, null, _push, _parent);
  _push(`</div><div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthenticationCard.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const AuthenticationCard = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$x = {
  __name: "AuthenticationCardLogo",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(Link), mergeProps({ href: "/" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"${_scopeId}></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-16 h-16",
                viewBox: "0 0 48 48",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
              }, [
                createVNode("path", {
                  d: "M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",
                  fill: "#6875F5"
                }),
                createVNode("path", {
                  d: "M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",
                  fill: "#6875F5"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AuthenticationCardLogo.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const passwordInput = ref(null);
    const submit = () => {
      form.post(route("password.confirm"), {
        onFinish: () => {
          form.reset();
          passwordInput.value.focus();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Secure Area" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$x, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$x)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> This is a secure area of the application. Please confirm your password before continuing. </div><form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "current-password",
              autofocus: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Confirm `);
                } else {
                  return [
                    createTextVNode(" Confirm ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. "),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$M, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "password",
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "current-password",
                    autofocus: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex justify-end mt-4" }, [
                  createVNode(_sfc_main$L, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Confirm ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$x, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$x)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Email Password Reset Link `);
                } else {
                  return [
                    createTextVNode(" Email Password Reset Link ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. "),
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$M, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_sfc_main$L, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Email Password Reset Link ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$v
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: String
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.transform((data) => ({
        ...data,
        remember: form.remember ? "on" : ""
      })).post(route("login"), {
        onFinish: () => form.reset("password")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Log in" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$x, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$x)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.status) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}>${ssrInterpolate(__props.status)}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="block mt-4"${_scopeId}><label class="flex items-center"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$T, {
              checked: unref(form).remember,
              "onUpdate:checked": ($event) => unref(form).remember = $event,
              name: "remember"
            }, null, _parent2, _scopeId));
            _push2(`<span class="ml-2 text-sm text-gray-600"${_scopeId}>Remember me</span></label></div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            if (__props.canResetPassword) {
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("password.request"),
                class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Forgot your password? `);
                  } else {
                    return [
                      createTextVNode(" Forgot your password? ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              __props.status ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, toDisplayString(__props.status), 1)) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$M, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$M, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "current-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "block mt-4" }, [
                  createVNode("label", { class: "flex items-center" }, [
                    createVNode(_sfc_main$T, {
                      checked: unref(form).remember,
                      "onUpdate:checked": ($event) => unref(form).remember = $event,
                      name: "remember"
                    }, null, 8, ["checked", "onUpdate:checked"]),
                    createVNode("span", { class: "ml-2 text-sm text-gray-600" }, "Remember me")
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  __props.canResetPassword ? (openBlock(), createBlock(unref(Link), {
                    key: 0,
                    href: _ctx.route("password.request"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Forgot your password? ")
                    ]),
                    _: 1
                  }, 8, ["href"])) : createCommentVNode("", true),
                  createVNode(unref(Link), {
                    href: _ctx.route("register"),
                    class: "ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_sfc_main$L, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: false
    });
    const submit = () => {
      form.post(route("register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$x, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$x)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.name
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (_ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature) {
              _push2(`<div class="mt-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$M, { for: "terms" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$T, {
                      id: "terms",
                      checked: unref(form).terms,
                      "onUpdate:checked": ($event) => unref(form).terms = $event,
                      name: "terms",
                      required: ""
                    }, null, _parent3, _scopeId2));
                    _push3(`<div class="ml-2"${_scopeId2}> I agree to the <a target="_blank"${ssrRenderAttr("href", _ctx.route("terms.show"))} class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"${_scopeId2}>Terms of Service</a> and <a target="_blank"${ssrRenderAttr("href", _ctx.route("policy.show"))} class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"${_scopeId2}>Privacy Policy</a></div></div>`);
                    _push3(ssrRenderComponent(_sfc_main$N, {
                      class: "mt-2",
                      message: unref(form).errors.terms
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_sfc_main$T, {
                          id: "terms",
                          checked: unref(form).terms,
                          "onUpdate:checked": ($event) => unref(form).terms = $event,
                          name: "terms",
                          required: ""
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, [
                          createTextVNode(" I agree to the "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("terms.show"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          }, "Terms of Service", 8, ["href"]),
                          createTextVNode(" and "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("policy.show"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          }, "Privacy Policy", 8, ["href"])
                        ])
                      ]),
                      createVNode(_sfc_main$N, {
                        class: "mt-2",
                        message: unref(form).errors.terms
                      }, null, 8, ["message"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("login"),
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Already registered? `);
                } else {
                  return [
                    createTextVNode(" Already registered? ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$M, {
                    for: "name",
                    value: "Name"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "name",
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    type: "text",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.name
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$M, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$M, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$M, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "password_confirmation",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                _ctx.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-4"
                }, [
                  createVNode(_sfc_main$M, { for: "terms" }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode(_sfc_main$T, {
                          id: "terms",
                          checked: unref(form).terms,
                          "onUpdate:checked": ($event) => unref(form).terms = $event,
                          name: "terms",
                          required: ""
                        }, null, 8, ["checked", "onUpdate:checked"]),
                        createVNode("div", { class: "ml-2" }, [
                          createTextVNode(" I agree to the "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("terms.show"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          }, "Terms of Service", 8, ["href"]),
                          createTextVNode(" and "),
                          createVNode("a", {
                            target: "_blank",
                            href: _ctx.route("policy.show"),
                            class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          }, "Privacy Policy", 8, ["href"])
                        ])
                      ]),
                      createVNode(_sfc_main$N, {
                        class: "mt-2",
                        message: unref(form).errors.terms
                      }, null, 8, ["message"])
                    ]),
                    _: 1
                  })
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(unref(Link), {
                    href: _ctx.route("login"),
                    class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Already registered? ")
                    ]),
                    _: 1
                  }, 8, ["href"]),
                  createVNode(_sfc_main$L, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$t
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {
  __name: "ResetPassword",
  __ssrInlineRender: true,
  props: {
    email: String,
    token: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    const submit = () => {
      form.post(route("password.update"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Reset Password" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$x, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$x)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autofocus: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.email
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "password",
              value: "Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "password",
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.password
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              class: "mt-2",
              message: unref(form).errors.password_confirmation
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex items-center justify-end mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Reset Password `);
                } else {
                  return [
                    createTextVNode(" Reset Password ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", null, [
                  createVNode(_sfc_main$M, {
                    for: "email",
                    value: "Email"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "email",
                    modelValue: unref(form).email,
                    "onUpdate:modelValue": ($event) => unref(form).email = $event,
                    type: "email",
                    class: "mt-1 block w-full",
                    required: "",
                    autofocus: "",
                    autocomplete: "username"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.email
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$M, {
                    for: "password",
                    value: "Password"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "password",
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.password
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "mt-4" }, [
                  createVNode(_sfc_main$M, {
                    for: "password_confirmation",
                    value: "Confirm Password"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "password_confirmation",
                    modelValue: unref(form).password_confirmation,
                    "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                    type: "password",
                    class: "mt-1 block w-full",
                    required: "",
                    autocomplete: "new-password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.password_confirmation
                  }, null, 8, ["message"])
                ]),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode(_sfc_main$L, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Reset Password ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {
  __name: "TwoFactorChallenge",
  __ssrInlineRender: true,
  setup(__props) {
    const recovery = ref(false);
    const form = useForm({
      code: "",
      recovery_code: ""
    });
    const recoveryCodeInput = ref(null);
    const codeInput = ref(null);
    const toggleRecovery = async () => {
      recovery.value ^= true;
      await nextTick();
      if (recovery.value) {
        recoveryCodeInput.value.focus();
        form.code = "";
      } else {
        codeInput.value.focus();
        form.recovery_code = "";
      }
    };
    const submit = () => {
      form.post(route("two-factor.login"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Two-factor Confirmation" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$x, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$x)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<!--[--> Please confirm access to your account by entering the authentication code provided by your authenticator application. <!--]-->`);
            } else {
              _push2(`<!--[--> Please confirm access to your account by entering one of your emergency recovery codes. <!--]-->`);
            }
            _push2(`</div><form${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$M, {
                for: "code",
                value: "Code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$I, {
                id: "code",
                ref_key: "codeInput",
                ref: codeInput,
                modelValue: unref(form).code,
                "onUpdate:modelValue": ($event) => unref(form).code = $event,
                type: "text",
                inputmode: "numeric",
                class: "mt-1 block w-full",
                autofocus: "",
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$N, {
                class: "mt-2",
                message: unref(form).errors.code
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$M, {
                for: "recovery_code",
                value: "Recovery Code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$I, {
                id: "recovery_code",
                ref_key: "recoveryCodeInput",
                ref: recoveryCodeInput,
                modelValue: unref(form).recovery_code,
                "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                type: "text",
                class: "mt-1 block w-full",
                autocomplete: "one-time-code"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$N, {
                class: "mt-2",
                message: unref(form).errors.recovery_code
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`<div class="flex items-center justify-end mt-4"${_scopeId}><button type="button" class="text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer"${_scopeId}>`);
            if (!recovery.value) {
              _push2(`<!--[--> Use a recovery code <!--]-->`);
            } else {
              _push2(`<!--[--> Use an authentication code <!--]-->`);
            }
            _push2(`</button>`);
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: ["ml-4", { "opacity-25": unref(form).processing }],
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log in `);
                } else {
                  return [
                    createTextVNode(" Log in ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                  createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                ], 64))
              ]),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                !recovery.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_sfc_main$M, {
                    for: "code",
                    value: "Code"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "code",
                    ref_key: "codeInput",
                    ref: codeInput,
                    modelValue: unref(form).code,
                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                    type: "text",
                    inputmode: "numeric",
                    class: "mt-1 block w-full",
                    autofocus: "",
                    autocomplete: "one-time-code"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.code
                  }, null, 8, ["message"])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$M, {
                    for: "recovery_code",
                    value: "Recovery Code"
                  }),
                  createVNode(_sfc_main$I, {
                    id: "recovery_code",
                    ref_key: "recoveryCodeInput",
                    ref: recoveryCodeInput,
                    modelValue: unref(form).recovery_code,
                    "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                    type: "text",
                    class: "mt-1 block w-full",
                    autocomplete: "one-time-code"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_sfc_main$N, {
                    class: "mt-2",
                    message: unref(form).errors.recovery_code
                  }, null, 8, ["message"])
                ])),
                createVNode("div", { class: "flex items-center justify-end mt-4" }, [
                  createVNode("button", {
                    type: "button",
                    class: "text-sm text-gray-600 hover:text-gray-900 underline cursor-pointer",
                    onClick: withModifiers(toggleRecovery, ["prevent"])
                  }, [
                    !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createTextVNode(" Use a recovery code ")
                    ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(" Use an authentication code ")
                    ], 64))
                  ], 8, ["onClick"]),
                  createVNode(_sfc_main$L, {
                    class: ["ml-4", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log in ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$r
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: String
  },
  setup(__props) {
    const props = __props;
    const form = useForm({});
    const submit = () => {
      form.post(route("verification.send"));
    };
    const verificationLinkSent = computed(() => props.status === "verification-link-sent");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent));
      _push(ssrRenderComponent(AuthenticationCard, null, {
        logo: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$x, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$x)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="mb-4 text-sm text-gray-600"${_scopeId}> Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
            if (verificationLinkSent.value) {
              _push2(`<div class="mb-4 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to the email address you provided in your profile settings. </div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<form${_scopeId}><div class="mt-4 flex items-center justify-between"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Resend Verification Email `);
                } else {
                  return [
                    createTextVNode(" Resend Verification Email ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("profile.show"),
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Edit Profile`);
                } else {
                  return [
                    createTextVNode(" Edit Profile")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(Link), {
              href: _ctx.route("logout"),
              method: "post",
              as: "button",
              class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out `);
                } else {
                  return [
                    createTextVNode(" Log Out ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div></form>`);
          } else {
            return [
              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Before continuing, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. "),
              verificationLinkSent.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mb-4 font-medium text-sm text-green-600"
              }, " A new verification link has been sent to the email address you provided in your profile settings. ")) : createCommentVNode("", true),
              createVNode("form", {
                onSubmit: withModifiers(submit, ["prevent"])
              }, [
                createVNode("div", { class: "mt-4 flex items-center justify-between" }, [
                  createVNode(_sfc_main$L, {
                    class: { "opacity-25": unref(form).processing },
                    disabled: unref(form).processing
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Resend Verification Email ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"]),
                  createVNode("div", null, [
                    createVNode(unref(Link), {
                      href: _ctx.route("profile.show"),
                      class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Edit Profile")
                      ]),
                      _: 1
                    }, 8, ["href"]),
                    createVNode(unref(Link), {
                      href: _ctx.route("logout"),
                      method: "post",
                      as: "button",
                      class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ml-2"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Log Out ")
                      ]),
                      _: 1
                    }, 8, ["href"])
                  ])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 317 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M74.09 30.04V13h-4.14v21H82.1v-3.96h-8.01zM95.379 19v1.77c-1.08-1.35-2.7-2.19-4.89-2.19-3.99 0-7.29 3.45-7.29 7.92s3.3 7.92 7.29 7.92c2.19 0 3.81-.84 4.89-2.19V34h3.87V19h-3.87zm-4.17 11.73c-2.37 0-4.14-1.71-4.14-4.23 0-2.52 1.77-4.23 4.14-4.23 2.4 0 4.17 1.71 4.17 4.23 0 2.52-1.77 4.23-4.17 4.23zM106.628 21.58V19h-3.87v15h3.87v-7.17c0-3.15 2.55-4.05 4.56-3.81V18.7c-1.89 0-3.78.84-4.56 2.88zM124.295 19v1.77c-1.08-1.35-2.7-2.19-4.89-2.19-3.99 0-7.29 3.45-7.29 7.92s3.3 7.92 7.29 7.92c2.19 0 3.81-.84 4.89-2.19V34h3.87V19h-3.87zm-4.17 11.73c-2.37 0-4.14-1.71-4.14-4.23 0-2.52 1.77-4.23 4.14-4.23 2.4 0 4.17 1.71 4.17 4.23 0 2.52-1.77 4.23-4.17 4.23zM141.544 19l-3.66 10.5-3.63-10.5h-4.26l5.7 15h4.41l5.7-15h-4.26zM150.354 28.09h11.31c.09-.51.15-1.02.15-1.59 0-4.41-3.15-7.92-7.59-7.92-4.71 0-7.92 3.45-7.92 7.92s3.18 7.92 8.22 7.92c2.88 0 5.13-1.17 6.54-3.21l-3.12-1.8c-.66.87-1.86 1.5-3.36 1.5-2.04 0-3.69-.84-4.23-2.82zm-.06-3c.45-1.92 1.86-3.03 3.93-3.03 1.62 0 3.24.87 3.72 3.03h-7.65zM164.516 34h3.87V12.1h-3.87V34zM185.248 34.36c3.69 0 6.9-2.01 6.9-6.3V13h-2.1v15.06c0 3.03-2.07 4.26-4.8 4.26-2.19 0-3.93-.78-4.62-2.61l-1.77 1.05c1.05 2.43 3.57 3.6 6.39 3.6zM203.124 18.64c-4.65 0-7.83 3.45-7.83 7.86 0 4.53 3.24 7.86 7.98 7.86 3.03 0 5.34-1.41 6.6-3.45l-1.74-1.02c-.81 1.44-2.46 2.55-4.83 2.55-3.18 0-5.55-1.89-5.97-4.95h13.17c.03-.3.06-.63.06-.93 0-4.11-2.85-7.92-7.44-7.92zm0 1.92c2.58 0 4.98 1.71 5.4 5.01h-11.19c.39-2.94 2.64-5.01 5.79-5.01zM221.224 20.92V19h-4.32v-4.2l-1.98.6V19h-3.15v1.92h3.15v9.09c0 3.6 2.25 4.59 6.3 3.99v-1.74c-2.91.12-4.32.33-4.32-2.25v-9.09h4.32zM225.176 22.93c0-1.62 1.59-2.37 3.15-2.37 1.44 0 2.97.57 3.6 2.1l1.65-.96c-.87-1.86-2.79-3.06-5.25-3.06-3 0-5.13 1.89-5.13 4.29 0 5.52 8.76 3.39 8.76 7.11 0 1.77-1.68 2.4-3.45 2.4-2.01 0-3.57-.99-4.11-2.52l-1.68.99c.75 1.92 2.79 3.45 5.79 3.45 3.21 0 5.43-1.77 5.43-4.32 0-5.52-8.76-3.39-8.76-7.11zM244.603 20.92V19h-4.32v-4.2l-1.98.6V19h-3.15v1.92h3.15v9.09c0 3.6 2.25 4.59 6.3 3.99v-1.74c-2.91.12-4.32.33-4.32-2.25v-9.09h4.32zM249.883 21.49V19h-1.98v15h1.98v-8.34c0-3.72 2.34-4.98 4.74-4.98v-1.92c-1.92 0-3.69.63-4.74 2.73zM263.358 18.64c-4.65 0-7.83 3.45-7.83 7.86 0 4.53 3.24 7.86 7.98 7.86 3.03 0 5.34-1.41 6.6-3.45l-1.74-1.02c-.81 1.44-2.46 2.55-4.83 2.55-3.18 0-5.55-1.89-5.97-4.95h13.17c.03-.3.06-.63.06-.93 0-4.11-2.85-7.92-7.44-7.92zm0 1.92c2.58 0 4.98 1.71 5.4 5.01h-11.19c.39-2.94 2.64-5.01 5.79-5.01zM286.848 19v2.94c-1.26-2.01-3.39-3.3-6.06-3.3-4.23 0-7.74 3.42-7.74 7.86s3.51 7.86 7.74 7.86c2.67 0 4.8-1.29 6.06-3.3V34h1.98V19h-1.98zm-5.91 13.44c-3.33 0-5.91-2.61-5.91-5.94 0-3.33 2.58-5.94 5.91-5.94s5.91 2.61 5.91 5.94c0 3.33-2.58 5.94-5.91 5.94zM309.01 18.64c-1.92 0-3.75.87-4.86 2.73-.84-1.74-2.46-2.73-4.56-2.73-1.8 0-3.42.72-4.59 2.55V19h-1.98v15H295v-8.31c0-3.72 2.16-5.13 4.32-5.13 2.13 0 3.51 1.41 3.51 4.08V34h1.98v-8.31c0-3.72 1.86-5.13 4.17-5.13 2.13 0 3.66 1.41 3.66 4.08V34h1.98v-9.36c0-3.75-2.31-6-5.61-6z" class="fill-black"></path><path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" fill="#6875F5"></path><path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" fill="#6875F5"></path></svg>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ApplicationLogo.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const ApplicationLogo = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$o = {
  __name: "Welcome",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="p-6 lg:p-8 bg-white border-b border-gray-200">`);
      _push(ssrRenderComponent(ApplicationLogo, { class: "block h-12 w-auto" }, null, _parent));
      _push(`<h1 class="mt-8 text-2xl font-medium text-gray-900"> Welcome to your Jetstream application! </h1><p class="mt-6 text-gray-500 leading-relaxed"> Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel ecosystem to be a breath of fresh air. We hope you love it. </p></div><div class="bg-gray-200 bg-opacity-25 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 p-6 lg:p-8"><div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg><h2 class="ml-3 text-xl font-semibold text-gray-900"><a href="https://laravel.com/docs">Documentation</a></h2></div><p class="mt-4 text-gray-500 text-sm leading-relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you&#39;re new to the framework or have previous experience, we recommend reading all of the documentation from beginning to end. </p><p class="mt-4 text-sm"><a href="https://laravel.com/docs" class="inline-flex items-center font-semibold text-indigo-700"> Explore the documentation <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ml-1 w-5 h-5 fill-indigo-500"><path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd"></path></svg></a></p></div><div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path></svg><h2 class="ml-3 text-xl font-semibold text-gray-900"><a href="https://laracasts.com">Laracasts</a></h2></div><p class="mt-4 text-gray-500 text-sm leading-relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p><p class="mt-4 text-sm"><a href="https://laracasts.com" class="inline-flex items-center font-semibold text-indigo-700"> Start watching Laracasts <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="ml-1 w-5 h-5 fill-indigo-500"><path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd"></path></svg></a></p></div><div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path></svg><h2 class="ml-3 text-xl font-semibold text-gray-900"><a href="https://tailwindcss.com/">Tailwind</a></h2></div><p class="mt-4 text-gray-500 text-sm leading-relaxed"> Laravel Jetstream is built with Tailwind, an amazing utility first CSS framework that doesn&#39;t get in your way. You&#39;ll be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your fingertips. </p></div><div><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-6 h-6 stroke-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"></path></svg><h2 class="ml-3 text-xl font-semibold text-gray-900"> Authentication </h2></div><p class="mt-4 text-gray-500 text-sm leading-relaxed"> Authentication and registration views are included with Laravel Jetstream, as well as support for user email verification and resetting forgotten passwords. So, you&#39;re free to get started with what matters most: building your application. </p></div></div></div>`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Welcome.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const _sfc_main$n = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$A, mergeProps({ title: "Dashboard" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Dashboard </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Dashboard ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="py-12"${_scopeId}><div class="max-w-7xl mx-auto sm:px-6 lg:px-8"${_scopeId}><div class="bg-white overflow-hidden shadow-xl sm:rounded-lg"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$o, null, null, _parent2, _scopeId));
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "py-12" }, [
                createVNode("div", { class: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
                  createVNode("div", { class: "bg-white overflow-hidden shadow-xl sm:rounded-lg" }, [
                    createVNode(_sfc_main$o)
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$n
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {
  name: "newAppLayout",
  components: { Link },
  data() {
    return {
      isOpen: false
    };
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({
    id: "app",
    class: "min-h-screen bg-cream text-gray-800 border-b-2"
  }, _attrs))}><div class="container mx-auto"><header class="md:mb-8 md:pt-4 md:py-0 py-4 px-2 flex justify-between items-center select-none"><div class="text-2xl font-semibold flex justify-between items-center">`);
  _push(ssrRenderComponent(_component_Link, { href: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` DATE SPOTS `);
      } else {
        return [
          createTextVNode(" DATE SPOTS ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="text-gray-800 sm:block md:hidden"><div style="${ssrRenderStyle(!$data.isOpen ? null : { display: "none" })}"><svg class="fill-current w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg></div><div style="${ssrRenderStyle($data.isOpen ? null : { display: "none" })}"><svg class="fill-current w-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path></svg></div></div><div class="hidden md:block text-sm">`);
  _push(ssrRenderComponent(_component_Link, {
    href: "/date-spots",
    class: "py-2 px-3 ml-2 hover:bg-rose-700 hover:text-white rounded"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Date Spots `);
      } else {
        return [
          createTextVNode(" Date Spots ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "#",
    class: "py-2 px-3 ml-2 hover:bg-rose-700 hover:text-white rounded"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Placeholder `);
      } else {
        return [
          createTextVNode(" Placeholder ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "#",
    class: "py-2 px-3 ml-2 hover:bg-rose-700 hover:text-white rounded"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Placeholder `);
      } else {
        return [
          createTextVNode(" Placeholder ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    href: "/login",
    class: "py-2 px-3 ml-2 hover:bg-rose-700 bg-roseGold rounded shadow-lg border text-white"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Login `);
      } else {
        return [
          createTextVNode(" Login ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></header>`);
  if ($data.isOpen) {
    _push(`<div class="bg-white px-4 pt-4 select-none border-b md:hidden">`);
    _push(ssrRenderComponent(_component_Link, {
      href: "/date-spots",
      class: "block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Spots `);
        } else {
          return [
            createTextVNode(" Spots ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_Link, {
      href: "#",
      class: "block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Placeholder `);
        } else {
          return [
            createTextVNode(" Placeholder ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_Link, {
      href: "#",
      class: "block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Placeholder `);
        } else {
          return [
            createTextVNode(" Placeholder ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(ssrRenderComponent(_component_Link, {
      href: "#",
      class: "block mb-2 font-semibold text-white py-2 px-3 hover:bg-rose-700 bg-roseGold rounded cursor-pointer"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Login `);
        } else {
          return [
            createTextVNode(" Login ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/newAppLayout.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const NewAppLayout = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$l = {
  name: "AddressForm",
  mounted() {
    let autocomplete;
    let location;
    let addressField = document.getElementById("addressSearchBar");
    const options = {
      types: ["(cities)"],
      componentRestrictions: {
        country: ["nl"]
      }
    };
    autocomplete = new google.maps.places.Autocomplete(
      addressField,
      options
    );
    autocomplete.addListener("place_changed", () => {
      const selectedPlace = autocomplete.getPlace();
      if (selectedPlace.name) {
        location = selectedPlace.name;
        this.$emit("address-updated", location);
      } else {
        console.error("Invalid geometry information for the selected place:", selectedPlace);
      }
    });
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: "addressSearchBar",
    type: "text",
    class: "w-2/3 text-center md:text-left md:w-1/2 px-4 py-2 border rounded-md mr-4 focus:outline-none",
    placeholder: "Enter your location (city)"
  }, _attrs))}>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/AddressForm.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const AddressForm = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$k = {
  name: "SearchButton",
  props: {
    location: Object
  },
  methods: {
    findDateSpots() {
      if (!this.location) {
        console.error("Please provide a valid location.");
        return;
      }
      this.$inertia.visit(`/date-spots/${this.location}`);
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "px-6 py-2 text-white bg-roseGold rounded-md hover:bg-rose-700 focus:outline-none" }, _attrs))}> Find Date Spots </button>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/SearchButton.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const SearchButton = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$j = {
  name: "Hero",
  components: { SearchButton, AddressForm },
  data() {
    return {
      location: null
    };
  },
  methods: {
    handleAddressUpdated(place) {
      this.location = place;
      console.log("Address updated:", this.location);
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_AddressForm = resolveComponent("AddressForm");
  const _component_SearchButton = resolveComponent("SearchButton");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex grow items-center justify-center bg-cream" }, _attrs))}><div class="mb-40 inset-0 flex items-center justify-center"><div class="text-center"><h1 class="text-2xl md:text-3xl mb-8 font-serif max-w-3xl mx-auto"> Discover Memorable Date Spots Near You </h1><div class="md:max-w-2xl mx-auto"><p class="text-gray-800"> Elevate Your Date Nights with Date Spots - Your Perfect Guide to Romantic Adventures </p></div><div class="mb-6 mt-12"><div class="flex items-center justify-center flex-wrap sm:flex-row flex-col">`);
  _push(ssrRenderComponent(_component_AddressForm, { onAddressUpdated: $options.handleAddressUpdated }, null, _parent));
  _push(ssrRenderComponent(_component_SearchButton, {
    location: $data.location,
    class: "px-6 py-2 text-white bg-roseGold rounded-md hover:bg-rose-700 focus:outline-none sm:mt-0 mt-4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Find Date Spots `);
      } else {
        return [
          createTextVNode(" Find Date Spots ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/Hero.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Hero = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$i = {
  name: "HeartRatingComponent",
  props: {
    rating: Number
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><!--[-->`);
  ssrRenderList(5, (i) => {
    _push(`<svg class="${ssrRenderClass([{ "text-rose-700": i <= $props.rating, "text-gray-300": i > $props.rating }, "w-4 h-4 lg:w-6 lg:h-6"])}" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path stroke="none" d="M12 21.35l-1.45-1.32C5.4 15.54 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 7.04-8.55 11.54L12 21.35z"></path><path stroke="none" d="M12 21.35l1.45-1.32"></path></svg>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HeartRatingComponent.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const HeartRatingComponent = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$8]]);
const dateSpotDetailMixin = {
  methods: {
    getStaticMapUrl() {
      const baseUrl = "https://maps.googleapis.com/maps/api/staticmap";
      const center = `${this.dateSpot.lat},${this.dateSpot.lng}`;
      const markers = `color:red|label:A|${this.dateSpot.lat},${this.dateSpot.lng}`;
      const googleApiKey = this.$inertia.page.props.GOOGLE_API_KEY;
      return `${baseUrl}?center=${center}&zoom=15&size=370x147&maptype=roadmap&markers=${markers}&key=${googleApiKey}`;
    }
  },
  computed: {
    formattedPosition() {
      return `<span class="font-bold">#${this.dateSpot.position}</span> of ${this.totalDateSpots} Date Spots in ${this.dateSpot.city}`;
    },
    getDirectionsLink() {
      return `https://www.google.com/maps/dir/?api=1&destination=${this.dateSpot.lat},${this.dateSpot.lng}`;
    },
    formattedAddress() {
      return `${this.dateSpot.house_number} ${this.dateSpot.street_name}, ${this.dateSpot.postal_code} ${this.dateSpot.city}`;
    },
    formattedTypes() {
      const types = this.dateSpot.types.map((type) => type.name);
      if (types.length === 0) {
        return "No types available";
      }
      return types.join(", ");
    },
    formattedCategories() {
      const categories = this.dateSpot.types.reduce((acc, type) => {
        if (type.categories.length > 0) {
          const categoryNames = type.categories.map((category) => category.name);
          acc.push(...categoryNames);
        }
        return acc;
      }, []);
      if (categories.length === 0) {
        return "No categories available";
      }
      return categories.join(", ");
    },
    formattedSubCategories() {
      const subCategories = this.dateSpot.types.reduce((acc, type) => {
        if (type.categories.length > 0) {
          const subCategoryNames = type.categories.reduce((subAcc, category) => {
            if (category.subCategories.length > 0) {
              subAcc.push(...category.subCategories.map((subCategory) => subCategory.name));
            }
            return subAcc;
          }, []);
          acc.push(...subCategoryNames);
        }
        return acc;
      }, []);
      if (subCategories.length === 0) {
        return "No subcategories available";
      }
      return subCategories.join(", ");
    }
  }
};
const _sfc_main$h = {
  name: "Header",
  components: { HeartRatingComponent },
  props: {
    dateSpot: Object,
    totalDateSpots: Number
  },
  mixins: [dateSpotDetailMixin]
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeartRatingComponent = resolveComponent("HeartRatingComponent");
  _push(`<!--[--><div class="flex justify-between bg-white p-2"><div><h1 class="text-2xl font-bold">${ssrInterpolate($props.dateSpot.name)}</h1></div><div class="hidden md:flex items-center space-x-2"><a class="text-roseGold hover:underline flex items-center space-x-1" href="#" target="_blank"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M14.288 6.793L6.69 14.368l-.816 3.746 3.724-.839 7.588-7.583-2.9-2.9zm3.96 1.84l-2.898-2.9.556-.554A2.318 2.318 0 0117.52 4.5c.378 0 .73.104 1.031.315l.01.007.012.008c1.12.757 1.221 2.26.326 3.151l-.65.651zm-7.896 10.01l-5.99 1.35C4.34 20 4.319 20 4.298 20a.297.297 0 01-.29-.36l1.31-6.023 9.529-9.5A3.818 3.818 0 0117.52 3c.66 0 1.318.184 1.893.587a3.536 3.536 0 01.546 5.457l-9.607 9.599z"></path></svg><span>Review</span></a><div class="flex items-center space-x-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"><path d="M19.665 6.346a5.018 5.018 0 00-3.417-1.34c-1.27 0-2.491.478-3.417 1.34l-.84.802-.859-.812A5.019 5.019 0 007.72 5a5.019 5.019 0 00-3.412 1.336c-1.899 1.773-1.579 4.508-.01 6.43A101.233 101.233 0 0011.99 20s5.995-5.143 7.674-7.224c1.679-2.08 1.879-4.657 0-6.43z"></path><path clip-rule="evenodd" d="M3.968 5.969A5.519 5.519 0 017.72 4.5c1.392 0 2.734.525 3.752 1.469l.004.003.513.486.501-.479a5.519 5.519 0 013.758-1.474c1.395 0 2.739.527 3.758 1.474l.002.003c1.042.984 1.519 2.207 1.49 3.475-.027 1.257-.55 2.525-1.444 3.633-.869 1.077-2.82 2.91-4.52 4.45a184.435 184.435 0 01-3.149 2.78l-.068.06-.326-.38.326.38-.323.277-.326-.275a101.716 101.716 0 01-7.731-7.27l-.014-.014-.013-.015c-1.673-2.051-2.098-5.1.056-7.113l.002-.001zm8.02 13.373a182.874 182.874 0 002.874-2.544c1.718-1.553 3.604-3.332 4.414-4.336.784-.972 1.201-2.033 1.223-3.027.022-.984-.34-1.935-1.176-2.725a4.269 4.269 0 00-2.904-1.138 4.269 4.269 0 00-2.903 1.136l-1.35 1.292-1.375-1.3a4.269 4.269 0 00-2.9-1.133 4.269 4.269 0 00-2.901 1.135c-1.507 1.408-1.353 3.659.042 5.385a100.45 100.45 0 007.316 6.907z" fill-rule="evenodd"></path></svg><span>Save</span></div><div class="share"><span><div class="tSJmJ S5 H4 _S qNoXj"><span><span class="ui_icon share LWEmz"></span><span class="dScTn">Share</span></span></div></span></div></div></div><div class="flex flex-col bg-white pb-2 pl-2 pr-2"><div class="md:flex"><div class="flex flex-row gap-1">`);
  _push(ssrRenderComponent(_component_HeartRatingComponent, {
    rating: $props.dateSpot.rating
  }, null, _parent));
  _push(`<b class="md:pb-2 text-md">${ssrInterpolate($props.dateSpot.reviews_count)} reviews</b></div><div class="hidden md:block border-l mx-2 my-1 h-4"></div><p class="hidden md:block">${_ctx.formattedPosition}</p><div class="hidden md:block border-l mx-2 my-1 h-4"></div><div class="flex flex-row"><p>${ssrInterpolate(_ctx.formattedCategories)}</p></div></div><div class="hidden md:flex flex-row text-sm"><div class="flex items-center space-x-1"><svg class="d Vb icjEL" height="20px" viewBox="0 0 24 24" width="20px"><path d="M12 2C7.745 2 4.27 5.475 4.27 9.73c0 4.539 4.539 9.056 6.971 11.486L12 22l.759-.761c2.433-2.453 6.972-6.97 6.972-11.509C19.73 5.475 16.256 2 12 2zm0 10.986c-1.93 0-3.5-1.569-3.5-3.5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.931-1.57 3.5-3.5 3.5z"></path></svg><a${ssrRenderAttr("href", _ctx.getDirectionsLink)} target="_blank" class="hover:underline">${ssrInterpolate(_ctx.formattedAddress)}</a></div><div class="border-l mx-2 my-1 h-4"></div><div class="flex items-center space-x-1"><svg class="d Vb icjEL" height="20px" viewBox="0 0 24 24" width="20px"><path clip-rule="evenodd" d="M6.525 2.011l5.173 5.176-1.826 2.725.096.207c.167.348.427.829.8 1.347.707.986 1.796 2.082 3.383 2.7l3.168-1.354 4.671 4.674-3.152 4.2-.32.038-.087-.745.086.745h-.004l-.006.001-.018.002a5.117 5.117 0 01-.265.017c-.175.007-.424.01-.737-.004a12.514 12.514 0 01-2.557-.399c-2.109-.547-4.89-1.794-7.668-4.574-2.781-2.783-4.037-5.574-4.591-7.69a12.69 12.69 0 01-.409-2.568 8.769 8.769 0 01.003-.946l.005-.06.002-.018V5.48l.001-.002s0-.002.746.08l-.746-.082.036-.325 4.216-3.139zM3.751 5.947c-.002.127 0 .29.01.487.026.538.114 1.318.361 2.262.493 1.884 1.625 4.433 4.2 7.01 2.573 2.575 5.111 3.698 6.984 4.184.94.243 1.716.327 2.25.351.196.01.359.01.485.008l1.969-2.623-3.035-3.036-2.773 1.185-.272-.093c-2.115-.726-3.517-2.137-4.381-3.341a10.51 10.51 0 01-.934-1.574 8.35 8.35 0 01-.29-.682l-.004-.012-.002-.005v-.001s0-.002.71-.242l-.71.24-.12-.35 1.567-2.339L6.38 3.99 3.75 5.947z" fill-rule="evenodd"></path></svg><a class="hover:underline"${ssrRenderAttr("href", "tel:" + $props.dateSpot.phone_number)}>${ssrInterpolate($props.dateSpot.phone_number)}</a></div><div class="border-l mx-2 my-1 h-4"></div><div class="flex items-center space-x-1"><svg class="d Vb icjEL" height="20px" viewBox="0 0 24 24" width="20px"><path clip-rule="evenodd" d="M22.507 17.952c0-.416-.369-.605-.45-.643a1.432 1.432 0 00-.338-.105 4.647 4.647 0 00-.595-.064c-.403-.022-.88-.022-1.195-.022H4.267c-.776 0-1.293.01-1.621.04-.152.015-.34.04-.507.103a.912.912 0 00-.338.217.683.683 0 00-.196.473v.667h20.902v-.666zM18.287 5.893H5.809v8.447h12.478V5.893zm-13.978-1.5V15.84h15.478V4.393H4.309z" fill-rule="evenodd"></path></svg><a class="hover:underline" target="_blank" href="{{dateSpot.website_url}}"> Website </a></div></div></div><!--]-->`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DateSpotDetailHeader.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const DateSpotDetailHeader = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$g = {
  name: "DateSpotCard",
  components: { HeartRatingComponent, Link },
  props: {
    dateSpotId: Number,
    dateSpotName: String,
    dateSpotType: Array,
    dateSpotTagline: String,
    city: String,
    imageSrc: String,
    reviewsCount: Number,
    rating: Number
  },
  data() {
    return {
      imageURL: "https://lh3.googleusercontent.com/places/ANXAkqHMtdv-0Lgtb08rKatMMCJ97kCQnm0QlQAiOWNy90yhK7BWs7E3ATHnTs65S0Lt38ZV4hIEY0bIAW_eV9NgkDjnVWf80qvSCtc=s1600-w4032"
    };
  },
  computed: {
    dateSpotLink() {
      const formattedName = this.dateSpotName.replace(/\s+/g, "-");
      return `/date-spot/${this.dateSpotId}-${formattedName}`;
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_HeartRatingComponent = resolveComponent("HeartRatingComponent");
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-lg shadow-md" }, _attrs))}><div class="w-full md:flex md:flex-col"><div><img${ssrRenderAttr("src", $data.imageURL)} alt="Spot Image" class="w-full h-32 object-cover rounded-t-lg"></div><div class="p-4"><div class="flex justify-between"><h2 class="text-xl font-semibold">${ssrInterpolate($props.dateSpotName)}</h2>`);
  _push(ssrRenderComponent(_component_HeartRatingComponent, { rating: $props.rating }, null, _parent));
  _push(`</div><div class="flex justify-between"><p class="text-gray-400">${ssrInterpolate($props.city)}</p><p class="text-sm text-gray-400 md:text-left">${ssrInterpolate($props.reviewsCount)} reviews</p></div><div class="flex justify-center mt-4"><p class="text-gray-600 text-center md:text-left mb-2">&quot;${ssrInterpolate($props.dateSpotTagline)}&quot;</p></div>`);
  _push(ssrRenderComponent(_component_Link, {
    href: $options.dateSpotLink,
    class: "mt-4 bg-roseGold text-white py-2 px-4 rounded-md hover:bg-rose-700"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Explore Date Spots `);
      } else {
        return [
          createTextVNode(" Explore Date Spots ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/DateSpotCard.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const DateSpotCard = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$f = {
  name: "DateSpotDetail",
  components: { HeartRatingComponent, DateSpotCard, Hero, NewAppLayout, DateSpotDetailHeader, Link },
  props: {
    dateSpot: Object,
    totalDateSpots: Number
  },
  mixins: [dateSpotDetailMixin],
  created() {
    console.log(this.dateSpot);
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NewAppLayout = resolveComponent("NewAppLayout");
  const _component_DateSpotDetailHeader = resolveComponent("DateSpotDetailHeader");
  const _component_Link = resolveComponent("Link");
  const _component_heart_rating_component = resolveComponent("heart-rating-component");
  _push(ssrRenderComponent(_component_NewAppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container mx-auto flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_DateSpotDetailHeader, {
          "date-spot": $props.dateSpot,
          "total-date-spots": $props.totalDateSpots
        }, null, _parent2, _scopeId));
        _push2(`<div${_scopeId}><div class="h-1/4 md:pb-2 md:pt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0.5"${_scopeId}><!--[-->`);
        ssrRenderList($props.dateSpot.images, (image, index) => {
          _push2(`<img${ssrRenderAttr("src", image.url)}${ssrRenderAttr("alt", "Image " + (index + 1))} class="${ssrRenderClass({ "hidden md:block": index !== 0, "w-full": true, "h-64": true, "object-cover": true })}"${_scopeId}>`);
        });
        _push2(`<!--]--></div><div class="md:hidden grid grid-cols-4 gap-4 bg-white p-4"${_scopeId}><a${ssrRenderAttr("href", "tel:" + $props.dateSpot.phone_number)} class="flex flex-col items-center text-gray-600 text-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"${_scopeId}></path></svg><div class=""${_scopeId}>Call</div></a><a${ssrRenderAttr("href", _ctx.getDirectionsLink)} class="flex flex-col items-center text-gray-600"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"${_scopeId}></path></svg><div class=""${_scopeId}>Route</div></a><a${ssrRenderAttr("href", $props.dateSpot.website)} class="flex flex-col items-center text-gray-600 hqTWt" target="_blank"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"${_scopeId}></path></svg><div class=""${_scopeId}>Website</div></a>`);
        _push2(ssrRenderComponent(_component_Link, {
          href: "#",
          class: "flex flex-col items-center text-gray-600 hqTWt",
          target: "_blank"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"${_scopeId2}></path></svg><div class=""${_scopeId2}>Review</div>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  })
                ])),
                createVNode("div", { class: "" }, "Review")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div><div class="h-1/4 grid grid-cols-1 lg:grid-cols-3 md:gap-3.5 gap-2"${_scopeId}><div class="bg-white p-4 md:my-2 mt-2"${_scopeId}><p class="font-semibold pb-4"${_scopeId}>Reviews and Ratings:</p><div class="flex flex-row"${_scopeId}><div class="text-xl font-bold pr-2"${_scopeId}>${ssrInterpolate($props.dateSpot.rating)}</div><div class="flex items-center pr-2"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_heart_rating_component, {
          rating: $props.dateSpot.rating
        }, null, _parent2, _scopeId));
        _push2(`<span class="ml-1 font-bold text-sm"${_scopeId}>${ssrInterpolate($props.dateSpot.reviews_count)} reviews</span></div></div><p class="text-gray-600 mt-2"${_scopeId}>${_ctx.formattedPosition}</p><hr class="my-4 border-gray-200"${_scopeId}><div${_scopeId}><p class="font-semibold"${_scopeId}>Ratings:</p><ul${_scopeId}><li${_scopeId}>Atmosphere</li><li${_scopeId}>Value</li><li${_scopeId}>Service</li></ul></div></div><div class="bg-white p-4 md:my-2"${_scopeId}><h2 class="text-lg font-semibold pb-4"${_scopeId}>Details:</h2><p class="text-md font-bold"${_scopeId}>Price Range</p><div class="text-gray-600 mt-2"${_scopeId}>$0 - $100</div><p class="text-md font-bold mt-2"${_scopeId}>Type</p><div class="text-gray-600 mt-2"${_scopeId}>${ssrInterpolate(_ctx.formattedTypes)}</div><p class="text-md font-bold mt-2"${_scopeId}>Categories</p><div class="text-gray-600 mt-2"${_scopeId}>${ssrInterpolate(_ctx.formattedCategories)}</div><p class="text-md font-bold mt-2"${_scopeId}>Sub Categories</p><div class="text-gray-600 mt-2"${_scopeId}>${ssrInterpolate(_ctx.formattedSubCategories)}</div></div><div class="bg-white p-4 md:my-2"${_scopeId}><h2 class="text-lg font-semibold pb-4"${_scopeId}>Contact and Location</h2><img${ssrRenderAttr("src", _ctx.getStaticMapUrl())} alt="Google Static Map"${_scopeId}><a${ssrRenderAttr("href", _ctx.getDirectionsLink)} class="flex flex-row py-2 hover:underline" target="_blank"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"${_scopeId}></path><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"${_scopeId}></path></svg><p class="pl-2"${_scopeId}>${ssrInterpolate(_ctx.formattedAddress)}</p></a><div class="flex flex-row py-2 w-3/4 justify-between"${_scopeId}><a${ssrRenderAttr("href", $props.dateSpot.website)} class="flex flex-row pr-2 hover:underline" target="_blank"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"${_scopeId}></path></svg><p class="pl-2"${_scopeId}>Website</p></a><a${ssrRenderAttr("href", "mailto:" + $props.dateSpot.email)} class="flex flex-row px-2 hover:underline"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"${_scopeId}></path></svg><p class="pl-2"${_scopeId}>Email</p></a></div><a${ssrRenderAttr("href", "tel:" + $props.dateSpot.phone_number)} class="flex flex-row py-2 hover:underline"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"${_scopeId}></path></svg><div class="pl-2"${_scopeId}>Phone Number</div></a></div></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "container mx-auto flex flex-col" }, [
            createVNode(_component_DateSpotDetailHeader, {
              "date-spot": $props.dateSpot,
              "total-date-spots": $props.totalDateSpots
            }, null, 8, ["date-spot", "total-date-spots"]),
            createVNode("div", null, [
              createVNode("div", { class: "h-1/4 md:pb-2 md:pt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-0.5" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.dateSpot.images, (image, index) => {
                  return openBlock(), createBlock("img", {
                    key: index,
                    src: image.url,
                    alt: "Image " + (index + 1),
                    class: { "hidden md:block": index !== 0, "w-full": true, "h-64": true, "object-cover": true }
                  }, null, 10, ["src", "alt"]);
                }), 128))
              ]),
              createVNode("div", { class: "md:hidden grid grid-cols-4 gap-4 bg-white p-4" }, [
                createVNode("a", {
                  href: "tel:" + $props.dateSpot.phone_number,
                  class: "flex flex-col items-center text-gray-600 text-center"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "w-6 h-6"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    })
                  ])),
                  createVNode("div", { class: "" }, "Call")
                ], 8, ["href"]),
                createVNode("a", {
                  href: _ctx.getDirectionsLink,
                  class: "flex flex-col items-center text-gray-600"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "w-6 h-6"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    })
                  ])),
                  createVNode("div", { class: "" }, "Route")
                ], 8, ["href"]),
                createVNode("a", {
                  href: $props.dateSpot.website,
                  class: "flex flex-col items-center text-gray-600 hqTWt",
                  target: "_blank"
                }, [
                  (openBlock(), createBlock("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    "stroke-width": "1.5",
                    stroke: "currentColor",
                    class: "w-6 h-6"
                  }, [
                    createVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                    })
                  ])),
                  createVNode("div", { class: "" }, "Website")
                ], 8, ["href"]),
                createVNode(_component_Link, {
                  href: "#",
                  class: "flex flex-col items-center text-gray-600 hqTWt",
                  target: "_blank"
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      class: "w-6 h-6"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      })
                    ])),
                    createVNode("div", { class: "" }, "Review")
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "h-1/4 grid grid-cols-1 lg:grid-cols-3 md:gap-3.5 gap-2" }, [
                createVNode("div", { class: "bg-white p-4 md:my-2 mt-2" }, [
                  createVNode("p", { class: "font-semibold pb-4" }, "Reviews and Ratings:"),
                  createVNode("div", { class: "flex flex-row" }, [
                    createVNode("div", { class: "text-xl font-bold pr-2" }, toDisplayString($props.dateSpot.rating), 1),
                    createVNode("div", { class: "flex items-center pr-2" }, [
                      createVNode(_component_heart_rating_component, {
                        rating: $props.dateSpot.rating
                      }, null, 8, ["rating"]),
                      createVNode("span", { class: "ml-1 font-bold text-sm" }, toDisplayString($props.dateSpot.reviews_count) + " reviews", 1)
                    ])
                  ]),
                  createVNode("p", {
                    innerHTML: _ctx.formattedPosition,
                    class: "text-gray-600 mt-2"
                  }, null, 8, ["innerHTML"]),
                  createVNode("hr", { class: "my-4 border-gray-200" }),
                  createVNode("div", null, [
                    createVNode("p", { class: "font-semibold" }, "Ratings:"),
                    createVNode("ul", null, [
                      createVNode("li", null, "Atmosphere"),
                      createVNode("li", null, "Value"),
                      createVNode("li", null, "Service")
                    ])
                  ])
                ]),
                createVNode("div", { class: "bg-white p-4 md:my-2" }, [
                  createVNode("h2", { class: "text-lg font-semibold pb-4" }, "Details:"),
                  createVNode("p", { class: "text-md font-bold" }, "Price Range"),
                  createVNode("div", { class: "text-gray-600 mt-2" }, "$0 - $100"),
                  createVNode("p", { class: "text-md font-bold mt-2" }, "Type"),
                  createVNode("div", { class: "text-gray-600 mt-2" }, toDisplayString(_ctx.formattedTypes), 1),
                  createVNode("p", { class: "text-md font-bold mt-2" }, "Categories"),
                  createVNode("div", { class: "text-gray-600 mt-2" }, toDisplayString(_ctx.formattedCategories), 1),
                  createVNode("p", { class: "text-md font-bold mt-2" }, "Sub Categories"),
                  createVNode("div", { class: "text-gray-600 mt-2" }, toDisplayString(_ctx.formattedSubCategories), 1)
                ]),
                createVNode("div", { class: "bg-white p-4 md:my-2" }, [
                  createVNode("h2", { class: "text-lg font-semibold pb-4" }, "Contact and Location"),
                  createVNode("img", {
                    src: _ctx.getStaticMapUrl(),
                    alt: "Google Static Map"
                  }, null, 8, ["src"]),
                  createVNode("a", {
                    href: _ctx.getDirectionsLink,
                    class: "flex flex-row py-2 hover:underline",
                    target: "_blank"
                  }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      class: "w-6 h-6"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      }),
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      })
                    ])),
                    createVNode("p", { class: "pl-2" }, toDisplayString(_ctx.formattedAddress), 1)
                  ], 8, ["href"]),
                  createVNode("div", { class: "flex flex-row py-2 w-3/4 justify-between" }, [
                    createVNode("a", {
                      href: $props.dateSpot.website,
                      class: "flex flex-row pr-2 hover:underline",
                      target: "_blank"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        class: "w-6 h-6"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        })
                      ])),
                      createVNode("p", { class: "pl-2" }, "Website")
                    ], 8, ["href"]),
                    createVNode("a", {
                      href: "mailto:" + $props.dateSpot.email,
                      class: "flex flex-row px-2 hover:underline"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor",
                        class: "w-6 h-6"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        })
                      ])),
                      createVNode("p", { class: "pl-2" }, "Email")
                    ], 8, ["href"])
                  ]),
                  createVNode("a", {
                    href: "tel:" + $props.dateSpot.phone_number,
                    class: "flex flex-row py-2 hover:underline"
                  }, [
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      "stroke-width": "1.5",
                      stroke: "currentColor",
                      class: "w-6 h-6"
                    }, [
                      createVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                      })
                    ])),
                    createVNode("div", { class: "pl-2" }, "Phone Number")
                  ], 8, ["href"])
                ])
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DateSpotDetail.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const DateSpotDetail = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DateSpotDetail
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {
  name: "DateSpots",
  components: { DateSpotCard, NewAppLayout },
  props: {
    dateSpots: Object,
    city: String
  }
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NewAppLayout = resolveComponent("NewAppLayout");
  const _component_DateSpotCard = resolveComponent("DateSpotCard");
  _push(ssrRenderComponent(_component_NewAppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="container mx-auto flex"${_scopeId}><div class="hidden md:block w-1/4 p-4 bg-gray-100"${_scopeId}><h2 class="text-lg font-semibold mb-4"${_scopeId}>Settings</h2><label for="setting-1"${_scopeId}>Setting 1</label><input id="setting-1" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.setting1) ? ssrLooseContain(_ctx.setting1, null) : _ctx.setting1) ? " checked" : ""}${_scopeId}></div><div class="w-full md:w-3/4 p-4 md:pl-0"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2"${_scopeId}><!--[-->`);
        ssrRenderList($props.dateSpots, (dateSpot) => {
          _push2(ssrRenderComponent(_component_DateSpotCard, {
            key: dateSpot.id,
            "date-spot-type": dateSpot.types,
            "date-spot-id": dateSpot.id,
            "date-spot-name": dateSpot.name,
            "date-spot-tagline": dateSpot.tagline,
            "image-src": dateSpot.photo_url,
            city: dateSpot.city,
            rating: dateSpot.rating,
            "reviews-count": dateSpot.reviews_count
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "container mx-auto flex" }, [
            createVNode("div", { class: "hidden md:block w-1/4 p-4 bg-gray-100" }, [
              createVNode("h2", { class: "text-lg font-semibold mb-4" }, "Settings"),
              createVNode("label", { for: "setting-1" }, "Setting 1"),
              withDirectives(createVNode("input", {
                id: "setting-1",
                type: "checkbox",
                "onUpdate:modelValue": ($event) => _ctx.setting1 = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelCheckbox, _ctx.setting1]
              ])
            ]),
            createVNode("div", { class: "w-full md:w-3/4 p-4 md:pl-0" }, [
              createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.dateSpots, (dateSpot) => {
                  return openBlock(), createBlock(_component_DateSpotCard, {
                    key: dateSpot.id,
                    "date-spot-type": dateSpot.types,
                    "date-spot-id": dateSpot.id,
                    "date-spot-name": dateSpot.name,
                    "date-spot-tagline": dateSpot.tagline,
                    "image-src": dateSpot.photo_url,
                    city: dateSpot.city,
                    rating: dateSpot.rating,
                    "reviews-count": dateSpot.reviews_count
                  }, null, 8, ["date-spot-type", "date-spot-id", "date-spot-name", "date-spot-tagline", "image-src", "city", "rating", "reviews-count"]);
                }), 128))
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DateSpots.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const DateSpots = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DateSpots
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  name: "DateSpotsCity",
  components: { DateSpotCard, NewAppLayout },
  data() {
    return {
      isFilterVisible: false
    };
  },
  props: {
    dateSpots: Object,
    city: String
  },
  methods: {
    toggleFilter() {
      this.isFilterVisible = !this.isFilterVisible;
    },
    saveAndCloseFilter() {
      this.toggleFilter();
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NewAppLayout = resolveComponent("NewAppLayout");
  const _component_DateSpotCard = resolveComponent("DateSpotCard");
  _push(ssrRenderComponent(_component_NewAppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="md:container md:mx-auto md:flex"${_scopeId}><div class="hidden md:block w-1/4 p-4 bg-gray-100"${_scopeId}><h2 class="text-lg font-semibold mb-4"${_scopeId}>Settings</h2><label for="setting-1"${_scopeId}>Setting 1</label><input id="setting-1" type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.setting1) ? ssrLooseContain(_ctx.setting1, null) : _ctx.setting1) ? " checked" : ""}${_scopeId}></div><div class="block md:hidden"${_scopeId}><button class="w-full bg-roseGold text-white px-4 py-2 rounded flex items-center justify-center"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"${_scopeId}></path></svg> Filter </button></div><div style="${ssrRenderStyle($data.isFilterVisible ? null : { display: "none" })}" class="absolute top-0 left-0 h-full w-full bg-white flex flex-col space-y-12"${_scopeId}><div class="absolute top-2 right-2 p-2"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"${_scopeId}></path></svg></div><div class="bg-white rounded"${_scopeId}><p class="pl-4 text-lg font-bold"${_scopeId}>Filters</p><hr class="w-full m-2"${_scopeId}><div class="pl-6"${_scopeId}><p class="text-md font-semibold"${_scopeId}>Categories</p><hr class="w-full m-2"${_scopeId}><label${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.filterOption1) ? ssrLooseContain(_ctx.filterOption1, null) : _ctx.filterOption1) ? " checked" : ""}${_scopeId}> Option 1 </label><label${_scopeId}><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(_ctx.filterOption2) ? ssrLooseContain(_ctx.filterOption2, null) : _ctx.filterOption2) ? " checked" : ""}${_scopeId}> Option 2 </label><div class="mt-4 flex justify-between"${_scopeId}><button class="bg-green-500 text-white px-3 py-1 rounded"${_scopeId}> Save and Close </button><button class="bg-red-500 text-white px-3 py-1 rounded"${_scopeId}> Close without Saving </button></div></div></div></div><div class="w-full md:w-3/4 p-4 md:pl-0"${_scopeId}><div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2"${_scopeId}><!--[-->`);
        ssrRenderList($props.dateSpots, (dateSpot) => {
          _push2(ssrRenderComponent(_component_DateSpotCard, {
            key: dateSpot.id,
            "date-spot-type": dateSpot.types,
            "date-spot-id": dateSpot.id,
            "date-spot-name": dateSpot.name,
            "date-spot-tagline": dateSpot.tagline,
            "image-src": dateSpot.photo_url,
            city: dateSpot.city,
            rating: dateSpot.rating,
            "reviews-count": dateSpot.reviews_count
          }, null, _parent2, _scopeId));
        });
        _push2(`<!--]--></div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "md:container md:mx-auto md:flex" }, [
            createVNode("div", { class: "hidden md:block w-1/4 p-4 bg-gray-100" }, [
              createVNode("h2", { class: "text-lg font-semibold mb-4" }, "Settings"),
              createVNode("label", { for: "setting-1" }, "Setting 1"),
              withDirectives(createVNode("input", {
                id: "setting-1",
                type: "checkbox",
                "onUpdate:modelValue": ($event) => _ctx.setting1 = $event
              }, null, 8, ["onUpdate:modelValue"]), [
                [vModelCheckbox, _ctx.setting1]
              ])
            ]),
            createVNode("div", { class: "block md:hidden" }, [
              createVNode("button", {
                onClick: $options.toggleFilter,
                class: "w-full bg-roseGold text-white px-4 py-2 rounded flex items-center justify-center"
              }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6 mr-2"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  })
                ])),
                createTextVNode(" Filter ")
              ], 8, ["onClick"])
            ]),
            withDirectives(createVNode("div", { class: "absolute top-0 left-0 h-full w-full bg-white flex flex-col space-y-12" }, [
              createVNode("div", {
                class: "absolute top-2 right-2 p-2",
                onClick: $options.toggleFilter
              }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  "stroke-width": "1.5",
                  stroke: "currentColor",
                  class: "w-6 h-6"
                }, [
                  createVNode("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    d: "M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  })
                ]))
              ], 8, ["onClick"]),
              createVNode("div", { class: "bg-white rounded" }, [
                createVNode("p", { class: "pl-4 text-lg font-bold" }, "Filters"),
                createVNode("hr", { class: "w-full m-2" }),
                createVNode("div", { class: "pl-6" }, [
                  createVNode("p", { class: "text-md font-semibold" }, "Categories"),
                  createVNode("hr", { class: "w-full m-2" }),
                  createVNode("label", null, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": ($event) => _ctx.filterOption1 = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, _ctx.filterOption1]
                    ]),
                    createTextVNode(" Option 1 ")
                  ]),
                  createVNode("label", null, [
                    withDirectives(createVNode("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": ($event) => _ctx.filterOption2 = $event
                    }, null, 8, ["onUpdate:modelValue"]), [
                      [vModelCheckbox, _ctx.filterOption2]
                    ]),
                    createTextVNode(" Option 2 ")
                  ]),
                  createVNode("div", { class: "mt-4 flex justify-between" }, [
                    createVNode("button", {
                      onClick: $options.saveAndCloseFilter,
                      class: "bg-green-500 text-white px-3 py-1 rounded"
                    }, " Save and Close ", 8, ["onClick"]),
                    createVNode("button", {
                      onClick: $options.toggleFilter,
                      class: "bg-red-500 text-white px-3 py-1 rounded"
                    }, " Close without Saving ", 8, ["onClick"])
                  ])
                ])
              ])
            ], 512), [
              [vShow, $data.isFilterVisible]
            ]),
            createVNode("div", { class: "w-full md:w-3/4 p-4 md:pl-0" }, [
              createVNode("div", { class: "grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2" }, [
                (openBlock(true), createBlock(Fragment, null, renderList($props.dateSpots, (dateSpot) => {
                  return openBlock(), createBlock(_component_DateSpotCard, {
                    key: dateSpot.id,
                    "date-spot-type": dateSpot.types,
                    "date-spot-id": dateSpot.id,
                    "date-spot-name": dateSpot.name,
                    "date-spot-tagline": dateSpot.tagline,
                    "image-src": dateSpot.photo_url,
                    city: dateSpot.city,
                    rating: dateSpot.rating,
                    "reviews-count": dateSpot.reviews_count
                  }, null, 8, ["date-spot-type", "date-spot-id", "date-spot-name", "date-spot-tagline", "image-src", "city", "rating", "reviews-count"]);
                }), 128))
              ])
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/DateSpotsCity.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const DateSpotsCity = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$3]]);
const __vite_glob_0_12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DateSpotsCity
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {
  name: "CardHowItWorks",
  props: {
    stepTitle: String,
    stepDescription: String,
    iconSrc: String,
    altText: String
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative" }, _attrs))}><div class="rounded-lg overflow-hidden bg-roseGold group-hover:bg-rose-700 p-4"><img${ssrRenderAttr("src", $props.iconSrc)}${ssrRenderAttr("alt", $props.altText)} class="w-16 h-16 mx-auto"><p class="mt-2 text-lg font-medium text-white">${ssrInterpolate($props.stepTitle)}</p><p class="mt-1 text-black">${ssrInterpolate($props.stepDescription)}</p></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/StepCard.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const StepCard = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$b = {
  name: "HowItWorks",
  components: { StepCard },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
        // Add smooth scrolling behavior
      });
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_StepCard = resolveComponent("StepCard");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "py-12 bg-white" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-extrabold text-gray-900 text-center">How It Works</h2><div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-4">`);
  _push(ssrRenderComponent(_component_StepCard, {
    "step-title": "1. Enter Location",
    "step-description": "Tell us where you would like to go for your date night.",
    "icon-src": "/images/location.png",
    "alt-text": "Location Icon"
  }, null, _parent));
  _push(ssrRenderComponent(_component_StepCard, {
    "step-title": "2. Find Date Spot",
    "step-description": "Browse our amazing date spot recommendations!",
    "icon-src": "/images/answer.png",
    "alt-text": "Search Icon"
  }, null, _parent));
  _push(ssrRenderComponent(_component_StepCard, {
    "step-title": "3. Go on a Date",
    "step-description": "Plan your perfect date night, make lasting memories.",
    "icon-src": "/images/dating.png",
    "alt-text": "D Iatecon"
  }, null, _parent));
  _push(ssrRenderComponent(_component_StepCard, {
    stepTitle: "4. Leave a Review",
    stepDescription: "Share your experience and help others discover great date spots.",
    iconSrc: "/images/review.png",
    altText: "Review Icon"
  }, null, _parent));
  _push(`</div></div><div class="text-center mt-8"><a class="text-white bg-roseGold hover:bg-rose-700 px-6 py-3 rounded-md text-lg font-medium transition duration-300 ease-in-out cursor-pointer"> Get Started </a></div></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/HowItWorks.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const HowItWorks = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$a = {
  name: "Home",
  components: { HowItWorks, NewAppLayout, Hero }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NewAppLayout = resolveComponent("NewAppLayout");
  const _component_Hero = resolveComponent("Hero");
  const _component_HowItWorks = resolveComponent("HowItWorks");
  _push(ssrRenderComponent(_component_NewAppLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex flex-col"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Hero, null, null, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_HowItWorks, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "flex flex-col" }, [
            createVNode(_component_Hero),
            createVNode(_component_HowItWorks)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const Home = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {
  __name: "PrivacyPolicy",
  __ssrInlineRender: true,
  props: {
    policy: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Privacy Policy" }, null, _parent));
      _push(`<div class="font-sans text-gray-900 antialiased"><div class="pt-4 bg-gray-100"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
      _push(ssrRenderComponent(_sfc_main$x, null, null, _parent));
      _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">${__props.policy}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/PrivacyPolicy.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __vite_glob_0_14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$9
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  __name: "DeleteUserForm",
  __ssrInlineRender: true,
  setup(__props) {
    const confirmingUserDeletion = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmUserDeletion = () => {
      confirmingUserDeletion.value = true;
      setTimeout(() => passwordInput.value.focus(), 250);
    };
    const deleteUser = () => {
      form.delete(route("current-user.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingUserDeletion.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$U, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Delete Account `);
          } else {
            return [
              createTextVNode(" Delete Account ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Permanently delete your account. `);
          } else {
            return [
              createTextVNode(" Permanently delete your account. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. </div><div class="mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$Q, { onClick: confirmUserDeletion }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$P, {
              show: confirmingUserDeletion.value,
              onClose: closeModal
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Delete Account `);
                } else {
                  return [
                    createTextVNode(" Delete Account ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. <div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$I, {
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    autocomplete: "current-password",
                    onKeyup: deleteUser
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$N, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_sfc_main$I, {
                        ref_key: "passwordInput",
                        ref: passwordInput,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        type: "password",
                        class: "mt-1 block w-3/4",
                        placeholder: "Password",
                        autocomplete: "current-password",
                        onKeyup: withKeys(deleteUser, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                      createVNode(_sfc_main$N, {
                        message: unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$K, { onClick: closeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$Q, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Delete Account `);
                      } else {
                        return [
                          createTextVNode(" Delete Account ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$K, { onClick: closeModal }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$Q, {
                      class: ["ml-3", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing,
                      onClick: deleteUser
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Delete Account ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain. "),
              createVNode("div", { class: "mt-5" }, [
                createVNode(_sfc_main$Q, { onClick: confirmUserDeletion }, {
                  default: withCtx(() => [
                    createTextVNode(" Delete Account ")
                  ]),
                  _: 1
                })
              ]),
              createVNode(_sfc_main$P, {
                show: confirmingUserDeletion.value,
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(" Delete Account ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account. "),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$I, {
                      ref_key: "passwordInput",
                      ref: passwordInput,
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      class: "mt-1 block w-3/4",
                      placeholder: "Password",
                      autocomplete: "current-password",
                      onKeyup: withKeys(deleteUser, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                    createVNode(_sfc_main$N, {
                      message: unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_sfc_main$K, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$Q, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: deleteUser
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Delete Account ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/DeleteUserForm.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __vite_glob_0_15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  __name: "LogoutOtherBrowserSessionsForm",
  __ssrInlineRender: true,
  props: {
    sessions: Array
  },
  setup(__props) {
    const confirmingLogout = ref(false);
    const passwordInput = ref(null);
    const form = useForm({
      password: ""
    });
    const confirmLogout = () => {
      confirmingLogout.value = true;
      setTimeout(() => passwordInput.value.focus(), 250);
    };
    const logoutOtherBrowserSessions = () => {
      form.delete(route("other-browser-sessions.destroy"), {
        preserveScroll: true,
        onSuccess: () => closeModal(),
        onError: () => passwordInput.value.focus(),
        onFinish: () => form.reset()
      });
    };
    const closeModal = () => {
      confirmingLogout.value = false;
      form.reset();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$U, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Browser Sessions `);
          } else {
            return [
              createTextVNode(" Browser Sessions ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Manage and log out your active sessions on other browsers and devices. `);
          } else {
            return [
              createTextVNode(" Manage and log out your active sessions on other browsers and devices. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-xl text-sm text-gray-600"${_scopeId}> If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. </div>`);
            if (__props.sessions.length > 0) {
              _push2(`<div class="mt-5 space-y-6"${_scopeId}><!--[-->`);
              ssrRenderList(__props.sessions, (session, i) => {
                _push2(`<div class="flex items-center"${_scopeId}><div${_scopeId}>`);
                if (session.agent.is_desktop) {
                  _push2(`<svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"${_scopeId}></path></svg>`);
                } else {
                  _push2(`<svg class="w-8 h-8 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"${_scopeId}><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"${_scopeId}></path></svg>`);
                }
                _push2(`</div><div class="ml-3"${_scopeId}><div class="text-sm text-gray-600"${_scopeId}>${ssrInterpolate(session.agent.platform ? session.agent.platform : "Unknown")} - ${ssrInterpolate(session.agent.browser ? session.agent.browser : "Unknown")}</div><div${_scopeId}><div class="text-xs text-gray-500"${_scopeId}>${ssrInterpolate(session.ip_address)}, `);
                if (session.is_current_device) {
                  _push2(`<span class="text-green-500 font-semibold"${_scopeId}>This device</span>`);
                } else {
                  _push2(`<span${_scopeId}>Last active ${ssrInterpolate(session.last_active)}</span>`);
                }
                _push2(`</div></div></div></div>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="flex items-center mt-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$L, { onClick: confirmLogout }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out Other Browser Sessions `);
                } else {
                  return [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$W, {
              on: unref(form).recentlySuccessful,
              class: "ml-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Done. `);
                } else {
                  return [
                    createTextVNode(" Done. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$P, {
              show: confirmingLogout.value,
              onClose: closeModal
            }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Log Out Other Browser Sessions `);
                } else {
                  return [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ];
                }
              }),
              content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. <div class="mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$I, {
                    ref_key: "passwordInput",
                    ref: passwordInput,
                    modelValue: unref(form).password,
                    "onUpdate:modelValue": ($event) => unref(form).password = $event,
                    type: "password",
                    class: "mt-1 block w-3/4",
                    placeholder: "Password",
                    autocomplete: "current-password",
                    onKeyup: logoutOtherBrowserSessions
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$N, {
                    message: unref(form).errors.password,
                    class: "mt-2"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
                    createVNode("div", { class: "mt-4" }, [
                      createVNode(_sfc_main$I, {
                        ref_key: "passwordInput",
                        ref: passwordInput,
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        type: "password",
                        class: "mt-1 block w-3/4",
                        placeholder: "Password",
                        autocomplete: "current-password",
                        onKeyup: withKeys(logoutOtherBrowserSessions, ["enter"])
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                      createVNode(_sfc_main$N, {
                        message: unref(form).errors.password,
                        class: "mt-2"
                      }, null, 8, ["message"])
                    ])
                  ];
                }
              }),
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$K, { onClick: closeModal }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Cancel `);
                      } else {
                        return [
                          createTextVNode(" Cancel ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$L, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: logoutOtherBrowserSessions
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Log Out Other Browser Sessions `);
                      } else {
                        return [
                          createTextVNode(" Log Out Other Browser Sessions ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$K, { onClick: closeModal }, {
                      default: withCtx(() => [
                        createTextVNode(" Cancel ")
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$L, {
                      class: ["ml-3", { "opacity-25": unref(form).processing }],
                      disabled: unref(form).processing,
                      onClick: logoutOtherBrowserSessions
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Log Out Other Browser Sessions ")
                      ]),
                      _: 1
                    }, 8, ["class", "disabled"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "max-w-xl text-sm text-gray-600" }, " If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password. "),
              __props.sessions.length > 0 ? (openBlock(), createBlock("div", {
                key: 0,
                class: "mt-5 space-y-6"
              }, [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.sessions, (session, i) => {
                  return openBlock(), createBlock("div", {
                    key: i,
                    class: "flex items-center"
                  }, [
                    createVNode("div", null, [
                      session.agent.is_desktop ? (openBlock(), createBlock("svg", {
                        key: 0,
                        class: "w-8 h-8 text-gray-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
                        })
                      ])) : (openBlock(), createBlock("svg", {
                        key: 1,
                        class: "w-8 h-8 text-gray-500",
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        "stroke-width": "1.5",
                        stroke: "currentColor"
                      }, [
                        createVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                        })
                      ]))
                    ]),
                    createVNode("div", { class: "ml-3" }, [
                      createVNode("div", { class: "text-sm text-gray-600" }, toDisplayString(session.agent.platform ? session.agent.platform : "Unknown") + " - " + toDisplayString(session.agent.browser ? session.agent.browser : "Unknown"), 1),
                      createVNode("div", null, [
                        createVNode("div", { class: "text-xs text-gray-500" }, [
                          createTextVNode(toDisplayString(session.ip_address) + ", ", 1),
                          session.is_current_device ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-green-500 font-semibold"
                          }, "This device")) : (openBlock(), createBlock("span", { key: 1 }, "Last active " + toDisplayString(session.last_active), 1))
                        ])
                      ])
                    ])
                  ]);
                }), 128))
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "flex items-center mt-5" }, [
                createVNode(_sfc_main$L, { onClick: confirmLogout }, {
                  default: withCtx(() => [
                    createTextVNode(" Log Out Other Browser Sessions ")
                  ]),
                  _: 1
                }),
                createVNode(_sfc_main$W, {
                  on: unref(form).recentlySuccessful,
                  class: "ml-3"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Done. ")
                  ]),
                  _: 1
                }, 8, ["on"])
              ]),
              createVNode(_sfc_main$P, {
                show: confirmingLogout.value,
                onClose: closeModal
              }, {
                title: withCtx(() => [
                  createTextVNode(" Log Out Other Browser Sessions ")
                ]),
                content: withCtx(() => [
                  createTextVNode(" Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices. "),
                  createVNode("div", { class: "mt-4" }, [
                    createVNode(_sfc_main$I, {
                      ref_key: "passwordInput",
                      ref: passwordInput,
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      type: "password",
                      class: "mt-1 block w-3/4",
                      placeholder: "Password",
                      autocomplete: "current-password",
                      onKeyup: withKeys(logoutOtherBrowserSessions, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                    createVNode(_sfc_main$N, {
                      message: unref(form).errors.password,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])
                ]),
                footer: withCtx(() => [
                  createVNode(_sfc_main$K, { onClick: closeModal }, {
                    default: withCtx(() => [
                      createTextVNode(" Cancel ")
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$L, {
                    class: ["ml-3", { "opacity-25": unref(form).processing }],
                    disabled: unref(form).processing,
                    onClick: logoutOtherBrowserSessions
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Log Out Other Browser Sessions ")
                    ]),
                    _: 1
                  }, 8, ["class", "disabled"])
                ]),
                _: 1
              }, 8, ["show"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __vite_glob_0_16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$7
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  __name: "ConfirmsPassword",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: "Confirm Password"
    },
    content: {
      type: String,
      default: "For your security, please confirm your password to continue."
    },
    button: {
      type: String,
      default: "Confirm"
    }
  },
  emits: ["confirmed"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const confirmingPassword = ref(false);
    const form = reactive({
      password: "",
      error: "",
      processing: false
    });
    const passwordInput = ref(null);
    const confirmPassword = () => {
      form.processing = true;
      axios.post(route("password.confirm"), {
        password: form.password
      }).then(() => {
        form.processing = false;
        closeModal();
        nextTick().then(() => emit("confirmed"));
      }).catch((error) => {
        form.processing = false;
        form.error = error.response.data.errors.password[0];
        passwordInput.value.focus();
      });
    };
    const closeModal = () => {
      confirmingPassword.value = false;
      form.password = "";
      form.error = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(_attrs)}><span>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
      _push(ssrRenderComponent(_sfc_main$P, {
        show: confirmingPassword.value,
        onClose: closeModal
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.title)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.title), 1)
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.content)} <div class="mt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$I, {
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: form.password,
              "onUpdate:modelValue": ($event) => form.password = $event,
              type: "password",
              class: "mt-1 block w-3/4",
              placeholder: "Password",
              autocomplete: "current-password",
              onKeyup: confirmPassword
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              message: form.error,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.content) + " ", 1),
              createVNode("div", { class: "mt-4" }, [
                createVNode(_sfc_main$I, {
                  ref_key: "passwordInput",
                  ref: passwordInput,
                  modelValue: form.password,
                  "onUpdate:modelValue": ($event) => form.password = $event,
                  type: "password",
                  class: "mt-1 block w-3/4",
                  placeholder: "Password",
                  autocomplete: "current-password",
                  onKeyup: withKeys(confirmPassword, ["enter"])
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                createVNode(_sfc_main$N, {
                  message: form.error,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$K, { onClick: closeModal }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Cancel `);
                } else {
                  return [
                    createTextVNode(" Cancel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: ["ml-3", { "opacity-25": form.processing }],
              disabled: form.processing,
              onClick: confirmPassword
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(__props.button)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(__props.button), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$K, { onClick: closeModal }, {
                default: withCtx(() => [
                  createTextVNode(" Cancel ")
                ]),
                _: 1
              }),
              createVNode(_sfc_main$L, {
                class: ["ml-3", { "opacity-25": form.processing }],
                disabled: form.processing,
                onClick: confirmPassword
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(__props.button), 1)
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</span>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Components/ConfirmsPassword.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = {
  __name: "TwoFactorAuthenticationForm",
  __ssrInlineRender: true,
  props: {
    requiresConfirmation: Boolean
  },
  setup(__props) {
    const props = __props;
    const page = usePage();
    const enabling = ref(false);
    const confirming = ref(false);
    const disabling = ref(false);
    const qrCode = ref(null);
    const setupKey = ref(null);
    const recoveryCodes = ref([]);
    const confirmationForm = useForm({
      code: ""
    });
    const twoFactorEnabled = computed(
      () => {
        var _a;
        return !enabling.value && ((_a = page.props.auth.user) == null ? void 0 : _a.two_factor_enabled);
      }
    );
    watch(twoFactorEnabled, () => {
      if (!twoFactorEnabled.value) {
        confirmationForm.reset();
        confirmationForm.clearErrors();
      }
    });
    const enableTwoFactorAuthentication = () => {
      enabling.value = true;
      router.post(route("two-factor.enable"), {}, {
        preserveScroll: true,
        onSuccess: () => Promise.all([
          showQrCode(),
          showSetupKey(),
          showRecoveryCodes()
        ]),
        onFinish: () => {
          enabling.value = false;
          confirming.value = props.requiresConfirmation;
        }
      });
    };
    const showQrCode = () => {
      return axios.get(route("two-factor.qr-code")).then((response) => {
        qrCode.value = response.data.svg;
      });
    };
    const showSetupKey = () => {
      return axios.get(route("two-factor.secret-key")).then((response) => {
        setupKey.value = response.data.secretKey;
      });
    };
    const showRecoveryCodes = () => {
      return axios.get(route("two-factor.recovery-codes")).then((response) => {
        recoveryCodes.value = response.data;
      });
    };
    const confirmTwoFactorAuthentication = () => {
      confirmationForm.post(route("two-factor.confirm"), {
        errorBag: "confirmTwoFactorAuthentication",
        preserveScroll: true,
        preserveState: true,
        onSuccess: () => {
          confirming.value = false;
          qrCode.value = null;
          setupKey.value = null;
        }
      });
    };
    const regenerateRecoveryCodes = () => {
      axios.post(route("two-factor.recovery-codes")).then(() => showRecoveryCodes());
    };
    const disableTwoFactorAuthentication = () => {
      disabling.value = true;
      router.delete(route("two-factor.disable"), {
        preserveScroll: true,
        onSuccess: () => {
          disabling.value = false;
          confirming.value = false;
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$U, _attrs, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Two Factor Authentication `);
          } else {
            return [
              createTextVNode(" Two Factor Authentication ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add additional security to your account using two factor authentication. `);
          } else {
            return [
              createTextVNode(" Add additional security to your account using two factor authentication. ")
            ];
          }
        }),
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (twoFactorEnabled.value && !confirming.value) {
              _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> You have enabled two factor authentication. </h3>`);
            } else if (twoFactorEnabled.value && confirming.value) {
              _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> Finish enabling two factor authentication. </h3>`);
            } else {
              _push2(`<h3 class="text-lg font-medium text-gray-900"${_scopeId}> You have not enabled two factor authentication. </h3>`);
            }
            _push2(`<div class="mt-3 max-w-xl text-sm text-gray-600"${_scopeId}><p${_scopeId}> When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone&#39;s Google Authenticator application. </p></div>`);
            if (twoFactorEnabled.value) {
              _push2(`<div${_scopeId}>`);
              if (qrCode.value) {
                _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600"${_scopeId}>`);
                if (confirming.value) {
                  _push2(`<p class="font-semibold"${_scopeId}> To finish enabling two factor authentication, scan the following QR code using your phone&#39;s authenticator application or enter the setup key and provide the generated OTP code. </p>`);
                } else {
                  _push2(`<p${_scopeId}> Two factor authentication is now enabled. Scan the following QR code using your phone&#39;s authenticator application or enter the setup key. </p>`);
                }
                _push2(`</div><div class="mt-4 p-2 inline-block bg-white"${_scopeId}>${qrCode.value}</div>`);
                if (setupKey.value) {
                  _push2(`<div class="mt-4 max-w-xl text-sm text-gray-600"${_scopeId}><p class="font-semibold"${_scopeId}> Setup Key: <span${_scopeId}>${setupKey.value}</span></p></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (confirming.value) {
                  _push2(`<div class="mt-4"${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$M, {
                    for: "code",
                    value: "Code"
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_sfc_main$I, {
                    id: "code",
                    modelValue: unref(confirmationForm).code,
                    "onUpdate:modelValue": ($event) => unref(confirmationForm).code = $event,
                    type: "text",
                    name: "code",
                    class: "block mt-1 w-1/2",
                    inputmode: "numeric",
                    autofocus: "",
                    autocomplete: "one-time-code",
                    onKeyup: confirmTwoFactorAuthentication
                  }, null, _parent2, _scopeId));
                  _push2(ssrRenderComponent(_sfc_main$N, {
                    message: unref(confirmationForm).errors.code,
                    class: "mt-2"
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              if (recoveryCodes.value.length > 0 && !confirming.value) {
                _push2(`<div${_scopeId}><div class="mt-4 max-w-xl text-sm text-gray-600"${_scopeId}><p class="font-semibold"${_scopeId}> Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. </p></div><div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"${_scopeId}><!--[-->`);
                ssrRenderList(recoveryCodes.value, (code) => {
                  _push2(`<div${_scopeId}>${ssrInterpolate(code)}</div>`);
                });
                _push2(`<!--]--></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="mt-5"${_scopeId}>`);
            if (!twoFactorEnabled.value) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: enableTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$L, {
                      type: "button",
                      class: { "opacity-25": enabling.value },
                      disabled: enabling.value
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` Enable `);
                        } else {
                          return [
                            createTextVNode(" Enable ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$L, {
                        type: "button",
                        class: { "opacity-25": enabling.value },
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Enable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: confirmTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$L, {
                        type: "button",
                        class: ["mr-3", { "opacity-25": enabling.value }],
                        disabled: enabling.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Confirm `);
                          } else {
                            return [
                              createTextVNode(" Confirm ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$L, {
                        key: 0,
                        type: "button",
                        class: ["mr-3", { "opacity-25": enabling.value }],
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: regenerateRecoveryCodes }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (recoveryCodes.value.length > 0 && !confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$K, { class: "mr-3" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Regenerate Recovery Codes `);
                          } else {
                            return [
                              createTextVNode(" Regenerate Recovery Codes ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      recoveryCodes.value.length > 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$K, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: showRecoveryCodes }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (recoveryCodes.value.length === 0 && !confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$K, { class: "mr-3" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Show Recovery Codes `);
                          } else {
                            return [
                              createTextVNode(" Show Recovery Codes ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      recoveryCodes.value.length === 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$K, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: disableTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$K, {
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Cancel `);
                          } else {
                            return [
                              createTextVNode(" Cancel ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$K, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$6, { onConfirmed: disableTwoFactorAuthentication }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!confirming.value) {
                      _push3(ssrRenderComponent(_sfc_main$Q, {
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` Disable `);
                          } else {
                            return [
                              createTextVNode(" Disable ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      !confirming.value ? (openBlock(), createBlock(_sfc_main$Q, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              twoFactorEnabled.value && !confirming.value ? (openBlock(), createBlock("h3", {
                key: 0,
                class: "text-lg font-medium text-gray-900"
              }, " You have enabled two factor authentication. ")) : twoFactorEnabled.value && confirming.value ? (openBlock(), createBlock("h3", {
                key: 1,
                class: "text-lg font-medium text-gray-900"
              }, " Finish enabling two factor authentication. ")) : (openBlock(), createBlock("h3", {
                key: 2,
                class: "text-lg font-medium text-gray-900"
              }, " You have not enabled two factor authentication. ")),
              createVNode("div", { class: "mt-3 max-w-xl text-sm text-gray-600" }, [
                createVNode("p", null, " When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")
              ]),
              twoFactorEnabled.value ? (openBlock(), createBlock("div", { key: 3 }, [
                qrCode.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600" }, [
                    confirming.value ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "font-semibold"
                    }, " To finish enabling two factor authentication, scan the following QR code using your phone's authenticator application or enter the setup key and provide the generated OTP code. ")) : (openBlock(), createBlock("p", { key: 1 }, " Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application or enter the setup key. "))
                  ]),
                  createVNode("div", {
                    class: "mt-4 p-2 inline-block bg-white",
                    innerHTML: qrCode.value
                  }, null, 8, ["innerHTML"]),
                  setupKey.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-4 max-w-xl text-sm text-gray-600"
                  }, [
                    createVNode("p", { class: "font-semibold" }, [
                      createTextVNode(" Setup Key: "),
                      createVNode("span", { innerHTML: setupKey.value }, null, 8, ["innerHTML"])
                    ])
                  ])) : createCommentVNode("", true),
                  confirming.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mt-4"
                  }, [
                    createVNode(_sfc_main$M, {
                      for: "code",
                      value: "Code"
                    }),
                    createVNode(_sfc_main$I, {
                      id: "code",
                      modelValue: unref(confirmationForm).code,
                      "onUpdate:modelValue": ($event) => unref(confirmationForm).code = $event,
                      type: "text",
                      name: "code",
                      class: "block mt-1 w-1/2",
                      inputmode: "numeric",
                      autofocus: "",
                      autocomplete: "one-time-code",
                      onKeyup: withKeys(confirmTwoFactorAuthentication, ["enter"])
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup"]),
                    createVNode(_sfc_main$N, {
                      message: unref(confirmationForm).errors.code,
                      class: "mt-2"
                    }, null, 8, ["message"])
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true),
                recoveryCodes.value.length > 0 && !confirming.value ? (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("div", { class: "mt-4 max-w-xl text-sm text-gray-600" }, [
                    createVNode("p", { class: "font-semibold" }, " Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")
                  ]),
                  createVNode("div", { class: "grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(recoveryCodes.value, (code) => {
                      return openBlock(), createBlock("div", { key: code }, toDisplayString(code), 1);
                    }), 128))
                  ])
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "mt-5" }, [
                !twoFactorEnabled.value ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode(_sfc_main$6, { onConfirmed: enableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$L, {
                        type: "button",
                        class: { "opacity-25": enabling.value },
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Enable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])
                    ]),
                    _: 1
                  })
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode(_sfc_main$6, { onConfirmed: confirmTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$L, {
                        key: 0,
                        type: "button",
                        class: ["mr-3", { "opacity-25": enabling.value }],
                        disabled: enabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Confirm ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, { onConfirmed: regenerateRecoveryCodes }, {
                    default: withCtx(() => [
                      recoveryCodes.value.length > 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$K, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Regenerate Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, { onConfirmed: showRecoveryCodes }, {
                    default: withCtx(() => [
                      recoveryCodes.value.length === 0 && !confirming.value ? (openBlock(), createBlock(_sfc_main$K, {
                        key: 0,
                        class: "mr-3"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Show Recovery Codes ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, { onConfirmed: disableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      confirming.value ? (openBlock(), createBlock(_sfc_main$K, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$6, { onConfirmed: disableTwoFactorAuthentication }, {
                    default: withCtx(() => [
                      !confirming.value ? (openBlock(), createBlock(_sfc_main$Q, {
                        key: 0,
                        class: { "opacity-25": disabling.value },
                        disabled: disabling.value
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Disable ")
                        ]),
                        _: 1
                      }, 8, ["class", "disabled"])) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/TwoFactorAuthenticationForm.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  __name: "UpdatePasswordForm",
  __ssrInlineRender: true,
  setup(__props) {
    const passwordInput = ref(null);
    const currentPasswordInput = ref(null);
    const form = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    const updatePassword = () => {
      form.put(route("user-password.update"), {
        errorBag: "updatePassword",
        preserveScroll: true,
        onSuccess: () => form.reset(),
        onError: () => {
          if (form.errors.password) {
            form.reset("password", "password_confirmation");
            passwordInput.value.focus();
          }
          if (form.errors.current_password) {
            form.reset("current_password");
            currentPasswordInput.value.focus();
          }
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$O, mergeProps({ onSubmitted: updatePassword }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update Password `);
          } else {
            return [
              createTextVNode(" Update Password ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ensure your account is using a long, random password to stay secure. `);
          } else {
            return [
              createTextVNode(" Ensure your account is using a long, random password to stay secure. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "current_password",
              value: "Current Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "current_password",
              ref_key: "currentPasswordInput",
              ref: currentPasswordInput,
              modelValue: unref(form).current_password,
              "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
              type: "password",
              class: "mt-1 block w-full",
              autocomplete: "current-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              message: unref(form).errors.current_password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "password",
              value: "New Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "password",
              ref_key: "passwordInput",
              ref: passwordInput,
              modelValue: unref(form).password,
              "onUpdate:modelValue": ($event) => unref(form).password = $event,
              type: "password",
              class: "mt-1 block w-full",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              message: unref(form).errors.password,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "password_confirmation",
              value: "Confirm Password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "password_confirmation",
              modelValue: unref(form).password_confirmation,
              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
              type: "password",
              class: "mt-1 block w-full",
              autocomplete: "new-password"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              message: unref(form).errors.password_confirmation,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$M, {
                  for: "current_password",
                  value: "Current Password"
                }),
                createVNode(_sfc_main$I, {
                  id: "current_password",
                  ref_key: "currentPasswordInput",
                  ref: currentPasswordInput,
                  modelValue: unref(form).current_password,
                  "onUpdate:modelValue": ($event) => unref(form).current_password = $event,
                  type: "password",
                  class: "mt-1 block w-full",
                  autocomplete: "current-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$N, {
                  message: unref(form).errors.current_password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$M, {
                  for: "password",
                  value: "New Password"
                }),
                createVNode(_sfc_main$I, {
                  id: "password",
                  ref_key: "passwordInput",
                  ref: passwordInput,
                  modelValue: unref(form).password,
                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                  type: "password",
                  class: "mt-1 block w-full",
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$N, {
                  message: unref(form).errors.password,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$M, {
                  for: "password_confirmation",
                  value: "Confirm Password"
                }),
                createVNode(_sfc_main$I, {
                  id: "password_confirmation",
                  modelValue: unref(form).password_confirmation,
                  "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                  type: "password",
                  class: "mt-1 block w-full",
                  autocomplete: "new-password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$N, {
                  message: unref(form).errors.password_confirmation,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$W, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saved. `);
                } else {
                  return [
                    createTextVNode(" Saved. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$W, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Saved. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$L, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdatePasswordForm.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  __name: "UpdateProfileInformationForm",
  __ssrInlineRender: true,
  props: {
    user: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      _method: "PUT",
      name: props.user.name,
      email: props.user.email,
      photo: null
    });
    const verificationLinkSent = ref(null);
    const photoPreview = ref(null);
    const photoInput = ref(null);
    const updateProfileInformation = () => {
      if (photoInput.value) {
        form.photo = photoInput.value.files[0];
      }
      form.post(route("user-profile-information.update"), {
        errorBag: "updateProfileInformation",
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput()
      });
    };
    const sendEmailVerification = () => {
      verificationLinkSent.value = true;
    };
    const selectNewPhoto = () => {
      photoInput.value.click();
    };
    const updatePhotoPreview = () => {
      const photo = photoInput.value.files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        photoPreview.value = e.target.result;
      };
      reader.readAsDataURL(photo);
    };
    const deletePhoto = () => {
      router.delete(route("current-user-photo.destroy"), {
        preserveScroll: true,
        onSuccess: () => {
          photoPreview.value = null;
          clearPhotoFileInput();
        }
      });
    };
    const clearPhotoFileInput = () => {
      var _a;
      if ((_a = photoInput.value) == null ? void 0 : _a.value) {
        photoInput.value.value = null;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$O, mergeProps({ onSubmitted: updateProfileInformation }, _attrs), {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Profile Information `);
          } else {
            return [
              createTextVNode(" Profile Information ")
            ];
          }
        }),
        description: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Update your account&#39;s profile information and email address. `);
          } else {
            return [
              createTextVNode(" Update your account's profile information and email address. ")
            ];
          }
        }),
        form: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.$page.props.jetstream.managesProfilePhotos) {
              _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}><input type="file" class="hidden"${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$M, {
                for: "photo",
                value: "Photo"
              }, null, _parent2, _scopeId));
              _push2(`<div style="${ssrRenderStyle(!photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><img${ssrRenderAttr("src", __props.user.profile_photo_url)}${ssrRenderAttr("alt", __props.user.name)} class="rounded-full h-20 w-20 object-cover"${_scopeId}></div><div style="${ssrRenderStyle(photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId}><span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center" style="${ssrRenderStyle("background-image: url('" + photoPreview.value + "');")}"${_scopeId}></span></div>`);
              _push2(ssrRenderComponent(_sfc_main$K, {
                class: "mt-2 mr-2",
                type: "button",
                onClick: selectNewPhoto
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Select A New Photo `);
                  } else {
                    return [
                      createTextVNode(" Select A New Photo ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (__props.user.profile_photo_path) {
                _push2(ssrRenderComponent(_sfc_main$K, {
                  type: "button",
                  class: "mt-2",
                  onClick: deletePhoto
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Remove Photo `);
                    } else {
                      return [
                        createTextVNode(" Remove Photo ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(ssrRenderComponent(_sfc_main$N, {
                message: unref(form).errors.photo,
                class: "mt-2"
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "name",
              value: "Name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "name",
              modelValue: unref(form).name,
              "onUpdate:modelValue": ($event) => unref(form).name = $event,
              type: "text",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "name"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              message: unref(form).errors.name,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="col-span-6 sm:col-span-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$M, {
              for: "email",
              value: "Email"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$I, {
              id: "email",
              modelValue: unref(form).email,
              "onUpdate:modelValue": ($event) => unref(form).email = $event,
              type: "email",
              class: "mt-1 block w-full",
              required: "",
              autocomplete: "username"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$N, {
              message: unref(form).errors.email,
              class: "mt-2"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasEmailVerification && __props.user.email_verified_at === null) {
              _push2(`<div${_scopeId}><p class="text-sm mt-2"${_scopeId}> Your email address is unverified. `);
              _push2(ssrRenderComponent(unref(Link), {
                href: _ctx.route("verification.send"),
                method: "post",
                as: "button",
                class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                onClick: sendEmailVerification
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Click here to re-send the verification email. `);
                  } else {
                    return [
                      createTextVNode(" Click here to re-send the verification email. ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</p><div style="${ssrRenderStyle(verificationLinkSent.value ? null : { display: "none" })}" class="mt-2 font-medium text-sm text-green-600"${_scopeId}> A new verification link has been sent to your email address. </div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              _ctx.$page.props.jetstream.managesProfilePhotos ? (openBlock(), createBlock("div", {
                key: 0,
                class: "col-span-6 sm:col-span-4"
              }, [
                createVNode("input", {
                  ref_key: "photoInput",
                  ref: photoInput,
                  type: "file",
                  class: "hidden",
                  onChange: updatePhotoPreview
                }, null, 544),
                createVNode(_sfc_main$M, {
                  for: "photo",
                  value: "Photo"
                }),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("img", {
                    src: __props.user.profile_photo_url,
                    alt: __props.user.name,
                    class: "rounded-full h-20 w-20 object-cover"
                  }, null, 8, ["src", "alt"])
                ], 512), [
                  [vShow, !photoPreview.value]
                ]),
                withDirectives(createVNode("div", { class: "mt-2" }, [
                  createVNode("span", {
                    class: "block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",
                    style: "background-image: url('" + photoPreview.value + "');"
                  }, null, 4)
                ], 512), [
                  [vShow, photoPreview.value]
                ]),
                createVNode(_sfc_main$K, {
                  class: "mt-2 mr-2",
                  type: "button",
                  onClick: withModifiers(selectNewPhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Select A New Photo ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                __props.user.profile_photo_path ? (openBlock(), createBlock(_sfc_main$K, {
                  key: 0,
                  type: "button",
                  class: "mt-2",
                  onClick: withModifiers(deletePhoto, ["prevent"])
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Remove Photo ")
                  ]),
                  _: 1
                }, 8, ["onClick"])) : createCommentVNode("", true),
                createVNode(_sfc_main$N, {
                  message: unref(form).errors.photo,
                  class: "mt-2"
                }, null, 8, ["message"])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$M, {
                  for: "name",
                  value: "Name"
                }),
                createVNode(_sfc_main$I, {
                  id: "name",
                  modelValue: unref(form).name,
                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                  type: "text",
                  class: "mt-1 block w-full",
                  required: "",
                  autocomplete: "name"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$N, {
                  message: unref(form).errors.name,
                  class: "mt-2"
                }, null, 8, ["message"])
              ]),
              createVNode("div", { class: "col-span-6 sm:col-span-4" }, [
                createVNode(_sfc_main$M, {
                  for: "email",
                  value: "Email"
                }),
                createVNode(_sfc_main$I, {
                  id: "email",
                  modelValue: unref(form).email,
                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                  type: "email",
                  class: "mt-1 block w-full",
                  required: "",
                  autocomplete: "username"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$N, {
                  message: unref(form).errors.email,
                  class: "mt-2"
                }, null, 8, ["message"]),
                _ctx.$page.props.jetstream.hasEmailVerification && __props.user.email_verified_at === null ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("p", { class: "text-sm mt-2" }, [
                    createTextVNode(" Your email address is unverified. "),
                    createVNode(unref(Link), {
                      href: _ctx.route("verification.send"),
                      method: "post",
                      as: "button",
                      class: "underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                      onClick: withModifiers(sendEmailVerification, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Click here to re-send the verification email. ")
                      ]),
                      _: 1
                    }, 8, ["href", "onClick"])
                  ]),
                  withDirectives(createVNode("div", { class: "mt-2 font-medium text-sm text-green-600" }, " A new verification link has been sent to your email address. ", 512), [
                    [vShow, verificationLinkSent.value]
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        actions: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$W, {
              on: unref(form).recentlySuccessful,
              class: "mr-3"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Saved. `);
                } else {
                  return [
                    createTextVNode(" Saved. ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$L, {
              class: { "opacity-25": unref(form).processing },
              disabled: unref(form).processing
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Save `);
                } else {
                  return [
                    createTextVNode(" Save ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$W, {
                on: unref(form).recentlySuccessful,
                class: "mr-3"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Saved. ")
                ]),
                _: 1
              }, 8, ["on"]),
              createVNode(_sfc_main$L, {
                class: { "opacity-25": unref(form).processing },
                disabled: unref(form).processing
              }, {
                default: withCtx(() => [
                  createTextVNode(" Save ")
                ]),
                _: 1
              }, 8, ["class", "disabled"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Partials/UpdateProfileInformationForm.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {
  __name: "Show",
  __ssrInlineRender: true,
  props: {
    confirmsTwoFactorAuthentication: Boolean,
    sessions: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$A, mergeProps({ title: "Profile" }, _attrs), {
        header: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="font-semibold text-xl text-gray-800 leading-tight"${_scopeId}> Profile </h2>`);
          } else {
            return [
              createVNode("h2", { class: "font-semibold text-xl text-gray-800 leading-tight" }, " Profile ")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"${_scopeId}>`);
            if (_ctx.$page.props.jetstream.canUpdateProfileInformation) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$3, {
                user: _ctx.$page.props.auth.user
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canUpdatePassword) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$4, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.$page.props.jetstream.canManageTwoFactorAuthentication) {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                "requires-confirmation": __props.confirmsTwoFactorAuthentication,
                class: "mt-10 sm:mt-0"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$7, {
              sessions: __props.sessions,
              class: "mt-10 sm:mt-0"
            }, null, _parent2, _scopeId));
            if (_ctx.$page.props.jetstream.hasAccountDeletionFeatures) {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(SectionBorder, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$8, { class: "mt-10 sm:mt-0" }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("div", { class: "max-w-7xl mx-auto py-10 sm:px-6 lg:px-8" }, [
                  _ctx.$page.props.jetstream.canUpdateProfileInformation ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_sfc_main$3, {
                      user: _ctx.$page.props.auth.user
                    }, null, 8, ["user"]),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  _ctx.$page.props.jetstream.canUpdatePassword ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_sfc_main$4, { class: "mt-10 sm:mt-0" }),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  _ctx.$page.props.jetstream.canManageTwoFactorAuthentication ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(_sfc_main$5, {
                      "requires-confirmation": __props.confirmsTwoFactorAuthentication,
                      class: "mt-10 sm:mt-0"
                    }, null, 8, ["requires-confirmation"]),
                    createVNode(SectionBorder)
                  ])) : createCommentVNode("", true),
                  createVNode(_sfc_main$7, {
                    sessions: __props.sessions,
                    class: "mt-10 sm:mt-0"
                  }, null, 8, ["sessions"]),
                  _ctx.$page.props.jetstream.hasAccountDeletionFeatures ? (openBlock(), createBlock(Fragment, { key: 3 }, [
                    createVNode(SectionBorder),
                    createVNode(_sfc_main$8, { class: "mt-10 sm:mt-0" })
                  ], 64)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Profile/Show.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  __name: "TermsOfService",
  __ssrInlineRender: true,
  props: {
    terms: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Terms of Service" }, null, _parent));
      _push(`<div class="font-sans text-gray-900 antialiased"><div class="pt-4 bg-gray-100"><div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0"><div>`);
      _push(ssrRenderComponent(_sfc_main$x, null, null, _parent));
      _push(`</div><div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">${__props.terms}</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/TermsOfService.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const Welcome_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "Welcome",
  __ssrInlineRender: true,
  props: {
    canLogin: Boolean,
    canRegister: Boolean,
    laravelVersion: String,
    phpVersion: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), { title: "Welcome" }, null, _parent));
      _push(`<div class="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">`);
      if (__props.canLogin) {
        _push(`<div class="sm:fixed sm:top-0 sm:right-0 p-6 text-right z-10">`);
        if (_ctx.$page.props.auth.user) {
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("dashboard"),
            class: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Dashboard `);
              } else {
                return [
                  createTextVNode(" Dashboard ")
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(unref(Link), {
            href: _ctx.route("login"),
            class: "font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(` Log in `);
              } else {
                return [
                  createTextVNode(" Log in ")
                ];
              }
            }),
            _: 1
          }, _parent));
          if (__props.canRegister) {
            _push(ssrRenderComponent(unref(Link), {
              href: _ctx.route("register"),
              class: "ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(` Register `);
                } else {
                  return [
                    createTextVNode(" Register ")
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="max-w-7xl mx-auto p-6 lg:p-8"><div class="flex justify-center"><svg viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-16 w-auto bg-gray-100 dark:bg-gray-900"><path d="M61.8548 14.6253C61.8778 14.7102 61.8895 14.7978 61.8897 14.8858V28.5615C61.8898 28.737 61.8434 28.9095 61.7554 29.0614C61.6675 29.2132 61.5409 29.3392 61.3887 29.4265L49.9104 36.0351V49.1337C49.9104 49.4902 49.7209 49.8192 49.4118 49.9987L25.4519 63.7916C25.3971 63.8227 25.3372 63.8427 25.2774 63.8639C25.255 63.8714 25.2338 63.8851 25.2101 63.8913C25.0426 63.9354 24.8666 63.9354 24.6991 63.8913C24.6716 63.8838 24.6467 63.8689 24.6205 63.8589C24.5657 63.8389 24.5084 63.8215 24.456 63.7916L0.501061 49.9987C0.348882 49.9113 0.222437 49.7853 0.134469 49.6334C0.0465019 49.4816 0.000120578 49.3092 0 49.1337L0 8.10652C0 8.01678 0.0124642 7.92953 0.0348998 7.84477C0.0423783 7.8161 0.0598282 7.78993 0.0697995 7.76126C0.0884958 7.70891 0.105946 7.65531 0.133367 7.6067C0.152063 7.5743 0.179485 7.54812 0.20192 7.51821C0.230588 7.47832 0.256763 7.43719 0.290416 7.40229C0.319084 7.37362 0.356476 7.35243 0.388883 7.32751C0.425029 7.29759 0.457436 7.26518 0.498568 7.2415L12.4779 0.345059C12.6296 0.257786 12.8015 0.211853 12.9765 0.211853C13.1515 0.211853 13.3234 0.257786 13.475 0.345059L25.4531 7.2415H25.4556C25.4955 7.26643 25.5292 7.29759 25.5653 7.32626C25.5977 7.35119 25.6339 7.37362 25.6625 7.40104C25.6974 7.43719 25.7224 7.47832 25.7523 7.51821C25.7735 7.54812 25.8021 7.5743 25.8196 7.6067C25.8483 7.65656 25.8645 7.70891 25.8844 7.76126C25.8944 7.78993 25.9118 7.8161 25.9193 7.84602C25.9423 7.93096 25.954 8.01853 25.9542 8.10652V33.7317L35.9355 27.9844V14.8846C35.9355 14.7973 35.948 14.7088 35.9704 14.6253C35.9792 14.5954 35.9954 14.5692 36.0053 14.5405C36.0253 14.4882 36.0427 14.4346 36.0702 14.386C36.0888 14.3536 36.1163 14.3274 36.1375 14.2975C36.1674 14.2576 36.1923 14.2165 36.2272 14.1816C36.2559 14.1529 36.292 14.1317 36.3244 14.1068C36.3618 14.0769 36.3942 14.0445 36.4341 14.0208L48.4147 7.12434C48.5663 7.03694 48.7383 6.99094 48.9133 6.99094C49.0883 6.99094 49.2602 7.03694 49.4118 7.12434L61.3899 14.0208C61.4323 14.0457 61.4647 14.0769 61.5021 14.1055C61.5333 14.1305 61.5694 14.1529 61.5981 14.1803C61.633 14.2165 61.6579 14.2576 61.6878 14.2975C61.7103 14.3274 61.7377 14.3536 61.7551 14.386C61.7838 14.4346 61.8 14.4882 61.8199 14.5405C61.8312 14.5692 61.8474 14.5954 61.8548 14.6253ZM59.893 27.9844V16.6121L55.7013 19.0252L49.9104 22.3593V33.7317L59.8942 27.9844H59.893ZM47.9149 48.5566V37.1768L42.2187 40.4299L25.953 49.7133V61.2003L47.9149 48.5566ZM1.99677 9.83281V48.5566L23.9562 61.199V49.7145L12.4841 43.2219L12.4804 43.2194L12.4754 43.2169C12.4368 43.1945 12.4044 43.1621 12.3682 43.1347C12.3371 43.1097 12.3009 43.0898 12.2735 43.0624L12.271 43.0586C12.2386 43.0275 12.2162 42.9888 12.1887 42.9539C12.1638 42.9203 12.1339 42.8916 12.114 42.8567L12.1127 42.853C12.0903 42.8156 12.0766 42.7707 12.0604 42.7283C12.0442 42.6909 12.023 42.656 12.013 42.6161C12.0005 42.5688 11.998 42.5177 11.9931 42.4691C11.9881 42.4317 11.9781 42.3943 11.9781 42.3569V15.5801L6.18848 12.2446L1.99677 9.83281ZM12.9777 2.36177L2.99764 8.10652L12.9752 13.8513L22.9541 8.10527L12.9752 2.36177H12.9777ZM18.1678 38.2138L23.9574 34.8809V9.83281L19.7657 12.2459L13.9749 15.5801V40.6281L18.1678 38.2138ZM48.9133 9.14105L38.9344 14.8858L48.9133 20.6305L58.8909 14.8846L48.9133 9.14105ZM47.9149 22.3593L42.124 19.0252L37.9323 16.6121V27.9844L43.7219 31.3174L47.9149 33.7317V22.3593ZM24.9533 47.987L39.59 39.631L46.9065 35.4555L36.9352 29.7145L25.4544 36.3242L14.9907 42.3482L24.9533 47.987Z" fill="#FF2D20"></path></svg></div><div class="mt-16"><div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"><a href="https://laravel.com/docs" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Documentation</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel has wonderful documentation covering every aspect of the framework. Whether you are a newcomer or have prior experience with Laravel, we recommend reading our documentation from beginning to end. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laracasts.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laracasts</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><a href="https://laravel-news.com" class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Laravel News</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel News is a community driven portal and newsletter aggregating all of the latest and most important news in the Laravel ecosystem, including new package releases and tutorials. </p></div><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="self-center shrink-0 stroke-red-500 w-6 h-6 mx-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"></path></svg></a><div class="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-red-500"><div><div class="h-16 w-16 bg-red-50 dark:bg-red-800/20 flex items-center justify-center rounded-full"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-7 h-7 stroke-red-500"><path stroke-linecap="round" stroke-linejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"></path></svg></div><h2 class="mt-6 text-xl font-semibold text-gray-900 dark:text-white">Vibrant Ecosystem</h2><p class="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed"> Laravel&#39;s robust library of first-party tools and libraries, such as <a href="https://forge.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Forge</a>, <a href="https://vapor.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Vapor</a>, <a href="https://nova.laravel.com" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Nova</a>, and <a href="https://envoyer.io" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Envoyer</a> help you take your projects to the next level. Pair them with powerful open source libraries like <a href="https://laravel.com/docs/billing" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Cashier</a>, <a href="https://laravel.com/docs/dusk" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Dusk</a>, <a href="https://laravel.com/docs/broadcasting" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Echo</a>, <a href="https://laravel.com/docs/horizon" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Horizon</a>, <a href="https://laravel.com/docs/sanctum" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Sanctum</a>, <a href="https://laravel.com/docs/telescope" class="underline hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"> Telescope</a>, and more. </p></div></div></div></div><div class="flex justify-center mt-16 px-6 sm:items-center sm:justify-between"><div class="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-left"><div class="flex items-center gap-4"><a href="https://github.com/sponsors/taylorotwell" class="group inline-flex items-center hover:text-gray-700 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="-mt-px mr-1 w-5 h-5 stroke-gray-400 dark:stroke-gray-600 group-hover:stroke-gray-600 dark:group-hover:stroke-gray-400"><path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path></svg> Sponsor </a></div></div><div class="ml-4 text-center text-sm text-gray-500 dark:text-gray-400 sm:text-right sm:ml-0"> Laravel v${ssrInterpolate(__props.laravelVersion)} (PHP v${ssrInterpolate(__props.phpVersion)}) </div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Welcome.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/API/Index.vue": __vite_glob_0_0, "./Pages/API/Partials/ApiTokenManager.vue": __vite_glob_0_1, "./Pages/Auth/ConfirmPassword.vue": __vite_glob_0_2, "./Pages/Auth/ForgotPassword.vue": __vite_glob_0_3, "./Pages/Auth/Login.vue": __vite_glob_0_4, "./Pages/Auth/Register.vue": __vite_glob_0_5, "./Pages/Auth/ResetPassword.vue": __vite_glob_0_6, "./Pages/Auth/TwoFactorChallenge.vue": __vite_glob_0_7, "./Pages/Auth/VerifyEmail.vue": __vite_glob_0_8, "./Pages/Dashboard.vue": __vite_glob_0_9, "./Pages/DateSpotDetail.vue": __vite_glob_0_10, "./Pages/DateSpots.vue": __vite_glob_0_11, "./Pages/DateSpotsCity.vue": __vite_glob_0_12, "./Pages/Home.vue": __vite_glob_0_13, "./Pages/PrivacyPolicy.vue": __vite_glob_0_14, "./Pages/Profile/Partials/DeleteUserForm.vue": __vite_glob_0_15, "./Pages/Profile/Partials/LogoutOtherBrowserSessionsForm.vue": __vite_glob_0_16, "./Pages/Profile/Partials/TwoFactorAuthenticationForm.vue": __vite_glob_0_17, "./Pages/Profile/Partials/UpdatePasswordForm.vue": __vite_glob_0_18, "./Pages/Profile/Partials/UpdateProfileInformationForm.vue": __vite_glob_0_19, "./Pages/Profile/Show.vue": __vite_glob_0_20, "./Pages/TermsOfService.vue": __vite_glob_0_21, "./Pages/Welcome.vue": __vite_glob_0_22 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin);
    }
  })
);

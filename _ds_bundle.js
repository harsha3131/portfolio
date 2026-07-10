/* @ds-bundle: {"format":4,"namespace":"SriHarshaPortfolioDesignSystem_04f779","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"GlassCard","sourcePath":"components/core/GlassCard.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"GlassNav","sourcePath":"components/navigation/GlassNav.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"77d6cbbff2ec","components/core/Badge.jsx":"2b37b80394a0","components/core/Button.jsx":"41055f1c457a","components/core/GlassCard.jsx":"de698cfb1146","components/core/IconButton.jsx":"ed9500a642cc","components/core/Tag.jsx":"04ec28aa6aa7","components/forms/Input.jsx":"360e70301c66","components/navigation/GlassNav.jsx":"817c2df1f83f","portfolio/app.jsx":"1b0e1a0c1f83","portfolio/contact.jsx":"0cddaa65d7f6","portfolio/creds.jsx":"e3a4e6f8e300","portfolio/data.js":"c79b71053ec4","portfolio/experience.jsx":"c68bd4bb3e04","portfolio/fx.jsx":"338c9618354e","portfolio/hero.jsx":"569a4d7eaf5b","portfolio/projects.jsx":"0b32fb40b1e9","portfolio/skills.jsx":"b6f7932cd41f","portfolio/store.jsx":"e46eb4602c87","portfolio/tweaks-panel.jsx":"6591467622ed","ui_kits/published-portfolio/App.jsx":"421ad3d0f207","ui_kits/published-portfolio/Contact.jsx":"0927fa440e18","ui_kits/published-portfolio/Hero.jsx":"b668421f999f","ui_kits/published-portfolio/PhotoBg.jsx":"982827207798","ui_kits/published-portfolio/ProjectDetail.jsx":"07881597c32d","ui_kits/published-portfolio/Work.jsx":"c4204a97994f","ui_kits/published-portfolio/data.jsx":"44b268b88feb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SriHarshaPortfolioDesignSystem_04f779 = window.SriHarshaPortfolioDesignSystem_04f779 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — round profile image with optional ring & status.
 */
function Avatar({
  src = null,
  name = '',
  size = 48,
  ring = false,
  status = null,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(p => p[0]).slice(0, 2).join('').toUpperCase();
  const statusColors = {
    online: 'var(--success-500)',
    away: 'var(--warning-500)',
    busy: 'var(--danger-500)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'transparent' : 'var(--grad-sunset)',
      color: '#fff',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size * 0.38,
      border: ring ? '2.5px solid #fff' : 'none',
      boxShadow: ring ? 'var(--shadow-sm)' : 'none'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: size * 0.28,
      height: size * 0.28,
      borderRadius: '50%',
      background: statusColors[status] || 'var(--neutral-400)',
      border: '2px solid #fff'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small status/count pill.
 */
function Badge({
  tone = 'accent',
  size = 'md',
  dot = false,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    accent: {
      bg: 'var(--sunset-50)',
      fg: 'var(--sunset-700)'
    },
    neutral: {
      bg: 'var(--neutral-100)',
      fg: 'var(--neutral-700)'
    },
    success: {
      bg: 'var(--success-50)',
      fg: 'var(--success-500)'
    },
    warning: {
      bg: 'var(--warning-50)',
      fg: 'var(--warning-500)'
    },
    danger: {
      bg: 'var(--danger-50)',
      fg: 'var(--danger-500)'
    },
    solid: {
      bg: 'var(--grad-sunset)',
      fg: '#fff'
    }
  };
  const t = tones[tone] || tones.accent;
  const sz = size === 'sm' ? {
    padding: '2px 8px',
    fontSize: 'var(--text-2xs)'
  } : {
    padding: '4px 10px',
    fontSize: 'var(--text-xs)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      ...sz,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the primary action control.
 * Variants: primary (sunset gradient), secondary (glass), ghost, outline.
 */
function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 14px',
      fontSize: 'var(--text-sm)',
      radius: 'var(--radius-sm)',
      gap: '6px'
    },
    md: {
      padding: '11px 20px',
      fontSize: 'var(--text-md)',
      radius: 'var(--radius-md)',
      gap: '8px'
    },
    lg: {
      padding: '15px 28px',
      fontSize: 'var(--text-lg)',
      radius: 'var(--radius-md)',
      gap: '10px'
    }
  };
  const s = sizes[size] || sizes.md;
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-body)',
    fontWeight: 600,
    letterSpacing: '-0.01em',
    lineHeight: 1,
    border: '1px solid transparent',
    borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--grad-sunset)',
      color: 'var(--color-on-primary)',
      boxShadow: 'var(--glow-sunset)'
    },
    secondary: {
      background: 'var(--glass-white-strong)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      color: 'var(--text-strong)',
      border: '1px solid var(--glass-border)',
      boxShadow: 'var(--shadow-sm)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-accent)',
      border: '1.5px solid var(--sunset-300)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: {
      ...base,
      ...(variants[variant] || variants.primary),
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/GlassCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * GlassCard — the signature frosted surface. Sits over photographic
 * backgrounds. Strength controls blur + opacity.
 */
function GlassCard({
  strength = 'standard',
  padding = 'var(--space-6)',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const variants = {
    faint: {
      background: 'var(--glass-white-faint)',
      backdropFilter: 'blur(12px) saturate(130%)',
      WebkitBackdropFilter: 'blur(12px) saturate(130%)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-md)'
    },
    standard: {
      background: 'var(--glass-white)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-glass)'
    },
    strong: {
      background: 'var(--glass-white-strong)',
      backdropFilter: 'var(--glass-blur-strong)',
      WebkitBackdropFilter: 'var(--glass-blur-strong)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-glass-lg)'
    }
  };
  const base = {
    border: '1px solid var(--glass-border)',
    padding,
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    cursor: interactive ? 'pointer' : 'default'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      ...base,
      ...(variants[strength] || variants.standard),
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-4px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-glass-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = (variants[strength] || variants.standard).boxShadow;
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { GlassCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/GlassCard.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square/circular control wrapping a single icon (pass the icon
 * SVG as children, e.g. a Lucide icon).
 */
function IconButton({
  variant = 'glass',
  size = 'md',
  round = true,
  label = 'button',
  children,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 32,
    md: 40,
    lg: 48
  };
  const d = dims[size] || dims.md;
  const variants = {
    glass: {
      background: 'var(--glass-white-strong)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--glass-border)',
      color: 'var(--text-strong)',
      boxShadow: 'var(--shadow-sm)'
    },
    solid: {
      background: 'var(--grad-sunset)',
      color: '#fff',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-sunset)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: round ? '50%' : 'var(--radius-sm)',
      cursor: 'pointer',
      padding: 0,
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out)',
      ...(variants[variant] || variants.glass),
      ...style
    },
    onMouseDown: e => {
      e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — filter / category chip. Optionally removable or selectable.
 */
function Tag({
  selected = false,
  onRemove = null,
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '6px 12px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 500,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      background: selected ? 'var(--sunset-400)' : 'var(--glass-white-strong)',
      color: selected ? '#fff' : 'var(--text-body)',
      border: `1px solid ${selected ? 'transparent' : 'var(--border-subtle)'}`,
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      cursor: 'pointer',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      border: 'none',
      background: 'none',
      cursor: 'pointer',
      padding: 0,
      color: 'inherit',
      opacity: 0.7,
      fontSize: '14px',
      lineHeight: 1,
      display: 'inline-flex'
    },
    "aria-label": "Remove"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — text field with optional label, leading icon, and hint/error.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  iconLeft = null,
  size = 'md',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const pad = size === 'lg' ? '14px 16px' : '11px 14px';
  const fs = size === 'lg' ? 'var(--text-lg)' : 'var(--text-md)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      fontFamily: 'var(--font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      padding: pad,
      background: 'var(--surface-card)',
      border: `1.5px solid ${error ? 'var(--danger-500)' : focus ? 'var(--sunset-400)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-sm)',
      boxShadow: focus ? `0 0 0 4px var(--focus-ring)` : 'none',
      transition: 'border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      ...style
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      width: '100%',
      fontFamily: 'var(--font-body)',
      fontSize: fs,
      color: 'var(--text-strong)'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger-500)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/GlassNav.jsx
try { (() => {
/**
 * GlassNav — floating frosted navigation bar for published portfolios.
 */
function GlassNav({
  brand = 'Sri Harsha',
  links = ['Work', 'About', 'Contact'],
  active = 'Work',
  cta = 'Hire me',
  onCta = null,
  onNavigate = null,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-6)',
      padding: '10px 14px 10px 20px',
      background: 'var(--glass-white)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-glass)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-lg)',
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      marginRight: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '7px',
      background: 'var(--grad-sunset)',
      display: 'inline-block',
      boxShadow: 'var(--shadow-xs)'
    }
  }), brand), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: 'var(--space-5)',
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(l);
    },
    style: {
      textDecoration: 'none',
      fontSize: 'var(--text-sm)',
      fontWeight: 600,
      color: l === active ? 'var(--text-accent)' : 'var(--text-body)',
      transition: 'color var(--dur-fast) var(--ease-out)'
    }
  }, l)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "primary",
    onClick: onCta
  }, cta));
}
Object.assign(__ds_scope, { GlassNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/GlassNav.jsx", error: String((e && e.message) || e) }); }

// portfolio/app.jsx
try { (() => {
// App — nav, scroll-spy, progress bar, tweaks, composition.

// "City" accent — soft steel blue that sits naturally over the Milwaukee photo.
// Overrides the design system's sunset tokens at page scope; removing the
// overrides reverts to the original orange theme.
const PF_CITY_ACCENT = {
  '--sunset-50': '#eef4f9',
  '--sunset-100': '#dce8f3',
  '--sunset-200': '#bcd3e6',
  '--sunset-300': '#93b6d3',
  '--sunset-400': '#5f8fbf',
  '--sunset-500': '#4a7ba6',
  '--sunset-600': '#3a6489',
  '--sunset-700': '#2c4e6c',
  '--amber-300': '#9fc6cf',
  '--amber-400': '#7fb0bf',
  '--amber-500': '#5f96a6',
  '--grad-sunset': 'linear-gradient(120deg, #5f8fbf 0%, #7fb0bf 100%)',
  '--grad-sunset-soft': 'linear-gradient(120deg, #5f8fbf33 0%, #7fb0bf33 100%)',
  '--glow-sunset': '0 8px 28px rgba(95, 143, 191, 0.32)',
  '--focus-ring': 'rgba(95, 143, 191, 0.45)'
};
function PfApp() {
  const {
    GlassNav
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const {
    motion,
    useScroll,
    useSpring
  } = window.Motion;
  const {
    useSelector,
    useDispatch
  } = ReactRedux;
  const active = useSelector(s => s.active);
  const tweaks = useSelector(s => s.tweaks);
  const dispatch = useDispatch();
  const PF = window.PF;

  // Tweaks panel state (host protocol) mirrored into Redux.
  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "photo": "milwaukee",
    "accent": "city",
    "motionOn": false,
    "wash": 0.65
  } /*EDITMODE-END*/);
  React.useEffect(() => {
    dispatch({
      type: 'tweaks/set',
      patch: t
    });
  }, [t.photo, t.motionOn, t.wash, t.accent]);

  // Apply / revert the accent override.
  React.useEffect(() => {
    const root = document.documentElement;
    if (t.accent === 'city') {
      Object.entries(PF_CITY_ACCENT).forEach(([k, v]) => root.style.setProperty(k, v));
    } else {
      Object.keys(PF_CITY_ACCENT).forEach(k => root.style.removeProperty(k));
    }
  }, [t.accent]);

  // Scroll progress bar.
  const {
    scrollYProgress
  } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    mass: 0.4
  });

  // Scroll-spy → Redux. Driven by a rAF loop: 'scroll' events and
  // IntersectionObserver both fail to fire in some embedded previews.
  React.useEffect(() => {
    let raf,
      lastY = -1,
      lastActive = null;
    const tick = () => {
      const y = window.scrollY;
      if (y !== lastY) {
        lastY = y;
        const probe = y + window.innerHeight * 0.42;
        let cur = 'home';
        for (const el of document.querySelectorAll('[data-spy]')) {
          if (el.offsetTop <= probe) cur = el.dataset.spy;
        }
        if (cur !== lastActive) {
          lastActive = cur;
          dispatch({
            type: 'nav/active',
            id: cur
          });
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [dispatch]);
  const navMap = {
    Home: 'home',
    Experience: 'experience',
    Skills: 'skills',
    Projects: 'projects',
    Contact: 'contact'
  };
  const activeLabel = Object.keys(navMap).find(k => navMap[k] === active) || 'Home';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(motion.div, {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      zIndex: 100,
      background: 'var(--grad-sunset)',
      transformOrigin: '0 50%',
      scaleX: progress
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      top: 16,
      left: 0,
      right: 0,
      zIndex: 60,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 16px',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(motion.div, {
    initial: {
      y: -24,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 0.6,
      ease: PF_EASE,
      delay: 0.2
    },
    style: {
      width: '100%',
      maxWidth: 820,
      pointerEvents: 'auto'
    }
  }, /*#__PURE__*/React.createElement(GlassNav, {
    brand: "Sri Harsha",
    links: ['Home', 'Experience', 'Skills', 'Projects', 'Contact'],
    active: activeLabel,
    cta: "Hire me",
    onNavigate: l => pfScrollTo(navMap[l] || 'home'),
    onCta: () => pfScrollTo('contact')
  }))), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(PfHero, null), /*#__PURE__*/React.createElement(PfExperience, null), /*#__PURE__*/React.createElement(PfSkills, null), /*#__PURE__*/React.createElement(PfProjects, null), /*#__PURE__*/React.createElement(PfCreds, null), /*#__PURE__*/React.createElement(PfContact, null)), /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '28px 16px 36px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      background: 'var(--surface-page)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, "\xA9 2026 ", PF.name, " \xB7 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)'
    }
  }, "React \xB7 Redux \xB7 Framer Motion")), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Theme"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Accent",
    value: t.accent === 'city' ? 'City blue' : 'Sunset',
    options: ['City blue', 'Sunset'],
    onChange: v => setTweak('accent', v === 'City blue' ? 'city' : 'sunset')
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Backdrop"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Photo",
    value: t.photo === 'milwaukee' ? 'Milwaukee' : 'Golden hour',
    options: ['Golden hour', 'Milwaukee'],
    onChange: v => setTweak('photo', v === 'Milwaukee' ? 'milwaukee' : 'bg')
  }), /*#__PURE__*/React.createElement(TweakSlider, {
    label: "Wash",
    value: t.wash,
    min: 0.2,
    max: 0.75,
    step: 0.05,
    onChange: v => setTweak('wash', v)
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Motion"
  }), /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Ambient drift",
    value: t.motionOn,
    onChange: v => setTweak('motionOn', v)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(ReactRedux.Provider, {
  store: window.pfStore
}, /*#__PURE__*/React.createElement(PfApp, null)));
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/app.jsx", error: String((e && e.message) || e) }); }

// portfolio/contact.jsx
try { (() => {
// Contact — glass form over photography, fake send with success state.
function PfContact() {
  const {
    GlassCard,
    Button,
    Input,
    Avatar
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const {
    motion,
    AnimatePresence
  } = window.Motion;
  const {
    useSelector,
    useDispatch
  } = ReactRedux;
  const status = useSelector(s => s.contact.status);
  const tweaks = useSelector(s => s.tweaks);
  const dispatch = useDispatch();
  const PF = window.PF;
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const send = e => {
    e.preventDefault();
    if (status !== 'idle') return;
    dispatch({
      type: 'contact/status',
      status: 'sending'
    });
    setTimeout(() => dispatch({
      type: 'contact/status',
      status: 'sent'
    }), 1100);
  };
  const infoRows = [{
    icon: 'mail',
    text: PF.email,
    href: 'mailto:' + PF.email
  }, {
    icon: 'phone',
    text: PF.phone,
    href: 'tel:+14145956127'
  }, {
    icon: 'map-pin',
    text: PF.location,
    href: null
  }, {
    icon: 'github',
    text: 'github.com/harsha3131',
    href: PF.github
  }, {
    icon: 'linkedin',
    text: 'linkedin.com/in/sri-harsha-joshi',
    href: PF.linkedin
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    "data-spy": "contact",
    "data-screen-label": "Contact",
    style: {
      position: 'relative',
      padding: '96px 24px 120px'
    }
  }, /*#__PURE__*/React.createElement(PfPhotoBg, {
    src: PF.photos[tweaks.photo],
    blur: true,
    wash: Math.min(0.7, tweaks.wash + 0.1)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Contact",
    title: "Let's put a model in production.",
    sub: "Open to senior AI/ML roles and consulting on LLM systems. I reply within a day."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 18,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(GlassCard, {
    strength: "strong",
    style: {
      padding: '28px 30px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../assets/portfolio/headshot.jpg",
    name: PF.name,
    size: 52,
    ring: true,
    status: "online"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)'
    }
  }, PF.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, PF.role))), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 13
    }
  }, infoRows.map(r => /*#__PURE__*/React.createElement("li", {
    key: r.icon,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sunset-500)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: r.icon,
    size: 16
  })), r.href ? /*#__PURE__*/React.createElement("a", {
    href: r.href,
    target: r.href.startsWith('http') ? '_blank' : undefined,
    rel: "noopener",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)'
    }
  }, r.text) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)'
    }
  }, r.text)))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement(GlassCard, {
    strength: "strong",
    style: {
      padding: '28px 30px'
    }
  }, status === 'sent' ? /*#__PURE__*/React.createElement(motion.div, {
    key: "sent",
    initial: {
      opacity: 0,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      scale: 1
    },
    transition: {
      duration: 0.45,
      ease: PF_EASE
    },
    style: {
      textAlign: 'center',
      padding: '34px 10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      lineHeight: 1
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-2xl)',
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: '14px 0 0'
    }
  }, "Message sent."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      margin: '10px 0 22px'
    }
  }, "Thanks", form.name ? ', ' + form.name.split(' ')[0] : '', " \u2014 I'll get back to you within a day."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      dispatch({
        type: 'contact/status',
        status: 'idle'
      });
      setForm({
        name: '',
        email: '',
        message: ''
      });
    }
  }, "Send another")) : /*#__PURE__*/React.createElement("form", {
    key: "form",
    onSubmit: send,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    value: form.name,
    onChange: e => setForm({
      ...form,
      name: e.target.value
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    required: true,
    placeholder: "you@company.com",
    value: form.email,
    onChange: e => setForm({
      ...form,
      email: e.target.value
    })
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-strong)'
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    required: true,
    placeholder: "A role, a system to build, or a model that's stuck at 71%\u2026",
    value: form.message,
    onChange: e => setForm({
      ...form,
      message: e.target.value
    }),
    rows: 4,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: '1.5px solid var(--border-strong)',
      borderRadius: 'var(--radius-sm)',
      padding: '11px 14px',
      resize: 'vertical',
      outline: 'none',
      boxSizing: 'border-box',
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    disabled: status === 'sending',
    style: {
      alignSelf: 'flex-start'
    }
  }, status === 'sending' ? 'Sending…' : 'Send message', " ", status !== 'sending' && /*#__PURE__*/React.createElement(LIcon, {
    name: "send",
    size: 16
  }))))))));
}
window.PfContact = PfContact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/contact.jsx", error: String((e && e.message) || e) }); }

// portfolio/creds.jsx
try { (() => {
// Credentials — education + certifications.
function PfCreds() {
  const {
    GlassCard,
    Badge
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const PF = window.PF;
  return /*#__PURE__*/React.createElement("section", {
    id: "credentials",
    "data-spy": "credentials",
    "data-screen-label": "Credentials",
    style: {
      position: 'relative',
      padding: '96px 24px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Credentials",
    title: "Degree, certified, current."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      padding: '26px 28px',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--grad-sunset-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sunset-600)'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "graduation-cap",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Education")), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-2xl)',
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, PF.education.degree), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      margin: '8px 0 0'
    }
  }, PF.education.school), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, PF.education.dates), /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    size: "sm"
  }, PF.education.gpa)))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      padding: '26px 28px',
      height: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--grad-sunset-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sunset-600)'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "award",
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Certifications")), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, PF.certs.map(c => /*#__PURE__*/React.createElement("li", {
    key: c.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: c.status === 'earned' ? 'var(--success-500)' : 'var(--warning-500)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: c.status === 'earned' ? 'badge-check' : 'loader',
    size: 17
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      flex: 1
    }
  }, c.name), c.year && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)'
    }
  }, c.year), c.status === 'in progress' && /*#__PURE__*/React.createElement(Badge, {
    tone: "warning",
    size: "sm"
  }, "In progress")))))))));
}
window.PfCreds = PfCreds;
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/creds.jsx", error: String((e && e.message) || e) }); }

// portfolio/data.js
try { (() => {
// Resume content — Sri Harsha Joshi, Senior AI/ML Engineer.
window.PF = {
  name: 'Sri Harsha Joshi',
  firstName: 'Sri Harsha',
  role: 'Senior AI/ML Engineer',
  location: 'Milwaukee, WI',
  phone: '+1 (414) 595-6127',
  email: 'sriharshajoshi31@gmail.com',
  linkedin: 'https://linkedin.com/in/sri-harsha-joshi-4ba14a207',
  github: 'https://github.com/harsha3131',
  summary: 'Five-plus years building and deploying production-grade machine learning — LLMs, GenAI pipelines, RAG architectures, and MLOps at scale on AWS. From data ingestion to fine-tuning, vector search, and real-time inference.',
  heroStats: [{
    to: 5,
    suffix: '+',
    decimals: 0,
    label: 'years in production ML'
  }, {
    to: 30,
    suffix: '%',
    decimals: 0,
    label: 'lift in customer retention'
  }, {
    to: 40,
    suffix: '%',
    decimals: 0,
    label: 'fewer security incidents'
  }, {
    to: 50,
    prefix: '<',
    suffix: 'ms',
    decimals: 0,
    label: 'inference latency'
  }],
  experience: [{
    id: 'assurant',
    company: 'Assurant',
    title: 'Senior AI/ML Engineer',
    dates: 'Dec 2024 – Present',
    chips: ['−35% handle time', '+30% retention', '−40% incidents', '−20% cloud cost'],
    bullets: ['Architected an end-to-end RAG customer intelligence platform (LangChain, Pinecone, Claude 3) for dynamic policy Q&A across 2M+ documents — agent handle time down 35%, contributing to a 30% lift in retention.', 'Designed a real-time churn prediction system on XGBoost + SageMaker Pipelines serving 500K+ customers daily at sub-50ms latency, monitored for drift with Evidently AI.', 'Built an LLM-powered anomaly detection engine on fine-tuned Llama 3 (QLoRA) over behavioral access logs — unauthorized access incidents down 40%, catching novel attack patterns rule-based systems missed.', 'Led ML infrastructure modernization on AWS (SageMaker, Bedrock, Lambda) with spot-instance scaling and intelligent model caching — cloud costs down 20%, inference latency down 18%.', 'Established team-wide MLOps standards — MLflow tracking, model registry, automated retraining, A/B framework — cutting deployment cycles from 2 weeks to 3 days.', 'Mentored 4 engineers on LLM integration, prompt engineering, and responsible AI evaluation; 85%+ post-release satisfaction across 2 major AI launches per quarter.']
  }, {
    id: 'brightmind',
    company: 'Bright Mind Technologies',
    title: 'ML Engineer',
    dates: 'Jan 2022 – May 2023',
    chips: ['+28% engagement', '10M+ daily events', 'p99 280→90ms'],
    bullets: ['Designed a multi-modal recommendation engine — collaborative filtering (LightGBM) plus semantic similarity (Sentence-BERT + FAISS) — lifting content engagement 28% in A/B experiments.', 'Built end-to-end ML pipelines with Airflow and Kafka for real-time feature engineering across 10M+ daily events, feeding production classification and ranking models.', 'Spearheaded a zero-downtime on-prem → AWS migration, standardizing on SageMaker — ML iteration cycle down 40%, operational costs down 15%.', 'Implemented automated monitoring with Evidently AI + CloudWatch: drift detected within hours, retraining triggered automatically — degradation incidents from monthly to near-zero.', 'Optimized PostgreSQL and Elasticsearch for low-latency feature serving — p99 inference latency from 280ms to 90ms.', 'Achieved 98% automated test coverage on ML service APIs (TDD/BDD), enabling rapid model iteration without regression risk.']
  }, {
    id: 'macro',
    company: 'Macro Software Solutions',
    title: 'Software Developer · ML Focus',
    dates: 'May 2020 – Dec 2021',
    chips: ['−22% misrouting', '+20 CSAT pts', '$500K+ renewals'],
    bullets: ['Developed an NLP ticket classification and routing system on fine-tuned BERT — support misrouting down 22%, average resolution time down 18%.', 'Built predictive analytics dashboards pairing scikit-learn models with a React frontend, lifting client satisfaction scores by 20 points over 6 months.', 'Designed a centralized logging and ML observability system (ELK Stack, still in production) — incident detection time improved 35%.', 'Delivered 3 ML-enhanced client projects on time and on budget, contributing to $500K+ in renewals and expansion revenue.']
  }],
  skillGroups: [{
    name: 'Languages',
    icon: 'code-2',
    skills: ['Python', 'SQL', 'Java', 'Bash', 'JavaScript / TypeScript']
  }, {
    name: 'ML & AI',
    icon: 'brain-circuit',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'LightGBM', 'Hugging Face Transformers', 'LangChain', 'LlamaIndex', 'OpenAI API', 'Anthropic API']
  }, {
    name: 'GenAI & LLMs',
    icon: 'sparkles',
    skills: ['RAG pipelines', 'Prompt engineering', 'LoRA / QLoRA fine-tuning', 'RLHF', 'GPT-4', 'Claude 3', 'Llama 3', 'Mistral', 'Function calling', 'Agents']
  }, {
    name: 'Vector DBs',
    icon: 'database',
    skills: ['Pinecone', 'Weaviate', 'FAISS', 'ChromaDB', 'pgvector']
  }, {
    name: 'MLOps',
    icon: 'workflow',
    skills: ['MLflow', 'Weights & Biases', 'Apache Airflow', 'Kafka', 'Spark', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins']
  }, {
    name: 'AWS',
    icon: 'cloud',
    skills: ['SageMaker', 'Bedrock', 'Lambda', 'EC2', 'S3', 'RDS', 'CloudWatch', 'IAM', 'Step Functions']
  }, {
    name: 'Databases',
    icon: 'server',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Cassandra', 'Elasticsearch', 'Redis']
  }, {
    name: 'Observability',
    icon: 'activity',
    skills: ['Evidently AI', 'Prometheus', 'Grafana', 'CloudWatch', 'Datadog']
  }, {
    name: 'Other',
    icon: 'boxes',
    skills: ['Terraform', 'REST / GraphQL APIs', 'Spring Boot', 'Microservices', 'Agile / Scrum', 'TDD / BDD']
  }],
  projects: [{
    id: 'rag-chatbot',
    title: 'Enterprise RAG Chatbot',
    icon: 'messages-square',
    stat: {
      value: '91%',
      label: 'answer accuracy on held-out evals'
    },
    tags: ['LlamaIndex', 'Pinecone', 'GPT-4', 'FastAPI'],
    github: 'https://github.com/harsha3131/enterprise-rag-chatbot',
    blurb: 'Production RAG with multi-document reasoning over 500K+ knowledge base articles.',
    bullets: ['Cross-document reasoning over 500K+ knowledge base articles at 91% answer accuracy on a held-out eval set.', 'Hybrid retrieval (dense + sparse BM25) with Cohere re-ranking — hallucination rate down 38% vs. naive vector search; deployed as a FastAPI microservice on AWS Lambda.', 'Conversational memory on Redis with session-based context — 10-turn coherent multi-hop Q&A at sub-200ms p95 end-to-end latency.']
  }, {
    id: 'llm-finetuning',
    title: 'Insurance LLM Fine-Tuning',
    icon: 'flask-conical',
    stat: {
      value: '94%',
      label: 'domain accuracy vs. 71% zero-shot'
    },
    tags: ['Mistral-7B', 'QLoRA', 'SageMaker', 'MLflow'],
    github: 'https://github.com/harsha3131/insurance-llm-finetuning',
    blurb: 'LoRA/QLoRA pipeline fine-tuning Mistral-7B on 80K+ insurance Q&A pairs.',
    bullets: ['Fine-tuned Mistral-7B on 80K+ insurance-domain Q&A pairs with QLoRA (4-bit) on SageMaker — 94% domain accuracy vs. 71% from zero-shot GPT-3.5.', 'Automated pipeline with Hugging Face PEFT + MLflow: hyperparameter sweeps, checkpoints, ROUGE/BERTScore evals, registry promotion — iteration time down 60%.', 'Quantized model on an auto-scaling SageMaker endpoint — monthly inference cost down 72% vs. GPT-4 API at equivalent accuracy.']
  }, {
    id: 'fraud-detection',
    title: 'Real-Time Fraud Detection',
    icon: 'shield-check',
    stat: {
      value: '97.3%',
      label: 'AUC-ROC at 1M+ txns/day'
    },
    tags: ['Kafka', 'Spark Streaming', 'XGBoost', 'Feast'],
    github: 'https://github.com/harsha3131/streaming-fraud-detection',
    blurb: 'Streaming ML pipeline scoring 1M+ transactions a day under 100ms.',
    bullets: ['Kafka + Spark Structured Streaming + XGBoost pipeline processing 1M+ transactions/day at sub-100ms end-to-end latency, 97.3% AUC-ROC.', '120+ real-time features (velocity, behavioral embeddings, graph signals) via the Feast feature store — feature computation latency down 65% vs. batch.', 'Evidently AI drift monitoring with automated retraining on threshold breach — performance held within 0.5% AUC over 6 months.']
  }, {
    id: 'multi-agent',
    title: 'Multi-Agent Claims Automation',
    icon: 'workflow',
    stat: {
      value: '89%',
      label: 'straight-through processing'
    },
    tags: ['LangChain Agents', 'LangGraph', 'Function calling'],
    github: 'https://github.com/harsha3131/multi-agent-claims-automation',
    blurb: 'Autonomous agents running end-to-end insurance claims processing.',
    bullets: ['Autonomous multi-agent system (LangChain Agents + OpenAI function calling) automating end-to-end claims — 89% straight-through-processing rate.', 'Specialized agents (OCR extraction, policy matching, fraud check, decision writing) orchestrated by a LangGraph state machine — manual processing time down 70%, errors down 55%.', 'Tool-calling agents wired to internal REST/GraphQL APIs, PostgreSQL, and Elasticsearch — average claim resolution from 3 days to 4 hours.']
  }, {
    id: 'semantic-search',
    title: 'Semantic Search & Personalization',
    icon: 'scan-search',
    stat: {
      value: '0.83',
      label: 'MRR@10 · +22% vs. BM25'
    },
    tags: ['Sentence-BERT', 'Contrastive learning', 'Airflow'],
    github: 'https://github.com/harsha3131/semantic-search-engine',
    blurb: 'Dual-tower neural retrieval across 5M+ catalog items, learning online.',
    bullets: ['Dual-tower neural retrieval with Sentence-BERT + contrastive learning — MRR@10 of 0.83, +22% vs. a BM25 baseline, across 5M+ catalog items.', 'Online learning pipeline folding real-time click-through signals into nightly embedding retraining via Airflow — CTR up 15% over 3 months.']
  }],
  education: {
    degree: 'M.S. Computer Science',
    school: 'University of Wisconsin–Milwaukee',
    dates: 'Sep 2023 – May 2025',
    gpa: 'GPA 3.6'
  },
  certs: [{
    name: 'AWS Certified Machine Learning – Specialty',
    year: '2025',
    status: 'earned'
  }, {
    name: 'AWS Certified Solutions Architect – Associate',
    year: '',
    status: 'in progress'
  }, {
    name: 'SAP Certified Associate — Master Data Governance',
    year: '',
    status: 'earned'
  }, {
    name: 'DeepLearning.AI — LangChain for LLM App Development',
    year: '2024',
    status: 'earned'
  }, {
    name: 'Hugging Face — Transformers and Fine-Tuning',
    year: '2024',
    status: 'earned'
  }],
  photos: {
    bg: '../assets/portfolio/bg.jpg',
    milwaukee: '../assets/portfolio/milwaukee.jpg',
    avatar: '../assets/portfolio/avatar.jpg',
    headshot: '../assets/portfolio/headshot.jpg'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/data.js", error: String((e && e.message) || e) }); }

// portfolio/experience.jsx
try { (() => {
// Experience — timeline of roles, each expandable (Redux-driven).
function PfExperience() {
  const {
    GlassCard,
    Badge,
    Tag
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const {
    motion,
    AnimatePresence
  } = window.Motion;
  const {
    useSelector,
    useDispatch
  } = ReactRedux;
  const expanded = useSelector(s => s.expanded);
  const dispatch = useDispatch();
  const PF = window.PF;
  return /*#__PURE__*/React.createElement("section", {
    id: "experience",
    "data-spy": "experience",
    "data-screen-label": "Experience",
    style: {
      position: 'relative',
      padding: '96px 24px',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Experience",
    title: "Five years of models in production.",
    sub: "Every role measured in shipped systems and business outcomes \u2014 not notebooks."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 11,
      top: 8,
      bottom: 8,
      width: 2,
      background: 'linear-gradient(180deg, var(--sunset-300), var(--neutral-200))',
      borderRadius: 2
    }
  }), PF.experience.map((job, i) => {
    const open = !!expanded[job.id];
    const shown = open ? job.bullets : job.bullets.slice(0, 2);
    return /*#__PURE__*/React.createElement(Reveal, {
      key: job.id,
      delay: i * 0.08,
      style: {
        display: 'flex',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 'none',
        width: 24,
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 26
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: '50%',
        background: i === 0 ? 'var(--grad-sunset)' : 'var(--neutral-300)',
        boxShadow: i === 0 ? 'var(--glow-sunset)' : 'none',
        border: '2px solid var(--neutral-50)',
        display: 'inline-block'
      }
    })), /*#__PURE__*/React.createElement(GlassCard, {
      strength: i === 0 ? 'strong' : 'standard',
      interactive: true,
      onClick: () => dispatch({
        type: 'exp/toggle',
        id: job.id
      }),
      style: {
        flex: 1,
        padding: '24px 28px'
      },
      role: "button",
      "aria-expanded": open
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--text-2xl)',
        letterSpacing: '-0.02em',
        color: 'var(--text-strong)',
        margin: 0
      }
    }, job.company), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 'var(--text-md)',
        color: 'var(--text-accent)'
      }
    }, job.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        marginLeft: 'auto'
      }
    }, job.dates)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap',
        margin: '14px 0 4px'
      }
    }, job.chips.map(c => /*#__PURE__*/React.createElement(Badge, {
      key: c,
      tone: i === 0 ? 'accent' : 'neutral',
      size: "sm"
    }, c))), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: '14px 0 0',
        padding: 0,
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(AnimatePresence, {
      initial: false
    }, shown.map((b, bi) => /*#__PURE__*/React.createElement(motion.li, {
      key: bi,
      initial: {
        opacity: 0,
        height: 0
      },
      animate: {
        opacity: 1,
        height: 'auto'
      },
      exit: {
        opacity: 0,
        height: 0
      },
      transition: {
        duration: 0.35,
        ease: PF_EASE
      },
      style: {
        overflow: 'hidden',
        display: 'flex',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--sunset-400)',
        flex: 'none',
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(LIcon, {
      name: "chevron-right",
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 'var(--text-md)',
        lineHeight: 1.55,
        color: 'var(--text-body)'
      }
    }, b))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        marginTop: 16,
        fontFamily: 'var(--font-body)',
        fontWeight: 600,
        fontSize: 'var(--text-sm)',
        color: 'var(--text-accent)'
      }
    }, open ? 'Show less' : 'Show all ' + job.bullets.length + ' highlights', /*#__PURE__*/React.createElement(motion.span, {
      animate: {
        rotate: open ? 180 : 0
      },
      transition: {
        duration: 0.25
      },
      style: {
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(LIcon, {
      name: "chevron-down",
      size: 15
    })))));
  }))));
}
window.PfExperience = PfExperience;
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/experience.jsx", error: String((e && e.message) || e) }); }

// portfolio/fx.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Motion + icon helpers shared by every section.
const {
  motion,
  AnimatePresence,
  useInView,
  animate,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform
} = window.Motion;
const PF_EASE = [0.22, 1, 0.36, 1];

// Brand glyphs (GitHub, LinkedIn) — lucide@latest dropped brand icons, so these
// two are inlined from the classic lucide set.
const PF_BRAND_ICONS = {
  github: '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>',
  linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>'
};

// Lucide icon, React-safe (lucide only touches the inside of our span).
function LIcon({
  name,
  size = 18,
  strokeWidth = 2,
  color = null,
  style = {}
}) {
  const ref = React.useRef(null);
  const brand = PF_BRAND_ICONS[name] || null;
  React.useEffect(() => {
    const el = ref.current;
    if (brand || !el || !window.lucide) return;
    el.innerHTML = '<i data-lucide="' + name + '"></i>';
    try {
      window.lucide.createIcons();
    } catch (e) {/* icon may not exist */}
    const svg = el.querySelector('svg');
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
    }
  }, [name, size, strokeWidth, brand]);
  const wrapStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 0,
    color: color || 'currentColor',
    flex: 'none',
    ...style
  };
  if (brand) {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + strokeWidth + '" stroke-linecap="round" stroke-linejoin="round">' + brand + '</svg>';
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: wrapStyle,
      dangerouslySetInnerHTML: {
        __html: svg
      }
    });
  }
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    "aria-hidden": "true",
    style: wrapStyle
  });
}

// Fade-up reveal on scroll into view.
function Reveal({
  children,
  delay = 0,
  y = 26,
  once = true,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement(motion.div, _extends({
    initial: {
      opacity: 0,
      y
    },
    whileInView: {
      opacity: 1,
      y: 0
    },
    viewport: {
      once,
      margin: '-60px 0px'
    },
    transition: {
      duration: 0.7,
      delay,
      ease: PF_EASE
    },
    style: style
  }, rest), children);
}

// Animated number counter, triggers in view.
function Counter({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.6,
  style = {}
}) {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    once: true,
    margin: '-40px 0px'
  });
  React.useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: PF_EASE,
      onUpdate: v => {
        if (ref.current) ref.current.textContent = prefix + v.toFixed(decimals) + suffix;
      }
    });
    return () => controls.stop();
  }, [inView, to, prefix, suffix, decimals, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    style: style
  }, prefix, "0", suffix);
}

// Magnetic hover — element leans toward the cursor, springs back on leave.
function Magnetic({
  children,
  strength = 0.28,
  style = {}
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, {
    stiffness: 240,
    damping: 18
  });
  const sy = useSpring(y, {
    stiffness: 240,
    damping: 18
  });
  const onMove = e => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };
  return /*#__PURE__*/React.createElement(motion.div, {
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    style: {
      x: sx,
      y: sy,
      display: 'inline-block',
      ...style
    }
  }, children);
}

// Headline that reveals word by word.
function StaggerWords({
  text,
  gradientFrom = -1,
  delay = 0,
  style = {}
}) {
  const words = text.split(' ');
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, words.map((w, i) => /*#__PURE__*/React.createElement(motion.span, {
    key: i,
    className: gradientFrom >= 0 && i >= gradientFrom ? 'sh-gradient-text' : undefined,
    initial: {
      opacity: 0,
      y: 22,
      filter: 'blur(6px)'
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    },
    transition: {
      duration: 0.65,
      delay: delay + i * 0.055,
      ease: PF_EASE
    },
    style: {
      display: 'inline-block',
      marginRight: '0.24em'
    }
  }, w)));
}

// Section header — eyebrow + display heading.
function SectionHead({
  eyebrow,
  title,
  sub = null,
  align = 'left'
}) {
  return /*#__PURE__*/React.createElement(Reveal, {
    style: {
      textAlign: align,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px, 4.4vw, 46px)',
      letterSpacing: '-0.03em',
      lineHeight: 1.08,
      color: 'var(--text-strong)',
      margin: '10px 0 0',
      textWrap: 'balance'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: '58ch',
      margin: align === 'center' ? '14px auto 0' : '14px 0 0'
    }
  }, sub));
}

// Shared photographic background (wash + optional drift), tweak-aware.
function PfPhotoBg({
  src,
  blur = false,
  wash = 0.5,
  drift = true
}) {
  const motionOn = ReactRedux.useSelector(s => s.tweaks.motionOn);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-4%',
      background: "url('" + src + "') center/cover",
      filter: (blur ? 'blur(4px) ' : '') + 'saturate(0.72) brightness(1.04)',
      willChange: 'transform',
      transform: 'translateZ(0)',
      backfaceVisibility: 'hidden',
      animation: drift && motionOn ? 'sh-bg-drift 36s var(--ease-in-out) infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(255,255,255,' + wash * 0.55 + '), rgba(255,247,240,' + wash + '))'
    }
  }));
}
Object.assign(window, {
  LIcon,
  Reveal,
  Counter,
  Magnetic,
  StaggerWords,
  SectionHead,
  PfPhotoBg,
  PF_EASE
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/fx.jsx", error: String((e && e.message) || e) }); }

// portfolio/hero.jsx
try { (() => {
// Hero — name, headline, animated impact counters, CTAs.
function PfHero() {
  const {
    Button,
    Badge,
    Avatar,
    IconButton
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const {
    useSelector
  } = ReactRedux;
  const tweaks = useSelector(s => s.tweaks);
  const PF = window.PF;
  const links = [{
    icon: 'github',
    label: 'GitHub',
    href: PF.github
  }, {
    icon: 'linkedin',
    label: 'LinkedIn',
    href: PF.linkedin
  }, {
    icon: 'mail',
    label: 'Email',
    href: 'mailto:' + PF.email
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    "data-spy": "home",
    "data-screen-label": "Hero",
    style: {
      position: 'relative',
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(PfPhotoBg, {
    src: PF.photos[tweaks.photo],
    wash: tweaks.wash
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: 1040,
      margin: '0 auto',
      padding: '140px 24px 80px',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(Motion.motion.div, {
    initial: {
      opacity: 0,
      y: 18
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6,
      ease: PF_EASE
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "../assets/portfolio/headshot.jpg",
    name: PF.name,
    size: 48,
    ring: true,
    status: "online"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Open to new roles"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, PF.location)), /*#__PURE__*/React.createElement(Motion.motion.span, {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      duration: 0.5,
      delay: 0.1
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)'
    }
  }, PF.role, " \xB7 LLMs \xB7 RAG \xB7 MLOps"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 6.6vw, 74px)',
      lineHeight: 1.04,
      letterSpacing: '-0.035em',
      color: 'var(--text-strong)',
      margin: '16px 0 0',
      textWrap: 'balance'
    }
  }, /*#__PURE__*/React.createElement(StaggerWords, {
    text: "I build machine learning that ships \u2014",
    delay: 0.15
  }), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(StaggerWords, {
    text: "and keeps learning in production.",
    gradientFrom: 3,
    delay: 0.55
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.75,
    y: 14
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: '56ch',
      margin: '22px 0 0'
    }
  }, PF.summary)), /*#__PURE__*/React.createElement(Reveal, {
    delay: 0.9,
    y: 12
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 34,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => pfScrollTo('projects')
  }, "View projects")), /*#__PURE__*/React.createElement(Magnetic, null, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => pfScrollTo('contact')
  }, "Get in touch")), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 8,
      marginLeft: 6
    }
  }, links.map(l => /*#__PURE__*/React.createElement(Magnetic, {
    key: l.icon,
    strength: 0.35
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    target: "_blank",
    rel: "noopener",
    "aria-label": l.label,
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    size: "md",
    label: l.label
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: l.icon,
    size: 18
  })))))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 1.05,
    y: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
      gap: 12,
      marginTop: 56
    }
  }, PF.heroStats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: 'var(--glass-white)',
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-glass)',
      padding: '18px 20px'
    }
  }, /*#__PURE__*/React.createElement(Counter, {
    to: s.to,
    prefix: s.prefix || '',
    suffix: s.suffix || '',
    decimals: s.decimals,
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 'clamp(26px, 2.6vw, 34px)',
      color: 'var(--text-strong)',
      letterSpacing: '-0.02em'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)',
      marginTop: 4
    }
  }, s.label)))))), /*#__PURE__*/React.createElement(Motion.motion.button, {
    onClick: () => pfScrollTo('experience'),
    "aria-label": "Scroll to experience",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    transition: {
      delay: 1.6
    },
    style: {
      position: 'absolute',
      left: '50%',
      bottom: 22,
      transform: 'translateX(-50%)',
      zIndex: 2,
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Motion.motion.span, {
    animate: {
      y: [0, 6, 0]
    },
    transition: {
      duration: 1.8,
      repeat: Infinity,
      ease: 'easeInOut'
    },
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "chevron-down",
    size: 22
  }))));
}
window.PfHero = PfHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/hero.jsx", error: String((e && e.message) || e) }); }

// portfolio/projects.jsx
try { (() => {
// Projects — glass cards over photography; click opens a shared-layout modal.
function PfProjects() {
  const {
    GlassCard,
    Tag,
    Button,
    IconButton
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const {
    motion,
    AnimatePresence
  } = window.Motion;
  const {
    useSelector,
    useDispatch
  } = ReactRedux;
  const modal = useSelector(s => s.modal);
  const dispatch = useDispatch();
  const PF = window.PF;
  const open = PF.projects.find(p => p.id === modal) || null;
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') dispatch({
        type: 'projects/close'
      });
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [dispatch]);
  return /*#__PURE__*/React.createElement("section", {
    id: "projects",
    "data-spy": "projects",
    "data-screen-label": "Projects",
    style: {
      position: 'relative',
      padding: '96px 24px'
    }
  }, /*#__PURE__*/React.createElement(PfPhotoBg, {
    src: PF.photos.milwaukee,
    blur: true,
    wash: 0.7
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1080,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "AI/ML Projects",
    title: "Built, benchmarked, open on GitHub.",
    sub: "Five production-shaped systems \u2014 each with a number it had to hit. Click any card for the full story."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 18
    }
  }, PF.projects.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.id,
    delay: i % 3 * 0.08
  }, /*#__PURE__*/React.createElement(motion.div, {
    layoutId: 'proj-' + p.id,
    style: {
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(GlassCard, {
    strength: "standard",
    interactive: true,
    onClick: () => dispatch({
      type: 'projects/open',
      id: p.id
    }),
    style: {
      padding: '24px 26px',
      height: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column'
    },
    role: "button",
    "aria-label": 'Open ' + p.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--grad-sunset)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      boxShadow: 'var(--shadow-xs)'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: p.icon,
    size: 19
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      letterSpacing: '-0.02em',
      color: 'var(--text-strong)',
      margin: 0,
      textWrap: 'balance'
    }
  }, p.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 34,
      letterSpacing: '-0.02em',
      color: 'var(--text-accent)'
    }
  }, p.stat.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, p.stat.label)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: '12px 0 18px',
      flex: 1
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap',
      alignItems: 'center'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    style: {
      cursor: 'default',
      padding: '5px 10px'
    }
  }, t)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 'var(--text-sm)',
      color: 'var(--text-accent)'
    }
  }, "Details ", /*#__PURE__*/React.createElement(LIcon, {
    name: "arrow-up-right",
    size: 15
  }))))))))), /*#__PURE__*/React.createElement(AnimatePresence, null, open && /*#__PURE__*/React.createElement(motion.div, {
    key: "overlay",
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    },
    transition: {
      duration: 0.25
    },
    onClick: () => dispatch({
      type: 'projects/close'
    }),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 90,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(8px)',
      WebkitBackdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(motion.div, {
    layoutId: 'proj-' + open.id,
    onClick: e => e.stopPropagation(),
    transition: {
      duration: 0.4,
      ease: PF_EASE
    },
    style: {
      width: 'min(680px, 94vw)',
      maxHeight: '86vh',
      overflowY: 'auto',
      background: 'var(--glass-white-strong)',
      backdropFilter: 'var(--glass-blur-strong)',
      WebkitBackdropFilter: 'var(--glass-blur-strong)',
      border: '1px solid var(--glass-border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-glass-lg)',
      padding: '32px 34px',
      boxSizing: 'border-box'
    },
    role: "dialog",
    "aria-modal": "true",
    "aria-label": open.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--grad-sunset)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      boxShadow: 'var(--glow-sunset)'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: open.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--text-3xl)',
      letterSpacing: '-0.025em',
      color: 'var(--text-strong)',
      margin: 0,
      flex: 1,
      textWrap: 'balance'
    }
  }, open.title), /*#__PURE__*/React.createElement(IconButton, {
    variant: "ghost",
    size: "sm",
    label: "Close",
    onClick: () => dispatch({
      type: 'projects/close'
    })
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 500,
      fontSize: 44,
      letterSpacing: '-0.02em',
      color: 'var(--text-accent)'
    }
  }, open.stat.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-muted)'
    }
  }, open.stat.label)), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: '20px 0 0',
      padding: 0,
      listStyle: 'none',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, open.bullets.map((b, i) => /*#__PURE__*/React.createElement(motion.li, {
    key: i,
    initial: {
      opacity: 0,
      x: -10
    },
    animate: {
      opacity: 1,
      x: 0
    },
    transition: {
      delay: 0.15 + i * 0.08,
      duration: 0.4,
      ease: PF_EASE
    },
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--sunset-400)',
      flex: 'none',
      paddingTop: 2
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "chevron-right",
    size: 15
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.6,
      color: 'var(--text-body)'
    }
  }, b)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      margin: '22px 0 0'
    }
  }, open.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    style: {
      cursor: 'default'
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: open.github,
    target: "_blank",
    rel: "noopener",
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: "github",
    size: 16
  }), " View on GitHub")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => dispatch({
      type: 'projects/close'
    })
  }, "Close"))))));
}
window.PfProjects = PfProjects;
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/projects.jsx", error: String((e && e.message) || e) }); }

// portfolio/skills.jsx
try { (() => {
// Skills — filterable tag cloud with layout animations.
function PfSkills() {
  const {
    Tag
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const {
    motion,
    AnimatePresence
  } = window.Motion;
  const {
    useSelector,
    useDispatch
  } = ReactRedux;
  const group = useSelector(s => s.skillGroup);
  const dispatch = useDispatch();
  const PF = window.PF;
  const groups = ['All', ...PF.skillGroups.map(g => g.name)];
  const visible = group === 'All' ? PF.skillGroups : PF.skillGroups.filter(g => g.name === group);
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    "data-spy": "skills",
    "data-screen-label": "Skills",
    style: {
      position: 'relative',
      padding: '96px 24px',
      background: 'var(--surface-sunk)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Skills",
    title: "The stack, end to end.",
    sub: "Filter by concern \u2014 from fine-tuning to feature stores to what keeps it all observable."
  }), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      marginBottom: 32
    }
  }, groups.map(g => /*#__PURE__*/React.createElement(Tag, {
    key: g,
    selected: group === g,
    onClick: () => dispatch({
      type: 'skills/group',
      group: g
    })
  }, g)))), /*#__PURE__*/React.createElement(motion.div, {
    layout: true,
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(AnimatePresence, {
    mode: "popLayout"
  }, visible.map(g => /*#__PURE__*/React.createElement(motion.div, {
    key: g.name,
    layout: true,
    initial: {
      opacity: 0,
      scale: 0.96,
      y: 12
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      y: -8
    },
    transition: {
      duration: 0.35,
      ease: PF_EASE
    },
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-sm)',
      padding: '20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--grad-sunset-soft)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--sunset-600)'
    }
  }, /*#__PURE__*/React.createElement(LIcon, {
    name: g.icon,
    size: 17
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      letterSpacing: '-0.015em',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, g.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-faint)',
      marginLeft: 'auto'
    }
  }, g.skills.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap'
    }
  }, g.skills.map(s => /*#__PURE__*/React.createElement(motion.span, {
    key: s,
    whileHover: {
      y: -2
    },
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    style: {
      cursor: 'default',
      background: 'var(--surface-sunk)',
      backdropFilter: 'none',
      WebkitBackdropFilter: 'none'
    }
  }, s))))))))));
}
window.PfSkills = PfSkills;
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/skills.jsx", error: String((e && e.message) || e) }); }

// portfolio/store.jsx
try { (() => {
// Redux store — single source of truth for every interaction on the page.
const PF_INITIAL = {
  active: 'home',
  // scroll-spied section id
  skillGroup: 'All',
  // skills filter
  modal: null,
  // open project id
  expanded: {},
  // experience role id -> expanded?
  contact: {
    status: 'idle'
  },
  // idle | sending | sent
  tweaks: {
    photo: 'milwaukee',
    accent: 'city',
    motionOn: false,
    wash: 0.65
  }
};
function pfReducer(state = PF_INITIAL, action) {
  switch (action.type) {
    case 'nav/active':
      return state.active === action.id ? state : {
        ...state,
        active: action.id
      };
    case 'skills/group':
      return {
        ...state,
        skillGroup: action.group
      };
    case 'projects/open':
      return {
        ...state,
        modal: action.id
      };
    case 'projects/close':
      return {
        ...state,
        modal: null
      };
    case 'exp/toggle':
      return {
        ...state,
        expanded: {
          ...state.expanded,
          [action.id]: !state.expanded[action.id]
        }
      };
    case 'contact/status':
      return {
        ...state,
        contact: {
          status: action.status
        }
      };
    case 'tweaks/set':
      return {
        ...state,
        tweaks: {
          ...state.tweaks,
          ...action.patch
        }
      };
    default:
      return state;
  }
}
window.pfStore = Redux.createStore(pfReducer);

// Smooth-scroll to a section, offset for the floating nav.
// Also dispatches the target section immediately (belt-and-braces for
// environments where scroll events are unreliable).
window.pfScrollTo = function (id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 88;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: 'smooth'
  });
  window.pfStore.dispatch({
    type: 'nav/active',
    id
  });
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/store.jsx", error: String((e && e.message) || e) }); }

// portfolio/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "portfolio/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/published-portfolio/App.jsx
try { (() => {
// App — ties the published portfolio together with a floating nav + footer.
function App() {
  const {
    GlassNav
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const [route, setRoute] = React.useState({
    name: 'home',
    arg: null
  });
  const go = (name, arg = null) => {
    setRoute({
      name,
      arg
    });
    window.scrollTo({
      top: 0,
      behavior: 'instant'
    });
  };
  const navMap = {
    Work: 'work',
    About: 'work',
    Journal: 'work',
    Contact: 'contact',
    Home: 'home'
  };
  const activeLink = route.name === 'contact' ? 'Contact' : route.name === 'home' ? 'Home' : 'Work';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'sticky',
      top: 16,
      zIndex: 50,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 760
    }
  }, /*#__PURE__*/React.createElement(GlassNav, {
    brand: "Sri Harsha",
    links: ['Home', 'Work', 'Contact'],
    active: activeLink,
    cta: "Hire me",
    onNavigate: l => go(navMap[l] || 'home'),
    onCta: () => go('contact')
  }))), /*#__PURE__*/React.createElement("main", {
    style: {
      marginTop: -64
    }
  }, route.name === 'home' && /*#__PURE__*/React.createElement(Hero, {
    go: go
  }), route.name === 'work' && /*#__PURE__*/React.createElement(Work, {
    go: go
  }), route.name === 'project' && /*#__PURE__*/React.createElement(ProjectDetail, {
    id: route.arg,
    go: go
  }), route.name === 'contact' && /*#__PURE__*/React.createElement(Contact, null)), /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      zIndex: 2,
      textAlign: 'center',
      padding: '28px 16px 36px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 Sri Harsha \xB7 Built with the Glass portfolio system"));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/published-portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/published-portfolio/Contact.jsx
try { (() => {
// Contact — closing call-to-action with a glass form.
function Contact() {
  const {
    Button,
    Input,
    GlassCard,
    Avatar
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 600,
      display: 'flex',
      alignItems: 'center',
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement(PhotoBg, {
    src: window.SH_PHOTOS.coast,
    wash: 0.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 920,
      margin: '0 auto',
      padding: '0 24px',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      alignItems: 'center',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Let\u2019s talk"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px,4.5vw,52px)',
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: '12px 0 16px',
      lineHeight: 1.05
    }
  }, "Have a project in mind?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-lg)',
      lineHeight: 1.6,
      color: 'var(--text-body)',
      maxWidth: '40ch'
    }
  }, "I take on a few select engagements each quarter. Tell me what you\u2019re building."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "https://i.pravatar.cc/120?img=33",
    name: "Sri Harsha",
    size: 48,
    ring: true
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, "Sri Harsha"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-muted)'
    }
  }, "hello@sriharsha.design")))), /*#__PURE__*/React.createElement(GlassCard, {
    strength: "strong",
    padding: "28px"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 40,
      marginBottom: 8
    }
  }, "\u2728"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)'
    }
  }, "Thanks \u2014 talk soon.")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Your name",
    placeholder: "Jane Doe"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "jane@studio.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Project",
    placeholder: "A portfolio for\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send message")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/published-portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/published-portfolio/Hero.jsx
try { (() => {
// Hero — the published portfolio landing view.
function Hero({
  go
}) {
  const {
    Button,
    Badge,
    Avatar
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 620,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(PhotoBg, {
    src: window.SH_PHOTOS.hero,
    wash: 0.45
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      maxWidth: 920,
      margin: '0 auto',
      padding: '0 24px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: "https://i.pravatar.cc/120?img=33",
    name: "Sri Harsha",
    size: 44,
    ring: true,
    status: "online"
  }), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Available for work")), /*#__PURE__*/React.createElement(Eyebrow, null, "Designer & Developer \xB7 Portfolio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(40px, 7vw, 76px)',
      lineHeight: 1.02,
      letterSpacing: '-0.035em',
      color: 'var(--text-strong)',
      margin: '14px 0 0',
      textWrap: 'balance'
    }
  }, "I craft interfaces that feel like ", /*#__PURE__*/React.createElement("span", {
    className: "sh-gradient-text"
  }, "light through glass"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: '52ch',
      margin: '20px 0 0'
    }
  }, "Product design, brand systems, and front-end for teams who care about the last 5%."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => go('work')
  }, "View work"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary",
    onClick: () => go('contact')
  }, "Get in touch"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/published-portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/published-portfolio/PhotoBg.jsx
try { (() => {
// Shared photographic background with light wash + slow drift.
function PhotoBg({
  src,
  blur = false,
  wash = 0.5,
  drift = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'hidden',
      zIndex: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '-4%',
      background: `url('${src}') center/cover`,
      filter: blur ? 'blur(4px)' : 'none',
      animation: drift ? 'sh-bg-drift var(--dur-ambient) var(--ease-in-out) infinite' : 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: `linear-gradient(180deg, rgba(255,255,255,${wash * 0.55}), rgba(255,247,240,${wash}))`
    }
  }));
}

// Section eyebrow label
function Eyebrow({
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-caps)',
      textTransform: 'uppercase',
      color: 'var(--text-accent)',
      ...style
    }
  }, children);
}
window.PhotoBg = PhotoBg;
window.Eyebrow = Eyebrow;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/published-portfolio/PhotoBg.jsx", error: String((e && e.message) || e) }); }

// ui_kits/published-portfolio/ProjectDetail.jsx
try { (() => {
// ProjectDetail — a single case study view.
function ProjectDetail({
  id,
  go
}) {
  const {
    Button,
    Badge,
    GlassCard
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const p = window.SH_PROJECTS.find(x => x.id === id) || window.SH_PROJECTS[0];
  const idx = window.SH_PROJECTS.indexOf(p);
  const next = window.SH_PROJECTS[(idx + 1) % window.SH_PROJECTS.length];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 640
    }
  }, /*#__PURE__*/React.createElement(PhotoBg, {
    src: p.cover,
    wash: 0.5
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 880,
      margin: '0 auto',
      padding: '56px 24px 72px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => go('work'),
    iconLeft: /*#__PURE__*/React.createElement("span", null, "\u2190")
  }, "All work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      margin: '20px 0 12px'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "solid"
  }, t)), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, p.year)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(34px,5.5vw,60px)',
      letterSpacing: '-0.035em',
      color: 'var(--text-strong)',
      margin: '0 0 16px',
      lineHeight: 1.04
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xl)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      maxWidth: '54ch',
      margin: '0 0 32px'
    }
  }, p.blurb), /*#__PURE__*/React.createElement(GlassCard, {
    strength: "strong",
    padding: "0",
    style: {
      overflow: 'hidden',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320,
      background: `url('${p.cover}') center/cover`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16,
      marginBottom: 36
    }
  }, [['Role', 'Lead Designer'], ['Timeline', '12 weeks'], ['Team', '4 people']].map(([k, v]) => /*#__PURE__*/React.createElement(GlassCard, {
    key: k,
    strength: "standard",
    padding: "16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-lg)',
      color: 'var(--text-strong)'
    }
  }, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: '62ch',
      margin: '0 0 40px'
    }
  }, "We started by stripping the interface back to a single calm surface, then layered information through depth rather than borders \u2014 frosted panels that recede and advance as you move. The result reads instantly, even over a busy photographic backdrop."), /*#__PURE__*/React.createElement(GlassCard, {
    strength: "strong",
    interactive: true,
    padding: "20px 24px",
    onClick: () => go('project', next.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-2xs)',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: 'var(--text-muted)'
    }
  }, "Next project"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)'
    }
  }, next.title)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      color: 'var(--text-accent)'
    }
  }, "\u2192"))));
}
window.ProjectDetail = ProjectDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/published-portfolio/ProjectDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/published-portfolio/Work.jsx
try { (() => {
// Work — filterable project gallery in frosted glass cards.
function Work({
  go
}) {
  const {
    GlassCard,
    Badge,
    Tag
  } = window.SriHarshaPortfolioDesignSystem_04f779;
  const [filter, setFilter] = React.useState('All');
  const filters = ['All', 'Product', 'Brand', 'Web'];
  const projects = window.SH_PROJECTS.filter(p => filter === 'All' || p.tags.includes(filter));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      minHeight: 640,
      padding: '64px 0'
    }
  }, /*#__PURE__*/React.createElement(PhotoBg, {
    src: window.SH_PHOTOS.studio,
    wash: 0.6,
    blur: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 1080,
      margin: '0 auto',
      padding: '0 24px'
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(30px,4.5vw,48px)',
      letterSpacing: '-0.03em',
      color: 'var(--text-strong)',
      margin: '10px 0 24px'
    }
  }, "Things I\u2019ve made"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, filters.map(f => /*#__PURE__*/React.createElement(Tag, {
    key: f,
    selected: filter === f,
    onClick: () => setFilter(f)
  }, f))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: 20
    }
  }, projects.map(p => /*#__PURE__*/React.createElement(GlassCard, {
    key: p.id,
    strength: "strong",
    padding: "0",
    interactive: true,
    style: {
      overflow: 'hidden'
    },
    onClick: () => go('project', p.id)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 180,
      background: `url('${p.cover}') center/cover`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 20px 22px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-xl)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, p.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)'
    }
  }, p.year)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      lineHeight: 1.5,
      color: 'var(--text-body)',
      margin: '8px 0 14px'
    }
  }, p.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Badge, {
    key: t,
    tone: "neutral",
    size: "sm"
  }, t)))))))));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/published-portfolio/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/published-portfolio/data.jsx
try { (() => {
// Demo content for the published portfolio.
const SH_PHOTOS = {
  hero: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600&q=70',
  studio: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=70',
  coast: 'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1600&q=70',
  poppy: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1600&q=70'
};
const SH_PROJECTS = [{
  id: 'aurora',
  title: 'Aurora Banking',
  year: '2025',
  tags: ['Product', 'iOS'],
  cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=70',
  blurb: 'A calm, glass-forward banking app that makes saving feel effortless.'
}, {
  id: 'meadow',
  title: 'Meadow Studio',
  year: '2024',
  tags: ['Brand', 'Web'],
  cover: 'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?w=900&q=70',
  blurb: 'Identity & site for a landscape design studio rooted in the wild.'
}, {
  id: 'tide',
  title: 'Tide Health',
  year: '2024',
  tags: ['Product', 'Web'],
  cover: 'https://images.unsplash.com/photo-1559757175-08fda9d3f6c9?w=900&q=70',
  blurb: 'Patient dashboards that turn lab results into plain language.'
}, {
  id: 'lumen',
  title: 'Lumen Camera',
  year: '2023',
  tags: ['Hardware', 'UI'],
  cover: 'https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=900&q=70',
  blurb: 'Companion app for a mirrorless camera — fast, tactile, glassy.'
}];
window.SH_PHOTOS = SH_PHOTOS;
window.SH_PROJECTS = SH_PROJECTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/published-portfolio/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.GlassCard = __ds_scope.GlassCard;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.GlassNav = __ds_scope.GlassNav;

})();

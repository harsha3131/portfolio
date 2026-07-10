// Redux store — single source of truth for every interaction on the page.
const PF_INITIAL = {
  active: 'home',                    // scroll-spied section id
  skillGroup: 'All',                 // skills filter
  modal: null,                       // open project id
  expanded: {},                      // experience role id -> expanded?
  contact: { status: 'idle' },       // idle | sending | sent
  tweaks: { photo: 'milwaukee', accent: 'city', motionOn: false, wash: 0.65 },
};

function pfReducer(state = PF_INITIAL, action) {
  switch (action.type) {
    case 'nav/active':     return state.active === action.id ? state : { ...state, active: action.id };
    case 'skills/group':   return { ...state, skillGroup: action.group };
    case 'projects/open':  return { ...state, modal: action.id };
    case 'projects/close': return { ...state, modal: null };
    case 'exp/toggle':     return { ...state, expanded: { ...state.expanded, [action.id]: !state.expanded[action.id] } };
    case 'contact/status': return { ...state, contact: { status: action.status } };
    case 'tweaks/set':     return { ...state, tweaks: { ...state.tweaks, ...action.patch } };
    default: return state;
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
  window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  window.pfStore.dispatch({ type: 'nav/active', id });
};

// Feature flags — all false until each phase is ready to launch

export const FEATURES = {
  panelUruguay:      true,   // Panel page + content live
  panelRegistration: false,  // real registration backend not wired yet
  monthlyGiveaway:   false,  // giveaways intentionally excluded for now
  pointsProgram:     false,  // points program intentionally excluded for now
  panelLogin:        false,
} as const;

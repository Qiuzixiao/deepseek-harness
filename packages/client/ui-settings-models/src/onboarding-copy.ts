/** Durable settings namespace for product-wide GUI onboarding facts. */
export const WELCOME_NOTICE_SETTINGS_NAMESPACE = 'ui-onboarding'

/** Field storing the last welcome notice version the user acknowledged. */
export const WELCOME_NOTICE_ACK_FIELD = 'welcomeNoticeVersion'

/**
 * Bump only when the notice changes materially and every user should see it
 * again. The acknowledgement is compared for exact equality.
 */
export const WELCOME_NOTICE_VERSION = '2026-08-19.1'

/** The complete editable internal-testing notice in both supported GUI locales. */
export const WELCOME_NOTICE_COPY = {
  zh: {
    title: '内测声明',
    body: 'QNovel 目前仍处于面向早期用户开放测试的阶段，还有许多功能和体验细节需要持续打磨，欢迎大家在使用过程中提出反馈和建议。我们会在接下来的一段时间内快速迭代核心功能，持续优化创作体验。\n\n我们期待与每一位创作者一起，把 QNovel 打磨成真正好用的创作工具。感谢你成为最早一批体验者，你的每一条反馈都会成为我们前进的方向。',
    continueLabel: '继续',
  },
  en: {
    title: 'Internal Testing Notice',
    body: "QNovel is currently in early testing. Many features and details are still being refined, and we welcome your feedback along the way. We'll keep iterating quickly on core functionality and the overall writing experience in the coming months.\n\nWe're excited to build QNovel into a truly great creative tool, together with every writer who tries it. Thank you for being an early user — your feedback will shape where we go next.",
    continueLabel: 'Continue',
  },
} as const

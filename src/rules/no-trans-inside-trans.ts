import { TSESTree } from '@typescript-eslint/utils'
import { createRule } from '../create-rule'
import { LinguiTransQuery } from '../helpers'

export const name = 'no-trans-inside-trans'
export const rule = createRule({
  name,
  meta: {
    docs: {
      description: "doesn't allow Trans component be inside Trans component",
      recommended: 'error',
    },
    messages: {
      default: "Trans couldn't be wrapped into Trans",
    },
    schema: [
      {
        type: 'object',
        properties: {},
        additionalProperties: false,
      },
    ],
    type: 'problem' as const,
  },

  defaultOptions: [],

  create: function (context) {
    return {
      [`${LinguiTransQuery} ${LinguiTransQuery}`](node: TSESTree.JSXElement) {
        context.report({
          node,
          messageId: 'default',
        })

        return
      },
    }
  },
})

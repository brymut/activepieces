import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { folkAuth } from '../..';

export const personRemoved = createTrigger({
  auth: folkAuth,
  name: 'person_removed',
  displayName: 'Person Removed',
  description: 'Triggers when a person is deleted from the workspace or removed from a group',
  props: {},
  sampleData: {
    contactId: 'person_123456',
    fullName: 'John Doe',
    removedAt: '2024-01-01T00:00:00Z',
  },
  type: TriggerStrategy.WEBHOOK,
  async onEnable(context) {
    // Webhook registration would happen here
  },
  async onDisable(context) {
    // Webhook deregistration would happen here
  },
  async run(context) {
    return [context.payload.body];
  },
});

import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { folkAuth } from '../..';

export const personAdded = createTrigger({
  auth: folkAuth,
  name: 'person_added',
  displayName: 'Person Added',
  description: 'Triggers when a new person is created or added to a group',
  props: {},
  sampleData: {
    contactId: 'person_123456',
    fullName: 'John Doe',
    email: 'john@example.com',
    jobTitle: 'CEO',
    phone: '+1234567890',
    createdAt: '2024-01-01T00:00:00Z',
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

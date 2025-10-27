import { createTrigger, TriggerStrategy } from '@activepieces/pieces-framework';
import { folkAuth } from '../..';

export const personUpdated = createTrigger({
  auth: folkAuth,
  name: 'person_updated',
  displayName: 'Person Updated',
  description: 'Triggers when a person\'s basic field (e.g., name, job title, email, or URL) in a group is updated',
  props: {},
  sampleData: {
    contactId: 'person_123456',
    fullName: 'John Doe',
    email: 'john@example.com',
    jobTitle: 'CEO',
    phone: '+1234567890',
    updatedAt: '2024-01-01T00:00:00Z',
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

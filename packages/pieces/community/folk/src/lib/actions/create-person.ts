import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { folkAuth } from '../..';
import { folkApiRequest } from '../common';

export const createPerson = createAction({
  name: 'create_person',
  auth: folkAuth,
  displayName: 'Create Person',
  description: 'Creates a new person contact in a folk group',
  props: {
    groupId: Property.ShortText({
      displayName: 'Group ID',
      description: 'The ID of the group to add the person to',
      required: true,
    }),
    fullName: Property.ShortText({
      displayName: 'Full Name',
      description: 'The full name of the person',
      required: true,
    }),
    email: Property.ShortText({
      displayName: 'Email',
      description: 'Person email address',
      required: false,
    }),
    jobTitle: Property.ShortText({
      displayName: 'Job Title',
      description: 'The person\'s job title',
      required: false,
    }),
    phone: Property.ShortText({
      displayName: 'Phone',
      description: 'Phone number',
      required: false,
    }),
  },
  async run(context) {
    const { groupId, fullName, email, jobTitle, phone } = context.propsValue;

    const body: any = {
      groupId,
      fullName,
    };

    if (email) body.email = email;
    if (jobTitle) body.jobTitle = jobTitle;
    if (phone) body.phone = phone;

    const response = await folkApiRequest(
      context.auth,
      HttpMethod.POST,
      '/contacts/people',
      body
    );

    return response;
  },
});

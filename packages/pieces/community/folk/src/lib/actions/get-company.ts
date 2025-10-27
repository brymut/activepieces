import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { folkAuth } from '../..';
import { folkApiRequest } from '../common';

export const getCompany = createAction({
  name: 'get_company',
  auth: folkAuth,
  displayName: 'Get a Company',
  description: 'Retrieves a company by contact ID',
  props: {
    contactId: Property.ShortText({
      displayName: 'Contact ID',
      description: 'The ID of the company contact to retrieve',
      required: true,
    }),
  },
  async run(context) {
    const { contactId } = context.propsValue;

    const response = await folkApiRequest(
      context.auth,
      HttpMethod.GET,
      `/contacts/${contactId}`,
      undefined
    );

    return response;
  },
});

import { createAction, Property } from '@activepieces/pieces-framework';
import { HttpMethod } from '@activepieces/pieces-common';
import { folkAuth } from '../..';
import { folkApiRequest } from '../common';

export const findPerson = createAction({
  name: 'find_person',
  auth: folkAuth,
  displayName: 'Find a Person',
  description: 'Finds a person by matching their full name or one of their emails',
  props: {
    searchTerm: Property.ShortText({
      displayName: 'Search Term',
      description: 'Person name or email to search for',
      required: true,
    }),
  },
  async run(context) {
    const { searchTerm } = context.propsValue;

    const response = await folkApiRequest(
      context.auth,
      HttpMethod.GET,
      `/contacts/search?q=${encodeURIComponent(searchTerm)}&type=person`,
      undefined
    );

    return response;
  },
});
